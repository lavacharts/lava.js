/* jshint browser:true */
/* globals __OPTIONS__ */

import Utils from './src/Utils';
import LavaJs from './src/LavaJs';

/**
 * Assign the LavaJs.js module to the window and
 * let $lava be an alias to the module.
 */
window.lava = new LavaJs();

/**
 * If LavaJs.js was loaded from Lavacharts, the __OPTIONS__
 * placeholder will be a JSON object of options that
 * were set server-side.
 */
if (typeof __OPTIONS__ !== 'undefined') {
    window.lava.options = __OPTIONS__;
}

/**
 * If LavaJs.js was set to auto_run then once the DOM
 * is ready, rendering will begin.
 */
if (window.lava.options.auto_run === true) {
    Utils.domLoaded().then(() => {
        window.lava.run();
    });
}
