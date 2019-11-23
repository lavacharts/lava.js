import { AsyncGoogleFactory } from "./google";
import { OneOrArrayOf } from "./types";
import { ChartWrapperSpec, ControlWrapperSpec } from "./types/wrapper";

const ControlWrapperFactory = AsyncGoogleFactory.bind(null, "ControlWrapper");
const ChartWrapperFactory = AsyncGoogleFactory.bind(null, "ChartWrapper");

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
    this.controlWraps = controlWraps;
    this.chartWraps = chartWraps;

    const manyControlWraps = Array.isArray(this.controlWraps);
    const oneControlWrap = !manyControlWraps;

    const manyChartWraps = Array.isArray(this.chartWraps);
    const oneChartWrap = !manyChartWraps;

    if (oneControlWrap && oneChartWrap) this.type = "OneToOne";
    else if (oneControlWrap && manyChartWraps) this.type = "OneToMany";
    else if (manyControlWraps && oneChartWrap) this.type = "ManyToOne";
    else this.type = "ManyToMany";
  }

  public async toArray(): Promise<
    [
      OneOrArrayOf<google.visualization.ControlWrapper>,
      OneOrArrayOf<google.visualization.ChartWrapper>
    ]
  > {
    return [await this.getControlWraps(), await this.getChartWraps()];
  }

  public async getControlWraps(): Promise<
    OneOrArrayOf<google.visualization.ControlWrapper>
  > {
    if (Array.isArray(this.controlWraps)) {
      return this.controlWraps.map(wrapperSpec => {
        return ControlWrapperFactory(wrapperSpec);
      });
    }

    return ControlWrapperFactory(this.controlWraps);
  }

  public async getChartWraps(): Promise<
    OneOrArrayOf<google.visualization.ChartWrapper>
  > {
    if (Array.isArray(this.chartWraps)) {
      return this.chartWraps.map(ChartWrapperFactory);
    }

    return ChartWrapperFactory(this.chartWraps);
  }
}
