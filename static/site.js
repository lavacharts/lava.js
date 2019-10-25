/* eslint-disable */
import jQuery from "jquery";

import "prismjs";
import "prismjs/themes/prism.css";

import "materialize-css";
import "materialize-css/dist/css/materialize.css";

import "../static/site.scss"
import "../src/lava";
/* eslint-enable */

window.lava.options.debug = false;
window.lava.options.autodraw = false;

window.$ = window.jQuery = jQuery;

jQuery(() => {
  M.AutoInit();
});
