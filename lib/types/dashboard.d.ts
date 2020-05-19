import { RangeQuery } from "./datasources";
import { ChartWrapperSpec, ControlWrapperSpec } from "./wrapper";
declare type BindingTuple = [ControlWrapperSpec, ChartWrapperSpec];
export interface DashboardSpec {
    type: "Dashboard";
    containerId: string;
    data: RangeQuery | any;
    bindings: BindingTuple[];
    label?: string;
    formats?: any;
    options?: any;
    events?: Record<string, Function>;
}
export {};
