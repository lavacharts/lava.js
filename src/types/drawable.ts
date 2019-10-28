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
  type: ChartTypes;
  containerId: string;
  options?: any;
  events?: Record<string, Function>;
  formats?: Formatter[];
}

export interface DashboardSpec {
  label: string;
  containerId: string;
  data: any;
  options?: any;
  events?: Record<string, Function>;
}
