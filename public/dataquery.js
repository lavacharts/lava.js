(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dataquery"],{

/***/ "./examples/js/dataquery.js":
/*!**********************************!*\
  !*** ./examples/js/dataquery.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const id = \"1DwWSti6L3KRyJC0Wi33X3i-6lsZ2iStrhK7sxw7uoek\";\nconst base = \"https://docs.google.com/spreadsheets/d\";\nconst query = \"gviz/tq?range=A1:B6\";\n\nconst chart = lava.chart({\n  label: \"Test\",\n  type: \"PieChart\",\n  elementId: \"chart_div\",\n  datatable: lava.query(`${base}/${id}/${query}`),\n  options: {\n    width: 400,\n    height: 240,\n    is3D: true\n  }\n});\n\nlava.store(chart);\nlava.run();\n\n\n//# sourceURL=webpack:///./examples/js/dataquery.js?");

/***/ })

},[["./examples/js/dataquery.js","runtime"]]]);