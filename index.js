/* jshint browser:true */
/* globals __OPTIONS__ */

import Utils from './src/Utils';
import LavaJs from './src/LavaJs';


/**
 * Attach the Lava.js module to the window
 * and create a new instance.
 */
window.LavaJs = LavaJs;
window.lava = new window.LavaJs();

/**
 * If LavaJs was loaded from Lavacharts, the __OPTIONS__
 * placeholder will be a JSON object of options.
 */
if (typeof __OPTIONS__ !== 'undefined') {
    window.lava.options = __OPTIONS__;
}

/**
 * If the module is getting ran from Lavacharts, then auto_run
 * will be true and once the DOM is ready, rendering will begin.
 *
 * If the module is ran as a JS library, then auto_run defaults
 * to false so the user can setup the charts and call .run()
 */
if (window.lava.options.auto_run === true) {
    Utils.domLoaded().then(() => {
        window.lava.run();
    });
}
