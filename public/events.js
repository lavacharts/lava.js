/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./examples/js/events.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/js/events.js":
/*!*******************************!*\
  !*** ./examples/js/events.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const chart = lava.chart({\r\n  label: \"Test\",\r\n  type: \"PieChart\",\r\n  elementId: \"chart_div\",\r\n  data: data => {\r\n    data.addColumn(\"string\", \"Topping\");\r\n    data.addColumn(\"number\", \"Slices\");\r\n    data.addRows([\r\n      [\"Mushrooms\", 3],\r\n      [\"Onions\", 1],\r\n      [\"Olives\", 1],\r\n      [\"Zucchini\", 1],\r\n      [\"Pepperoni\", 2]\r\n    ]);\r\n\r\n    return data;\r\n  },\r\n  events: {\r\n    // Can be defined upon creation\r\n    select({ chart, data }) {\r\n      const selectedItem = chart.getSelection()[0];\r\n\r\n      if (selectedItem) {\r\n        const topping = data.getValue(selectedItem.row, 0);\r\n\r\n        alert(\"The user selected \" + topping);\r\n      }\r\n    }\r\n  }\r\n});\r\n\r\n// Or attached later on...\r\nchart.on(\"ready\", () => {\r\n  // this.uuid is a simple getter for `${this.type}::${label}`\r\n  alert(this.uuid + \" is ready!\");\r\n});\r\n\r\nlava.store(chart);\r\n\r\nlava.run();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9leGFtcGxlcy9qcy9ldmVudHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9qcy9ldmVudHMuanM/YzljYiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaGFydCA9IGxhdmEuY2hhcnQoe1xyXG4gIGxhYmVsOiBcIlRlc3RcIixcclxuICB0eXBlOiBcIlBpZUNoYXJ0XCIsXHJcbiAgZWxlbWVudElkOiBcImNoYXJ0X2RpdlwiLFxyXG4gIGRhdGE6IGRhdGEgPT4ge1xyXG4gICAgZGF0YS5hZGRDb2x1bW4oXCJzdHJpbmdcIiwgXCJUb3BwaW5nXCIpO1xyXG4gICAgZGF0YS5hZGRDb2x1bW4oXCJudW1iZXJcIiwgXCJTbGljZXNcIik7XHJcbiAgICBkYXRhLmFkZFJvd3MoW1xyXG4gICAgICBbXCJNdXNocm9vbXNcIiwgM10sXHJcbiAgICAgIFtcIk9uaW9uc1wiLCAxXSxcclxuICAgICAgW1wiT2xpdmVzXCIsIDFdLFxyXG4gICAgICBbXCJadWNjaGluaVwiLCAxXSxcclxuICAgICAgW1wiUGVwcGVyb25pXCIsIDJdXHJcbiAgICBdKTtcclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9LFxyXG4gIGV2ZW50czoge1xyXG4gICAgLy8gQ2FuIGJlIGRlZmluZWQgdXBvbiBjcmVhdGlvblxyXG4gICAgc2VsZWN0KHsgY2hhcnQsIGRhdGEgfSkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBjaGFydC5nZXRTZWxlY3Rpb24oKVswXTtcclxuXHJcbiAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgICBjb25zdCB0b3BwaW5nID0gZGF0YS5nZXRWYWx1ZShzZWxlY3RlZEl0ZW0ucm93LCAwKTtcclxuXHJcbiAgICAgICAgYWxlcnQoXCJUaGUgdXNlciBzZWxlY3RlZCBcIiArIHRvcHBpbmcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIE9yIGF0dGFjaGVkIGxhdGVyIG9uLi4uXHJcbmNoYXJ0Lm9uKFwicmVhZHlcIiwgKCkgPT4ge1xyXG4gIC8vIHRoaXMudXVpZCBpcyBhIHNpbXBsZSBnZXR0ZXIgZm9yIGAke3RoaXMudHlwZX06OiR7bGFiZWx9YFxyXG4gIGFsZXJ0KHRoaXMudXVpZCArIFwiIGlzIHJlYWR5IVwiKTtcclxufSk7XHJcblxyXG5sYXZhLnN0b3JlKGNoYXJ0KTtcclxuXHJcbmxhdmEucnVuKCk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./examples/js/events.js\n");

/***/ })

/******/ });