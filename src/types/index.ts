import { ChartClasses, SupportedCharts } from "./chart";
import { SupportedFormatters } from "./formats";
import { Google, GoogleDataTable, GoogleLoaderOptions } from "./google";

export {
  ChartClasses,
  Google,
  GoogleLoaderOptions,
  SupportedCharts,
  SupportedFormatters
};

export interface LavaJsOptions {
  autoloadGoogle?: boolean;
  autodraw?: boolean;
  datetimeFormat?: string;
  debounceTimeout?: number;
  responsive?: boolean;
  timezone?: string;
  language?: string;
  chartPackages?: string[];
  mapsApiKey?: string;
}

export interface ChartUpdateReturn {
  data: GoogleDataTable;
  chart: any;
  options: Record<string, any>;
}
