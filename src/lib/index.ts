import { Debugger } from "debug";

import { DataQuery } from "../DataQuery";
import { Events } from "../Eventful";
import { getGoogle } from "../google";
import { LavaJs } from "../LavaJs";
import { Google } from "../types/google";
import { ConsoleLogger } from "./logger";

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

export function onGoogleReady(callback: (google: Google) => void): void {
  const lava = getLava();
  const google = getGoogle();

  if (lava.googleReady) {
    callback(google);
  } else {
    lava.on(Events.GOOGLE_READY, () => callback(google));
  }
}

export function getLocalStorage(): Storage {
  if (window.localStorage && process.env.NODE_ENV === "development") {
    window.localStorage.debug = "LavaJs*";
  } else {
    window.localStorage.debug = "";
  }

  return window.localStorage;
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

/**
 * Sets the data for the chart by creating a new DataTable
 */
export async function createDataTable(
  payload: any
): Promise<google.visualization.DataTable> {
  if (payload instanceof DataQuery) {
    return await payload.getDataTable();
  }

  // If a function is received, then create an new DataTable and pass it to the
  // function for user modifications.
  if (typeof payload === "function") {
    return payload(new window.google.visualization.DataTable());
  }

  // If an Array is received, then attempt to use parse with arrayToDataTable.
  if (Array.isArray(payload)) {
    return window.google.visualization.arrayToDataTable(payload);
  }

  // Since Google compiles their classes, we can't use instanceof to check since
  // it is no longer called a "DataTable" (it's "gvjs_P" but that could change...)
  // If this check passes, then it already is a DataTable
  if (typeof payload.getTableProperties === "function") {
    return payload;
  }

  // If the payload is from the php class JoinedDataTable->toJson(), then create
  // two new DataTables and join them with the defined options.
  if (Array.isArray(payload.data)) {
    return window.google.visualization.data.join(
      new window.google.visualization.DataTable(payload.data[0]),
      new window.google.visualization.DataTable(payload.data[1]),
      payload.keys,
      payload.joinMethod,
      payload.dt1Columns,
      payload.dt2Columns
    );
  }

  // If a php DataTable->toJson() payload is received, with formatted columns,
  // then payload.data will be defined. Use this to create the DataTable.
  if (typeof payload.data === "object") {
    // eslint-disable-next-line no-param-reassign
    payload = payload.data;
  }

  // If we reach here, then it must be standard JSON for creating a DataTable.
  return new window.google.visualization.DataTable(payload);
}
