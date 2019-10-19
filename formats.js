(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["formats"],{

/***/ "./examples/js/formats.js":
/*!********************************!*\
  !*** ./examples/js/formats.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var chart = lava.chart({
  label: "Test",
  type: "ScatterChart",
  elementId: "chart_div",
  datatable: [["Age", "Cash"], [12, 101], [15, 240], [18, 280], [32, 324]],
  options: {
    colors: ["green"],
    chartArea: {
      width: "50%"
    }
  },
  formats: [{
    type: "NumberFormat",
    index: 1,
    // DataTable Column
    options: {
      prefix: "$",
      suffix: " BILLS!"
    }
  }]
});
lava.draw();

/***/ })

},[["./examples/js/formats.js","runtime"]]]);
//# sourceMappingURL=formats.js.map