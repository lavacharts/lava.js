(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards"],{

/***/ "./site/examples/dashboards.js":
/*!*************************************!*\
  !*** ./site/examples/dashboards.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(function ($) {
  var el = document.getElementsByClassName("tabs")[0];
  M.Tabs.init(el, {
    onShow: function onShow(tab) {// console.log(tab);
      // $.get(`${tab.id}.js?callback=?`, data => {
      //   $(`#${tab.id}_code`).text(data.result);
      // });
    }
  }); // lava.draw();
});

/***/ })

},[["./site/examples/dashboards.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2V4YW1wbGVzL2Rhc2hib2FyZHMuanMiXSwibmFtZXMiOlsialF1ZXJ5IiwiJCIsImVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiTSIsIlRhYnMiLCJpbml0Iiwib25TaG93IiwidGFiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDLFVBQUFDLENBQUMsRUFBSTtBQUNWLE1BQU1DLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxNQUFoQyxFQUF3QyxDQUF4QyxDQUFYO0FBRUFDLEdBQUMsQ0FBQ0MsSUFBRixDQUFPQyxJQUFQLENBQVlMLEVBQVosRUFBZ0I7QUFDZE0sVUFEYyxrQkFDUEMsR0FETyxFQUNGLENBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQU5hLEdBQWhCLEVBSFUsQ0FZVjtBQUNELENBYkssQ0FBTixDIiwiZmlsZSI6ImRhc2hib2FyZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJqUXVlcnkoJCA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYnNcIilbMF07XG5cbiAgTS5UYWJzLmluaXQoZWwsIHtcbiAgICBvblNob3codGFiKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0YWIpO1xuICAgICAgLy8gJC5nZXQoYCR7dGFiLmlkfS5qcz9jYWxsYmFjaz0/YCwgZGF0YSA9PiB7XG4gICAgICAvLyAgICQoYCMke3RhYi5pZH1fY29kZWApLnRleHQoZGF0YS5yZXN1bHQpO1xuICAgICAgLy8gfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBsYXZhLmRyYXcoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==