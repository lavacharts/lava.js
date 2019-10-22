/* eslint-disable */
import jQuery from "jquery";

import "prismjs";
import "prismjs/themes/prism.css";

import "materialize-css";
import "materialize-css/dist/css/materialize.css";

import "../css/site.scss";
import "../../src/lava";
/* eslint-enable */

window.lava.options.debug = false;

jQuery(() => {
  M.AutoInit();
});
