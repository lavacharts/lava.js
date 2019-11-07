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
});
setInterval(function () {
  chart.set("colors", ["#".concat(Math.random().toString(16).substr(-6))]);
  chart.set("areaOpacity", Math.random());
}, 2000);
lava.draw();

/***/ })

},[["./site/examples/options.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2V4YW1wbGVzL29wdGlvbnMuanMiXSwibmFtZXMiOlsiY2hhcnQiLCJsYXZhIiwidHlwZSIsImNvbnRhaW5lcklkIiwiZGF0YSIsIk1hdGgiLCJyYW5kb20iLCJvcHRpb25zIiwibGVnZW5kIiwic2V0SW50ZXJ2YWwiLCJzZXQiLCJ0b1N0cmluZyIsInN1YnN0ciIsImRyYXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFMLENBQVc7QUFDdkJFLE1BQUksRUFBRSxXQURpQjtBQUV2QkMsYUFBVyxFQUFFLFdBRlU7QUFHdkJDLE1BQUksRUFBRSxDQUNKLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FESSxFQUVKLENBQUMsQ0FBRCxFQUFJQyxJQUFJLENBQUNDLE1BQUwsRUFBSixDQUZJLEVBR0osQ0FBQyxDQUFELEVBQUlELElBQUksQ0FBQ0MsTUFBTCxFQUFKLENBSEksRUFJSixDQUFDLENBQUQsRUFBSUQsSUFBSSxDQUFDQyxNQUFMLEVBQUosQ0FKSSxFQUtKLENBQUMsQ0FBRCxFQUFJRCxJQUFJLENBQUNDLE1BQUwsRUFBSixDQUxJLEVBTUosQ0FBQyxDQUFELEVBQUlELElBQUksQ0FBQ0MsTUFBTCxFQUFKLENBTkksQ0FIaUI7QUFXdkJDLFNBQU8sRUFBRTtBQUNQQyxVQUFNLEVBQUU7QUFERDtBQVhjLENBQVgsQ0FBZDtBQWdCQUMsV0FBVyxDQUFDLFlBQU07QUFDaEJULE9BQUssQ0FBQ1UsR0FBTixDQUFVLFFBQVYsRUFBb0IsWUFDZEwsSUFBSSxDQUFDQyxNQUFMLEdBQ0RLLFFBREMsQ0FDUSxFQURSLEVBRURDLE1BRkMsQ0FFTSxDQUFDLENBRlAsQ0FEYyxFQUFwQjtBQU1BWixPQUFLLENBQUNVLEdBQU4sQ0FBVSxhQUFWLEVBQXlCTCxJQUFJLENBQUNDLE1BQUwsRUFBekI7QUFDRCxDQVJVLEVBUVIsSUFSUSxDQUFYO0FBVUFMLElBQUksQ0FBQ1ksSUFBTCxHIiwiZmlsZSI6Im9wdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaGFydCA9IGxhdmEuY2hhcnQoe1xuICB0eXBlOiBcIkFyZWFDaGFydFwiLFxuICBjb250YWluZXJJZDogXCJjaGFydF9kaXZcIixcbiAgZGF0YTogW1xuICAgIFtcIlNlcmllc1wiLCBcIlJhbmRvbVwiXSxcbiAgICBbMSwgTWF0aC5yYW5kb20oKV0sXG4gICAgWzIsIE1hdGgucmFuZG9tKCldLFxuICAgIFszLCBNYXRoLnJhbmRvbSgpXSxcbiAgICBbNCwgTWF0aC5yYW5kb20oKV0sXG4gICAgWzUsIE1hdGgucmFuZG9tKCldXG4gIF0sXG4gIG9wdGlvbnM6IHtcbiAgICBsZWdlbmQ6IFwibm9uZVwiXG4gIH1cbn0pO1xuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gIGNoYXJ0LnNldChcImNvbG9yc1wiLCBbXG4gICAgYCMke01hdGgucmFuZG9tKClcbiAgICAgIC50b1N0cmluZygxNilcbiAgICAgIC5zdWJzdHIoLTYpfWBcbiAgXSk7XG5cbiAgY2hhcnQuc2V0KFwiYXJlYU9wYWNpdHlcIiwgTWF0aC5yYW5kb20oKSk7XG59LCAyMDAwKTtcblxubGF2YS5kcmF3KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9