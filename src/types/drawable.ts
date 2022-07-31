import { ChartTypes } from "./chart";

export interface OptionDataPayload {
  data?: unknown;
  options?: Record<string, unknown>;
}

export type DrawableType = ChartTypes | "Dashboard";
