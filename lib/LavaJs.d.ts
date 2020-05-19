import { TinyEmitter } from "tiny-emitter";
import { Binding } from "./Binding";
import { Chart } from "./Chart";
import { Dashboard } from "./Dashboard";
import { GoogleLoader } from "./google";
import { LavaJsOptions, OneOrArrayOf } from "./types";
import { ChartWrapperSpec, ControlWrapperSpec } from "./types/wrapper";
export declare class LavaJs extends TinyEmitter {
    static readonly VERSION = "__VERSION__";
    static defaults: LavaJsOptions;
    options: LavaJsOptions;
    googleReady: boolean;
    domReady: boolean;
    readonly registry: Record<string, any>;
    private readonly loader;
    constructor(options?: LavaJsOptions);
    getLoader(): GoogleLoader;
    getOption(option: keyof LavaJsOptions, whenUndefined: any): any;
    configure(options: LavaJsOptions): this;
    draw(): Promise<void>;
    chart(payload: Chart): Chart;
    charts(charts: Chart[]): Chart[];
    dashboard(payload: Dashboard): Dashboard;
    bind(controlWraps: OneOrArrayOf<ControlWrapperSpec>, chartWraps: OneOrArrayOf<ChartWrapperSpec>): Binding;
    binding(): Binding;
    private register;
    private attachResizeHandler;
}
