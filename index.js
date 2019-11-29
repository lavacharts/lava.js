(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./site/examples/index.js":
/*!********************************!*\
  !*** ./site/examples/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var r = function r(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
};

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

__webpack_require__(/*! /home/kevin/projects/lavacharts/lava.js/site/static/parallax-logo.js */"./site/static/parallax-logo.js");
module.exports = __webpack_require__(/*! /home/kevin/projects/lavacharts/lava.js/site/examples/index.js */"./site/examples/index.js");


/***/ })

},[[0,"runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2V4YW1wbGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvc3RhdGljL3BhcmFsbGF4LWxvZ28uanMiXSwibmFtZXMiOlsiciIsImEiLCJiIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGF2YSIsImNoYXJ0IiwibGFiZWwiLCJ0eXBlIiwiY29udGFpbmVySWQiLCJkYXRhIiwib3B0aW9ucyIsInRpdGxlIiwibGVnZW5kIiwiY29sb3JzIiwiZHJhdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsQ0FBQyxHQUFHLFNBQUpBLENBQUksQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsU0FBVUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQkgsQ0FBQyxHQUFHRCxDQUFKLEdBQVEsQ0FBekIsSUFBOEJBLENBQXpDLENBQVY7QUFBQSxDQUFWOztBQUVBSyxJQUFJLENBQUNDLEtBQUwsQ0FBVztBQUNUQyxPQUFLLEVBQUUsV0FERTtBQUVUQyxNQUFJLEVBQUUsV0FGRztBQUdUQyxhQUFXLEVBQUUsV0FISjtBQUlUQyxNQUFJLEVBQUUsQ0FDSixDQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLE1BQXRCLENBREksRUFFSixDQUFDLENBQUQsRUFBSVgsQ0FBQyxDQUFDLENBQUQsRUFBSSxHQUFKLENBQUwsRUFBZUEsQ0FBQyxDQUFDLENBQUQsRUFBSSxHQUFKLENBQWhCLENBRkksRUFHSixDQUFDLENBQUQsRUFBSUEsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQUwsRUFBaUJBLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFsQixDQUhJLEVBSUosQ0FBQyxDQUFELEVBQUlBLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFMLEVBQWlCQSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBbEIsQ0FKSSxFQUtKLENBQUMsQ0FBRCxFQUFJQSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBTCxFQUFpQkEsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQWxCLENBTEksRUFNSixDQUFDLENBQUQsRUFBSUEsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQUwsRUFBaUJBLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFsQixDQU5JLEVBT0osQ0FBQyxDQUFELEVBQUlBLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFMLEVBQWlCQSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBbEIsQ0FQSSxFQVFKLENBQUMsQ0FBRCxFQUFJQSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBTCxFQUFpQkEsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQWxCLENBUkksRUFTSixDQUFDLENBQUQsRUFBSUEsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQUwsRUFBaUJBLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFsQixDQVRJLEVBVUosQ0FBQyxDQUFELEVBQUlBLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFMLEVBQWlCQSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBbEIsQ0FWSSxFQVdKLENBQUMsRUFBRCxFQUFLQSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBTixFQUFrQkEsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQW5CLENBWEksRUFZSixDQUFDLEVBQUQsRUFBS0EsQ0FBQyxDQUFDLENBQUQsRUFBSSxHQUFKLENBQU4sRUFBZ0JBLENBQUMsQ0FBQyxDQUFELEVBQUksR0FBSixDQUFqQixDQVpJLENBSkc7QUFrQlRZLFNBQU8sRUFBRTtBQUNQQyxTQUFLLEVBQUUsb0JBREE7QUFFUEMsVUFBTSxFQUFFLFFBRkQ7QUFHUEMsVUFBTSxFQUFFLENBQUMsU0FBRCxFQUFZLEtBQVo7QUFIRDtBQWxCQSxDQUFYO0FBeUJBVCxJQUFJLENBQUNVLElBQUwsRzs7Ozs7Ozs7Ozs7QUMzQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0JBQStCO0FBQy9EO0FBQ0E7O0FBRUEscUJBQXFCLGlEQUFpRDtBQUN0RSx3QkFBd0IsaURBQWlEO0FBQ3pFLEdBQUc7QUFDSCxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgciA9IChhLCBiKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYiAtIGEgKyAxKSArIGEpO1xuXG5sYXZhLmNoYXJ0KHtcbiAgbGFiZWw6IFwiTGF2YWNoYXJ0XCIsXG4gIHR5cGU6IFwiQXJlYUNoYXJ0XCIsXG4gIGNvbnRhaW5lcklkOiBcImNoYXJ0X2RpdlwiLFxuICBkYXRhOiBbXG4gICAgW1wic2VyaWVzXCIsIFwidm9sY2Fub1wiLCBcImxhdmFcIl0sXG4gICAgWzEsIHIoMCwgMTAwKSwgcigwLCAxMDApXSxcbiAgICBbMiwgcigxMDAsIDIwMCksIHIoMTAwLCAyMDApXSxcbiAgICBbMywgcigyMDAsIDMwMCksIHIoMjAwLCAzMDApXSxcbiAgICBbNCwgcigzMDAsIDQwMCksIHIoMzAwLCA0MDApXSxcbiAgICBbNSwgcig0MDAsIDUwMCksIHIoNDAwLCA1MDApXSxcbiAgICBbNiwgcig1MDAsIDYwMCksIHIoNTAwLCA2MDApXSxcbiAgICBbNywgcig0MDAsIDUwMCksIHIoNDAwLCA1MDApXSxcbiAgICBbOCwgcigzMDAsIDQwMCksIHIoMzAwLCA0MDApXSxcbiAgICBbOSwgcigyMDAsIDMwMCksIHIoMjAwLCAzMDApXSxcbiAgICBbMTAsIHIoMTAwLCAyMDApLCByKDEwMCwgMjAwKV0sXG4gICAgWzExLCByKDAsIDEwMCksIHIoMCwgMTAwKV1cbiAgXSxcbiAgb3B0aW9uczoge1xuICAgIHRpdGxlOiBcIkxldCB5b3VyIGRhdGEgZmxvd1wiLFxuICAgIGxlZ2VuZDogXCJib3R0b21cIixcbiAgICBjb2xvcnM6IFtcIiM4YzQ3MGJcIiwgXCJyZWRcIl1cbiAgfVxufSk7XG5cbmxhdmEuZHJhdygpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzLG5vLXVuZGVmICovXG5cbi8qKlxuICogVGhpcyBwYXJhbGxheCBlZmZlY3Qgd2FzIGZvdW5kIG9uIGh0dHBzOi8vZnJlZWZyb250ZW5kLmNvbS9jc3MtdGV4dC1lZmZlY3RzL1xuICpcbiAqIEBhdXRob3IgUm9iZXJ0IEJvcmdoZXNpXG4gKiBAbGluayBodHRwczovL2NvZGVwZW4uaW8vZGdoZXovcGVuL0l0eEtFL1xuICovXG5qUXVlcnkoJCA9PiB7XG4gICQoZG9jdW1lbnQpLm9uKFwibW91c2Vtb3ZlXCIsICh7IHBhZ2VYOiBtb3VzZVgsIHBhZ2VZOiBtb3VzZVkgfSkgPT4ge1xuICAgIGNvbnN0IHRyYVggPSAoNCAqIG1vdXNlWCkgLyA1NzAgKyA0MDtcbiAgICBjb25zdCB0cmFZID0gKDQgKiBtb3VzZVkpIC8gNTcwICsgNTA7XG5cbiAgICAkKFwiLnRpdGxlXCIpLmNzcyh7IFwiYmFja2dyb3VuZC1wb3NpdGlvblwiOiB0cmFYICsgXCIlXCIgKyB0cmFZICsgXCIlXCIgfSk7XG4gICAgJChcIi5zdWJ0aXRsZVwiKS5jc3MoeyBcImJhY2tncm91bmQtcG9zaXRpb25cIjogdHJhWCArIFwiJVwiICsgdHJhWSArIFwiJVwiIH0pO1xuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==