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

export interface VizPropsCollection {
  [K: string]: VizProps;
}

export interface VizProps {
  class: string;
  package: string;
  version: number;
}

export interface RenderableTmpl {
  label: any;
  options: any;
  packages: Set<string>;
  datatable: any;
  png: boolean;
  type: RenderableType;
  uuid: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Renderable {
  //
}

export interface Chart extends Renderable {
  data: object;
  elementId: string;
  events?: any[];
  formats?: any[];
  label: string;
  options?: object;
  png?: boolean;
  type: RenderableType;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Dashboard extends Renderable {
  //
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DataTable {
  //
}
