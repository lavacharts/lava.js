import { createDataTable } from "./datatable";
import { Logger } from "./logger";
import { defaultOptions } from "./options";
import Queue from "./queue";

export { Logger, defaultOptions, createDataTable, Queue };

/**
 * Returns the type of object, with a capital first letter.
 */
export function getType(object: any): string {
  return Object.prototype.toString.call(object).slice(8, -1);
}

/**
 * Simple Promise for the DOM to be ready.
 */
export function domLoaded(): Promise<void> {
  return new Promise(resolve => {
    if (
      document.readyState === "interactive" ||
      document.readyState === "complete"
    ) {
      resolve();
    } else {
      document.addEventListener("DOMContentLoaded", () => resolve);
    }
  });
}

/**
 * Method for attaching events to objects.
 *
 * @link http://stackoverflow.com/a/3150139 Credit to Alex V.
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
