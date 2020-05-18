import { Events } from "../Events";

export async function googleLoading(): Promise<void> {
  return new Promise(resolve => {
    const { lava } = window;

    if (lava.googleReady) {
      resolve();
    } else {
      lava.on(Events.GOOGLE_READY, () => resolve());
    }
  });
}
