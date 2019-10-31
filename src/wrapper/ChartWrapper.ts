import { GoogleFactory } from "../lib";
import { ChartTypes } from "../types/chart";
import { ChartWrapperSpec } from "../types/wrapper";
import { BaseWrapper } from "./BaseWrapper";

export class ChartWrapper extends BaseWrapper {
  public chartType: ChartTypes;

  public state!: Record<string, any>;

  public static factory(
    payload: ChartWrapperSpec
  ): google.visualization.ChartWrapper {
    return GoogleFactory("ChartWrapper", payload);
  }

  constructor(payload: ChartWrapperSpec) {
    super(payload.containerId);

    this.chartType = payload.chartType as ChartTypes;

    if (payload.options) {
      this.options = payload.options;
    }

    if (payload.state) {
      this.state = payload.state;
    }
  }
}
