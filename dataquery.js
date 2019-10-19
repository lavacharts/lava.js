(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dataquery"],{

/***/ "./examples/js/dataquery.js":
/*!**********************************!*\
  !*** ./examples/js/dataquery.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = "1DwWSti6L3KRyJC0Wi33X3i-6lsZ2iStrhK7sxw7uoek";
var base = "https://docs.google.com/spreadsheets/d";
var query = "gviz/tq?range=A1:B6";
var chart = lava.chart({
  label: "Test",
  type: "PieChart",
  elementId: "chart_div",
  datatable: lava.query("".concat(base, "/").concat(id, "/").concat(query)),
  options: {
    width: 400,
    height: 240,
    is3D: true
  }
});
lava.store(chart);
lava.run();

/***/ })

},[["./examples/js/dataquery.js","runtime"]]]);
//# sourceMappingURL=dataquery.js.map