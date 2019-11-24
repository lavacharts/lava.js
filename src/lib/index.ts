import Debug, { Debugger } from "debug";

import { LavaJs } from "../LavaJs";
import { addEvent } from "./addEvent";
import { createDataTable } from "./createDataTable";

export { addEvent, createDataTable };

export function arrayWrap<T>(data: T | T[]): T[] {
  return Array.isArray(data) ? data : [data];
}

export function makeDebugger(...ext: string[]): Debugger {
  return Debug(ext ? `LavaJs:${ext.join(":")}` : "LavaJs");
}

export function getLava(): LavaJs {
  return window.lava;
}

/**
 * Get the HTMLElement into which the chart will be rendered.
 */
export function getContainer(containerId: string): HTMLElement {
  const container = document.getElementById(containerId);

  if (container === null) {
    throw new Error(`document.getElementById("${containerId}") returned null.`);
  }

  return container;
}
