(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["multichart"],{

/***/ "./site/examples/multichart.js":
/*!*************************************!*\
  !*** ./site/examples/multichart.js ***!
  \*************************************/
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

},[["./site/examples/multichart.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2V4YW1wbGVzL211bHRpY2hhcnQuanMiXSwibmFtZXMiOlsicmFuZG9tRGF0YSIsImRhdGEiLCJhZGRDb2x1bW4iLCJpIiwiYWRkUm93IiwiTWF0aCIsInJhbmRvbSIsImxhdmEiLCJjaGFydHMiLCJ0eXBlIiwiY29udGFpbmVySWQiLCJvcHRpb25zIiwibGVnZW5kIiwiY29sb3JzIiwiZHJhdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsU0FBU0EsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDeEJBLE1BQUksQ0FBQ0MsU0FBTCxDQUFlLFFBQWYsRUFBeUIsT0FBekI7QUFDQUQsTUFBSSxDQUFDQyxTQUFMLENBQWUsUUFBZixFQUF5QixXQUF6Qjs7QUFFQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUksRUFBckIsRUFBeUJBLENBQUMsRUFBMUIsRUFBOEI7QUFDNUJGLFFBQUksQ0FBQ0csTUFBTCxDQUFZLENBQUNELENBQUQsRUFBSUUsSUFBSSxDQUFDQyxNQUFMLEVBQUosQ0FBWjtBQUNEOztBQUVELFNBQU9MLElBQVA7QUFDRDs7QUFFRE0sSUFBSSxDQUFDQyxNQUFMLENBQVksQ0FDVjtBQUNFO0FBQ0FDLE1BQUksRUFBRSxXQUZSO0FBR0VDLGFBQVcsRUFBRSxZQUhmO0FBSUVULE1BQUksRUFBRUQsVUFKUjtBQUtFVyxTQUFPLEVBQUU7QUFDUEMsVUFBTSxFQUFFLE1BREQ7QUFFUEMsVUFBTSxFQUFFLENBQUMsS0FBRDtBQUZEO0FBTFgsQ0FEVSxFQVdWO0FBQ0U7QUFDQUosTUFBSSxFQUFFLFVBRlI7QUFHRUMsYUFBVyxFQUFFLFlBSGY7QUFJRVQsTUFBSSxFQUFFRCxVQUpSO0FBS0VXLFNBQU8sRUFBRTtBQUNQQyxVQUFNLEVBQUUsTUFERDtBQUVQQyxVQUFNLEVBQUUsQ0FBQyxRQUFEO0FBRkQ7QUFMWCxDQVhVLEVBcUJWO0FBQ0VKLE1BQUksRUFBRSxjQURSO0FBRUVDLGFBQVcsRUFBRSxZQUZmO0FBR0VULE1BQUksRUFBRUQsVUFIUjtBQUlFVyxTQUFPLEVBQUU7QUFDUEMsVUFBTSxFQUFFLE1BREQ7QUFFUEMsVUFBTSxFQUFFLENBQUMsTUFBRDtBQUZEO0FBSlgsQ0FyQlUsQ0FBWjtBQWdDQU4sSUFBSSxDQUFDTyxJQUFMLEciLCJmaWxlIjoibXVsdGljaGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJhbmRvbURhdGEoZGF0YSkge1xuICBkYXRhLmFkZENvbHVtbihcIm51bWJlclwiLCBcIkhvdXJzXCIpO1xuICBkYXRhLmFkZENvbHVtbihcIm51bWJlclwiLCBcIlRlbXAuIChDKVwiKTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSAyNTsgaSsrKSB7XG4gICAgZGF0YS5hZGRSb3coW2ksIE1hdGgucmFuZG9tKCldKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG5sYXZhLmNoYXJ0cyhbXG4gIHtcbiAgICAvLyBsYWJlbDogXCJUaGlzIHByb3AgaXMgb3B0aW9uYWxcIixcbiAgICB0eXBlOiBcIkFyZWFDaGFydFwiLFxuICAgIGNvbnRhaW5lcklkOiBcImNoYXJ0X2RpdjFcIixcbiAgICBkYXRhOiByYW5kb21EYXRhLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGxlZ2VuZDogXCJub25lXCIsXG4gICAgICBjb2xvcnM6IFtcInJlZFwiXVxuICAgIH1cbiAgfSxcbiAge1xuICAgIC8vIGRlZmF1bHQgbGFiZWwgaWYgb21pdHRlZCwgYGNvbnRhaW5lcklkYCxcbiAgICB0eXBlOiBcIkJhckNoYXJ0XCIsXG4gICAgY29udGFpbmVySWQ6IFwiY2hhcnRfZGl2MlwiLFxuICAgIGRhdGE6IHJhbmRvbURhdGEsXG4gICAgb3B0aW9uczoge1xuICAgICAgbGVnZW5kOiBcIm5vbmVcIixcbiAgICAgIGNvbG9yczogW1wib3JhbmdlXCJdXG4gICAgfVxuICB9LFxuICB7XG4gICAgdHlwZTogXCJTY2F0dGVyQ2hhcnRcIixcbiAgICBjb250YWluZXJJZDogXCJjaGFydF9kaXYzXCIsXG4gICAgZGF0YTogcmFuZG9tRGF0YSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBsZWdlbmQ6IFwibm9uZVwiLFxuICAgICAgY29sb3JzOiBbXCJncmV5XCJdXG4gICAgfVxuICB9XG5dKTtcblxubGF2YS5kcmF3KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9