import LavaJs from "../LavaJs";
import {
  RenderableType,
  SupportedCharts,
  SupportedFormatters
} from "./strings";

export interface Lavacharts {
  options: LavaJsOptions;
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

export interface ModernHTMLScriptElement extends HTMLScriptElement {
  readyState?: any;
  onreadystatechange?: any;
}

export interface Formatter {
  index: number;
  options: object;
  type: SupportedFormatters;
}

export interface RenderableTmpl {
  data: any;
  datatable: any;
  elementId: string;
  label: any;
  options: any;
  packages: Set<string>;
  png: boolean;
  uuid: string;
  formats?: Formatter[];
  type: SupportedCharts | RenderableType;
}

// export interface Chart extends Renderable {
//   data: object;
//   elementId: string;
//   events?: any[];
//   formats?: any[];
//   label: string;
//   options?: object;
//   png?: boolean;
//   type: RenderableType;
// }

// eslint-disable-next-line @typescript-eslint/no-empty-interface
// export interface Dashboard extends Renderable {
//   //
// }
