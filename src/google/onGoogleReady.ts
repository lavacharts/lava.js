import { Events } from "../Events";
import { GoogleHandler } from "../types/google";

/**
 * Attach a callback to be called once `window.google` is ready.
 *
 * If google is not ready, then the callback will wait until it is.
 */
export function onGoogleReady(callback: GoogleHandler): void {
  const { lava } = window;

  if (lava.googleReady) {
    callback(window.google);
  } else {
    lava.on(Events.GOOGLE_READY, () => callback(window.google));
  }
}
