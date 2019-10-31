import { ChartTypes } from "./chart";
import { Formatter } from "./formats";

export interface OptionDataPayload {
  data?: any;
  options?: any;
}

export type DrawableTypes = ChartTypes | "Dashboard";

export interface DrawableInterface {
  data: any;
  label: any;
  type: DrawableTypes;
  containerId: string;
  options?: Record<string, any>;
  events?: Record<string, Function>;
  formats?: Formatter[];
}
