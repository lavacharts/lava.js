(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["options"],{

/***/ "./site/examples/options.js":
/*!**********************************!*\
  !*** ./site/examples/options.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var chart = lava.chart({
  type: "AreaChart",
  containerId: "chart_div",
  data: [["Series", "Random"], [1, Math.random()], [2, Math.random()], [3, Math.random()], [4, Math.random()], [5, Math.random()]],
  options: {
    legend: "none"
  }
}); // This will return a random hex color

function randomColor() {
  return "#".concat(Math.random().toString(16).substr(-6));
} // Set individual options


setInterval(function () {
  chart.set("backgroundColor", randomColor());
}, 1500); // Or set many

setInterval(function () {
  chart.updateOptions({
    areaOpacity: Math.random(),
    colors: [randomColor()]
  });
}, 2500);
lava.draw();

/***/ })

},[["./site/examples/options.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2V4YW1wbGVzL29wdGlvbnMuanMiXSwibmFtZXMiOlsiY2hhcnQiLCJsYXZhIiwidHlwZSIsImNvbnRhaW5lcklkIiwiZGF0YSIsIk1hdGgiLCJyYW5kb20iLCJvcHRpb25zIiwibGVnZW5kIiwicmFuZG9tQ29sb3IiLCJ0b1N0cmluZyIsInN1YnN0ciIsInNldEludGVydmFsIiwic2V0IiwidXBkYXRlT3B0aW9ucyIsImFyZWFPcGFjaXR5IiwiY29sb3JzIiwiZHJhdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUwsQ0FBVztBQUN2QkUsTUFBSSxFQUFFLFdBRGlCO0FBRXZCQyxhQUFXLEVBQUUsV0FGVTtBQUd2QkMsTUFBSSxFQUFFLENBQ0osQ0FBQyxRQUFELEVBQVcsUUFBWCxDQURJLEVBRUosQ0FBQyxDQUFELEVBQUlDLElBQUksQ0FBQ0MsTUFBTCxFQUFKLENBRkksRUFHSixDQUFDLENBQUQsRUFBSUQsSUFBSSxDQUFDQyxNQUFMLEVBQUosQ0FISSxFQUlKLENBQUMsQ0FBRCxFQUFJRCxJQUFJLENBQUNDLE1BQUwsRUFBSixDQUpJLEVBS0osQ0FBQyxDQUFELEVBQUlELElBQUksQ0FBQ0MsTUFBTCxFQUFKLENBTEksRUFNSixDQUFDLENBQUQsRUFBSUQsSUFBSSxDQUFDQyxNQUFMLEVBQUosQ0FOSSxDQUhpQjtBQVd2QkMsU0FBTyxFQUFFO0FBQ1BDLFVBQU0sRUFBRTtBQUREO0FBWGMsQ0FBWCxDQUFkLEMsQ0FnQkE7O0FBQ0EsU0FBU0MsV0FBVCxHQUF1QjtBQUNyQixvQkFBV0osSUFBSSxDQUFDQyxNQUFMLEdBQ1JJLFFBRFEsQ0FDQyxFQURELEVBRVJDLE1BRlEsQ0FFRCxDQUFDLENBRkEsQ0FBWDtBQUdELEMsQ0FFRDs7O0FBQ0FDLFdBQVcsQ0FBQyxZQUFNO0FBQ2hCWixPQUFLLENBQUNhLEdBQU4sQ0FBVSxpQkFBVixFQUE2QkosV0FBVyxFQUF4QztBQUNELENBRlUsRUFFUixJQUZRLENBQVgsQyxDQUlBOztBQUNBRyxXQUFXLENBQUMsWUFBTTtBQUNoQlosT0FBSyxDQUFDYyxhQUFOLENBQW9CO0FBQ2xCQyxlQUFXLEVBQUVWLElBQUksQ0FBQ0MsTUFBTCxFQURLO0FBRWxCVSxVQUFNLEVBQUUsQ0FBQ1AsV0FBVyxFQUFaO0FBRlUsR0FBcEI7QUFJRCxDQUxVLEVBS1IsSUFMUSxDQUFYO0FBT0FSLElBQUksQ0FBQ2dCLElBQUwsRyIsImZpbGUiOiJvcHRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2hhcnQgPSBsYXZhLmNoYXJ0KHtcbiAgdHlwZTogXCJBcmVhQ2hhcnRcIixcbiAgY29udGFpbmVySWQ6IFwiY2hhcnRfZGl2XCIsXG4gIGRhdGE6IFtcbiAgICBbXCJTZXJpZXNcIiwgXCJSYW5kb21cIl0sXG4gICAgWzEsIE1hdGgucmFuZG9tKCldLFxuICAgIFsyLCBNYXRoLnJhbmRvbSgpXSxcbiAgICBbMywgTWF0aC5yYW5kb20oKV0sXG4gICAgWzQsIE1hdGgucmFuZG9tKCldLFxuICAgIFs1LCBNYXRoLnJhbmRvbSgpXVxuICBdLFxuICBvcHRpb25zOiB7XG4gICAgbGVnZW5kOiBcIm5vbmVcIlxuICB9XG59KTtcblxuLy8gVGhpcyB3aWxsIHJldHVybiBhIHJhbmRvbSBoZXggY29sb3JcbmZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkge1xuICByZXR1cm4gYCMke01hdGgucmFuZG9tKClcbiAgICAudG9TdHJpbmcoMTYpXG4gICAgLnN1YnN0cigtNil9YDtcbn1cblxuLy8gU2V0IGluZGl2aWR1YWwgb3B0aW9uc1xuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICBjaGFydC5zZXQoXCJiYWNrZ3JvdW5kQ29sb3JcIiwgcmFuZG9tQ29sb3IoKSk7XG59LCAxNTAwKTtcblxuLy8gT3Igc2V0IG1hbnlcbnNldEludGVydmFsKCgpID0+IHtcbiAgY2hhcnQudXBkYXRlT3B0aW9ucyh7XG4gICAgYXJlYU9wYWNpdHk6IE1hdGgucmFuZG9tKCksXG4gICAgY29sb3JzOiBbcmFuZG9tQ29sb3IoKV1cbiAgfSk7XG59LCAyNTAwKTtcblxubGF2YS5kcmF3KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9