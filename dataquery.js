(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dataquery"],{

/***/ "./examples/js/dataquery.js":
/*!**********************************!*\
  !*** ./examples/js/dataquery.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const id = "1DwWSti6L3KRyJC0Wi33X3i-6lsZ2iStrhK7sxw7uoek";
const base = "https://docs.google.com/spreadsheets/d";
const query = "gviz/tq?range=A1:B6";

const chart = lava.chart({
  label: "Test",
  type: "PieChart",
  elementId: "chart_div",
  datatable: lava.query(`${base}/${id}/${query}`),
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