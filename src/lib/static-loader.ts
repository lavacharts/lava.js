import { ScriptElement } from "../types/core";
import { GoogleLoader } from "./GoogleLoader";
import { makeDebugger } from "./utils";

const debug = makeDebugger("StaticLoader");

/**
 * Create a new script tag for the Google Static Loader
 */
export async function injectStaticLoader(target: Node): Promise<void> {
  if (typeof window.google !== "undefined") {
    debug("window.google is defined; skipping script injection.");
    return;
  } else {
    debug("building script tag for the static loader.");
    return new Promise(resolve => {
      const script = document.createElement("script") as ScriptElement;

      script.type = "text/javascript";
      script.defer = true;
      script.src = GoogleLoader.LOADER_URL;
      script.onload = script.onreadystatechange = (event: Event) => {
        // eslint-disable-next-line no-param-reassign
        event = event || window.event;

        if (
          event.type === "load" ||
          /loaded|complete/.test(script.readyState)
        ) {
          script.onload = script.onreadystatechange = null;
          debug("Google static loader is ready.");
          resolve();
        }
      };

      target.appendChild(script);
    });
  }
}
