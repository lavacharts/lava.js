import { BindingTuple } from "../Binding";
import { RangeQuery } from "./datasources";

export interface DashboardSpec {
  type: "Dashboard";
  containerId: string;
  data: RangeQuery | any;
  bindings: BindingTuple[]; //Binding[];
  label?: string;
  formats?: any;
  options?: any;
  events?: Record<string, Function>;
}
