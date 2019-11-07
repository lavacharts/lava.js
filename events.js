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

},[["./site/examples/events.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2V4YW1wbGVzL2V2ZW50cy5qcyJdLCJuYW1lcyI6WyJjaGFydCIsImxhdmEiLCJsYWJlbCIsInR5cGUiLCJjb250YWluZXJJZCIsImRhdGEiLCJhZGRDb2x1bW4iLCJhZGRSb3dzIiwiZXZlbnRzIiwicmVhZHkiLCJhbGVydCIsImlkIiwib24iLCJzZWxlY3RlZEl0ZW0iLCJnZXRTZWxlY3Rpb24iLCJ0b3BwaW5nIiwiZ2V0VmFsdWUiLCJyb3ciLCJkcmF3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBTCxDQUFXO0FBQ3ZCRSxPQUFLLEVBQUUsTUFEZ0I7QUFFdkJDLE1BQUksRUFBRSxVQUZpQjtBQUd2QkMsYUFBVyxFQUFFLFdBSFU7QUFJdkJDLE1BQUksRUFBRSxjQUFBQSxLQUFJLEVBQUk7QUFDWkEsU0FBSSxDQUFDQyxTQUFMLENBQWUsUUFBZixFQUF5QixTQUF6Qjs7QUFDQUQsU0FBSSxDQUFDQyxTQUFMLENBQWUsUUFBZixFQUF5QixRQUF6Qjs7QUFDQUQsU0FBSSxDQUFDRSxPQUFMLENBQWEsQ0FBQyxDQUFDLGtCQUFELEVBQXFCLENBQXJCLENBQUQsRUFBMEIsQ0FBQyxXQUFELEVBQWMsQ0FBZCxDQUExQixDQUFiOztBQUVBLFdBQU9GLEtBQVA7QUFDRCxHQVZzQjtBQVd2QkcsUUFBTSxFQUFFO0FBQ047QUFDQUMsU0FGTSxtQkFFRTtBQUNOO0FBQ0FDLFdBQUssQ0FBQ1YsS0FBSyxDQUFDVyxFQUFOLEdBQVcsWUFBWixDQUFMO0FBQ0Q7QUFMSztBQVhlLENBQVgsQ0FBZCxDLENBb0JBOztBQUNBWCxLQUFLLENBQUNZLEVBQU4sQ0FBUyxRQUFULEVBQW1CLGdCQUFxQjtBQUFBLE1BQWxCWixLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxNQUFYSyxJQUFXLFFBQVhBLElBQVc7QUFDdEMsTUFBTVEsWUFBWSxHQUFHYixLQUFLLENBQUNjLFlBQU4sR0FBcUIsQ0FBckIsQ0FBckI7O0FBRUEsTUFBSUQsWUFBSixFQUFrQjtBQUNoQixRQUFNRSxPQUFPLEdBQUdWLElBQUksQ0FBQ1csUUFBTCxDQUFjSCxZQUFZLENBQUNJLEdBQTNCLEVBQWdDLENBQWhDLENBQWhCO0FBRUFQLFNBQUssQ0FBQyx1QkFBdUJLLE9BQXhCLENBQUw7QUFDRDtBQUNGLENBUkQ7QUFVQWQsSUFBSSxDQUFDaUIsSUFBTCxHIiwiZmlsZSI6ImV2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNoYXJ0ID0gbGF2YS5jaGFydCh7XG4gIGxhYmVsOiBcIlRlc3RcIixcbiAgdHlwZTogXCJQaWVDaGFydFwiLFxuICBjb250YWluZXJJZDogXCJjaGFydF9kaXZcIixcbiAgZGF0YTogZGF0YSA9PiB7XG4gICAgZGF0YS5hZGRDb2x1bW4oXCJzdHJpbmdcIiwgXCJUb3BwaW5nXCIpO1xuICAgIGRhdGEuYWRkQ29sdW1uKFwibnVtYmVyXCIsIFwiUGl6emFzXCIpO1xuICAgIGRhdGEuYWRkUm93cyhbW1wiTXVzaHJvb20gJiBPbGl2ZVwiLCAyXSwgW1wiUGVwcGVyb25pXCIsIDVdXSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfSxcbiAgZXZlbnRzOiB7XG4gICAgLy8gRXZlbnRzIGNhbiBiZSBkZWZpbmVkIHVwb24gY3JlYXRpb25cbiAgICByZWFkeSgpIHtcbiAgICAgIC8vIGNoYXJ0LmlkIGlzIGp1c3QgYSBnZXR0ZXIgZm9yIGAke3RoaXMudHlwZX06JHt0aGlzLmxhYmVsfWBcbiAgICAgIGFsZXJ0KGNoYXJ0LmlkICsgXCIgaXMgcmVhZHkhXCIpO1xuICAgIH1cbiAgfVxufSk7XG5cbi8vIE9yIGF0dGFjaGVkIGFmdGVyIHRoZSBmYWN0XG5jaGFydC5vbihcInNlbGVjdFwiLCAoeyBjaGFydCwgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkSXRlbSA9IGNoYXJ0LmdldFNlbGVjdGlvbigpWzBdO1xuXG4gIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICBjb25zdCB0b3BwaW5nID0gZGF0YS5nZXRWYWx1ZShzZWxlY3RlZEl0ZW0ucm93LCAwKTtcblxuICAgIGFsZXJ0KFwiVGhlIHVzZXIgc2VsZWN0ZWQgXCIgKyB0b3BwaW5nKTtcbiAgfVxufSk7XG5cbmxhdmEuZHJhdygpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==