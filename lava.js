(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lava"],{

/***/ "./src/Chart.ts":
/*!**********************!*\
  !*** ./src/Chart.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chart; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Drawable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Drawable */ "./src/Drawable.ts");













function makeChartFactory(container) {
  return function (type) {
    return new window.google.visualization[type](container);
  };
}

var Chart =
/*#__PURE__*/
function (_Drawable) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(Chart, _Drawable);

  /**
   * If this is set to true, then the {@link Chart}
   * will be drawn and converted to a PNG
   */

  /**
   * Create a new {@link Chart}
   */
  function Chart(payload) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Chart);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Chart).call(this, payload));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "png", false);

    _this.png = Boolean(payload.png);
    return _this;
  }
  /**
   * Actions to perform before `chart.draw()`
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Chart, [{
    key: "draw",
    value: function () {
      var _draw = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var chartFactory;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Chart.prototype), "draw", this).call(this);

              case 2:
                chartFactory = makeChartFactory(this.container);
                this.googleChart = chartFactory(this["class"]);

                if (this.events) {
                  this.attachEvents();
                }

                this.googleChart.draw(this.data, this.options);

                if (this.png) {
                  this.drawPng();
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function draw() {
        return _draw.apply(this, arguments);
      }

      return draw;
    }()
    /**
     * Draws the chart as a PNG instead of the standard SVG
     *
     * @see https://developers.google.com/chart/interactive/docs/printing
     */

  }, {
    key: "drawPng",
    value: function drawPng() {
      var img = document.createElement("img");
      img.src = this.googleChart.getImageURI();

      if (this.container) {
        this.container.innerHTML = "";
        this.container.appendChild(img);
      }
    }
    /**
     * Attach the defined chart event handlers.
     */

  }, {
    key: "attachEvents",
    value: function attachEvents() {
      var _this2 = this;

      Object.keys(this.events).forEach(function (event) {
        var callback = _this2.events[event];
        var context = window;
        var func = callback;

        if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(callback) === "object") {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          //@ts-ignore I don't know what to do here
          context = context[callback[0]];
          func = callback[1];
        }

        _this2.debug("The <".concat(event, "> event will be handled by:"));

        _this2.debug(func);

        _this2.debug("within the context of:");

        _this2.debug(context);
        /**
         * Set the context of "this" within the user provided callback to the
         * chart that fired the event while providing the datatable of the chart
         * to the callback as an argument.
         */


        google.visualization.events.addListener(_this2.googleChart, event, function () {
          _this2.debug("Caught <".concat(event, ">"));

          var callback = Object.bind(context[Object.call.prototype.toString(func)], _this2.googleChart);
          callback(_this2.data);
        });
      });
    }
  }]);

  return Chart;
}(_Drawable__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./src/Dashboard.ts":
/*!**************************!*\
  !*** ./src/Dashboard.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Drawable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Drawable */ "./src/Drawable.ts");







/**
 * Dashboard Class
 *
 * @class
 * @module    module:LavaJs/Dashboard
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2019, Kevin Hill
 * @license   MIT
 */

var Dashboard =
/*#__PURE__*/
function (_Drawable) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Dashboard, _Drawable);

  /**
   * Create a new Dashboard
   *
   * @param {Object} json JSON object representing a Dashboard.
   */
  function Dashboard(json) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Dashboard);

    json.type = "Dashboard";
    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(Dashboard).call(this, json));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "bindings", void 0);

    _this.googleChart = new window.google.visualization.Dashboard(_this.container);
    _this.bindings = json.bindings; // this._attachBindings();

    return _this;
  }
  /**
   * Process and attach the bindings to the dashboard.
   *
   * @TODO: Needs to be modified and tested for the other types of bindings.
   */
  // private _attachBindings(): void {
  //   for (const binding of this.bindings) {
  //     const controlWraps = [];
  //     const chartWraps = [];
  //     for (const controlWrap of binding.controlWrappers) {
  //       controlWraps.push(new google.visualization.ControlWrapper(controlWrap));
  //     }
  //     for (const chartWrap of binding.chartWrappers) {
  //       chartWraps.push(new google.visualization.ChartWrapper(chartWrap));
  //     }
  //     this.googleChart.bind(controlWraps, chartWraps);
  //   }
  // }


  return Dashboard;
}(_Drawable__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./src/DataQuery.ts":
/*!**************************!*\
  !*** ./src/DataQuery.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataQuery; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Errors */ "./src/Errors.ts");






/**
 * Used for loading remote data as a {@link DataTable}
 *
 * @see https://developers.google.com/chart/interactive/docs/reference#Query
 */
var DataQuery =
/*#__PURE__*/
function () {
  /**
   * Create a new DataQuery for a DataTable
   *
   * @throws {DataError}
   */
  function DataQuery(url, opts, transformer) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DataQuery);

    this.url = url;
    this.opts = opts;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "transformer", void 0);

    this.opts = {
      sendMethod: "auto"
    };

    this.transformer = function (query) {
      return query;
    };

    if (typeof transformer === "function") {
      this.transformer = transformer;
    }

    if (opts) {
      this.opts = opts;
    }
  }
  /**
   * create a new DataQuery based on the given payload
   *
   * @throws {DataError}
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DataQuery, [{
    key: "send",

    /**
     * Send the DataQuery
     */
    value: function send() {
      var _this = this;

      var query = new window.google.visualization.Query(this.url, this.opts);
      return new Promise(function (resolve, reject) {
        _this.transformer(query).send(function (response) {
          if (response.isError()) {
            reject(response);
          }

          resolve(response);
        });
      });
    }
  }], [{
    key: "create",
    value: function create(payload) {
      if (!payload.url) {
        throw new _Errors__WEBPACK_IMPORTED_MODULE_4__["DataError"]('"url" is a mandatory parameter for creating a DataQuery.');
      }

      var query = new DataQuery(payload.url);

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(payload.opts) === "object") {
        query.opts = payload.opts;
      }

      if (typeof payload.transformer === "function") {
        query.transformer = payload.transformer;
      }

      return query;
    }
  }]);

  return DataQuery;
}();



/***/ }),

/***/ "./src/DefaultOptions.ts":
/*!*******************************!*\
  !*** ./src/DefaultOptions.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  autodraw: true,
  language: "en",
  mapsApiKey: "",
  responsive: true,
  datetimeFormat: "",
  debounceTimeout: 250,
  autoloadGoogle: true,
  chartPackages: ["corechart"],
  timezone: "America/Los_Angeles"
});

/***/ }),

/***/ "./src/Drawable.ts":
/*!*************************!*\
  !*** ./src/Drawable.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawable; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tiny_emitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tiny-emitter */ "./node_modules/tiny-emitter/index.js");
/* harmony import */ var tiny_emitter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tiny_emitter__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _DataQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DataQuery */ "./src/DataQuery.ts");
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Errors */ "./src/Errors.ts");
/* harmony import */ var _Eventful__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Eventful */ "./src/Eventful.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib */ "./src/lib/index.ts");
/* harmony import */ var _VisualizationProps__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./VisualizationProps */ "./src/VisualizationProps.ts");
















/**
 * The {@link Drawable} class is the base for {@link Chart}s and {@link Dashboard}s
 * to share common methods between the two types.
 */
var Drawable =
/*#__PURE__*/
function (_TinyEmitter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Drawable, _TinyEmitter);

  /**
   * Create a new Drawable
   *
   * @param {Object} json
   */
  function Drawable(drawable) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Drawable);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Drawable).call(this));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "options", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "data", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "googleChart", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "type", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "class", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "package", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "elementId", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "label", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "formats", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "events", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "dataSrc", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "debug", void 0);

    _this.type = drawable.type;
    _this.label = drawable.label;
    _this.dataSrc = drawable.data;
    _this.elementId = drawable.elementId;
    _this.options = drawable.options || {};
    _this.formats = drawable.formats || [];
    _this.events = drawable.events || {};
    _this["class"] = Object(_lib__WEBPACK_IMPORTED_MODULE_13__["getProp"])(_this.type, _VisualizationProps__WEBPACK_IMPORTED_MODULE_14__["VIZ_PROPS"].CLASS);
    _this["package"] = Object(_lib__WEBPACK_IMPORTED_MODULE_13__["getProp"])(_this.type, _VisualizationProps__WEBPACK_IMPORTED_MODULE_14__["VIZ_PROPS"].PACKAGE);
    _this.debug = _lib__WEBPACK_IMPORTED_MODULE_13__["debug"].extend(_this.uuid);
    var lava = Object(_lib__WEBPACK_IMPORTED_MODULE_13__["getWindowInstance"])();
    lava.on(_Eventful__WEBPACK_IMPORTED_MODULE_12__["EVENTS"].GOOGLE_READY, function () {
      return _this.handleGoogleReady;
    });
    lava.on(_Eventful__WEBPACK_IMPORTED_MODULE_12__["EVENTS"].DRAW, function () {
      return _this.draw();
    });

    _this.debug("Created!");

    _this.debug(drawable);

    return _this;
  }
  /**
   * Unique identifier for the {@link Chart} / {@link Dashboard}.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Drawable, [{
    key: "draw",

    /**
     * Draws the {@link Chart} / {@link Dashboard} with the predefined data and options.
     *
     * @public
     */
    value: function () {
      var _draw = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.container) {
                  _context.next = 2;
                  break;
                }

                throw new _Errors__WEBPACK_IMPORTED_MODULE_11__["ElementIdNotFound"](this.elementId);

              case 2:
                _context.next = 4;
                return this.setData(this.dataSrc);

              case 4:
                if (this.data) {
                  _context.next = 6;
                  break;
                }

                throw new _Errors__WEBPACK_IMPORTED_MODULE_11__["DataError"]("Could not draw, data is ".concat(this.data));

              case 6:
                if (this.formats) {
                  this.applyFormats();
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function draw() {
        return _draw.apply(this, arguments);
      }

      return draw;
    }()
    /**
     * Sets the {@link DataTable} for the {@link Drawable}.
     *
     * @param {Object|Function|Array|DataQuery|DataTable} payload Source of data
     */

  }, {
    key: "setData",
    value: function () {
      var _setData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(payload) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(payload instanceof _DataQuery__WEBPACK_IMPORTED_MODULE_10__["default"])) {
                  _context2.next = 10;
                  break;
                }

                this.debug("Sending DataQuery");
                _context2.next = 4;
                return payload.send();

              case 4:
                response = _context2.sent;
                this.debug("Response received");
                this.debug(response);
                this.data = response.getDataTable();
                _context2.next = 11;
                break;

              case 10:
                this.data = Object(_lib__WEBPACK_IMPORTED_MODULE_13__["createDataTable"])(payload);

              case 11:
                if (!(this.data instanceof google.visualization.DataTable === false)) {
                  _context2.next = 13;
                  break;
                }

                throw new _Errors__WEBPACK_IMPORTED_MODULE_11__["DataError"]("There was a error setting the data for ".concat(this.uuid));

              case 13:
                this.debug("Setting data");
                this.debug(this.data);

                if (payload.formats) {
                  this.applyFormats(payload.formats);
                }

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setData(_x) {
        return _setData.apply(this, arguments);
      }

      return setData;
    }()
    /**
     * Apply the formats to the DataTable
     */

  }, {
    key: "applyFormats",
    value: function applyFormats(formats) {
      if (formats) {
        this.formats = formats;
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.formats[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var format = _step.value;
          var formatter = new window.google.visualization[format.type](format.options);
          this.debug("Formatting column [".concat(format.index, "] with:"));
          this.debug(format);
          formatter.format(this.data, format.index);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    /**
     * Loads new data into the drawable and redraws.
     *
     * Used with an AJAX call to a PHP method returning DataTable->toPayload(),
     * a chart can be dynamically update in page, without reloads.
     */

  }, {
    key: "updateData",
    value: function () {
      var _updateData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(payload) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.setData(payload);

              case 2:
                _context3.next = 4;
                return this.draw();

              case 4:
                return _context3.abrupt("return", this.getChartUpdateReturn());

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateData(_x2) {
        return _updateData.apply(this, arguments);
      }

      return updateData;
    }()
    /**
     * Loads new options into the drawable and redraws.
     *
     * Used with an AJAX call, or javascript events, to load a new array of options into a chart.
     * This can be used to update a chart dynamically, without reloads.
     */

  }, {
    key: "updateOptions",
    value: function () {
      var _updateOptions = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(payload) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.options = Object.assign(this.options, payload);
                _context4.next = 3;
                return this.draw();

              case 3:
                return _context4.abrupt("return", this.getChartUpdateReturn());

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateOptions(_x3) {
        return _updateOptions.apply(this, arguments);
      }

      return updateOptions;
    }()
    /**
     * This method will have full access to the `google` object
     */

  }, {
    key: "handleGoogleReady",
    value: function handleGoogleReady(google) {
      var _this2 = this;

      this.debug("Caught <".concat(_Eventful__WEBPACK_IMPORTED_MODULE_12__["EVENTS"].GOOGLE_READY, ">")); // console.log(google);

      /**
       * Attach event emitters onto the google chart to relay the events
       * forward onto the lavachart.
       *
       * The Google Chart and DataTable objects will be passed to the listener
       * callback for interaction.
       */

      Drawable.CHART_EVENTS.forEach(function (event) {
        google.visualization.events.addListener(_this2.googleChart, event, function () {
          _this2.fireEvent(event);
        });
      });
    }
  }, {
    key: "fireEvent",
    value: function fireEvent(event) {
      this.debug("Firing <".concat(event, ">"));
      var payload = {
        chart: this.googleChart,
        data: this.data
      };
      this.emit(event, payload);
    }
  }, {
    key: "getChartUpdateReturn",
    value: function getChartUpdateReturn() {
      return {
        data: this.data,
        chart: this.googleChart,
        options: this.options
      };
    }
  }, {
    key: "uuid",
    get: function get() {
      return this.type + ":" + this.label;
    }
    /**
     * HTMLElement into which the chart will be rendered.
     */

  }, {
    key: "container",
    get: function get() {
      return document.getElementById(this.elementId);
    }
  }]);

  return Drawable;
}(tiny_emitter__WEBPACK_IMPORTED_MODULE_9__["TinyEmitter"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(Drawable, "CHART_EVENTS", ["ready", "select", "error", "onmouseover", "onmouseout"]);



/***/ }),

/***/ "./src/Errors.ts":
/*!***********************!*\
  !*** ./src/Errors.ts ***!
  \***********************/
/*! exports provided: LavaJsError, InvalidCallback, DrawableNotFound, DataError, ElementIdNotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LavaJsError", function() { return LavaJsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidCallback", function() { return InvalidCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawableNotFound", function() { return DrawableNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataError", function() { return DataError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementIdNotFound", function() { return ElementIdNotFound; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__);







/**
 * LavaJsError Error
 *
 * Base error that the specific errors extend.
 */
var LavaJsError =
/*#__PURE__*/
function (_Error) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LavaJsError, _Error);

  function LavaJsError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "There was an error";

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LavaJsError);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(LavaJsError).call(this, message));
  }

  return LavaJsError;
}(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default()(Error));
/**
 * InvalidCallback Error
 *
 * Thrown when anything but a function is given as a callback.
 */

var InvalidCallback =
/*#__PURE__*/
function (_LavaJsError) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(InvalidCallback, _LavaJsError);

  function InvalidCallback(callback) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, InvalidCallback);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(InvalidCallback).call(this, "[lava.js] \"".concat(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(callback), "\" is not a valid callback.")));
  }

  return InvalidCallback;
}(LavaJsError);
/**
 * InvalidLabel Error
 *
 * Thrown when a {@link Drawable} is not found in the module.
 */

var DrawableNotFound =
/*#__PURE__*/
function (_LavaJsError2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(DrawableNotFound, _LavaJsError2);

  function DrawableNotFound(label) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DrawableNotFound);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DrawableNotFound).call(this, "[lava.js] A drawable with the label \"".concat(label, "\" was not found.")));
  }

  return DrawableNotFound;
}(LavaJsError);
/**
 * ElementIdNotFound Error
 *
 * Thrown when the given ID for an HTMLElement is not found in the DOM.
 */

var DataError =
/*#__PURE__*/
function (_LavaJsError3) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(DataError, _LavaJsError3);

  function DataError(msg) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DataError);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DataError).call(this, msg));
  }

  return DataError;
}(LavaJsError);
/**
 * ElementIdNotFound Error
 *
 * Thrown when the given ID for an HTMLElement is not found in the DOM.
 */

var ElementIdNotFound =
/*#__PURE__*/
function (_LavaJsError4) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ElementIdNotFound, _LavaJsError4);

  function ElementIdNotFound(elemId) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ElementIdNotFound);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ElementIdNotFound).call(this, "[lava.js] DOM node where id=\"".concat(elemId, "\" was not found.")));
  }

  return ElementIdNotFound;
}(LavaJsError);

/***/ }),

/***/ "./src/Eventful.ts":
/*!*************************!*\
  !*** ./src/Eventful.ts ***!
  \*************************/
/*! exports provided: EVENTS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS", function() { return EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Eventful; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tiny_emitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tiny-emitter */ "./node_modules/tiny-emitter/index.js");
/* harmony import */ var tiny_emitter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tiny_emitter__WEBPACK_IMPORTED_MODULE_9__);










var EVENTS;

(function (EVENTS) {
  EVENTS["GOOGLE_READY"] = "google-ready";
  EVENTS["INITIALIZING"] = "init";
  EVENTS["PRE_DRAW"] = "predraw";
  EVENTS["DRAW"] = "draw";
  EVENTS["POST_DRAW"] = "postdraw";
  EVENTS["RESIZE"] = "window-resize";
  EVENTS["READY"] = "ready";
})(EVENTS || (EVENTS = {}));

var Eventful =
/*#__PURE__*/
function (_TinyEmitter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Eventful, _TinyEmitter);

  function Eventful() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Eventful);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Eventful)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "debug", void 0);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Eventful, [{
    key: "emitEvent",
    value: function emitEvent(event, payload) {
      if (this.debug instanceof debug__WEBPACK_IMPORTED_MODULE_8___default.a.debug) {
        this.debug("Firing Event <".concat(event, ">"));
      }

      if (typeof payload !== "undefined") {
        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Eventful.prototype), "emit", this).call(this, event, payload);
      } else {
        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Eventful.prototype), "emit", this).call(this, event);
      }
    }
  }]);

  return Eventful;
}(tiny_emitter__WEBPACK_IMPORTED_MODULE_9__["TinyEmitter"]);



/***/ }),

/***/ "./src/GoogleLoader.ts":
/*!*****************************!*\
  !*** ./src/GoogleLoader.ts ***!
  \*****************************/
/*! exports provided: LOADER_STATES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADER_STATES", function() { return LOADER_STATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoogleLoader; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Eventful__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Eventful */ "./src/Eventful.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib */ "./src/lib/index.ts");









// import { Debugger } from "debug";
// import { TinyEmitter } from "tiny-emitter";


var LOADER_STATES;

(function (LOADER_STATES) {
  LOADER_STATES["NULL"] = "NULL";
  LOADER_STATES["RESOLVING"] = "RESOLVING";
  LOADER_STATES["RESOLVED"] = "RESOLVED";
})(LOADER_STATES || (LOADER_STATES = {}));

var GoogleLoader =
/*#__PURE__*/
function (_Eventful) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(GoogleLoader, _Eventful);

  /**
   * Version of the Google charts API to load
   */

  /**
   * Url to Google's static loader
   */

  /**
   * Packages to load
   */

  /**
   * Create a new instance of the GoogleLoader
   *
   * @param options LavaJsOptions
   */
  function GoogleLoader(options) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, GoogleLoader);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(GoogleLoader).call(this));
    _this.options = options;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "packages", new Set());

    _this.debug = _lib__WEBPACK_IMPORTED_MODULE_10__["debug"].extend("GoogleLoader");
    return _this;
  }
  /**
   * Flag that will be true once window.google is available in page.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(GoogleLoader, [{
    key: "addPackage",

    /**
     * Add one package to the list that Google needs to load.
     */
    value: function addPackage(pkgs) {
      this.packages.add(pkgs);
    }
    /**
     * Load the Google Static Loader and resolve the promise when ready.
     */

  }, {
    key: "loadGoogle",
    value: function () {
      var _loadGoogle = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.debug("Loading Google...");

                if (!this.googleIsDefined) {
                  _context.next = 4;
                  break;
                }

                this.debug(this.google);
                return _context.abrupt("return", this.google);

              case 4:
                if (!(this.scriptTagInPage === false)) {
                  _context.next = 8;
                  break;
                }

                this.debug("Static loader not found, injecting");
                _context.next = 8;
                return this.injectGoogleStaticLoader(document.head);

              case 8:
                this.debug("Loading API, version '".concat(GoogleLoader.API_VERSION, "'"));
                this.debug("with config");
                this.debug(this.config);
                window.google.charts.load(GoogleLoader.API_VERSION, this.config);
                return _context.abrupt("return", new Promise(function (resolve) {
                  window.google.charts.setOnLoadCallback(function () {
                    _this2.debug("Loaded!");

                    _this2.emitEvent(_Eventful__WEBPACK_IMPORTED_MODULE_9__["EVENTS"].GOOGLE_READY, _this2.google);

                    resolve(_this2.google);
                  });
                }));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadGoogle() {
        return _loadGoogle.apply(this, arguments);
      }

      return loadGoogle;
    }()
    /**
     * Create a new script tag for the Google Static Loader
     */

  }, {
    key: "injectGoogleStaticLoader",
    value: function injectGoogleStaticLoader(target) {
      var debug = this.debug.extend("StaticLoader");
      return new Promise(function (resolve) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = GoogleLoader.LOADER_URL;

        script.onload = script.onreadystatechange = function (event) {
          // eslint-disable-next-line no-param-reassign
          event = event || window.event;

          if (event.type === "load" || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            debug("Ready!");
            resolve();
          }
        }; // debug(`Injecting ${script} into ${target}`);


        debug("Injecting ".concat(script, " into ").concat(target));
        target.appendChild(script);
      });
    }
  }, {
    key: "googleIsDefined",
    get: function get() {
      return typeof window.google !== "undefined";
    }
    /**
     * Flag that will be true once Google's Static Loader is in page.
     */

  }, {
    key: "scriptTagInPage",
    get: function get() {
      var scripts = document.getElementsByTagName("script");

      for (var _i = 0, _Array$from = Array.from(scripts); _i < _Array$from.length; _i++) {
        var script = _Array$from[_i];

        if (script.src === GoogleLoader.LOADER_URL) {
          return true;
        }
      }

      return false;
    }
    /**
     * Get the options for the google loader.
     */

  }, {
    key: "config",
    get: function get() {
      var config = {
        language: this.options.language || "en",
        packages: Array.from(this.packages)
      };

      if (this.options.mapsApiKey !== "") {
        config.mapsApiKey = this.options.mapsApiKey;
      }

      return config;
    }
    /**
     * Get a reference to the `window.google`
     */

  }, {
    key: "google",
    get: function get() {
      return window.google;
    }
  }]);

  return GoogleLoader;
}(_Eventful__WEBPACK_IMPORTED_MODULE_9__["default"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(GoogleLoader, "API_VERSION", "current");

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(GoogleLoader, "LOADER_URL", "https://www.gstatic.com/charts/loader.js");



/***/ }),

/***/ "./src/LavaJs.ts":
/*!***********************!*\
  !*** ./src/LavaJs.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LavaJs; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Chart */ "./src/Chart.ts");
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Dashboard */ "./src/Dashboard.ts");
/* harmony import */ var _DataQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DataQuery */ "./src/DataQuery.ts");
/* harmony import */ var _DefaultOptions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DefaultOptions */ "./src/DefaultOptions.ts");
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Errors */ "./src/Errors.ts");
/* harmony import */ var _Eventful__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Eventful */ "./src/Eventful.ts");
/* harmony import */ var _GoogleLoader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./GoogleLoader */ "./src/GoogleLoader.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib */ "./src/lib/index.ts");









// import Debug from "debug";







 // import { actions, store } from "./lib/store";

/**
 * Google Chart API wrapper library
 *
 * This module can be used as a standalone, browser based library, or in
 * conjunction with the PHP library, <a href="https://github.com/kevinkhill/lavacharts">Lavacharts</a>.
 */
var LavaJs =
/*#__PURE__*/
function (_Eventful) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(LavaJs, _Eventful);

  /**
   * Configurable options for the library
   */

  /**
   * Drawables registy
   */

  /**
   * Chart storage
   */

  /**
   * Ready Callback
   */
  // private readyCallback = (): void => {};

  /**
   * Loader class for appending the google script and making window.google available
   */

  /**
   * Create a new instance of the LavaJs library
   *
   * When creating an instance of LavaJs, the default behavior is
   * to check if `window.google !== undefined` and if so, then we
   * start the {@link GoogleLoader}.
   *
   * The {@link GoogleLoader} will check the <head> for the
   * gstatic loader and if not found, inject it into the <head>.
   */
  function LavaJs(options) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, LavaJs);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(LavaJs).call(this));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "options", _DefaultOptions__WEBPACK_IMPORTED_MODULE_12__["default"]);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "registry", {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "volcano", new Map());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "loader", void 0);

    _this.debug = _lib__WEBPACK_IMPORTED_MODULE_16__["debug"];

    _this.debug("LavaJs v".concat(LavaJs.VERSION));

    if (options) {
      _this.configure(options);
    }

    _this.debug("Loaded with options:");

    _this.debug(_this.options);

    _this.loader = new _GoogleLoader__WEBPACK_IMPORTED_MODULE_15__["default"](_this.options); // Relay the event forward from the loader

    _this.loader.on(_Eventful__WEBPACK_IMPORTED_MODULE_14__["EVENTS"].GOOGLE_READY, function (google) {
      _this.emitEvent(_Eventful__WEBPACK_IMPORTED_MODULE_14__["EVENTS"].GOOGLE_READY, google);

      if (_this.options.autodraw) {
        _this.emitEvent(_Eventful__WEBPACK_IMPORTED_MODULE_14__["EVENTS"].DRAW);
      }
    });

    if (_this.loader.googleIsDefined === false) {
      if (_this.options.autoloadGoogle) {
        _this.loader.loadGoogle();
      }
    }

    return _this;
  }
  /**
   * Get a reference to the `window.google`
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(LavaJs, [{
    key: "getOption",
    value: function getOption(option) {
      return this.options[option];
    }
    /**
     * Get a list of all the registered charts
     */

  }, {
    key: "getRegistry",
    value: function getRegistry() {
      return this.registry;
    }
    /**
     * Configure the LavaJs module.
     */

  }, {
    key: "configure",
    value: function configure(options) {
      this.options = Object.assign(this.options, options);
    }
    /**
     * Initializes the library by loading the Google Chart API.
     */
    // public async loadGoogle(): Promise<void> {
    //   return this.loader.loadGoogle();
    // }

    /**
     * Get a reference to the window.google object or load it if needed.
     */
    // public async getGoogle(): Promise<Google> {
    //   if (this.loader.googleIsDefined === false) {
    //     await this.loadGoogle();
    //   }
    //   return window.google;
    // }

    /**
     * Runs the LavaJs.js module
     *
     * @emits {ready}
     */

  }, {
    key: "draw",
    value: function () {
      var _draw = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.waitForDom();

              case 2:
                if (this.options.responsive === true) {
                  this.attachRedrawHandler();
                }

                this.loader.on("ready", function () {
                  _this2.emitEvent(_Eventful__WEBPACK_IMPORTED_MODULE_14__["EVENTS"].DRAW);
                }); // this.emitEvent(EVENTS.READY);
                // this.readyCallback();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function draw() {
        return _draw.apply(this, arguments);
      }

      return draw;
    }()
    /**
     * Create a new {@link DataQuery} for a {@link Drawable}
     *
     * If a String is passed, then a new {@link DataQuery} is created with no options.
     * If an Object is passed, then the query must be defined by the object.
     */

  }, {
    key: "query",
    value: function query(url) {
      if (typeof url === "string") {
        return new _DataQuery__WEBPACK_IMPORTED_MODULE_11__["default"](url);
      } else {
        return _DataQuery__WEBPACK_IMPORTED_MODULE_11__["default"].create(url);
      }
    }
    /**
     * Create a new {@link Chart} from an Object
     */

  }, {
    key: "chart",
    value: function chart(payload) {
      var chart = new _Chart__WEBPACK_IMPORTED_MODULE_9__["default"](payload);
      return this.register(chart);
    }
    /**
     * Create a new {@link Dashboard} from an Object
     */

  }, {
    key: "dashboard",
    value: function dashboard(payload) {
      return new _Dashboard__WEBPACK_IMPORTED_MODULE_10__["default"](payload);
    }
    /**
     * Retrieve a {@link Chart} / {@link Dashboard} from storage.
     *
     * The {@link Chart} object has the user defined properties such as data, options, formats, etc.
     *
     * The Google Chart object is available as ".googleChart" from the returned LavaChart.
     * It can be used to access any of the available methods such as
     * getImageURI() or getChartLayoutInterface().
     *
     * See https://google-developers.appspot.com/chart/interactive/docs/gallery/linechart#methods
     * for some examples relative to LineCharts.
     *
     * @throws {DrawableNotFound}
     */

  }, {
    key: "get",
    value: function get(label) {
      if (this.volcano.has(label) === false) {
        throw new _Errors__WEBPACK_IMPORTED_MODULE_13__["DrawableNotFound"](label);
      }

      return this.volcano.get(label);
    }
    /**
     * Assigns a callback for when the charts are ready to be interacted with.
     *
     * This is used to wrap calls to lava.loadData() or lava.loadOptions()
     * to protect against accessing charts that aren't loaded yet
     *
     * @throws {InvalidCallback}
     */

  }, {
    key: "ready",
    value: function ready(callback) {
      if (typeof callback !== "function") {
        throw new _Errors__WEBPACK_IMPORTED_MODULE_13__["InvalidCallback"](callback);
      } // this.readyCallback = callback.bind(this);

    }
    /**
     * Loads new data into the chart and redraws.
     *
     *
     * Used with an AJAX call to a PHP method returning DataTable->toPayload(),
     * a chart can be dynamically update in page, without reloads.
     */

  }, {
    key: "loadData",
    value: function () {
      var _loadData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(label, payload) {
        var chart;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                chart = this.get(label);

                if (!chart) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", chart.updateData(payload));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadData(_x, _x2) {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
    /**
     * Loads new options into a chart and redraws.
     *
     * Used with an AJAX call, or javascript events, to load a new array of options into a chart.
     * This can be used to update a chart dynamically, without reloads.
     */

  }, {
    key: "loadOptions",
    value: function () {
      var _loadOptions = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(label, payload) {
        var chart;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                chart = this.get(label);

                if (!chart) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", chart.updateOptions(payload));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadOptions(_x3, _x4) {
        return _loadOptions.apply(this, arguments);
      }

      return loadOptions;
    }()
    /**
     * Redraws all of the registered charts on screen.
     *
     * This method is attached to the window resize event with debouncing
     * to make the charts responsive to the browser resizing.
     */

  }, {
    key: "redrawAll",
    value: function redrawAll() {
      var _this3 = this;

      if (this.volcano.size === 0) {
        this.debug("Nothing to redraw.");
        return false;
      }

      this.debug("Redrawing ".concat(this.volcano.size, " drawables."));
      this.volcano.forEach(function (drawable) {
        _this3.debug("Redrawing ".concat(drawable.uuid));

        drawable.draw();
      });
      return true;
    }
    /**
     * Register a {@link Drawable} with the module.
     *
     * The registry keeps a record of all created charts, which enables
     * the event firing through the common interface of `window.lava`
     */

  }, {
    key: "register",
    value: function register(drawable) {
      this.debug("Registering ".concat(drawable.uuid));
      this.loader.addPackage(drawable["package"]);
      this.registry[drawable.uuid] = {
        drawn: false,
        needsRedraw: false
      };
      this.volcano.set(drawable.type, drawable);
      return drawable;
    }
    /**
     * Simple Promise for the DOM to be ready.
     */

  }, {
    key: "waitForDom",
    value: function () {
      var _waitForDom = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _this4 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.debug("Waiting for the DOM to become ready");
                return _context4.abrupt("return", new Promise(function (resolve) {
                  if (document.readyState === "interactive" || document.readyState === "complete") {
                    resolve();

                    _this4.debug("DOM ready");
                  } else {
                    document.addEventListener("DOMContentLoaded", function () {
                      return resolve();
                    });
                  }
                }));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function waitForDom() {
        return _waitForDom.apply(this, arguments);
      }

      return waitForDom;
    }()
    /**
     * Attach a listener to the window resize event for redrawing the charts.
     */

  }, {
    key: "attachRedrawHandler",
    value: function attachRedrawHandler() {
      var _this5 = this;

      var debounced;
      Object(_lib__WEBPACK_IMPORTED_MODULE_16__["addEvent"])(window, "resize", function () {
        // let redrawAll = this.redrawAll().bind(this);
        clearTimeout(debounced);
        debounced = setTimeout(function () {
          _this5.debug("Window re-sized, redrawing...");

          _this5.redrawAll();
        }, _this5.options.debounceTimeout);
      });
    }
  }, {
    key: "google",
    get: function get() {
      return window.google;
    }
    /**
     * Forward the autoloadGoogle option to the main object to check in page.
     */

  }, {
    key: "autoloadGoogle",
    get: function get() {
      return typeof this.options.autoloadGoogle === "boolean" ? this.options.autoloadGoogle : true;
    }
    /**
     * Forward the autodraw option to the main object to check in page.
     */

  }, {
    key: "autodraw",
    get: function get() {
      return typeof this.options.autodraw === "boolean" ? this.options.autodraw : true;
    }
  }]);

  return LavaJs;
}(_Eventful__WEBPACK_IMPORTED_MODULE_14__["default"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(LavaJs, "VERSION", "4.0.0-beta4");



/***/ }),

/***/ "./src/VisualizationProps.ts":
/*!***********************************!*\
  !*** ./src/VisualizationProps.ts ***!
  \***********************************/
/*! exports provided: VIZ_PROPS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIZ_PROPS", function() { return VIZ_PROPS; });
// import { VizProps } from "./types/chart";
var VIZ_PROPS;

(function (VIZ_PROPS) {
  VIZ_PROPS[VIZ_PROPS["CLASS"] = 0] = "CLASS";
  VIZ_PROPS[VIZ_PROPS["PACKAGE"] = 1] = "PACKAGE";
  VIZ_PROPS[VIZ_PROPS["VERSION"] = 2] = "VERSION";
})(VIZ_PROPS || (VIZ_PROPS = {}));

/* harmony default export */ __webpack_exports__["default"] = ({
  AnnotationChart: ["AnnotationChart", "annotationchart", 1],
  AreaChart: ["AreaChart", "corechart", 1],
  BarChart: ["BarChart", "corechart", 1],
  BubbleChart: ["BubbleChart", "corechart", 1],
  CalendarChart: ["Calendar", "calendar", 1],
  CandlestickChart: ["CandlestickChart", "corechart", 1],
  ColumnChart: ["ColumnChart", "corechart", 1],
  ComboChart: ["ComboChart", "corechart", 1],
  DonutChart: ["PieChart", "corechart", 1],
  GanttChart: ["Gantt", "gantt", 1],
  GaugeChart: ["Gauge", "gauge", 1],
  GeoChart: ["GeoChart", "geochart", 1],
  HistogramChart: ["Histogram", "corechart", 1],
  LineChart: ["LineChart", "corechart", 1],
  PieChart: ["PieChart", "corechart", 1],
  SankeyChart: ["Sankey", "sankey", 1],
  ScatterChart: ["ScatterChart", "corechart", 1],
  SteppedAreaChart: ["SteppedAreaChart", "corechart", 1],
  TableChart: ["Table", "table", 1],
  TimelineChart: ["Timeline", "timeline", 1],
  TreeMapChart: ["TreeMap", "treemap", 1],
  WordTreeChart: ["WordTree", "wordtree", 1]
});

/***/ }),

/***/ "./src/lava.ts":
/*!*********************!*\
  !*** ./src/lava.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LavaJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LavaJs */ "./src/LavaJs.ts");


if (localStorage && "development" === "development") {
  localStorage.debug = "LavaJs*";
} else {
  localStorage.debug = "";
}

window.LavaJs = _LavaJs__WEBPACK_IMPORTED_MODULE_0__["default"];
window.lava = new _LavaJs__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/*! exports provided: debug, getWindowInstance, getProp, addEvent, createDataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowInstance", function() { return getWindowInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProp", function() { return getProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return addEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDataTable", function() { return createDataTable; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VisualizationProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VisualizationProps */ "./src/VisualizationProps.ts");



var debug = debug__WEBPACK_IMPORTED_MODULE_1___default()("LavaJs");
function getWindowInstance() {
  return window.lava;
}
function getProp(chart, prop) {
  return _VisualizationProps__WEBPACK_IMPORTED_MODULE_2__["default"][chart][prop];
}
/**
 * Method for attaching events to objects.
 *
 * @author Alex V.
 * @link http://stackoverflow.com/a/3150139
 */

function addEvent(target, type, callback) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (target === null || typeof target === "undefined") {
    return;
  }

  if (target.addEventListener) {
    target.addEventListener(type, callback, useCapture);
  } else if (target.attachEvent) {
    target.attachEvent("on" + type, callback);
  } else {
    target["on" + type] = callback;
  }
}
/**
 * Sets the data for the chart by creating a new DataTable
 *
 * @param {Object|Function|Array} payload Json representation of a DataTable
 */

function createDataTable(payload) {
  // If a function is received, then create an new DataTable and pass it to the
  // function for user modifications.
  if (typeof payload === "function") {
    return payload(new window.google.visualization.DataTable());
  } // If an Array is received, then attempt to use parse with arrayToDataTable.


  if (Array.isArray(payload)) {
    return window.google.visualization.arrayToDataTable(payload);
  } // Since Google compiles their classes, we can't use instanceof to check since
  // it is no longer called a "DataTable" (it's "gvjs_P" but that could change...)
  // If this check passes, then it already is a DataTable


  if (typeof payload.getTableProperties === "function") {
    return payload;
  } // If the payload is from the php class JoinedDataTable->toJson(), then create
  // two new DataTables and join them with the defined options.


  if (Array.isArray(payload.data)) {
    return window.google.visualization.data.join(new window.google.visualization.DataTable(payload.data[0]), new window.google.visualization.DataTable(payload.data[1]), payload.keys, payload.joinMethod, payload.dt1Columns, payload.dt2Columns);
  } // If a php DataTable->toJson() payload is received, with formatted columns,
  // then payload.data will be defined. Use this to create the DataTable.


  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(payload.data) === "object") {
    // eslint-disable-next-line no-param-reassign
    payload = payload.data;
  } // If we reach here, then it must be standard JSON for creating a DataTable.


  return new window.google.visualization.DataTable(payload);
}

/***/ })

},[["./src/lava.ts","runtime","vendor"]]]);
//# sourceMappingURL=lava.js.map