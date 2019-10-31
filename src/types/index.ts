export type OneOrArrayOf<T> = T | T[];

export interface LavaJsOptions {
  autoloadGoogle?: boolean;
  autodraw?: boolean;
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
  options: LavaJsOptions;
}
