import { Chart } from "./Chart";
import { ChartClasses, ChartTypes } from "./types/chart";
export declare function isSupported(chartType: ChartTypes): boolean;
export declare function getChartClass(chart: Chart): ChartClasses;
export declare function getChartPackage(chart: Chart): string;
export declare function getChartVersion(chart: Chart): number;
