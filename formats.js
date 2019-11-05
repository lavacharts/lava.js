(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["formats"],{

/***/ "./examples/formats.js":
/*!*****************************!*\
  !*** ./examples/formats.js ***!
  \*****************************/
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

},[["./examples/formats.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9mb3JtYXRzLmpzIl0sIm5hbWVzIjpbImxhdmEiLCJjaGFydCIsInR5cGUiLCJjb250YWluZXJJZCIsImRhdGEiLCJvcHRpb25zIiwidGl0bGUiLCJ2QXhpcyIsImlzU3RhY2tlZCIsImZvcm1hdHMiLCJpbmRleCIsInBhdHRlcm4iLCJzdWZmaXgiLCJkcmF3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsSUFBSSxDQUFDQyxLQUFMLENBQVc7QUFDVEMsTUFBSSxFQUFFLGtCQURHO0FBRVRDLGFBQVcsRUFBRSxXQUZKO0FBR1RDLE1BQUksRUFBRSxDQUNKLENBQUMsaUJBQUQsRUFBb0IsaUJBQXBCLEVBQXVDLE1BQXZDLENBREksRUFFSixDQUFDLHlCQUFELEVBQTRCLEdBQTVCLEVBQWlDLEdBQWpDLENBRkksRUFHSixDQUFDLHFCQUFELEVBQXdCLEdBQXhCLEVBQTZCLEdBQTdCLENBSEksRUFJSixDQUFDLGtCQUFELEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLENBSkksRUFLSixDQUFDLG9CQUFELEVBQXVCLEdBQXZCLEVBQTRCLEdBQTVCLENBTEksQ0FIRztBQVVUQyxTQUFPLEVBQUU7QUFDUEMsU0FBSyxFQUFFLCtCQURBO0FBRVBDLFNBQUssRUFBRTtBQUFFRCxXQUFLLEVBQUU7QUFBVCxLQUZBO0FBR1BFLGFBQVMsRUFBRTtBQUhKLEdBVkE7QUFlVEMsU0FBTyxFQUFFLENBQ1A7QUFDRVAsUUFBSSxFQUFFLGNBRFI7QUFFRVEsU0FBSyxFQUFFLENBRlQ7QUFFWTtBQUNWTCxXQUFPLEVBQUU7QUFDUE0sYUFBTyxFQUFFLEtBREY7QUFFUEMsWUFBTSxFQUFFO0FBRkQ7QUFIWCxHQURPLEVBU1A7QUFDRVYsUUFBSSxFQUFFLGNBRFI7QUFFRVEsU0FBSyxFQUFFLENBRlQ7QUFFWTtBQUNWTCxXQUFPLEVBQUU7QUFDUE0sYUFBTyxFQUFFLEtBREY7QUFFUEMsWUFBTSxFQUFFO0FBRkQ7QUFIWCxHQVRPO0FBZkEsQ0FBWDtBQW1DQVosSUFBSSxDQUFDYSxJQUFMLEciLCJmaWxlIjoiZm9ybWF0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxhdmEuY2hhcnQoe1xuICB0eXBlOiBcIlN0ZXBwZWRBcmVhQ2hhcnRcIixcbiAgY29udGFpbmVySWQ6IFwiY2hhcnRfZGl2XCIsXG4gIGRhdGE6IFtcbiAgICBbXCJEaXJlY3RvciAoWWVhcilcIiwgXCJSb3R0ZW4gVG9tYXRvZXNcIiwgXCJJTURCXCJdLFxuICAgIFtcIkFsZnJlZCBIaXRjaGNvY2sgKDE5MzUpXCIsIDguNCwgNy45XSxcbiAgICBbXCJSYWxwaCBUaG9tYXMgKDE5NTkpXCIsIDYuOSwgNi41XSxcbiAgICBbXCJEb24gU2hhcnAgKDE5NzgpXCIsIDYuNSwgNi40XSxcbiAgICBbXCJKYW1lcyBIYXdlcyAoMjAwOClcIiwgNC40LCA2LjJdXG4gIF0sXG4gIG9wdGlvbnM6IHtcbiAgICB0aXRsZTogXCJUaGUgZGVjbGluZSBvZiAnVGhlIDM5IFN0ZXBzJ1wiLFxuICAgIHZBeGlzOiB7IHRpdGxlOiBcIkFjY3VtdWxhdGVkIFJhdGluZ1wiIH0sXG4gICAgaXNTdGFja2VkOiB0cnVlXG4gIH0sXG4gIGZvcm1hdHM6IFtcbiAgICB7XG4gICAgICB0eXBlOiBcIk51bWJlckZvcm1hdFwiLFxuICAgICAgaW5kZXg6IDEsIC8vIERhdGFUYWJsZSBDb2x1bW5cbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgcGF0dGVybjogXCIjLiNcIixcbiAgICAgICAgc3VmZml4OiBcIiAvIDEwXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwiTnVtYmVyRm9ybWF0XCIsXG4gICAgICBpbmRleDogMiwgLy8gRGF0YVRhYmxlIENvbHVtblxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBwYXR0ZXJuOiBcIiMuI1wiLFxuICAgICAgICBzdWZmaXg6IFwiIG91dCBvZiAxMFwiXG4gICAgICB9XG4gICAgfVxuICBdXG59KTtcblxubGF2YS5kcmF3KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9