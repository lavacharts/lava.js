import { Events } from "../Events";
import { getLava, makeDebugger } from "../lib";
import { Google, GoogleHandler } from "../types/google";
import { GoogleLoader } from "./GoogleLoader";

export { GoogleLoader };

export function getGoogle(): Google {
  return window.google;
}

/**
 * Attach a callback to be called once `window.google` is ready.
 *
 * If google is not ready, then the callback will wait until it is.
 */
export function onGoogleReady(callback: GoogleHandler): void {
  const lava = getLava();
  const google = getGoogle();

  if (lava.googleReady) {
    callback(google);
  } else {
    lava.on(Events.GOOGLE_READY, () => callback(google));
  }
}

export function GoogleFactory(className: string, ...restArgs: any[]): any {
  const debug = makeDebugger("GoogleFactory");

  debug(`Creating new ${className}`, restArgs);

  const googleClass = (window.google.visualization as any)[className];

  if (restArgs) {
    return new googleClass(...restArgs);
  } else {
    return new googleClass();
  }
}
