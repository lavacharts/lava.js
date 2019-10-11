(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events"],{

/***/ "./examples/js/events.js":
/*!*******************************!*\
  !*** ./examples/js/events.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const chart = lava.chart({\r\n  label: \"Test\",\r\n  type: \"PieChart\",\r\n  elementId: \"chart_div\",\r\n  data: data => {\r\n    data.addColumn(\"string\", \"Topping\");\r\n    data.addColumn(\"number\", \"Slices\");\r\n    data.addRows([\r\n      [\"Mushrooms\", 3],\r\n      [\"Onions\", 1],\r\n      [\"Olives\", 1],\r\n      [\"Zucchini\", 1],\r\n      [\"Pepperoni\", 2]\r\n    ]);\r\n\r\n    return data;\r\n  },\r\n  events: {\r\n    // Can be defined upon creation\r\n    select({ chart, data }) {\r\n      const selectedItem = chart.getSelection()[0];\r\n\r\n      if (selectedItem) {\r\n        const topping = data.getValue(selectedItem.row, 0);\r\n\r\n        alert(\"The user selected \" + topping);\r\n      }\r\n    }\r\n  }\r\n});\r\n\r\n// Or attached later on...\r\nchart.on(\"ready\", () => {\r\n  // this.uuid is a simple getter for `${this.type}::${label}`\r\n  alert(this.uuid + \" is ready!\");\r\n});\r\n\r\nlava.store(chart);\r\n\r\nlava.run();\r\n\n\n//# sourceURL=webpack:///./examples/js/events.js?");

/***/ })

},[["./examples/js/events.js","runtime"]]]);