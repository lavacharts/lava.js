(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events"],{

/***/ "./examples/js/events.js":
/*!*******************************!*\
  !*** ./examples/js/events.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const lava = new LavaJs();\n\nconst chart = lava.chart({\n  label: \"Test\",\n  type: \"PieChart\",\n  elementId: \"chart_div\",\n  data: data => {\n    data.addColumn(\"string\", \"Topping\");\n    data.addColumn(\"number\", \"Slices\");\n    data.addRows([\n      [\"Mushrooms\", 3],\n      [\"Onions\", 1],\n      [\"Olives\", 1],\n      [\"Zucchini\", 1],\n      [\"Pepperoni\", 2]\n    ]);\n\n    return data;\n  },\n  events: {\n    // Can be defined upon creation\n    select({ chart, data }) {\n      const selectedItem = chart.getSelection()[0];\n\n      if (selectedItem) {\n        const topping = data.getValue(selectedItem.row, 0);\n\n        alert(\"The user selected \" + topping);\n      }\n    }\n  }\n});\n\n// Or attached later on...\nchart.on(\"ready\", () => {\n  // this.uuid is a simple getter for `${this.type}::${label}`\n  alert(this.uuid + \" is ready!\");\n});\n\nlava.store(chart);\n\nlava.run();\n\n\n//# sourceURL=webpack:///./examples/js/events.js?");

/***/ })

},[["./examples/js/events.js","runtime"]]]);