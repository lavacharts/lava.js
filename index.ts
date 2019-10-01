import LavaJs from "./src";
import { domLoaded } from "./src/lib";

/**
 * Create a new instance and attach to window.
 */
window.lava = new LavaJs();

/**
 * If LavaJs was loaded from Lavacharts, then window.lavacharts will
 * be defined with a JSON object of the options set within Lavacharts.
 */
if (typeof window.lavacharts !== "undefined") {
  window.lava.configure(window.lavacharts.options);
}

/**
 * If the module is getting ran from Lavacharts, then autoRun
 * will be true and once the DOM is ready, rendering will begin.
 *
 * If the module is ran as a JS library, then auto_run defaults
 * to false so the user can setup the charts and call .run()
 */
if (window.lava.autorun) {
  domLoaded().then(() => {
    window.lava.run();
  });
}
