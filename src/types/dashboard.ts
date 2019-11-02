import { Binding } from "../Binding";
import { ChartEvents } from "./chart";
import { DrawableInterface } from "./drawable";
import { Formatter } from "./formats";

export interface DashboardInterface extends DrawableInterface {
  png?: boolean;
  events?: Record<ChartEvents, CallableFunction>;
  formats?: Formatter[];
}

export interface DashboardSpec {
  type: "Dashboard";
  label: string;
  containerId: string;
  data: any;
  formats?: any;
  options?: any;
  events?: Record<string, Function>;
  bindings: Binding[];
}
