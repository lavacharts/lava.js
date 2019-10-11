(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./examples/js/index.js":
/*!******************************!*\
  !*** ./examples/js/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const lava = new LavaJs();\n\nconst chart = lava.chart({\n  label: \"Test\",\n  type: \"PieChart\",\n  elementId: \"chart_div\",\n  data: [\n    [\"Task\", \"Hours per Day\"],\n    [\"Work\", 11],\n    [\"Eat\", 2],\n    [\"Commute\", 2],\n    [\"Watch TV\", 2],\n    [\"Sleep\", 7]\n  ],\n  options: {\n    title: \"My Daily Activities\"\n  }\n});\n\n/**\n * Store the chart\n *\n * This adds the chart to the render queue. The queue will\n * be processed once `window.google !== undefined`\n */\nlava.store(chart);\n\n// Process the queue and draw your charts!\nlava.run();\n\n\n//# sourceURL=webpack:///./examples/js/index.js?");

/***/ })

},[["./examples/js/index.js","runtime"]]]);