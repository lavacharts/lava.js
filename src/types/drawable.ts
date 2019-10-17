import { SupportedCharts } from ".";
import { ChartTypes } from "./chart";
import { Formatter } from "./formats";

export interface DrawableState {
  drawn: boolean;
  needsRedraw: boolean;
}

export type DrawableTypes = SupportedCharts | "Dashboard";

export interface DrawableInterface {
  data: any;
  label: any;
  type: ChartTypes;
  elementId: string;
  options?: any;
  events?: Record<string, Function>;
  formats?: Formatter[];
}
