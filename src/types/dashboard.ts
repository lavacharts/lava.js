import { RangeQuery } from "./data";
import { ChartWrapperSpec, ControlWrapperSpec } from "./wrapper";

type BindingTuple = [ControlWrapperSpec, ChartWrapperSpec];

export interface DashboardSpec {
  type: "Dashboard";
  containerId: string;
  data: RangeQuery | any;
  bindings: BindingTuple[];
  label?: string;
  formats?: any;
  options?: any;
  events?: Record<string, () => unknown>;
}
