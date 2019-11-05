(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events"],{

/***/ "./examples/events.js":
/*!****************************!*\
  !*** ./examples/events.js ***!
  \****************************/
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
      // chart.id is just a getter for `${this.type}:${this.label}`
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

},[["./examples/events.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9ldmVudHMuanMiXSwibmFtZXMiOlsiY2hhcnQiLCJsYXZhIiwibGFiZWwiLCJ0eXBlIiwiY29udGFpbmVySWQiLCJkYXRhIiwiYWRkQ29sdW1uIiwiYWRkUm93cyIsImV2ZW50cyIsInJlYWR5IiwiYWxlcnQiLCJpZCIsIm9uIiwic2VsZWN0ZWRJdGVtIiwiZ2V0U2VsZWN0aW9uIiwidG9wcGluZyIsImdldFZhbHVlIiwicm93IiwiZHJhdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUwsQ0FBVztBQUN2QkUsT0FBSyxFQUFFLE1BRGdCO0FBRXZCQyxNQUFJLEVBQUUsVUFGaUI7QUFHdkJDLGFBQVcsRUFBRSxXQUhVO0FBSXZCQyxNQUFJLEVBQUUsY0FBQUEsS0FBSSxFQUFJO0FBQ1pBLFNBQUksQ0FBQ0MsU0FBTCxDQUFlLFFBQWYsRUFBeUIsU0FBekI7O0FBQ0FELFNBQUksQ0FBQ0MsU0FBTCxDQUFlLFFBQWYsRUFBeUIsUUFBekI7O0FBQ0FELFNBQUksQ0FBQ0UsT0FBTCxDQUFhLENBQUMsQ0FBQyxrQkFBRCxFQUFxQixDQUFyQixDQUFELEVBQTBCLENBQUMsV0FBRCxFQUFjLENBQWQsQ0FBMUIsQ0FBYjs7QUFFQSxXQUFPRixLQUFQO0FBQ0QsR0FWc0I7QUFXdkJHLFFBQU0sRUFBRTtBQUNOO0FBQ0FDLFNBRk0sbUJBRUU7QUFDTjtBQUNBQyxXQUFLLENBQUNWLEtBQUssQ0FBQ1csRUFBTixHQUFXLFlBQVosQ0FBTDtBQUNEO0FBTEs7QUFYZSxDQUFYLENBQWQsQyxDQW9CQTs7QUFDQVgsS0FBSyxDQUFDWSxFQUFOLENBQVMsUUFBVCxFQUFtQixnQkFBcUI7QUFBQSxNQUFsQlosS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsTUFBWEssSUFBVyxRQUFYQSxJQUFXO0FBQ3RDLE1BQU1RLFlBQVksR0FBR2IsS0FBSyxDQUFDYyxZQUFOLEdBQXFCLENBQXJCLENBQXJCOztBQUVBLE1BQUlELFlBQUosRUFBa0I7QUFDaEIsUUFBTUUsT0FBTyxHQUFHVixJQUFJLENBQUNXLFFBQUwsQ0FBY0gsWUFBWSxDQUFDSSxHQUEzQixFQUFnQyxDQUFoQyxDQUFoQjtBQUVBUCxTQUFLLENBQUMsdUJBQXVCSyxPQUF4QixDQUFMO0FBQ0Q7QUFDRixDQVJEO0FBVUFkLElBQUksQ0FBQ2lCLElBQUwsRyIsImZpbGUiOiJldmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaGFydCA9IGxhdmEuY2hhcnQoe1xuICBsYWJlbDogXCJUZXN0XCIsXG4gIHR5cGU6IFwiUGllQ2hhcnRcIixcbiAgY29udGFpbmVySWQ6IFwiY2hhcnRfZGl2XCIsXG4gIGRhdGE6IGRhdGEgPT4ge1xuICAgIGRhdGEuYWRkQ29sdW1uKFwic3RyaW5nXCIsIFwiVG9wcGluZ1wiKTtcbiAgICBkYXRhLmFkZENvbHVtbihcIm51bWJlclwiLCBcIlBpenphc1wiKTtcbiAgICBkYXRhLmFkZFJvd3MoW1tcIk11c2hyb29tICYgT2xpdmVcIiwgMl0sIFtcIlBlcHBlcm9uaVwiLCA1XV0pO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sXG4gIGV2ZW50czoge1xuICAgIC8vIEV2ZW50cyBjYW4gYmUgZGVmaW5lZCB1cG9uIGNyZWF0aW9uXG4gICAgcmVhZHkoKSB7XG4gICAgICAvLyBjaGFydC5pZCBpcyBqdXN0IGEgZ2V0dGVyIGZvciBgJHt0aGlzLnR5cGV9OiR7dGhpcy5sYWJlbH1gXG4gICAgICBhbGVydChjaGFydC5pZCArIFwiIGlzIHJlYWR5IVwiKTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBPciBhdHRhY2hlZCBhZnRlciB0aGUgZmFjdFxuY2hhcnQub24oXCJzZWxlY3RcIiwgKHsgY2hhcnQsIGRhdGEgfSkgPT4ge1xuICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBjaGFydC5nZXRTZWxlY3Rpb24oKVswXTtcblxuICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgY29uc3QgdG9wcGluZyA9IGRhdGEuZ2V0VmFsdWUoc2VsZWN0ZWRJdGVtLnJvdywgMCk7XG5cbiAgICBhbGVydChcIlRoZSB1c2VyIHNlbGVjdGVkIFwiICsgdG9wcGluZyk7XG4gIH1cbn0pO1xuXG5sYXZhLmRyYXcoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=