export * from "./chart";
export * from "./dashboard";
export * from "./data";
export * from "./datasources";
export * from "./drawable";
export * from "./formats";
export * from "./google";
export * from "./wrapper";

export type OneOrArrayOf<T> = T | T[];

export interface LavaJsOptions {
  autodraw?: boolean;
  autoloadGoogle?: boolean;
  chartPackages?: string[];
  datetimeFormat?: string;
  debounceTimeout?: number;
  debug?: boolean;
  language?: string;
  mapsApiKey?: string;
  responsive?: boolean;
  timezone?: string;
}

export interface ChartUpdateReturn {
  data: google.visualization.DataTable;
  chart: any;
  options: Record<string, any>;
}
