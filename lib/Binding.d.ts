import { OneOrArrayOf } from "./types";
import { ChartWrapperSpec, ControlWrapperSpec } from "./types/wrapper";
declare type BindingType = "OneToOne" | "OneToMany" | "ManyToOne" | "ManyToMany";
export declare class Binding {
    private controlWraps;
    private chartWraps;
    static create(controlWraps: OneOrArrayOf<ControlWrapperSpec>, chartWraps: OneOrArrayOf<ChartWrapperSpec>): Binding;
    get type(): BindingType;
    constructor(controlWraps?: ControlWrapperSpec | ControlWrapperSpec[], chartWraps?: ChartWrapperSpec | ChartWrapperSpec[]);
    addControl(controlDef: ControlWrapperSpec): this;
    addChart(chartDef: ChartWrapperSpec): this;
    getControlWraps(): Promise<google.visualization.ControlWrapper[]>;
    getChartWraps(): Promise<google.visualization.ChartWrapper[]>;
}
export {};
