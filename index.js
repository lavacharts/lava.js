(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./site/examples/index.js":
/*!********************************!*\
  !*** ./site/examples/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function r(n, x) {
  return Math.random() * (x - n) + n;
}

lava.chart({
  label: "Lavachart",
  type: "AreaChart",
  containerId: "chart_div",
  data: [["series", "volcano", "lava"], [1, r(0, 100), r(0, 100)], [2, r(100, 200), r(100, 200)], [3, r(200, 300), r(200, 300)], [4, r(300, 400), r(300, 400)], [5, r(400, 500), r(400, 500)], [6, r(500, 600), r(500, 600)], [7, r(400, 500), r(400, 500)], [8, r(300, 400), r(300, 400)], [9, r(200, 300), r(200, 300)], [10, r(100, 200), r(100, 200)], [11, r(0, 100), r(0, 100)]],
  options: {
    title: "Let your data flow",
    legend: "bottom",
    colors: ["#8c470b", "red"]
  }
});
lava.draw();

/***/ }),

/***/ "./site/static/parallax-logo.js":
/*!**************************************!*\
  !*** ./site/static/parallax-logo.js ***!
  \**************************************/
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

    $(".title").css({ "background-position": traX + "%" + traY + "%" });
    $(".subtitle").css({ "background-position": traX + "%" + traY + "%" });
  });
});


/***/ }),

/***/ 0:
/*!*********************************************************************!*\
  !*** multi ./site/static/parallax-logo.js ./site/examples/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /mnt/h/projects/cncshaggy/lava.js/site/static/parallax-logo.js */"./site/static/parallax-logo.js");
module.exports = __webpack_require__(/*! /mnt/h/projects/cncshaggy/lava.js/site/examples/index.js */"./site/examples/index.js");


/***/ })

},[[0,"runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2V4YW1wbGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvc3RhdGljL3BhcmFsbGF4LWxvZ28uanMiXSwibmFtZXMiOlsiciIsIm4iLCJ4IiwiTWF0aCIsInJhbmRvbSIsImxhdmEiLCJjaGFydCIsImxhYmVsIiwidHlwZSIsImNvbnRhaW5lcklkIiwiZGF0YSIsIm9wdGlvbnMiLCJ0aXRsZSIsImxlZ2VuZCIsImNvbG9ycyIsImRyYXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFNBQVNBLENBQVQsQ0FBV0MsQ0FBWCxFQUFjQyxDQUFkLEVBQWlCO0FBQ2YsU0FBT0MsSUFBSSxDQUFDQyxNQUFMLE1BQWlCRixDQUFDLEdBQUdELENBQXJCLElBQTBCQSxDQUFqQztBQUNEOztBQUVESSxJQUFJLENBQUNDLEtBQUwsQ0FBVztBQUNUQyxPQUFLLEVBQUUsV0FERTtBQUVUQyxNQUFJLEVBQUUsV0FGRztBQUdUQyxhQUFXLEVBQUUsV0FISjtBQUlUQyxNQUFJLEVBQUUsQ0FDSixDQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLE1BQXRCLENBREksRUFFSixDQUFDLENBQUQsRUFBSVYsQ0FBQyxDQUFDLENBQUQsRUFBSSxHQUFKLENBQUwsRUFBZUEsQ0FBQyxDQUFDLENBQUQsRUFBSSxHQUFKLENBQWhCLENBRkksRUFHSixDQUFDLENBQUQsRUFBSUEsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQUwsRUFBaUJBLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFsQixDQUhJLEVBSUosQ0FBQyxDQUFELEVBQUlBLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFMLEVBQWlCQSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBbEIsQ0FKSSxFQUtKLENBQUMsQ0FBRCxFQUFJQSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBTCxFQUFpQkEsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQWxCLENBTEksRUFNSixDQUFDLENBQUQsRUFBSUEsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQUwsRUFBaUJBLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFsQixDQU5JLEVBT0osQ0FBQyxDQUFELEVBQUlBLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFMLEVBQWlCQSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBbEIsQ0FQSSxFQVFKLENBQUMsQ0FBRCxFQUFJQSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBTCxFQUFpQkEsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQWxCLENBUkksRUFTSixDQUFDLENBQUQsRUFBSUEsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQUwsRUFBaUJBLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFsQixDQVRJLEVBVUosQ0FBQyxDQUFELEVBQUlBLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFMLEVBQWlCQSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBbEIsQ0FWSSxFQVdKLENBQUMsRUFBRCxFQUFLQSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBTixFQUFrQkEsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQW5CLENBWEksRUFZSixDQUFDLEVBQUQsRUFBS0EsQ0FBQyxDQUFDLENBQUQsRUFBSSxHQUFKLENBQU4sRUFBZ0JBLENBQUMsQ0FBQyxDQUFELEVBQUksR0FBSixDQUFqQixDQVpJLENBSkc7QUFrQlRXLFNBQU8sRUFBRTtBQUNQQyxTQUFLLEVBQUUsb0JBREE7QUFFUEMsVUFBTSxFQUFFLFFBRkQ7QUFHUEMsVUFBTSxFQUFFLENBQUMsU0FBRCxFQUFZLEtBQVo7QUFIRDtBQWxCQSxDQUFYO0FBeUJBVCxJQUFJLENBQUNVLElBQUwsRzs7Ozs7Ozs7Ozs7QUM3QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0JBQStCO0FBQy9EO0FBQ0E7O0FBRUEscUJBQXFCLGlEQUFpRDtBQUN0RSx3QkFBd0IsaURBQWlEO0FBQ3pFLEdBQUc7QUFDSCxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcihuLCB4KSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKHggLSBuKSArIG47XG59XG5cbmxhdmEuY2hhcnQoe1xuICBsYWJlbDogXCJMYXZhY2hhcnRcIixcbiAgdHlwZTogXCJBcmVhQ2hhcnRcIixcbiAgY29udGFpbmVySWQ6IFwiY2hhcnRfZGl2XCIsXG4gIGRhdGE6IFtcbiAgICBbXCJzZXJpZXNcIiwgXCJ2b2xjYW5vXCIsIFwibGF2YVwiXSxcbiAgICBbMSwgcigwLCAxMDApLCByKDAsIDEwMCldLFxuICAgIFsyLCByKDEwMCwgMjAwKSwgcigxMDAsIDIwMCldLFxuICAgIFszLCByKDIwMCwgMzAwKSwgcigyMDAsIDMwMCldLFxuICAgIFs0LCByKDMwMCwgNDAwKSwgcigzMDAsIDQwMCldLFxuICAgIFs1LCByKDQwMCwgNTAwKSwgcig0MDAsIDUwMCldLFxuICAgIFs2LCByKDUwMCwgNjAwKSwgcig1MDAsIDYwMCldLFxuICAgIFs3LCByKDQwMCwgNTAwKSwgcig0MDAsIDUwMCldLFxuICAgIFs4LCByKDMwMCwgNDAwKSwgcigzMDAsIDQwMCldLFxuICAgIFs5LCByKDIwMCwgMzAwKSwgcigyMDAsIDMwMCldLFxuICAgIFsxMCwgcigxMDAsIDIwMCksIHIoMTAwLCAyMDApXSxcbiAgICBbMTEsIHIoMCwgMTAwKSwgcigwLCAxMDApXVxuICBdLFxuICBvcHRpb25zOiB7XG4gICAgdGl0bGU6IFwiTGV0IHlvdXIgZGF0YSBmbG93XCIsXG4gICAgbGVnZW5kOiBcImJvdHRvbVwiLFxuICAgIGNvbG9yczogW1wiIzhjNDcwYlwiLCBcInJlZFwiXVxuICB9XG59KTtcblxubGF2YS5kcmF3KCk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMsbm8tdW5kZWYgKi9cblxuLyoqXG4gKiBUaGlzIHBhcmFsbGF4IGVmZmVjdCB3YXMgZm91bmQgb24gaHR0cHM6Ly9mcmVlZnJvbnRlbmQuY29tL2Nzcy10ZXh0LWVmZmVjdHMvXG4gKlxuICogQGF1dGhvciBSb2JlcnQgQm9yZ2hlc2lcbiAqIEBsaW5rIGh0dHBzOi8vY29kZXBlbi5pby9kZ2hlei9wZW4vSXR4S0UvXG4gKi9cbmpRdWVyeSgkID0+IHtcbiAgJChkb2N1bWVudCkub24oXCJtb3VzZW1vdmVcIiwgKHsgcGFnZVg6IG1vdXNlWCwgcGFnZVk6IG1vdXNlWSB9KSA9PiB7XG4gICAgY29uc3QgdHJhWCA9ICg0ICogbW91c2VYKSAvIDU3MCArIDQwO1xuICAgIGNvbnN0IHRyYVkgPSAoNCAqIG1vdXNlWSkgLyA1NzAgKyA1MDtcblxuICAgICQoXCIudGl0bGVcIikuY3NzKHsgXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCI6IHRyYVggKyBcIiVcIiArIHRyYVkgKyBcIiVcIiB9KTtcbiAgICAkKFwiLnN1YnRpdGxlXCIpLmNzcyh7IFwiYmFja2dyb3VuZC1wb3NpdGlvblwiOiB0cmFYICsgXCIlXCIgKyB0cmFZICsgXCIlXCIgfSk7XG4gIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9