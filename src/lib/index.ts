import Debug, { Debugger } from "debug";

export * from "./addEvent";
export * from "./createDataTable";
export * from "./getContainer";
export * from "./guards";

export function arrayWrap<T>(data: T | T[]): T[] {
  return Array.isArray(data) ? data : [data];
}

export function makeDebugger(...ext: string[]): Debugger {
  return Debug(ext ? `LavaJs:${ext.join(":")}` : "LavaJs");
}
