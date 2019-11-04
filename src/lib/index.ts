import { Debugger } from "debug";

import { ContainerIdNotFound } from "../Errors";
import { Events } from "../Eventful";
import { getGoogle } from "../google";
import { LavaJs } from "../LavaJs";
import { Google } from "../types/google";
import { addEvent } from "./addEvent";
import { createDataTable } from "./createDataTable";
import { ConsoleLogger } from "./logger";

export { addEvent, createDataTable };

export function arrayWrap<T>(data: T | T[]): T[] {
  return Array.isArray(data) ? data : [data];
}

export function getLogger(): Debugger {
  return ConsoleLogger.getInstance();
}

export function getLava(): LavaJs {
  return window.lava;
}

export function hasOwnProp(obj: any): (prop: string) => boolean {
  return (prop: string) => Object.prototype.hasOwnProperty.call(obj, prop);
}

/**
 * Get the HTMLElement into which the chart will be rendered.
 */
export function getContainer(containerId: string): HTMLElement {
  const container = document.getElementById(containerId);

  if (container === null) {
    throw new ContainerIdNotFound(containerId);
  }

  return container;
}

/**
 * Attach a callback to be called once `window.google` is ready.
 *
 * If google is not ready, then the callback will wait until it is.
 */
export function onGoogleReady(callback: (google: Google) => void): void {
  const lava = getLava();
  const google = getGoogle();

  if (lava.googleReady) {
    callback(google);
  } else {
    lava.on(Events.GOOGLE_READY, () => callback(google));
  }
}
