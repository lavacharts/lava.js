(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["multichart"],{

/***/ "./examples/multichart.js":
/*!********************************!*\
  !*** ./examples/multichart.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomData(data) {
  data.addColumn("number", "Hours");
  data.addColumn("number", "Temp. (C)");

  for (var i = 1; i <= 25; i++) {
    data.addRow([i, Math.random()]);
  }

  return data;
}

lava.charts([{
  // label: "This prop is optional",
  type: "AreaChart",
  containerId: "chart_div1",
  data: randomData,
  options: {
    legend: "none",
    colors: ["red"]
  }
}, {
  // default label if omitted, `containerId`,
  type: "BarChart",
  containerId: "chart_div2",
  data: randomData,
  options: {
    legend: "none",
    colors: ["orange"]
  }
}, {
  type: "ScatterChart",
  containerId: "chart_div3",
  data: randomData,
  options: {
    legend: "none",
    colors: ["grey"]
  }
}]);
lava.draw();

/***/ })

},[["./examples/multichart.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9tdWx0aWNoYXJ0LmpzIl0sIm5hbWVzIjpbInJhbmRvbURhdGEiLCJkYXRhIiwiYWRkQ29sdW1uIiwiaSIsImFkZFJvdyIsIk1hdGgiLCJyYW5kb20iLCJsYXZhIiwiY2hhcnRzIiwidHlwZSIsImNvbnRhaW5lcklkIiwib3B0aW9ucyIsImxlZ2VuZCIsImNvbG9ycyIsImRyYXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFNBQVNBLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3hCQSxNQUFJLENBQUNDLFNBQUwsQ0FBZSxRQUFmLEVBQXlCLE9BQXpCO0FBQ0FELE1BQUksQ0FBQ0MsU0FBTCxDQUFlLFFBQWYsRUFBeUIsV0FBekI7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJLEVBQXJCLEVBQXlCQSxDQUFDLEVBQTFCLEVBQThCO0FBQzVCRixRQUFJLENBQUNHLE1BQUwsQ0FBWSxDQUFDRCxDQUFELEVBQUlFLElBQUksQ0FBQ0MsTUFBTCxFQUFKLENBQVo7QUFDRDs7QUFFRCxTQUFPTCxJQUFQO0FBQ0Q7O0FBRURNLElBQUksQ0FBQ0MsTUFBTCxDQUFZLENBQ1Y7QUFDRTtBQUNBQyxNQUFJLEVBQUUsV0FGUjtBQUdFQyxhQUFXLEVBQUUsWUFIZjtBQUlFVCxNQUFJLEVBQUVELFVBSlI7QUFLRVcsU0FBTyxFQUFFO0FBQ1BDLFVBQU0sRUFBRSxNQUREO0FBRVBDLFVBQU0sRUFBRSxDQUFDLEtBQUQ7QUFGRDtBQUxYLENBRFUsRUFXVjtBQUNFO0FBQ0FKLE1BQUksRUFBRSxVQUZSO0FBR0VDLGFBQVcsRUFBRSxZQUhmO0FBSUVULE1BQUksRUFBRUQsVUFKUjtBQUtFVyxTQUFPLEVBQUU7QUFDUEMsVUFBTSxFQUFFLE1BREQ7QUFFUEMsVUFBTSxFQUFFLENBQUMsUUFBRDtBQUZEO0FBTFgsQ0FYVSxFQXFCVjtBQUNFSixNQUFJLEVBQUUsY0FEUjtBQUVFQyxhQUFXLEVBQUUsWUFGZjtBQUdFVCxNQUFJLEVBQUVELFVBSFI7QUFJRVcsU0FBTyxFQUFFO0FBQ1BDLFVBQU0sRUFBRSxNQUREO0FBRVBDLFVBQU0sRUFBRSxDQUFDLE1BQUQ7QUFGRDtBQUpYLENBckJVLENBQVo7QUFnQ0FOLElBQUksQ0FBQ08sSUFBTCxHIiwiZmlsZSI6Im11bHRpY2hhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByYW5kb21EYXRhKGRhdGEpIHtcbiAgZGF0YS5hZGRDb2x1bW4oXCJudW1iZXJcIiwgXCJIb3Vyc1wiKTtcbiAgZGF0YS5hZGRDb2x1bW4oXCJudW1iZXJcIiwgXCJUZW1wLiAoQylcIik7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjU7IGkrKykge1xuICAgIGRhdGEuYWRkUm93KFtpLCBNYXRoLnJhbmRvbSgpXSk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxubGF2YS5jaGFydHMoW1xuICB7XG4gICAgLy8gbGFiZWw6IFwiVGhpcyBwcm9wIGlzIG9wdGlvbmFsXCIsXG4gICAgdHlwZTogXCJBcmVhQ2hhcnRcIixcbiAgICBjb250YWluZXJJZDogXCJjaGFydF9kaXYxXCIsXG4gICAgZGF0YTogcmFuZG9tRGF0YSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBsZWdlbmQ6IFwibm9uZVwiLFxuICAgICAgY29sb3JzOiBbXCJyZWRcIl1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICAvLyBkZWZhdWx0IGxhYmVsIGlmIG9taXR0ZWQsIGBjb250YWluZXJJZGAsXG4gICAgdHlwZTogXCJCYXJDaGFydFwiLFxuICAgIGNvbnRhaW5lcklkOiBcImNoYXJ0X2RpdjJcIixcbiAgICBkYXRhOiByYW5kb21EYXRhLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGxlZ2VuZDogXCJub25lXCIsXG4gICAgICBjb2xvcnM6IFtcIm9yYW5nZVwiXVxuICAgIH1cbiAgfSxcbiAge1xuICAgIHR5cGU6IFwiU2NhdHRlckNoYXJ0XCIsXG4gICAgY29udGFpbmVySWQ6IFwiY2hhcnRfZGl2M1wiLFxuICAgIGRhdGE6IHJhbmRvbURhdGEsXG4gICAgb3B0aW9uczoge1xuICAgICAgbGVnZW5kOiBcIm5vbmVcIixcbiAgICAgIGNvbG9yczogW1wiZ3JleVwiXVxuICAgIH1cbiAgfVxuXSk7XG5cbmxhdmEuZHJhdygpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==