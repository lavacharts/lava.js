(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./examples/js/index.js":
/*!******************************!*\
  !*** ./examples/js/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const chart = lava.chart({\r\n  label: \"Test\",\r\n  type: \"PieChart\",\r\n  elementId: \"chart_div\",\r\n  data: [\r\n    [\"Task\", \"Hours per Day\"],\r\n    [\"Work\", 11],\r\n    [\"Eat\", 2],\r\n    [\"Commute\", 2],\r\n    [\"Watch TV\", 2],\r\n    [\"Sleep\", 7]\r\n  ],\r\n  options: {\r\n    title: \"My Daily Activities\"\r\n  }\r\n});\r\n\r\n/**\r\n * Store the chart\r\n *\r\n * This adds the chart to the render queue. The queue will\r\n * be processed once `window.google !== undefined`\r\n */\r\nlava.store(chart);\r\n\r\n// Process the queue and draw your charts!\r\nlava.run();\r\n\n\n//# sourceURL=webpack:///./examples/js/index.js?");

/***/ })

},[["./examples/js/index.js","runtime"]]]);