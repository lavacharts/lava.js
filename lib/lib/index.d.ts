import { Debugger } from "debug";
export * from "./addEvent";
export * from "./createDataTable";
export * from "./getContainer";
export * from "./guards";
export declare function arrayWrap<T>(data: T | T[]): T[];
export declare function makeDebugger(...ext: string[]): Debugger;
