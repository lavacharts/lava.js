import { lava } from "./LavaJs";
import { box, newGoogleClass } from "./lib/utils";
import { ChartWrapperSpec, ControlWrapperSpec } from "./types/wrapper";

import type { OneOrArrayOf } from "./types";

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
      this.controlWraps.push(...box(controlWraps));
    }

    if (chartWraps) {
      this.chartWraps.push(...box(chartWraps));
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
    const google = await lava.getLoader().loadGoogle();

    if (this.controlWraps.length === 1) {
      return newGoogleClass(google, "ControlWrapper", ...this.controlWraps);
    }

    return Promise.all(
      this.controlWraps.map(control =>
        newGoogleClass(google, "ControlWrapper", control)
      )
    );
  }

  public async getChartWraps(): Promise<google.visualization.ChartWrapper[]> {
    const google = await lava.getLoader().loadGoogle();

    if (this.chartWraps.length === 1) {
      return newGoogleClass(google, "ChartWrapper", ...this.chartWraps);
    }

    return Promise.all(
      this.chartWraps.map(chart =>
        newGoogleClass(google, "ChartWrapper", chart)
      )
    );
  }
}
