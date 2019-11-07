(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["formats"],{

/***/ "./site/examples/formats.js":
/*!**********************************!*\
  !*** ./site/examples/formats.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

lava.chart({
  type: "SteppedAreaChart",
  containerId: "chart_div",
  data: [["Director (Year)", "Rotten Tomatoes", "IMDB"], ["Alfred Hitchcock (1935)", 8.4, 7.9], ["Ralph Thomas (1959)", 6.9, 6.5], ["Don Sharp (1978)", 6.5, 6.4], ["James Hawes (2008)", 4.4, 6.2]],
  options: {
    title: "The decline of 'The 39 Steps'",
    vAxis: {
      title: "Accumulated Rating"
    },
    isStacked: true
  },
  formats: [{
    type: "NumberFormat",
    index: 1,
    // DataTable Column
    options: {
      pattern: "#.#",
      suffix: " / 10"
    }
  }, {
    type: "NumberFormat",
    index: 2,
    // DataTable Column
    options: {
      pattern: "#.#",
      suffix: " out of 10"
    }
  }]
});
lava.draw();

/***/ })

},[["./site/examples/formats.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2V4YW1wbGVzL2Zvcm1hdHMuanMiXSwibmFtZXMiOlsibGF2YSIsImNoYXJ0IiwidHlwZSIsImNvbnRhaW5lcklkIiwiZGF0YSIsIm9wdGlvbnMiLCJ0aXRsZSIsInZBeGlzIiwiaXNTdGFja2VkIiwiZm9ybWF0cyIsImluZGV4IiwicGF0dGVybiIsInN1ZmZpeCIsImRyYXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBQSxJQUFJLENBQUNDLEtBQUwsQ0FBVztBQUNUQyxNQUFJLEVBQUUsa0JBREc7QUFFVEMsYUFBVyxFQUFFLFdBRko7QUFHVEMsTUFBSSxFQUFFLENBQ0osQ0FBQyxpQkFBRCxFQUFvQixpQkFBcEIsRUFBdUMsTUFBdkMsQ0FESSxFQUVKLENBQUMseUJBQUQsRUFBNEIsR0FBNUIsRUFBaUMsR0FBakMsQ0FGSSxFQUdKLENBQUMscUJBQUQsRUFBd0IsR0FBeEIsRUFBNkIsR0FBN0IsQ0FISSxFQUlKLENBQUMsa0JBQUQsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FKSSxFQUtKLENBQUMsb0JBQUQsRUFBdUIsR0FBdkIsRUFBNEIsR0FBNUIsQ0FMSSxDQUhHO0FBVVRDLFNBQU8sRUFBRTtBQUNQQyxTQUFLLEVBQUUsK0JBREE7QUFFUEMsU0FBSyxFQUFFO0FBQUVELFdBQUssRUFBRTtBQUFULEtBRkE7QUFHUEUsYUFBUyxFQUFFO0FBSEosR0FWQTtBQWVUQyxTQUFPLEVBQUUsQ0FDUDtBQUNFUCxRQUFJLEVBQUUsY0FEUjtBQUVFUSxTQUFLLEVBQUUsQ0FGVDtBQUVZO0FBQ1ZMLFdBQU8sRUFBRTtBQUNQTSxhQUFPLEVBQUUsS0FERjtBQUVQQyxZQUFNLEVBQUU7QUFGRDtBQUhYLEdBRE8sRUFTUDtBQUNFVixRQUFJLEVBQUUsY0FEUjtBQUVFUSxTQUFLLEVBQUUsQ0FGVDtBQUVZO0FBQ1ZMLFdBQU8sRUFBRTtBQUNQTSxhQUFPLEVBQUUsS0FERjtBQUVQQyxZQUFNLEVBQUU7QUFGRDtBQUhYLEdBVE87QUFmQSxDQUFYO0FBbUNBWixJQUFJLENBQUNhLElBQUwsRyIsImZpbGUiOiJmb3JtYXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGF2YS5jaGFydCh7XG4gIHR5cGU6IFwiU3RlcHBlZEFyZWFDaGFydFwiLFxuICBjb250YWluZXJJZDogXCJjaGFydF9kaXZcIixcbiAgZGF0YTogW1xuICAgIFtcIkRpcmVjdG9yIChZZWFyKVwiLCBcIlJvdHRlbiBUb21hdG9lc1wiLCBcIklNREJcIl0sXG4gICAgW1wiQWxmcmVkIEhpdGNoY29jayAoMTkzNSlcIiwgOC40LCA3LjldLFxuICAgIFtcIlJhbHBoIFRob21hcyAoMTk1OSlcIiwgNi45LCA2LjVdLFxuICAgIFtcIkRvbiBTaGFycCAoMTk3OClcIiwgNi41LCA2LjRdLFxuICAgIFtcIkphbWVzIEhhd2VzICgyMDA4KVwiLCA0LjQsIDYuMl1cbiAgXSxcbiAgb3B0aW9uczoge1xuICAgIHRpdGxlOiBcIlRoZSBkZWNsaW5lIG9mICdUaGUgMzkgU3RlcHMnXCIsXG4gICAgdkF4aXM6IHsgdGl0bGU6IFwiQWNjdW11bGF0ZWQgUmF0aW5nXCIgfSxcbiAgICBpc1N0YWNrZWQ6IHRydWVcbiAgfSxcbiAgZm9ybWF0czogW1xuICAgIHtcbiAgICAgIHR5cGU6IFwiTnVtYmVyRm9ybWF0XCIsXG4gICAgICBpbmRleDogMSwgLy8gRGF0YVRhYmxlIENvbHVtblxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBwYXR0ZXJuOiBcIiMuI1wiLFxuICAgICAgICBzdWZmaXg6IFwiIC8gMTBcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJOdW1iZXJGb3JtYXRcIixcbiAgICAgIGluZGV4OiAyLCAvLyBEYXRhVGFibGUgQ29sdW1uXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHBhdHRlcm46IFwiIy4jXCIsXG4gICAgICAgIHN1ZmZpeDogXCIgb3V0IG9mIDEwXCJcbiAgICAgIH1cbiAgICB9XG4gIF1cbn0pO1xuXG5sYXZhLmRyYXcoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=