import { Google, GoogleDataTable, GoogleLoaderOptions } from "./google";
import {
  ChartClasses,
  RenderableType,
  SupportedCharts,
  SupportedFormatters
} from "./strings";

export {
  ChartClasses,
  Google,
  GoogleLoaderOptions,
  RenderableType,
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

export type RenderableTypes = SupportedCharts | "Dashboard";

export interface RenderableTmpl {
  data: any;
  datatable: any;
  elementId: string;
  label: any;
  options: any;
  package: string;
  png: boolean;
  uuid: string;
  formats?: Formatter[];
  type: RenderableTypes;
  events?: any[];
}
