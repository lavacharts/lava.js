import Debug, { Debugger } from "debug";

import { LavaJs } from "../LavaJs";
import { createDataTable } from "./createDataTable";

export { createDataTable };

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

/**
 * Method for attaching events to objects.
 *
 * @author Alex V.
 * @link http://stackoverflow.com/a/3150139
 */
export function addEvent(
  target: any,
  type: string,
  callback: Function,
  useCapture = false
): void {
  if (target === null || typeof target === "undefined") {
    return;
  }
  if (target.addEventListener) {
    target.addEventListener(type, callback, useCapture);
  } else if (target.attachEvent) {
    target.attachEvent("on" + type, callback);
  } else {
    target["on" + type] = callback;
  }
}
