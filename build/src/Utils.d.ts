import { DataTable, VizProps } from "./types/index.js";
export declare function getType(object: any): string;
export declare function domLoaded(): Promise<void>;
export declare function addEvent(target: any, type: string, callback: Function, useCapture?: boolean): void;
export declare function getVizProps(chartType: string): VizProps;
export declare function createDataTable(payload: any): DataTable;
