import { ChartWrapperSpec, ControlWrapperSpec } from "./types/wrapper";
import { ChartWrapper } from "./wrapper/ChartWrapper";
import { ControlWrapper } from "./wrapper/ControlWrapper";

export class ControlledChartBinding {
  constructor(
    private controlWraps: ControlWrapperSpec[],
    private chartWraps: ChartWrapperSpec[]
  ) {
    //
  }

  public toArray(): [
    google.visualization.ChartWrapper[],
    google.visualization.ControlWrapper[]
  ] {
    return [
      this.chartWraps.map(ChartWrapper.factory),
      this.controlWraps.map(ControlWrapper.factory)
    ];
  }
}
