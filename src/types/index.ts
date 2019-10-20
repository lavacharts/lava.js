import { ChartClasses, ChartTypes } from "./chart";
import { DrawableState } from "./drawable";
import { SupportedFormatters } from "./formats";
import {
  Google,
  GoogleDataTable,
  GoogleLoaderOptions,
  GoogleQueryOptions,
  QueryTransformer
} from "./google";

export {
  ChartClasses,
  Google,
  GoogleLoaderOptions,
  ChartTypes as SupportedCharts,
  SupportedFormatters
};

export type LavaState = Record<string, DrawableState>;

export type DataQueryInterface = {
  url: string;
  opts?: GoogleQueryOptions;
  transformer?: QueryTransformer;
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
