import LavaJs from "../LavaJs";

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
