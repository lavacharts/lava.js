import { ChartTypes } from "./chart";
export declare type WrapperType = "ControlWrapper" | "ChartWrapper";
export interface BaseWrapperSpec {
    containerId: string;
    options?: Record<string, any>;
}
export declare type ControlWrapperOptions = google.visualization.ControlWrapperOptions;
export declare type ControlWrapperType = "CategoryFilter" | "ChartRangeFilter" | "DateRangeFilter" | "NumberRangeFilter" | "StringFilter";
interface GoogleChartWrapperBase extends google.visualization.ChartSpecs {
    containerId: string;
}
export interface ChartWrapperSpec extends BaseWrapperSpec, GoogleChartWrapperBase {
    chartType: ChartTypes;
}
export interface ControlWrapperSpec extends google.visualization.ControlWrapperOptions {
    controlType: ControlWrapperType;
}
export {};
