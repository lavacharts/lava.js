import { AsyncGoogleFactory } from "./google";
import { arrayWrap } from "./lib";
import { ChartWrapperSpec, ControlWrapperSpec } from "./types/wrapper";

export class Binding {
  public type: "OneToOne" | "OneToMany" | "ManyToOne" | "ManyToMany";
  private controlWraps: ControlWrapperSpec[];
  private chartWraps: ChartWrapperSpec[];

  constructor(
    controlWraps: ControlWrapperSpec | ControlWrapperSpec[],
    chartWraps: ChartWrapperSpec | ChartWrapperSpec[]
  ) {
    const manyControlWraps = Array.isArray(controlWraps);
    const oneControlWrap = !manyControlWraps;

    const manyChartWraps = Array.isArray(chartWraps);
    const oneChartWrap = !manyChartWraps;

    if (oneControlWrap && oneChartWrap) this.type = "OneToOne";
    else if (oneControlWrap && manyChartWraps) this.type = "OneToMany";
    else if (manyControlWraps && oneChartWrap) this.type = "ManyToOne";
    else this.type = "ManyToMany";

    this.controlWraps = arrayWrap(controlWraps);
    this.chartWraps = arrayWrap(chartWraps);
  }

  public async getControlWraps(): Promise<
    google.visualization.ControlWrapper[]
  > {
    if (this.controlWraps.length === 1) {
      return AsyncGoogleFactory("ControlWrapper", ...this.controlWraps);
    }

    return this.controlWraps.map(control =>
      AsyncGoogleFactory("ControlWrapper", control)
    );
  }

  public async getChartWraps(): Promise<google.visualization.ChartWrapper[]> {
    if (this.chartWraps.length === 1) {
      return AsyncGoogleFactory("ChartWrapper", ...this.chartWraps);
    }

    return this.chartWraps.map(chart =>
      AsyncGoogleFactory("ChartWrapper", chart)
    );
  }
}
