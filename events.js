(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events"],{

/***/ "./examples/js/events.js":
/*!*******************************!*\
  !*** ./examples/js/events.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var chart = lava.chart({
  label: "Test",
  type: "PieChart",
  elementId: "chart_div",
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

},[["./examples/js/events.js","runtime"]]]);
//# sourceMappingURL=events.js.map