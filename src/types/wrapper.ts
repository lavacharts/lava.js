/* eslint-disable @typescript-eslint/no-empty-interface */
import { ChartTypes } from "./chart";

export type WrapperType = "ControlWrapper" | "ChartWrapper";

export interface BaseWrapperSpec {
  containerId: string;
  options?: Record<string, any>;
}

export type ControlWrapperOptions = google.visualization.ControlWrapperOptions;

export type ControlWrapperType =
  | "CategoryFilter"
  | "ChartRangeFilter"
  | "DateRangeFilter"
  | "NumberRangeFilter"
  | "StringFilter";

// export interface ControlWrapperOptions {
//   filterColumnLabel: string;
// }

// export interface ChartWrapperOptions {
//   chartType: string;
// }

interface GoogleChartWrapperBase extends google.visualization.ChartSpecs {
  containerId: string;
}

export interface ChartWrapperSpec
  extends BaseWrapperSpec,
    GoogleChartWrapperBase {
  chartType: ChartTypes;
}

export interface ControlWrapperSpec
  extends google.visualization.ControlWrapperOptions {
  controlType: ControlWrapperType;
}

export type ChartOrControlWrapperSpec = ChartWrapperSpec | ControlWrapperSpec;
