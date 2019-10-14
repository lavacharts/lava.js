import { Google, GoogleDataTable, GoogleLoaderOptions } from "./google";
import {
  ChartClasses,
  DrawableType,
  SupportedCharts,
  SupportedFormatters
} from "./strings";

export {
  ChartClasses,
  Google,
  GoogleLoaderOptions,
  DrawableType,
  SupportedCharts,
  SupportedFormatters
};

export interface LavaJsOptions {
  autoRun?: boolean;
  datetimeFormat?: string;
  debounceTimeout?: number;
  locale?: string;
  mapsApiKey?: string;
  responsive?: boolean;
  timezone?: string;
}

export interface ChartUpdateReturn {
  data: GoogleDataTable;
  chart: any;
  options: Record<string, any>;
}

export interface Formatter {
  index: number;
  options: Record<string, any>;
  type: SupportedFormatters;
}

export interface Logger {
  log: Function;
  error: Function;
}

export type DrawableTypes = SupportedCharts | "Dashboard";

export interface DrawableTmpl {
  label: any;
  type: DrawableTypes;
  elementId: string;
  data: any;
  options: any;
  png?: boolean;
  events?: Record<string, Function>;
  formats?: Formatter[];
}
