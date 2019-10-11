(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["options"],{

/***/ "./examples/js/options.js":
/*!********************************!*\
  !*** ./examples/js/options.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function getRandomColor() {\n  let color = \"#\";\n\n  for (let i = 0; i < 6; i++) {\n    color += \"0123456789ABCDEF\"[Math.floor(Math.random() * 16)];\n  }\n\n  return color;\n}\n\nfunction loadOptions() {\n  lava.loadOptions(\"MyFancyChart\", {\n    colors: [getRandomColor()]\n  });\n}\n\nconst chart = lava.chart({\n  label: \"MyFancyChart\",\n  type: \"ScatterChart\",\n  elementId: \"chart_div\",\n  data: [[\"Age\", \"Cash\"], [12, 101], [15, 240], [18, 280], [32, 324]],\n  options: {\n    colors: [\"green\"]\n  }\n});\n\nlava.store(chart);\nlava.run();\n\n\n//# sourceURL=webpack:///./examples/js/options.js?");

/***/ })

},[["./examples/js/options.js","runtime"]]]);