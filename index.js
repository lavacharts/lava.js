(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./examples/index.js":
/*!***************************!*\
  !*** ./examples/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

lava.chart({
  label: "Test",
  type: "PieChart",
  elementId: "chart_div",
  data: [["Task", "Hours per Day"], ["Work", 11], ["Eat", 2], ["Commute", 2], ["Watch TV", 2], ["Sleep", 7]],
  options: {
    title: "My Daily Activities"
  }
});
lava.draw();

/***/ }),

/***/ "./static/parallax-logo.js":
/*!*********************************!*\
  !*** ./static/parallax-logo.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable no-mixed-operators,no-undef */

/**
 * This parallax effect was found on https://freefrontend.com/css-text-effects/
 *
 * @author Robert Borghesi
 * @link https://codepen.io/dghez/pen/ItxKE/
 */
jQuery($ => {
  $(document).on("mousemove", ({ pageX: mouseX, pageY: mouseY }) => {
    const traX = (4 * mouseX) / 570 + 40;
    const traY = (4 * mouseY) / 570 + 50;
    // console.log(traX);
    $(".title").css({ "background-position": traX + "%" + traY + "%" });
    $(".subtitle").css({ "background-position": traX + "%" + traY + "%" });
  });
});


/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./static/parallax-logo.js ./examples/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /mnt/h/projects/cncshaggy/lava.js/static/parallax-logo.js */"./static/parallax-logo.js");
module.exports = __webpack_require__(/*! /mnt/h/projects/cncshaggy/lava.js/examples/index.js */"./examples/index.js");


/***/ })

},[[0,"runtime"]]]);