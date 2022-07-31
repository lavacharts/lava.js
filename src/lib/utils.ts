import type { Dashboard } from "../Dashboard";
import type { DataQuery } from "../DataQuery";
import type { Drawable } from "../Drawable";
import type { RangeQuery } from "../types";

/**
 * Wrapper for turning single items into arrays
 */
export function box<T>(data: T | T[]): T[] {
  return Array.isArray(data) ? data : [data];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function instanceOfRangeQuery(object: any): object is RangeQuery {
  return object?.sheetId && object?.range;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function instanceOfDataQuery(object: any): object is DataQuery {
  return object?.send && object?.getDataTable;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function instanceOfDashboard(object: any): object is Dashboard {
  return object?.draw && object?.bindings;
}

/**
 * Retrieve the container element from the document
 */
export function getContainer({ id, containerId }: Drawable): HTMLElement {
  const container = document.getElementById(containerId);

  if (container === null) {
    throw new Error(
      `${id} tried to render into the target element "${containerId}", but this was not found in page.`
    );
  }

  return container;
}

/**
 * Prefixing the console logger
 */
export function makeDebugger(ns: string) {
  return (...rest: unknown[]) => console.log(`[LAVAJS] (${ns}):`, ...rest);
}

/**
 * Promise for the DOM to be ready.
 */
export async function domReady(): Promise<void> {
  return new Promise(resolve => {
    if (["interactive", "complete"].includes(document.readyState)) {
      resolve();
    } else {
      document.addEventListener("DOMContentLoaded", () => resolve());
    }
  });
}

/**
 * Function for dynamically creating new google classes
 */
export const newGoogleClass = (
  googleInstance: typeof google,
  className: string,
  ...restArgs: any[]
) => {
  const { visualization } = googleInstance;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const googleClass = (visualization as any)[className];

  if (restArgs) {
    return new googleClass(...restArgs);
  } else {
    return new googleClass();
  }
};

export function debounce(fn: () => void, delay: number) {
  let timer: NodeJS.Timeout;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), delay);
  };
}
