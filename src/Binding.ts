import { GoogleFactory } from "./google";
import { OneOrArrayOf } from "./types";
import { ChartWrapperSpec, ControlWrapperSpec } from "./types/wrapper";

export type BindingType = "OneToOne" | "OneToMany" | "ManyToOne" | "ManyToMany";

export type BindingTuple = [ControlWrapperSpec, ChartWrapperSpec];

export class Binding {
  public type: BindingType;

  public static createFromTuple(binding: BindingTuple): Binding {
    return new Binding(binding[0], binding[1]);
  }

  constructor(
    private controlWraps: OneOrArrayOf<ControlWrapperSpec>,
    private chartWraps: OneOrArrayOf<ChartWrapperSpec>
  ) {
    const manyControlWraps = Array.isArray(this.controlWraps);
    const oneControlWrap = !manyControlWraps;

    const manyChartWraps = Array.isArray(this.chartWraps);
    const oneChartWrap = !manyChartWraps;

    if (oneControlWrap && oneChartWrap) this.type = "OneToOne";
    else if (oneControlWrap && manyChartWraps) this.type = "OneToMany";
    else if (manyControlWraps && oneChartWrap) this.type = "ManyToOne";
    else this.type = "ManyToMany";
  }

  public toArray(): [
    OneOrArrayOf<google.visualization.ControlWrapper>,
    OneOrArrayOf<google.visualization.ChartWrapper>
  ] {
    return [this.getControlWraps(), this.getChartWraps()];
  }

  public getControlWraps(): OneOrArrayOf<google.visualization.ControlWrapper> {
    if (Array.isArray(this.controlWraps)) {
      return this.controlWraps.map(wrapperSpec => {
        return GoogleFactory("ControlWrapper", wrapperSpec);
      });
    }

    return GoogleFactory("ControlWrapper", this.controlWraps);
  }

  public getChartWraps(): OneOrArrayOf<google.visualization.ChartWrapper> {
    if (Array.isArray(this.chartWraps)) {
      return this.chartWraps.map(wrapperSpec => {
        return GoogleFactory("ChartWrapper", wrapperSpec);
      });
    }

    return GoogleFactory("ChartWrapper", this.chartWraps);
  }
}
