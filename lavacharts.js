import LavaJs from "./src";

/**
 * Create a new instance and attach to window.
 */
window.lava = new LavaJs();

/**
 * Since LavaJs was loaded from Lavacharts, then `window.lavacharts` will
 * be defined with a JSON object of the options set from Lavacharts.
 */
if (typeof window.lavacharts !== "undefined") {
  window.lava.configure(window.lavacharts.options);
}

/**
 * Since this  is getting ran from Lavacharts, then autorun
 * will be true and once the DOM is ready, rendering will begin.
 */
if (window.lava.autorun) {
  window.lava.waitForDom().then(() => window.lava.run());
}
