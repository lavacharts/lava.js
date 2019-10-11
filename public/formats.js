(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["formats"],{

/***/ "./examples/js/formats.js":
/*!********************************!*\
  !*** ./examples/js/formats.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const chart = lava.chart({\n  label: \"Test\",\n  type: \"ScatterChart\",\n  elementId: \"chart_div\",\n  datatable: [[\"Age\", \"Cash\"], [12, 101], [15, 240], [18, 280], [32, 324]],\n  options: {\n    colors: [\"green\"],\n    chartArea: { width: \"50%\" }\n  },\n  formats: [\n    {\n      type: \"NumberFormat\",\n      index: 1, // DataTable Column\n      options: {\n        prefix: \"$\",\n        suffix: \" BILLS!\"\n      }\n    }\n  ]\n});\n\nlava.store(chart);\nlava.run();\n\n\n//# sourceURL=webpack:///./examples/js/formats.js?");

/***/ })

},[["./examples/js/formats.js","runtime"]]]);