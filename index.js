(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./examples/index.js":
/*!***************************!*\
  !*** ./examples/index.js ***!
  \***************************/
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

__webpack_require__(/*! /home/kevin/projects/lava.js/static/parallax-logo.js */"./static/parallax-logo.js");
module.exports = __webpack_require__(/*! /home/kevin/projects/lava.js/examples/index.js */"./examples/index.js");


/***/ })

},[[0,"runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvcGFyYWxsYXgtbG9nby5qcyJdLCJuYW1lcyI6WyJyIiwibiIsIngiLCJNYXRoIiwicmFuZG9tIiwibGF2YSIsImNoYXJ0IiwibGFiZWwiLCJ0eXBlIiwiY29udGFpbmVySWQiLCJkYXRhIiwib3B0aW9ucyIsInRpdGxlIiwibGVnZW5kIiwiY29sb3JzIiwiZHJhdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsU0FBU0EsQ0FBVCxDQUFXQyxDQUFYLEVBQWNDLENBQWQsRUFBaUI7QUFDZixTQUFPQyxJQUFJLENBQUNDLE1BQUwsTUFBaUJGLENBQUMsR0FBR0QsQ0FBckIsSUFBMEJBLENBQWpDO0FBQ0Q7O0FBRURJLElBQUksQ0FBQ0MsS0FBTCxDQUFXO0FBQ1RDLE9BQUssRUFBRSxXQURFO0FBRVRDLE1BQUksRUFBRSxXQUZHO0FBR1RDLGFBQVcsRUFBRSxXQUhKO0FBSVRDLE1BQUksRUFBRSxDQUNKLENBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsTUFBdEIsQ0FESSxFQUVKLENBQUMsQ0FBRCxFQUFJVixDQUFDLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBTCxFQUFlQSxDQUFDLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBaEIsQ0FGSSxFQUdKLENBQUMsQ0FBRCxFQUFJQSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBTCxFQUFpQkEsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQWxCLENBSEksRUFJSixDQUFDLENBQUQsRUFBSUEsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQUwsRUFBaUJBLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFsQixDQUpJLEVBS0osQ0FBQyxDQUFELEVBQUlBLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFMLEVBQWlCQSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBbEIsQ0FMSSxFQU1KLENBQUMsQ0FBRCxFQUFJQSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBTCxFQUFpQkEsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQWxCLENBTkksRUFPSixDQUFDLENBQUQsRUFBSUEsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQUwsRUFBaUJBLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFsQixDQVBJLEVBUUosQ0FBQyxDQUFELEVBQUlBLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFMLEVBQWlCQSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBbEIsQ0FSSSxFQVNKLENBQUMsQ0FBRCxFQUFJQSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBTCxFQUFpQkEsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQWxCLENBVEksRUFVSixDQUFDLENBQUQsRUFBSUEsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQUwsRUFBaUJBLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFsQixDQVZJLEVBV0osQ0FBQyxFQUFELEVBQUtBLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFOLEVBQWtCQSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBbkIsQ0FYSSxFQVlKLENBQUMsRUFBRCxFQUFLQSxDQUFDLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBTixFQUFnQkEsQ0FBQyxDQUFDLENBQUQsRUFBSSxHQUFKLENBQWpCLENBWkksQ0FKRztBQWtCVFcsU0FBTyxFQUFFO0FBQ1BDLFNBQUssRUFBRSxvQkFEQTtBQUVQQyxVQUFNLEVBQUUsUUFGRDtBQUdQQyxVQUFNLEVBQUUsQ0FBQyxTQUFELEVBQVksS0FBWjtBQUhEO0FBbEJBLENBQVg7QUF5QkFULElBQUksQ0FBQ1UsSUFBTCxHOzs7Ozs7Ozs7OztBQzdCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywrQkFBK0I7QUFDL0Q7QUFDQTs7QUFFQSxxQkFBcUIsaURBQWlEO0FBQ3RFLHdCQUF3QixpREFBaUQ7QUFDekUsR0FBRztBQUNILENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByKG4sIHgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAoeCAtIG4pICsgbjtcbn1cblxubGF2YS5jaGFydCh7XG4gIGxhYmVsOiBcIkxhdmFjaGFydFwiLFxuICB0eXBlOiBcIkFyZWFDaGFydFwiLFxuICBjb250YWluZXJJZDogXCJjaGFydF9kaXZcIixcbiAgZGF0YTogW1xuICAgIFtcInNlcmllc1wiLCBcInZvbGNhbm9cIiwgXCJsYXZhXCJdLFxuICAgIFsxLCByKDAsIDEwMCksIHIoMCwgMTAwKV0sXG4gICAgWzIsIHIoMTAwLCAyMDApLCByKDEwMCwgMjAwKV0sXG4gICAgWzMsIHIoMjAwLCAzMDApLCByKDIwMCwgMzAwKV0sXG4gICAgWzQsIHIoMzAwLCA0MDApLCByKDMwMCwgNDAwKV0sXG4gICAgWzUsIHIoNDAwLCA1MDApLCByKDQwMCwgNTAwKV0sXG4gICAgWzYsIHIoNTAwLCA2MDApLCByKDUwMCwgNjAwKV0sXG4gICAgWzcsIHIoNDAwLCA1MDApLCByKDQwMCwgNTAwKV0sXG4gICAgWzgsIHIoMzAwLCA0MDApLCByKDMwMCwgNDAwKV0sXG4gICAgWzksIHIoMjAwLCAzMDApLCByKDIwMCwgMzAwKV0sXG4gICAgWzEwLCByKDEwMCwgMjAwKSwgcigxMDAsIDIwMCldLFxuICAgIFsxMSwgcigwLCAxMDApLCByKDAsIDEwMCldXG4gIF0sXG4gIG9wdGlvbnM6IHtcbiAgICB0aXRsZTogXCJMZXQgeW91ciBkYXRhIGZsb3dcIixcbiAgICBsZWdlbmQ6IFwiYm90dG9tXCIsXG4gICAgY29sb3JzOiBbXCIjOGM0NzBiXCIsIFwicmVkXCJdXG4gIH1cbn0pO1xuXG5sYXZhLmRyYXcoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyxuby11bmRlZiAqL1xuXG4vKipcbiAqIFRoaXMgcGFyYWxsYXggZWZmZWN0IHdhcyBmb3VuZCBvbiBodHRwczovL2ZyZWVmcm9udGVuZC5jb20vY3NzLXRleHQtZWZmZWN0cy9cbiAqXG4gKiBAYXV0aG9yIFJvYmVydCBCb3JnaGVzaVxuICogQGxpbmsgaHR0cHM6Ly9jb2RlcGVuLmlvL2RnaGV6L3Blbi9JdHhLRS9cbiAqL1xualF1ZXJ5KCQgPT4ge1xuICAkKGRvY3VtZW50KS5vbihcIm1vdXNlbW92ZVwiLCAoeyBwYWdlWDogbW91c2VYLCBwYWdlWTogbW91c2VZIH0pID0+IHtcbiAgICBjb25zdCB0cmFYID0gKDQgKiBtb3VzZVgpIC8gNTcwICsgNDA7XG4gICAgY29uc3QgdHJhWSA9ICg0ICogbW91c2VZKSAvIDU3MCArIDUwO1xuXG4gICAgJChcIi50aXRsZVwiKS5jc3MoeyBcImJhY2tncm91bmQtcG9zaXRpb25cIjogdHJhWCArIFwiJVwiICsgdHJhWSArIFwiJVwiIH0pO1xuICAgICQoXCIuc3VidGl0bGVcIikuY3NzKHsgXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCI6IHRyYVggKyBcIiVcIiArIHRyYVkgKyBcIiVcIiB9KTtcbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=