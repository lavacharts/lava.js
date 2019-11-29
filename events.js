(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events"],{

/***/ "./site/examples/events.js":
/*!*********************************!*\
  !*** ./site/examples/events.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var chart = lava.chart({
  label: "Test",
  type: "PieChart",
  containerId: "chart_div",
  data: function data(_data) {
    _data.addColumn("string", "Topping");

    _data.addColumn("number", "Pizzas");

    _data.addRows([["Mushroom & Olive", 2], ["Pepperoni", 5]]);

    return _data;
  },
  events: {
    // Events can be defined upon creation
    ready: function ready() {
      alert(chart.id + " is ready!");
    }
  }
}); // Or attached after the fact

chart.on("select", function (_ref) {
  var chart = _ref.chart,
      data = _ref.data;
  var selectedItem = chart.getSelection()[0];

  if (selectedItem) {
    var topping = data.getValue(selectedItem.row, 0);
    alert("The user selected " + topping);
  }
});
lava.draw();

/***/ })

},[["./site/examples/events.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2V4YW1wbGVzL2V2ZW50cy5qcyJdLCJuYW1lcyI6WyJjaGFydCIsImxhdmEiLCJsYWJlbCIsInR5cGUiLCJjb250YWluZXJJZCIsImRhdGEiLCJhZGRDb2x1bW4iLCJhZGRSb3dzIiwiZXZlbnRzIiwicmVhZHkiLCJhbGVydCIsImlkIiwib24iLCJzZWxlY3RlZEl0ZW0iLCJnZXRTZWxlY3Rpb24iLCJ0b3BwaW5nIiwiZ2V0VmFsdWUiLCJyb3ciLCJkcmF3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBTCxDQUFXO0FBQ3ZCRSxPQUFLLEVBQUUsTUFEZ0I7QUFFdkJDLE1BQUksRUFBRSxVQUZpQjtBQUd2QkMsYUFBVyxFQUFFLFdBSFU7QUFJdkJDLE1BQUksRUFBRSxjQUFBQSxLQUFJLEVBQUk7QUFDWkEsU0FBSSxDQUFDQyxTQUFMLENBQWUsUUFBZixFQUF5QixTQUF6Qjs7QUFDQUQsU0FBSSxDQUFDQyxTQUFMLENBQWUsUUFBZixFQUF5QixRQUF6Qjs7QUFDQUQsU0FBSSxDQUFDRSxPQUFMLENBQWEsQ0FBQyxDQUFDLGtCQUFELEVBQXFCLENBQXJCLENBQUQsRUFBMEIsQ0FBQyxXQUFELEVBQWMsQ0FBZCxDQUExQixDQUFiOztBQUVBLFdBQU9GLEtBQVA7QUFDRCxHQVZzQjtBQVd2QkcsUUFBTSxFQUFFO0FBQ047QUFDQUMsU0FGTSxtQkFFRTtBQUNOQyxXQUFLLENBQUNWLEtBQUssQ0FBQ1csRUFBTixHQUFXLFlBQVosQ0FBTDtBQUNEO0FBSks7QUFYZSxDQUFYLENBQWQsQyxDQW1CQTs7QUFDQVgsS0FBSyxDQUFDWSxFQUFOLENBQVMsUUFBVCxFQUFtQixnQkFBcUI7QUFBQSxNQUFsQlosS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsTUFBWEssSUFBVyxRQUFYQSxJQUFXO0FBQ3RDLE1BQU1RLFlBQVksR0FBR2IsS0FBSyxDQUFDYyxZQUFOLEdBQXFCLENBQXJCLENBQXJCOztBQUVBLE1BQUlELFlBQUosRUFBa0I7QUFDaEIsUUFBTUUsT0FBTyxHQUFHVixJQUFJLENBQUNXLFFBQUwsQ0FBY0gsWUFBWSxDQUFDSSxHQUEzQixFQUFnQyxDQUFoQyxDQUFoQjtBQUVBUCxTQUFLLENBQUMsdUJBQXVCSyxPQUF4QixDQUFMO0FBQ0Q7QUFDRixDQVJEO0FBVUFkLElBQUksQ0FBQ2lCLElBQUwsRyIsImZpbGUiOiJldmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaGFydCA9IGxhdmEuY2hhcnQoe1xuICBsYWJlbDogXCJUZXN0XCIsXG4gIHR5cGU6IFwiUGllQ2hhcnRcIixcbiAgY29udGFpbmVySWQ6IFwiY2hhcnRfZGl2XCIsXG4gIGRhdGE6IGRhdGEgPT4ge1xuICAgIGRhdGEuYWRkQ29sdW1uKFwic3RyaW5nXCIsIFwiVG9wcGluZ1wiKTtcbiAgICBkYXRhLmFkZENvbHVtbihcIm51bWJlclwiLCBcIlBpenphc1wiKTtcbiAgICBkYXRhLmFkZFJvd3MoW1tcIk11c2hyb29tICYgT2xpdmVcIiwgMl0sIFtcIlBlcHBlcm9uaVwiLCA1XV0pO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sXG4gIGV2ZW50czoge1xuICAgIC8vIEV2ZW50cyBjYW4gYmUgZGVmaW5lZCB1cG9uIGNyZWF0aW9uXG4gICAgcmVhZHkoKSB7XG4gICAgICBhbGVydChjaGFydC5pZCArIFwiIGlzIHJlYWR5IVwiKTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBPciBhdHRhY2hlZCBhZnRlciB0aGUgZmFjdFxuY2hhcnQub24oXCJzZWxlY3RcIiwgKHsgY2hhcnQsIGRhdGEgfSkgPT4ge1xuICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBjaGFydC5nZXRTZWxlY3Rpb24oKVswXTtcblxuICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgY29uc3QgdG9wcGluZyA9IGRhdGEuZ2V0VmFsdWUoc2VsZWN0ZWRJdGVtLnJvdywgMCk7XG5cbiAgICBhbGVydChcIlRoZSB1c2VyIHNlbGVjdGVkIFwiICsgdG9wcGluZyk7XG4gIH1cbn0pO1xuXG5sYXZhLmRyYXcoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=