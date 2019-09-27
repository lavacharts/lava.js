import LavaJs from "..";

export type RenderableType = "Chart" | "Dashboard";

export interface LavaJsConstructor {
  new (options: LavaJsOptions): LavaJs;
}

export interface LavaJsOptions {
  autoRun: boolean;
  datetimeFormat: string;
  debounceTimeout: number;
  locale: string;
  mapsApiKey: string;
  responsive: boolean;
  timezone: string;
}

export interface GoogleChartConfig {
  language: string;
  packages: string[];
  mapsApiKey: string;
}

export interface ModernHTMLScriptElement extends HTMLScriptElement {
  readyState?: any;
  onreadystatechange?: any;
}

export interface Formatter {
  index: number;
  options: object;
  type: string;
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
  type: RenderableType;
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
