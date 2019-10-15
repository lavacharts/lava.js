import { SupportedCharts } from ".";
import { Formatter } from "./formats";

export interface DrawableState {
  drawn: boolean;
  needsRedraw: boolean;
}

export type DrawableTypes = SupportedCharts | "Dashboard";

export interface DrawableTmpl {
  label: any;
  type: DrawableTypes;
  elementId: string;
  data: any;
  options: any;
  png?: boolean;
  events?: Record<string, Function>;
  formats?: Formatter[];
}
