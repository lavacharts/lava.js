import { lava } from "./LavaJs";

/**
 * Since LavaJs was loaded with Lavacharts, then `window.lavacharts` will
 * be defined with a JSON object of the options set from Lavacharts.
 */
if (typeof window.lavacharts !== "undefined") {
  lava.configure(window.lavacharts.options);
}

/**
 * Lavacharts defaults to `autodraw: true` so once the DOM is ready,
 * rendering will begin!
 */
if (lava.options.autodraw) {
  lava.draw();
}
