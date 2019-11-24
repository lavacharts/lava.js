import { ChartTypes } from "./chart";

export interface OptionDataPayload {
  data?: any;
  options?: any;
}

export type DrawableType = ChartTypes | "Dashboard";
