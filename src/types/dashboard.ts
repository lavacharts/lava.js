import { BindingTuple } from "../Binding";
import { ChartEvents } from "./chart";
import { RangeQuery } from "./datasources";
import { DrawableInterface } from "./drawable";
import { Formatter } from "./formats";

export interface DashboardInterface extends DrawableInterface {
  png?: boolean;
  events?: Record<ChartEvents, CallableFunction>;
  formats?: Formatter[];
}

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
