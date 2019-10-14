/**
 * Create a new instance and attach to window.
 */
import ".";

/**
 * Since LavaJs was loaded with Lavacharts, then `window.lavacharts` will
 * be defined with a JSON object of the options set from Lavacharts.
 */
if (typeof window.lavacharts !== "undefined") {
  window.lava.configure(window.lavacharts.options);
}

/**
 * Lavacharts defaults to `autorun: true` so once the DOM is ready,
 * rendering will begin!
 */
if (window.lava.autorun) {
  window.lava.draw();
}
