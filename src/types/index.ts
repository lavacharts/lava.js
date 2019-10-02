import LavaJs from "../LavaJs";
import { Google } from "./google";
import { Lavacharts } from "./lavacharts";
import {
  RenderableType,
  SupportedCharts,
  SupportedFormatters
} from "./strings";

export { Google, Lavacharts };

export interface ChartUpdateReturn {
  data: google.visualization.DataTable;
  chart: any;
  options: Record<string, any>;
}

export type QueryTap = (
  query: google.visualization.Query
) => google.visualization.Query;

export type GoogleDataTable = google.visualization.DataTable;

export interface LavaJsConstructor {
  new (options: LavaJsOptions): LavaJs;
}

export interface LavaJsOptions {
  autoRun?: boolean;
  datetimeFormat?: string;
  debounceTimeout?: number;
  locale?: string;
  mapsApiKey?: string;
  responsive?: boolean;
  timezone?: string;
}

export interface GoogleLoaderOptions {
  language: string;
  packages: string[];
  mapsApiKey?: string;
}

export interface Formatter {
  index: number;
  options: Record<string, any>;
  type: SupportedFormatters;
}

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
  type: SupportedCharts | RenderableType;
}
