/// <reference types="google" />
/// <reference types="node" />
import EventEmitter from "events";
import Chart from "./Chart";
import Dashboard from "./Dashboard";
import DataQuery from "./DataQuery";
import Renderable from "./Renderable";
import { LavaJsOptions, RenderableTmpl } from "./types";
export default class LavaJs extends EventEmitter {
    static Chart: Chart;
    static Dashboard: Dashboard;
    static DataQuery: DataQuery;
    static Renderable: Renderable;
    static VERSION: string;
    private options;
    private packages;
    private volcano;
    private readyCallback;
    constructor(options?: LavaJsOptions);
    readonly googleIsLoaded: boolean;
    readonly googleLoaderInPage: boolean;
    init(): Promise<google.Google>;
    run(): Promise<any>;
    query(url: string | object): DataQuery;
    create(payload: RenderableTmpl | Renderable): Chart | Dashboard;
    store(renderable: RenderableTmpl | Renderable): Chart | Dashboard;
    get(label: string): Chart | Dashboard;
    ready(callback: Function): void;
    loadData(label: string, payload: object, callback?: Function): Promise<any>;
    loadOptions(label: string, payload: object, callback?: Function): void;
    redrawAll(): boolean;
    private addPackages;
    private loadGoogle;
    private googleChartLoader;
    private addGoogleScriptToHead;
    private attachRedrawHandler;
}
