(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["options"],{

/***/ "./examples/options.js":
/*!*****************************!*\
  !*** ./examples/options.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var chart = lava.chart({
  label: "MyFancyChart",
  type: "ScatterChart",
  elementId: "chart_div",
  data: [["Age", "Cash"], [12, 101], [15, 240], [37, 80], [32, 324]],
  options: {
    legend: "none"
  }
});
setInterval(function () {
  chart.set("colors", ["#".concat(Math.random().toString(16).substr(-6))]);
}, 1000); // eslint-disable-next-line no-mixed-operators
// const r = (mn, mx) => Math.floor(Math.random() * (mx - mn + 1) + mn);
// setInterval(async () => {
//   await chart.updateData([
//     ["Age", "Cash"],
//     [r(20, 40), r(100, 400)],
//     [r(20, 40), r(100, 400)],
//     [r(20, 40), r(100, 400)],
//     [r(20, 40), r(100, 400)]
//   ]);
// }, 750);

lava.draw();

/***/ })

},[["./examples/options.js","runtime"]]]);