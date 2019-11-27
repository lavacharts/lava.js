import { Events } from "../Events";
import { getLava } from "../lib";
import { Google, GoogleHandler } from "../types/google";
import { GoogleLoader } from "./GoogleLoader";

export { GoogleLoader };

export function getGoogle(): Google {
  return window.google;
}

/**
 * Promise for the DOM to be ready.
 */
export async function domLoading(): Promise<void> {
  return new Promise(resolve => {
    if (["interactive", "complete"].includes(document.readyState)) {
      resolve();
    } else {
      document.addEventListener("DOMContentLoaded", () => resolve());
    }
  });
}

export async function googleLoading(): Promise<void> {
  return new Promise(resolve => {
    const lava = getLava();

    if (lava.googleReady) {
      resolve();
    } else {
      lava.on(Events.GOOGLE_READY, () => resolve());
    }
  });
}

/**
 * Attach a callback to be called once `window.google` is ready.
 *
 * If google is not ready, then the callback will wait until it is.
 */
export function onGoogleReady(callback: GoogleHandler): void {
  const lava = getLava();

  if (lava.googleReady) {
    callback(window.google);
  } else {
    lava.on(Events.GOOGLE_READY, () => callback(window.google));
  }
}

export function AsyncGoogleFactory(className: string, ...restArgs: any[]): any {
  return new Promise(resolve => {
    onGoogleReady(google => {
      const googleClass = (google.visualization as any)[className];

      if (restArgs) {
        resolve(new googleClass(...restArgs));
      } else {
        resolve(new googleClass());
      }
    });
  });
}
