(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["options"],{

/***/ "./examples/options.js":
/*!*****************************!*\
  !*** ./examples/options.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var chart = lava.chart({
  type: "AreaChart",
  containerId: "chart_div",
  data: [["Series", "Random"], [1, Math.random()], [2, Math.random()], [3, Math.random()], [4, Math.random()], [5, Math.random()]],
  options: {
    legend: "none"
  }
});
setInterval(function () {
  chart.set("colors", ["#".concat(Math.random().toString(16).substr(-6))]);
  chart.set("areaOpacity", Math.random());
}, 2000);
lava.draw();

/***/ })

},[["./examples/options.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9vcHRpb25zLmpzIl0sIm5hbWVzIjpbImNoYXJ0IiwibGF2YSIsInR5cGUiLCJjb250YWluZXJJZCIsImRhdGEiLCJNYXRoIiwicmFuZG9tIiwib3B0aW9ucyIsImxlZ2VuZCIsInNldEludGVydmFsIiwic2V0IiwidG9TdHJpbmciLCJzdWJzdHIiLCJkcmF3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBTCxDQUFXO0FBQ3ZCRSxNQUFJLEVBQUUsV0FEaUI7QUFFdkJDLGFBQVcsRUFBRSxXQUZVO0FBR3ZCQyxNQUFJLEVBQUUsQ0FDSixDQUFDLFFBQUQsRUFBVyxRQUFYLENBREksRUFFSixDQUFDLENBQUQsRUFBSUMsSUFBSSxDQUFDQyxNQUFMLEVBQUosQ0FGSSxFQUdKLENBQUMsQ0FBRCxFQUFJRCxJQUFJLENBQUNDLE1BQUwsRUFBSixDQUhJLEVBSUosQ0FBQyxDQUFELEVBQUlELElBQUksQ0FBQ0MsTUFBTCxFQUFKLENBSkksRUFLSixDQUFDLENBQUQsRUFBSUQsSUFBSSxDQUFDQyxNQUFMLEVBQUosQ0FMSSxFQU1KLENBQUMsQ0FBRCxFQUFJRCxJQUFJLENBQUNDLE1BQUwsRUFBSixDQU5JLENBSGlCO0FBV3ZCQyxTQUFPLEVBQUU7QUFDUEMsVUFBTSxFQUFFO0FBREQ7QUFYYyxDQUFYLENBQWQ7QUFnQkFDLFdBQVcsQ0FBQyxZQUFNO0FBQ2hCVCxPQUFLLENBQUNVLEdBQU4sQ0FBVSxRQUFWLEVBQW9CLFlBQ2RMLElBQUksQ0FBQ0MsTUFBTCxHQUNESyxRQURDLENBQ1EsRUFEUixFQUVEQyxNQUZDLENBRU0sQ0FBQyxDQUZQLENBRGMsRUFBcEI7QUFNQVosT0FBSyxDQUFDVSxHQUFOLENBQVUsYUFBVixFQUF5QkwsSUFBSSxDQUFDQyxNQUFMLEVBQXpCO0FBQ0QsQ0FSVSxFQVFSLElBUlEsQ0FBWDtBQVVBTCxJQUFJLENBQUNZLElBQUwsRyIsImZpbGUiOiJvcHRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2hhcnQgPSBsYXZhLmNoYXJ0KHtcbiAgdHlwZTogXCJBcmVhQ2hhcnRcIixcbiAgY29udGFpbmVySWQ6IFwiY2hhcnRfZGl2XCIsXG4gIGRhdGE6IFtcbiAgICBbXCJTZXJpZXNcIiwgXCJSYW5kb21cIl0sXG4gICAgWzEsIE1hdGgucmFuZG9tKCldLFxuICAgIFsyLCBNYXRoLnJhbmRvbSgpXSxcbiAgICBbMywgTWF0aC5yYW5kb20oKV0sXG4gICAgWzQsIE1hdGgucmFuZG9tKCldLFxuICAgIFs1LCBNYXRoLnJhbmRvbSgpXVxuICBdLFxuICBvcHRpb25zOiB7XG4gICAgbGVnZW5kOiBcIm5vbmVcIlxuICB9XG59KTtcblxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICBjaGFydC5zZXQoXCJjb2xvcnNcIiwgW1xuICAgIGAjJHtNYXRoLnJhbmRvbSgpXG4gICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAuc3Vic3RyKC02KX1gXG4gIF0pO1xuXG4gIGNoYXJ0LnNldChcImFyZWFPcGFjaXR5XCIsIE1hdGgucmFuZG9tKCkpO1xufSwgMjAwMCk7XG5cbmxhdmEuZHJhdygpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==