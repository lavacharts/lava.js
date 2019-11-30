import { AsyncGoogleFactory } from "./google";
import { arrayWrap } from "./lib";
import { OneOrArrayOf } from "./types";
import { ChartWrapperSpec, ControlWrapperSpec } from "./types/wrapper";

type BindingType = "OneToOne" | "OneToMany" | "ManyToOne" | "ManyToMany";

export class Binding {
  private controlWraps: ControlWrapperSpec[] = [];
  private chartWraps: ChartWrapperSpec[] = [];

  static create(
    controlWraps: OneOrArrayOf<ControlWrapperSpec>,
    chartWraps: OneOrArrayOf<ChartWrapperSpec>
  ): Binding {
    return new Binding(controlWraps, chartWraps);
  }

  get type(): BindingType {
    const manyControlWraps = Array.isArray(this.controlWraps);
    const oneControlWrap = !manyControlWraps;

    const manyChartWraps = Array.isArray(this.chartWraps);
    const oneChartWrap = !manyChartWraps;

    if (oneControlWrap && oneChartWrap) return "OneToOne";
    else if (oneControlWrap && manyChartWraps) return "OneToMany";
    else if (manyControlWraps && oneChartWrap) return "ManyToOne";
    else return "ManyToMany";
  }

  constructor(
    controlWraps?: ControlWrapperSpec | ControlWrapperSpec[],
    chartWraps?: ChartWrapperSpec | ChartWrapperSpec[]
  ) {
    if (controlWraps) {
      this.controlWraps.push(...arrayWrap(controlWraps));
    }

    if (chartWraps) {
      this.chartWraps.push(...arrayWrap(chartWraps));
    }
  }

  public addControl(controlDef: ControlWrapperSpec): this {
    this.controlWraps.push(controlDef);

    return this;
  }

  public addChart(chartDef: ChartWrapperSpec): this {
    this.chartWraps.push(chartDef);

    return this;
  }

  public async getControlWraps(): Promise<
    google.visualization.ControlWrapper[]
  > {
    if (this.controlWraps.length === 1) {
      return AsyncGoogleFactory("ControlWrapper", ...this.controlWraps);
    }

    return Promise.all(
      this.controlWraps.map(control =>
        AsyncGoogleFactory("ControlWrapper", control)
      )
    );
  }

  public async getChartWraps(): Promise<google.visualization.ChartWrapper[]> {
    if (this.chartWraps.length === 1) {
      return AsyncGoogleFactory("ChartWrapper", ...this.chartWraps);
    }

    return Promise.all(
      this.chartWraps.map(chart => AsyncGoogleFactory("ChartWrapper", chart))
    );
  }
}
