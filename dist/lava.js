(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Utils = require('./src/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _LavaJs = require('./src/LavaJs');

var _LavaJs2 = _interopRequireDefault(_LavaJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Assign the LavaJs.js module to the window
 * and attach the console to the module.
 */
/* jshint browser:true */
/* globals __OPTIONS__ */

window.lava = new _LavaJs2.default();

/**
 * If LavaJs was loaded from Lavacharts, the __OPTIONS__
 * placeholder will be a JSON object of options.
 */
if (typeof __OPTIONS__ !== 'undefined') {
  window.lava.options = __OPTIONS__;
}

/**
 * If the module is getting ran from Lavacharts, then auto_run
 * will be true and once the DOM is ready, rendering will begin.
 *
 * If the module is ran as a JS library, then auto_run defaults
 * to false so the user can setup the charts and call .run()
 */
if (window.lava.options.auto_run === true) {
  _Utils2.default.domLoaded().then(function () {
    window.lava.run();
  });
}

},{"./src/LavaJs":9,"./src/Utils":11}],2:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],3:[function(require,module,exports){
module.exports={
  "auto_run"        : false,
  "locale"          : "en",
  "timezone"        : "America/Los_Angeles",
  "datetime_format" : "",
  "maps_api_key"    : "",
  "responsive"      : true,
  "debounce_timeout": 250
}
},{}],4:[function(require,module,exports){
module.exports={
  "AnnotationChart": {
    "class": "AnnotationChart",
    "package": "annotationchart",
    "version": 1
  },
  "AreaChart": {
    "class": "AreaChart",
    "package": "corechart",
    "version": 1
  },
  "BarChart": {
    "class": "BarChart",
    "package": "corechart",
    "version": 1
  },
  "BubbleChart": {
    "class": "BubbleChart",
    "package": "corechart",
    "version": 1
  },
  "CalendarChart": {
    "class": "Calendar",
    "package": "calendar",
    "version": 1.1
  },
  "CandlestickChart": {
    "class": "CandlestickChart",
    "package": "corechart",
    "version": 1
  },
  "ColumnChart": {
    "class": "ColumnChart",
    "package": "corechart",
    "version": 1
  },
  "ComboChart": {
    "class": "ComboChart",
    "package": "corechart",
    "version": 1
  },
  "DonutChart": {
    "class": "PieChart",
    "package": "corechart",
    "version": 1
  },
  "GanttChart": {
    "class": "Gantt",
    "package": "gantt",
    "version": 1
  },
  "GaugeChart": {
    "class": "Gauge",
    "package": "gauge",
    "version": 1
  },
  "GeoChart": {
    "class": "GeoChart",
    "package": "geochart",
    "version": 1
  },
  "HistogramChart": {
    "class": "Histogram",
    "package": "corechart",
    "version": 1
  },
  "LineChart": {
    "class": "LineChart",
    "package": "corechart",
    "version": 1
  },
  "PieChart": {
    "class": "PieChart",
    "package": "corechart",
    "version": 1
  },
  "SankeyChart": {
    "class": "Sankey",
    "package": "sankey",
    "version": 1
  },
  "ScatterChart": {
    "class": "ScatterChart",
    "package": "corechart",
    "version": 1
  },
  "SteppedAreaChart": {
    "class": "SteppedAreaChart",
    "package": "corechart",
    "version": 1
  },
  "TableChart": {
    "class": "Table",
    "package": "table",
    "version": 1
  },
  "TimelineChart": {
    "class": "Timeline",
    "package": "timeline",
    "version": 1
  },
  "TreeMapChart": {
    "class": "TreeMap",
    "package": "treemap",
    "version": 1
  },
  "WordTreeChart": {
    "class": "WordTree",
    "package": "wordtree",
    "version": 1
  }
}
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Renderable2 = require('./Renderable');

var _Renderable3 = _interopRequireDefault(_Renderable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Chart Class
 *
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2017, Kevin Hill
 * @license   MIT
 */
var Chart = function (_Renderable) {
    _inherits(Chart, _Renderable);

    /**
     * Create a new Chart.
     *
     * @param {Object} json JSON object representing a Chart.
     * @example
     * {
     *     label: "Test",
     *     type: "PieChart",
     *     elementId: "my-pie-chart",
     *     datatable: [
     *         ['Task', 'Hours per Day'],
     *         ['Work',     11],
     *         ['Eat',      2],
     *         ['Commute',  2],
     *         ['Watch TV', 2],
     *         ['Sleep',    7]
     *     ],
     *     options: {
     *         title: 'My Daily Activities'
     *     }
     * }
     */
    function Chart(json) {
        _classCallCheck(this, Chart);

        /**
         * If this is set to true, then the {@link Chart} will be output as a PNG
         *
         * @type {boolean}
         */
        var _this = _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, json));

        _this.pngOutput = Boolean(json.pngOutput);
        return _this;
    }

    /**
     * Actions to perform before drawing the {@link Chart}
     *
     * This method will have access to window.google since it is called
     * within the render method.
     *
     * @private
     */


    _createClass(Chart, [{
        key: '_setup',
        value: function _setup() {
            this.gchart = new google.visualization[this.class](this.element);

            // TODO: append Lavachart defined events?
            // if (this.events) {
            //     this._attachEvents();
            // }
        }

        /**
         * Actions to perform once the {@link Chart} has been drawn
         *
         * This method will have access to window.google since it is called
         * within the run method.
         *
         * @private
         */

    }, {
        key: '_postDraw',
        value: function _postDraw() {
            if (this.pngOutput) {
                this._drawPng();
            }
        }

        /**
         * Draws the chart as a PNG instead of the standard SVG
         *
         * @private
         * @see https://developers.google.com/chart/interactive/docs/printing
         */

    }, {
        key: '_drawPng',
        value: function _drawPng() {
            var img = document.createElement('img');
            img.src = this.gchart.getImageURI();

            this.element.innerHTML = '';
            this.element.appendChild(img);
        }

        /**
         * Attach the defined chart event handlers.
         *
         * @private
         * @return {void}
         */

    }, {
        key: '_attachEvents',
        value: function _attachEvents() {
            var _this2 = this;

            this.events.forEach(function (callback, event) {
                var context = window;
                var func = callback;

                if ((typeof callback === 'undefined' ? 'undefined' : _typeof(callback)) === 'object') {
                    context = context[callback[0]];
                    func = callback[1];
                }

                console.log('[lava.js] The "' + _this2.uuid + '::' + event + '" event will be handled by "' + func + '" in the context', context);

                /**
                 * Set the context of "this" within the user provided callback to the
                 * chart that fired the event while providing the datatable of the chart
                 * to the callback as an argument.
                 */
                google.visualization.events.addListener(_this2.gchart, event, function () {
                    var callback = context[func].bind(_this2.gchart);

                    callback(_this2.data);
                });
            });
        }
    }]);

    return Chart;
}(_Renderable3.default);

exports.default = Chart;

},{"./Renderable":10}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Renderable2 = require('./Renderable');

var _Renderable3 = _interopRequireDefault(_Renderable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Dashboard Class
 *
 * @class
 * @module    module:LavaJs/Dashboard
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2017, Kevin Hill
 * @license   MIT
 */
var Dashboard = function (_Renderable) {
    _inherits(Dashboard, _Renderable);

    /**
     * Create a new Dashboard
     *
     * @param {Object} json JSON object representing a Dashboard.
     */
    function Dashboard(json) {
        _classCallCheck(this, Dashboard);

        json.type = 'Dashboard';

        var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, json));

        _this.bindings = json.bindings;
        return _this;
    }

    /**
     * Actions to perform before drawing the {@link Dashboard}
     *
     * This method will have access to window.google since it is called
     * within the render method.
     *
     * @private
     */


    _createClass(Dashboard, [{
        key: '_setup',
        value: function _setup() {
            this.gchart = new google.visualization.Dashboard(this.element);

            this._attachBindings();
        }

        /**
         * Process and attach the bindings to the dashboard.
         *
         * @TODO: Needs to be modified and tested for the other types of bindings.
         * @private
         * @return {void}
         */

    }, {
        key: '_attachBindings',
        value: function _attachBindings() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.bindings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var binding = _step.value;

                    var controlWraps = [];
                    var chartWraps = [];

                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = binding.controlWrappers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var controlWrap = _step2.value;

                            controlWraps.push(new google.visualization.ControlWrapper(controlWrap));
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }

                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = binding.chartWrappers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var chartWrap = _step3.value;

                            chartWraps.push(new google.visualization.ChartWrapper(chartWrap));
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }

                    this.gchart.bind(controlWraps, chartWraps);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return Dashboard;
}(_Renderable3.default);

exports.default = Dashboard;

},{"./Renderable":10}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LavaJs = require('./LavaJs');

var _LavaJs2 = _interopRequireDefault(_LavaJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Used for loading remote data as a {@link DataTable}
 *
 * @see https://developers.google.com/chart/interactive/docs/reference#Query
 * @class
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2017, Kevin Hill
 * @license   http://opensource.org/licenses/MIT MIT
 */
var DataQuery = function () {
    /**
     * Create a new DataQuery for a DataTable
     */
    function DataQuery(url) {
        _classCallCheck(this, DataQuery);

        /**
         * URL of your Datasource
         *
         * @type {String}
         */
        this.url = url;

        /**
         * Optional request options
         *
         * @type {Object}
         */
        this.opts = {};

        /**
         * Callback for accessing the query object before send
         *
         * @see https://developers.google.com/chart/interactive/docs/reference#Query
         * @see https://developers.google.com/chart/interactive/docs/querylanguage
         * @type {Function}
         */
        this.query = undefined;

        // If the passed param is an Object, us it to configure the DataQuery
        if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
            this.configure(url);
        }

        // If the this.url is still not a string after .configure(), error out.
        if (typeof this.url !== 'string') {
            throw new _LavaJs2.default.Errors.DataQueryError('"url" is must be a string.');
        }
    }

    /**
     * Configure the DataQuery
     *
     * @param {Object}   config       Configuration object for the DataQuery
     * @param {String}   config.url   Corresponds to "dataSourceUrl" in Google's docs
     * @param {Object}   config.opts  Corresponds to "opt_options" in Google's docs
     * @param {Function} config.query The current query is passed for modification before sending
     */


    _createClass(DataQuery, [{
        key: 'configure',
        value: function configure(_ref) {
            var url = _ref.url,
                _ref$opts = _ref.opts,
                opts = _ref$opts === undefined ? {} : _ref$opts,
                query = _ref.query;

            if (!url) {
                throw new _LavaJs2.default.Errors.DataQueryError('"url" is a mandatory parameter for configuring a DataQuery.');
            }

            this.url = url;
            this.opts = opts;
            this.query = query;
        }

        //noinspection JSUnusedGlobalSymbols
        /**
         * Send the DataQuery
         *
         * @public
         * @return {Promise}
         */

    }, {
        key: 'send',
        value: function send() {
            var query = new google.visualization.Query(this.url, this.opts);

            if (this.query) {
                query = this.query(query);
            }

            return new Promise(function (resolve, reject) {
                query.send(function (response) {
                    if (response.isError()) {
                        reject(response);
                    }

                    resolve(response);
                });
            });
        }
    }]);

    return DataQuery;
}();

exports.default = DataQuery;

},{"./LavaJs":9}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * LavaJsError Error
 *
 * Base error that the specific errors extend.
 *
 * @type {Function}
 */
function LavaJsError(message) {
    this.name = 'LavaJsError';
    this.message = message || "";
}

/**
 * InvalidCallback Error
 *
 * Thrown when anything but a function is given as a callback.
 *
 * @type {Function}
 */
function InvalidCallback(callback) {
    this.name = 'InvalidCallback';
    this.message = '[lava.js] "' + (typeof callback === 'undefined' ? 'undefined' : _typeof(callback)) + '" is not a valid callback.';
}

/**
 * InvalidLabel Error
 *
 * Thrown when a {@link Renderable} is not found in the module.
 *
 * @type {Function}
 */
function RenderableNotFound(label) {
    this.name = 'RenderableNotFound';
    this.message = '[lava.js] A renderable with the label "' + label + '" was not found.';
}

/**
 * ElementIdNotFound Error
 *
 * Thrown when the given ID for an HTMLElement is not found in the DOM.
 *
 * @type {Function}
 */
function ElementIdNotFound(elemId) {
    this.name = 'ElementIdNotFound';
    this.message = '[lava.js] DOM node where id="' + elemId + '" was not found.';
}

/**
 * DataQueryError
 *
 * Thrown when the given ID for an HTMLElement is not found in the DOM.
 *
 * @type {Function}
 */
function DataQueryError(msg) {
    this.name = 'DataQueryError';
    this.message = msg;
}

LavaJsError.prototype = Error.prototype;
InvalidCallback.prototype = LavaJsError.prototype;
RenderableNotFound.prototype = LavaJsError.prototype;
ElementIdNotFound.prototype = LavaJsError.prototype;
DataQueryError.prototype = LavaJsError.prototype;

exports.default = {
    LavaJsError: LavaJsError,
    InvalidCallback: InvalidCallback,
    RenderableNotFound: RenderableNotFound,
    ElementIdNotFound: ElementIdNotFound,
    DataQueryError: DataQueryError
};

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Errors = require('./Errors');

var _Errors2 = _interopRequireDefault(_Errors);

var _Chart = require('./Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _Dashboard = require('./Dashboard');

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _DataQuery = require('./DataQuery');

var _DataQuery2 = _interopRequireDefault(_DataQuery);

var _Renderable = require('./Renderable');

var _Renderable2 = _interopRequireDefault(_Renderable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint browser:true */
/* globals google */

/**
 * Google Chart API wrapper library
 *
 * This module can be used as a standalone, browser based library, or in
 * conjunction with the PHP library, <a href="https://github.com/kevinkhill/lavacharts">Lavacharts</a>.
 *
 * @class
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2017, Kevin Hill
 * @license   http://opensource.org/licenses/MIT MIT
 */
var LavaJs = function (_EventEmitter) {
    _inherits(LavaJs, _EventEmitter);

    _createClass(LavaJs, [{
        key: 'G',


        /**
         * Throwable errors for the LavaJs module
         *
         * @type {Errors}
         */
        get: function get() {
            return {
                c: this._google.charts,
                v: this._google.visualization
            };
        }

        /**
         * Static accessor for the {@link Renderable} class
         *
         * @class
         * @type {Renderable}
         */

    }], [{
        key: 'VERSION',

        //noinspection JSUnusedGlobalSymbols
        /**
         * Version of the LavaJs.js module
         *
         * @type {String}
         */
        get: function get() {
            return '4.0.0rc1';
        }

        /**
         * Version of the Google charts API to load
         *
         * @type {String}
         */

    }, {
        key: 'GOOGLE_API_VERSION',
        get: function get() {
            return 'current';
        }

        /**
         * Urls to Google's static loader
         *
         * @type {String}
         */

    }, {
        key: 'GOOGLE_LOADER_URL',
        get: function get() {
            return 'https://www.gstatic.com/charts/loader.js';
        }
    }, {
        key: 'Renderable',
        get: function get() {
            return _Renderable2.default;
        }

        /**
         * Static accessor for the {@link Chart} class
         *
         * @type {Chart}
         */

    }, {
        key: 'Chart',
        get: function get() {
            return _Chart2.default;
        }

        /**
         * Static accessor for the {@link Dashboard} class
         *
         * @type {Dashboard}
         */

    }, {
        key: 'Dashboard',
        get: function get() {
            return _Dashboard2.default;
        }

        /**
         * Static accessor for the {@link DataQuery} class
         *
         * @type {DataQuery}
         */

    }, {
        key: 'DataQuery',
        get: function get() {
            return _DataQuery2.default;
        }

        /**
         * Throwable errors for the LavaJs module
         *
         * @type {Errors}
         */

    }, {
        key: 'Errors',
        get: function get() {
            return _Errors2.default;
        }

        /**
         * Create a new instance of the LavaJs library
         *
         * @param {Object} newOptions
         */

    }]);

    function LavaJs(newOptions) {
        _classCallCheck(this, LavaJs);

        /**
         * JSON object of config items
         *
         * @public
         * @type {Object}
         */
        var _this = _possibleConstructorReturn(this, (LavaJs.__proto__ || Object.getPrototypeOf(LavaJs)).call(this));

        _this.options = newOptions || require('../resources/options.json');

        /**
         * Set of visualization packages for {@link Chart}s and {@link Dashboard}s
         *
         * @private
         * @type {Set.<String>}
         */
        _this._packages = new Set();

        /**
         * Array of charts and dashboards stored in the module
         *
         * @private
         * @type {Map.<Renderable>}
         */
        _this._volcano = new Map();

        /**
         * Ready callback to be called when the module is finished running.
         *
         * @private
         * @type {Function}
         */
        _this._readyCallback = undefined;
        return _this;
    }

    //noinspection JSMethodCanBeStatic
    /**
     * Flag that will be true once window.google is available in page.
     *
     * @public
     * @return {Boolean}
     */


    _createClass(LavaJs, [{
        key: 'init',


        /**
         * Initializes the library by loading google to the window.
         *
         * @public
         * @return {Promise}
         */
        value: function init() {
            if (this.googleIsLoaded) {
                return Promise.resolve();
            }

            return this._loadGoogle().then(function () {
                console.log('[lava.js] Google is ready:');
            });
        }

        /**
         * Runs the LavaJs.js module
         *
         * @public
         * @emits {ready}
         * @return {Promise}
         */

    }, {
        key: 'run',
        value: function run() {
            var _this2 = this;

            console.log('[lava.js] v' + LavaJs.VERSION + ' Running...');
            console.log('[lava.js] Loading options:', this.options);

            this._attachRedrawHandler();

            return this.init().then(function () {
                var runPromises = [];

                _this2._volcano.forEach(function (renderable) {
                    console.log('[lava.js] Rendering ' + renderable.uuid);

                    runPromises.push(renderable.run());
                });

                return Promise.all(runPromises);
            }).then(function () {
                console.log('[lava.js] Ready!');

                _this2.emit('ready');

                if (typeof _this2._readyCallback === 'function') {
                    _this2._readyCallback();
                }
            });
        }

        //noinspection JSUnusedGlobalSymbols,JSMethodCanBeStatic
        /**
         * Create a new {@link DataQuery} for a {@link Renderable}
         *
         * If a String is passed, then a new {@link DataQuery} is created with no options.
         * If an Object is passed, then the query must be defined by the object.
         *
         * @param {String|Object} url
         * @return {DataQuery}
         */

    }, {
        key: 'query',
        value: function query(url) {
            return new _DataQuery2.default(url);
        }

        //noinspection JSMethodCanBeStatic
        /**
         * Static method for creating new Charts and Dashboards from a JSON definition.
         *
         * The JSON payload can come from Lavacharts or manually if used
         * as an independent library.
         *
         * @public
         * @param  {Object} json object representing a Chart or Dashboard.
         * @return {Chart|Dashboard}
         */

    }, {
        key: 'create',
        value: function create(json) {
            console.log('[lava.js] Creating a new ' + json.type + ':', json);

            if (json.type === 'Dashboard') {
                return new LavaJs.Dashboard(json);
            }

            return new LavaJs.Chart(json);
        }

        /**
         * Stores or creates then stores a {@link Renderable} within the module.
         *
         * @todo If the library has ran, and is ready, loading new charts will force a redraw of all the currently drawn charts.
         *
         * @public
         * @param {Object|Renderable} renderable
         * @return {Chart|Dashboard} The {@link Chart} / {@link Dashboard} that was just stored.
         */

    }, {
        key: 'store',
        value: function store(renderable) {
            if (renderable instanceof LavaJs.Renderable === false) {
                renderable = this.create(renderable);
            }

            console.log('[lava.js] Storing ' + renderable.uuid);

            this._addPackages(renderable.packages);

            this._volcano.set(renderable.label, renderable);

            //if (this.isReady) {
            //    this.redrawAll();
            //}

            return renderable;
        }

        /**
         * Retrieve a {@link Chart} / {@link Dashboard} from storage.
         *
         * The {@link Chart} object has the user defined properties such as data, options, formats, etc.
         *
         * The Google Chart object is available as ".gchart" from the returned LavaChart.
         * It can be used to access any of the available methods such as
         * getImageURI() or getChartLayoutInterface().
         *
         * See https://google-developers.appspot.com/chart/interactive/docs/gallery/linechart#methods
         * for some examples relative to LineCharts.
         *
         * @public
         * @param  {String} label
         * @throws {LavaJs.Errors.RenderableNotFound}
         * @return {Chart|Dashboard}
         */

    }, {
        key: 'get',
        value: function get(label) {
            if (this._volcano.has(label) === false) {
                throw new LavaJs.Errors.RenderableNotFound(label);
            }

            return this._volcano.get(label);
        }

        /**
         * Assigns a callback for when the charts are ready to be interacted with.
         *
         * This is used to wrap calls to lava.loadData() or lava.loadOptions()
         * to protect against accessing charts that aren't loaded yet
         *
         * @public
         * @param {Function} callback
         * @throws {LavaJs.Errors.InvalidCallback}
         * @return {void}
         */

    }, {
        key: 'ready',
        value: function ready(callback) {
            if (typeof callback !== 'function') {
                throw new LavaJs.Errors.InvalidCallback(callback);
            }

            this._readyCallback = callback.bind(this);
        }

        //noinspection JSUnusedGlobalSymbols
        /**
         * Loads new data into the chart and redraws.
         *
         *
         * Used with an AJAX call to a PHP method returning DataTable->toJson(),
         * a chart can be dynamically update in page, without reloads.
         *
         * @public
         * @param {String} label
         * @param {String} json
         * @param {?Function} callback
         * @return {void}
         */

    }, {
        key: 'loadData',
        value: function loadData(label, json, callback) {
            //TODO: test this with formats
            var chart = this.get(label);

            chart.setData(json);

            if (typeof json.formats !== 'undefined') {
                chart.applyFormats(json.formats);
            }

            chart.draw();

            if (typeof callback === 'function') {
                callback(chart.gchart, chart.data);
            }
        }

        //noinspection JSUnusedGlobalSymbols
        /**
         * Loads new options into a chart and redraws.
         *
         *
         * Used with an AJAX call, or javascript events, to load a new array of options into a chart.
         * This can be used to update a chart dynamically, without reloads.
         *
         * @public
         * @param {String} label
         * @param {String} json
         * @param {?Function} callback
         * @return {void}
         */

    }, {
        key: 'loadOptions',
        value: function loadOptions(label, json, callback) {
            //TODO: test this
            var chart = this.get(label);

            chart.options = json;
            chart.draw();

            if (typeof callback === 'function') {
                callback(chart.gchart, chart.data);
            }
        }

        /**
         * Redraws all of the registered charts on screen.
         *
         * This method is attached to the window resize event with debouncing
         * to make the charts responsive to the browser resizing.
         *
         * @return {void}
         */

    }, {
        key: 'redrawAll',
        value: function redrawAll() {
            if (this._volcano.size === 0) {
                console.log('[lava.js] Nothing to redraw.');

                return false;
            }

            console.log('[lava.js] Redrawing ' + this._volcano.size + ' renderables.');

            this._volcano.forEach(function (renderable) {
                console.log('[lava.js] Redrawing ' + renderable.uuid);

                renderable.draw();
            });

            return true;
        }

        /**
         * Adds to the list of packages that Google needs to load.
         *
         * @private
         * @param {String|String[]} packages Single or array of package names to add.
         * @return {void}
         */

    }, {
        key: '_addPackages',
        value: function _addPackages(packages) {
            if (typeof packages === 'string') {
                this._packages.add(packages);
            }

            if (_Utils2.default.getType(packages) === 'Array') {
                packages = new Set(packages);

                this._packages = new Set([this._packages].concat(_toConsumableArray(packages)));
            }
        }

        /**
         * Load the Google Static Loader and resolve the promise when ready.
         *
         * @private
         * @return {Promise}
         */

    }, {
        key: '_loadGoogle',
        value: function _loadGoogle() {
            var _this3 = this;

            console.log('[lava.js] Resolving Google...');

            if (this.googleLoaderInPage) {
                console.log('[lava.js] Static loader found, initializing window.google');

                return this._googleChartLoader();
            }

            console.log('[lava.js] Static loader not found, appending to head');

            return this._addGoogleScriptToHead().then(function () {
                return _this3._googleChartLoader();
            });
        }

        /**
         * Runs the Google Chart Loader using the passed Promise resolver as
         * the setOnLoadCallback function.
         *
         * @private
         * @return {Promise}
         */

    }, {
        key: '_googleChartLoader',
        value: function _googleChartLoader() {
            var _this4 = this;

            return new Promise(function (resolve) {
                var config = {
                    language: _this4.options.locale
                };

                config.packages = _this4._packages.size > 0 ? [].concat(_toConsumableArray(_this4._packages)) : ['corechart'];

                if (_this4.options.maps_api_key !== '') {
                    config.mapsApiKey = _this4.options.maps_api_key;
                }

                console.log('[lava.js] Loading Google with config:', config);

                google.charts.load(LavaJs.GOOGLE_API_VERSION, config);

                google.charts.setOnLoadCallback(resolve);
            });
        }

        /**
         * Create a new script tag for the Google Static Loader
         *
         * @private
         * @returns {Promise}
         */

    }, {
        key: '_addGoogleScriptToHead',
        value: function _addGoogleScriptToHead() {
            return new Promise(function (resolve) {
                var script = document.createElement('script');

                script.type = 'text/javascript';
                script.async = true;
                script.src = LavaJs.GOOGLE_LOADER_URL;
                script.onload = script.onreadystatechange = function (event) {
                    event = event || window.event;

                    if (event.type === 'load' || /loaded|complete/.test(script.readyState)) {
                        script.onload = script.onreadystatechange = null;

                        resolve();
                    }
                };

                document.head.appendChild(script);
            });
        }

        /**
         * Attach a listener to the window resize event for redrawing the charts.
         *
         * @private
         * @return {void}
         */

    }, {
        key: '_attachRedrawHandler',
        value: function _attachRedrawHandler() {
            var _this5 = this;

            if (this.options.responsive === true) {
                var debounced = null;

                _Utils2.default.addEvent(window, 'resize', function () {
                    // let redraw = this.redrawAll().bind(this);

                    clearTimeout(debounced);

                    debounced = setTimeout(function () {
                        console.log('[lava.js] Window re-sized, redrawing...');

                        // redraw();
                        _this5.redrawAll();
                    }, _this5.options.debounce_timeout);
                });
            }
        }
    }, {
        key: 'googleIsLoaded',
        get: function get() {
            return typeof window.google !== 'undefined';
        }

        /**
         * Flag that will be true once Google's Static Loader is in page.
         *
         * @public
         * @return {Boolean}
         */

    }, {
        key: 'googleLoaderInPage',
        get: function get() {
            var scripts = document.getElementsByTagName('script');

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = scripts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var script = _step.value;

                    if (script.src === this.GOOGLE_LOADER_URL) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return LavaJs;
}(_events2.default);

exports.default = LavaJs;

},{"../resources/options.json":3,"./Chart":5,"./Dashboard":6,"./DataQuery":7,"./Errors":8,"./Renderable":10,"./Utils":11,"events":2}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _LavaJs = require('./LavaJs');

var _LavaJs2 = _interopRequireDefault(_LavaJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The {@link Renderable} class is the base for {@link Chart}s and {@link Dashboard}s
 * to share common methods between the two types.
 *
 *
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2017, Kevin Hill
 * @license   MIT
 */
var Renderable = function (_EventEmitter) {
    _inherits(Renderable, _EventEmitter);

    /**
     * Create a new Renderable
     *
     * @param {Object} json
     */
    function Renderable(json) {
        _classCallCheck(this, Renderable);

        /**
         * DataTable for the {@link Chart} / {@link Dashboard}.
         *
         * @type {DataTable}
         */
        var _this = _possibleConstructorReturn(this, (Renderable.__proto__ || Object.getPrototypeOf(Renderable)).call(this));

        _this.data = undefined;

        /**
         * Google chart object created once the {@link Chart} / {@link Dashboard}
         * has been rendered.
         *
         * @type {Object}
         */
        _this.gchart = undefined;

        /**
         * Formatters for the DataTable
         *
         * @type {Array}
         */
        _this.formats = json.formats || [];

        /**
         * Type of {@link Renderable}.
         *
         * @type {String}
         */
        _this.type = json.type;

        /**
         * Unique label for the {@link Chart} / {@link Dashboard}.
         *
         * @type {String}
         */
        _this.label = json.label;

        /**
         * Configurable options for the {@link Chart} / {@link Dashboard}.
         *
         * @type {Array}
         */
        _this.options = json.options;

        /**
         * Element ID of the DOM node in which to render the {@link Chart} / {@link Dashboard}.
         *
         * @type {String}
         */
        _this.elementId = json.elementId || json.elemId || json.containerId;

        /**
         * The Element in which the Renderable will be drawn.
         *
         * @public
         * @type {HTMLElement}
         */
        _this.element = document.getElementById(_this.elementId);

        // If the ID of the element was not found, throw an error.
        if (!_this.element) {
            throw new _LavaJs2.default.Errors.ElementIdNotFound(_this.elementId);
        }

        /**
         * Any dependency on "google" must be within the run() scope.
         *
         * This will be called after the static loaded has completed
         * registering window.google
         *
         * @return {Promise}
         */
        _this.run = function () {
            _this._setup(json);

            _this._attachEventRelays();

            return _this.setData(json.data || json.datatable).then(function () {
                if (_this.formats) {
                    _this._applyFormats();
                }

                _this.draw();
            }).then(function () {
                if (typeof _this._postDraw === 'function') {
                    console.log('[lava.js] Running ' + _this.uuid + '.postDraw()');

                    _this._postDraw();
                }
            });
        };
        return _this;
    }

    /**
     * The google.visualization class needed for rendering.
     *
     * @public
     * @return {String} Google visualization class name.
     */


    _createClass(Renderable, [{
        key: 'draw',


        /**
         * Draws the {@link Chart} / {@link Dashboard} with the predefined data and options.
         *
         * @public
         */
        value: function draw() {
            this.gchart.draw(this.data, this.options);
        }

        /**
         * Sets the data for the {@link Renderable}.
         *
         * @public
         * @param {Object|Function|Array|DataQuery|DataTable} payload Source of data
         * @return {Promise}
         */

    }, {
        key: 'setData',
        value: function setData(payload) {
            var _this2 = this;

            return new Promise(function (resolve) {
                if (payload instanceof _LavaJs2.default.DataQuery) {
                    console.log('[lava.js] Sending DataQuery for ' + _this2.uuid);

                    payload.send().then(function (response) {
                        console.log('[lava.js] DataQuery for ' + _this2.uuid + ' complete.');

                        resolve(response.getDataTable());
                    });
                } else {
                    resolve(_Utils2.default.createDataTable(payload));
                }
            }).then(function (data) {
                _this2.data = data;
            });
        }

        /**
         * Attach event emitters onto the google chart to relay the events
         * forward onto the lavachart.
         *
         * The Google Chart and DataTable objects will be passed to the listener
         * callback for interaction.
         *
         * @protected
         * @return {void}
         */

    }, {
        key: '_attachEventRelays',
        value: function _attachEventRelays() {
            var _this3 = this;

            var defaultEvents = ['ready', 'select', 'error', 'onmouseover', 'onmouseout'];

            defaultEvents.forEach(function (event) {
                google.visualization.events.addListener(_this3.gchart, event, function () {
                    return _this3.emit(event, _this3.gchart, _this3.data);
                });
            });
        }

        /**
         * Apply the formats to the DataTable
         *
         * @protected
         */

    }, {
        key: '_applyFormats',
        value: function _applyFormats() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.formats[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var format = _step.value;

                    var formatter = new google.visualization[format.type](format.options);

                    console.log('[lava.js] Formatting ' + this.uuid + '.', 'Column [' + format.index + '] now formatted with:', formatter);

                    formatter.format(this.data, format.index);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'class',
        get: function get() {
            return _Utils2.default.getVizProps(this.type).class;
        }

        /**
         * The google.visualization package needed for rendering.
         *
         * @public
         * @return {String} Google visualization package name.
         */

    }, {
        key: 'packages',
        get: function get() {
            return _Utils2.default.getVizProps(this.type).package;
        }

        /**
         * Unique identifier for the {@link Chart} / {@link Dashboard}.
         *
         * @public
         * @return {String} Unique identifier of the {@link Renderable}.
         */

    }, {
        key: 'uuid',
        get: function get() {
            return this.type + '::' + this.label;
        }
    }]);

    return Renderable;
}(_events2.default);

exports.default = Renderable;

},{"./LavaJs":9,"./Utils":11,"events":2}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* globals document, google */

/**
 * @ignore
 * @typedef {Object} VizProps
 * @property {String} class Visualization class.
 * @property {String} package Visualization package.
 * @property {Number} version Visualization version.
 */

/**
 * Collection of utility functions used throughout the modules.
 *
 * @class
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2017, Kevin Hill
 * @license   MIT
 */
var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
        key: 'getType',

        /**
         * Returns the type of object, with a capital first letter.
         *
         * @param {Object} object
         * @return {String} The type of the given object
         */
        value: function getType(object) {
            var type = Object.prototype.toString.call(object);

            return type.replace('[object ', '').replace(']', '');
        }

        /**
         * Simple Promise for the DOM to be ready.
         *
         * @return {Promise}
         */

    }, {
        key: 'domLoaded',
        value: function domLoaded() {
            return new Promise(function (resolve) {
                if (document.readyState === 'interactive' || document.readyState === 'complete') {
                    resolve();
                } else {
                    document.addEventListener('DOMContentLoaded', resolve);
                }
            });
        }

        /**
         * Method for attaching events to objects.
         * @link http://stackoverflow.com/a/3150139 Credit to Alex V.
         *
         * @param {Object}   target      Target object to attach the event to.
         * @param {String}   type        Type of event.
         * @param {Function} callback    Callback to fire when the event happens.
         * @param {Boolean}  eventReturn
         */

    }, {
        key: 'addEvent',
        value: function addEvent(target, type, callback, eventReturn) {
            if (target === null || typeof target === 'undefined') {
                return;
            }

            if (target.addEventListener) {
                target.addEventListener(type, callback, eventReturn);
            } else if (target.attachEvent) {
                target.attachEvent("on" + type, callback);
            } else {
                target["on" + type] = callback;
            }
        }

        /**
         * Returns the visualization properties of the given chart type.
         *
         * @param {String} chartType Type of chart for lookup.
         * @return {VizProps}
         */

    }, {
        key: 'getVizProps',
        value: function getVizProps(chartType) {
            var propertyMap = require('../resources/visualization-map.json');

            return propertyMap[chartType];
        }

        /**
         * Sets the data for the chart by creating a new DataTable
         *
         * @public
         * @param {Object|Function|Array} payload Json representation of a DataTable
         * @return {DataTable}
         */

    }, {
        key: 'createDataTable',
        value: function createDataTable(payload) {
            // If a function is received, then create an new DataTable and pass it to the
            // function for user modifications.
            if (Utils.getType(payload) === 'Function') {
                return payload(new google.visualization.DataTable());
            }

            // If an Array is received, then attempt to use parse with arrayToDataTable.
            if (Utils.getType(payload) === 'Array') {
                return google.visualization.arrayToDataTable(payload);
            }

            // Since Google compiles their classes, we can't use instanceof to check since
            // it is no longer called a "DataTable" (it's "gvjs_P" but that could change...)
            // If this check passes, then it already is a DataTable
            if (Utils.getType(payload.getTableProperties) === 'Function') {
                return payload;
            }

            // If a php DataTable->toJson() payload is received, with formatted columns,
            // then payload.data will be defined, and used as the DataTable
            if (Utils.getType(payload.data) === 'Object') {
                payload = payload.data;

                return;
            }

            // If the payload is from the php class JoinedDataTable->toJson(), then create
            // two new DataTables and join them with the defined options.
            if (Utils.getType(payload.data) === 'Array') {
                return google.visualization.data.join(new google.visualization.DataTable(payload.data[0]), new google.visualization.DataTable(payload.data[1]), payload.keys, payload.joinMethod, payload.dt2Columns, payload.dt2Columns);
            }

            // If we reach here, then it must be standard JSON for creating a DataTable.
            return new google.visualization.DataTable(payload);
        }
    }]);

    return Utils;
}();

exports.default = Utils;

},{"../resources/visualization-map.json":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwicmVzb3VyY2VzL29wdGlvbnMuanNvbiIsInJlc291cmNlcy92aXN1YWxpemF0aW9uLW1hcC5qc29uIiwic3JjXFxDaGFydC5qcyIsInNyY1xcRGFzaGJvYXJkLmpzIiwic3JjXFxEYXRhUXVlcnkuanMiLCJzcmNcXEVycm9ycy5qcyIsInNyY1xcTGF2YUpzLmpzIiwic3JjXFxSZW5kZXJhYmxlLmpzIiwic3JjXFxVdGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDR0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7QUFOQTtBQUNBOztBQVNBLE9BQU8sSUFBUCxHQUFjLHNCQUFkOztBQUVBOzs7O0FBSUEsSUFBSSxPQUFPLFdBQVAsS0FBdUIsV0FBM0IsRUFBd0M7QUFDcEMsU0FBTyxJQUFQLENBQVksT0FBWixHQUFzQixXQUF0QjtBQUNIOztBQUVEOzs7Ozs7O0FBT0EsSUFBSSxPQUFPLElBQVAsQ0FBWSxPQUFaLENBQW9CLFFBQXBCLEtBQWlDLElBQXJDLEVBQTJDO0FBQ3ZDLGtCQUFNLFNBQU4sR0FBa0IsSUFBbEIsQ0FBdUIsWUFBTTtBQUN6QixXQUFPLElBQVAsQ0FBWSxHQUFaO0FBQ0gsR0FGRDtBQUdIOzs7QUMvQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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SUFBSSxPQUFPLGFBQVAsQ0FBcUIsU0FBekIsQ0FBbUMsT0FBbkMsQ0FBUDtBQUNIOzs7Ozs7a0JBbkhnQixLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIGpzaGludCBicm93c2VyOnRydWUgKi9cclxuLyogZ2xvYmFscyBfX09QVElPTlNfXyAqL1xyXG5cclxuaW1wb3J0IFV0aWxzIGZyb20gJy4vc3JjL1V0aWxzJztcclxuaW1wb3J0IExhdmFKcyBmcm9tICcuL3NyYy9MYXZhSnMnO1xyXG5cclxuLyoqXHJcbiAqIEFzc2lnbiB0aGUgTGF2YUpzLmpzIG1vZHVsZSB0byB0aGUgd2luZG93XHJcbiAqIGFuZCBhdHRhY2ggdGhlIGNvbnNvbGUgdG8gdGhlIG1vZHVsZS5cclxuICovXHJcbndpbmRvdy5sYXZhID0gbmV3IExhdmFKcygpO1xyXG5cclxuLyoqXHJcbiAqIElmIExhdmFKcyB3YXMgbG9hZGVkIGZyb20gTGF2YWNoYXJ0cywgdGhlIF9fT1BUSU9OU19fXHJcbiAqIHBsYWNlaG9sZGVyIHdpbGwgYmUgYSBKU09OIG9iamVjdCBvZiBvcHRpb25zLlxyXG4gKi9cclxuaWYgKHR5cGVvZiBfX09QVElPTlNfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHdpbmRvdy5sYXZhLm9wdGlvbnMgPSBfX09QVElPTlNfXztcclxufVxyXG5cclxuLyoqXHJcbiAqIElmIHRoZSBtb2R1bGUgaXMgZ2V0dGluZyByYW4gZnJvbSBMYXZhY2hhcnRzLCB0aGVuIGF1dG9fcnVuXHJcbiAqIHdpbGwgYmUgdHJ1ZSBhbmQgb25jZSB0aGUgRE9NIGlzIHJlYWR5LCByZW5kZXJpbmcgd2lsbCBiZWdpbi5cclxuICpcclxuICogSWYgdGhlIG1vZHVsZSBpcyByYW4gYXMgYSBKUyBsaWJyYXJ5LCB0aGVuIGF1dG9fcnVuIGRlZmF1bHRzXHJcbiAqIHRvIGZhbHNlIHNvIHRoZSB1c2VyIGNhbiBzZXR1cCB0aGUgY2hhcnRzIGFuZCBjYWxsIC5ydW4oKVxyXG4gKi9cclxuaWYgKHdpbmRvdy5sYXZhLm9wdGlvbnMuYXV0b19ydW4gPT09IHRydWUpIHtcclxuICAgIFV0aWxzLmRvbUxvYWRlZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sYXZhLnJ1bigpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4gKCcgKyBlciArICcpJyk7XG4gICAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xyXG4gIFwiYXV0b19ydW5cIiAgICAgICAgOiBmYWxzZSxcclxuICBcImxvY2FsZVwiICAgICAgICAgIDogXCJlblwiLFxyXG4gIFwidGltZXpvbmVcIiAgICAgICAgOiBcIkFtZXJpY2EvTG9zX0FuZ2VsZXNcIixcclxuICBcImRhdGV0aW1lX2Zvcm1hdFwiIDogXCJcIixcclxuICBcIm1hcHNfYXBpX2tleVwiICAgIDogXCJcIixcclxuICBcInJlc3BvbnNpdmVcIiAgICAgIDogdHJ1ZSxcclxuICBcImRlYm91bmNlX3RpbWVvdXRcIjogMjUwXHJcbn0iLCJtb2R1bGUuZXhwb3J0cz17XHJcbiAgXCJBbm5vdGF0aW9uQ2hhcnRcIjoge1xyXG4gICAgXCJjbGFzc1wiOiBcIkFubm90YXRpb25DaGFydFwiLFxyXG4gICAgXCJwYWNrYWdlXCI6IFwiYW5ub3RhdGlvbmNoYXJ0XCIsXHJcbiAgICBcInZlcnNpb25cIjogMVxyXG4gIH0sXHJcbiAgXCJBcmVhQ2hhcnRcIjoge1xyXG4gICAgXCJjbGFzc1wiOiBcIkFyZWFDaGFydFwiLFxyXG4gICAgXCJwYWNrYWdlXCI6IFwiY29yZWNoYXJ0XCIsXHJcbiAgICBcInZlcnNpb25cIjogMVxyXG4gIH0sXHJcbiAgXCJCYXJDaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiQmFyQ2hhcnRcIixcclxuICAgIFwicGFja2FnZVwiOiBcImNvcmVjaGFydFwiLFxyXG4gICAgXCJ2ZXJzaW9uXCI6IDFcclxuICB9LFxyXG4gIFwiQnViYmxlQ2hhcnRcIjoge1xyXG4gICAgXCJjbGFzc1wiOiBcIkJ1YmJsZUNoYXJ0XCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJjb3JlY2hhcnRcIixcclxuICAgIFwidmVyc2lvblwiOiAxXHJcbiAgfSxcclxuICBcIkNhbGVuZGFyQ2hhcnRcIjoge1xyXG4gICAgXCJjbGFzc1wiOiBcIkNhbGVuZGFyXCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJjYWxlbmRhclwiLFxyXG4gICAgXCJ2ZXJzaW9uXCI6IDEuMVxyXG4gIH0sXHJcbiAgXCJDYW5kbGVzdGlja0NoYXJ0XCI6IHtcclxuICAgIFwiY2xhc3NcIjogXCJDYW5kbGVzdGlja0NoYXJ0XCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJjb3JlY2hhcnRcIixcclxuICAgIFwidmVyc2lvblwiOiAxXHJcbiAgfSxcclxuICBcIkNvbHVtbkNoYXJ0XCI6IHtcclxuICAgIFwiY2xhc3NcIjogXCJDb2x1bW5DaGFydFwiLFxyXG4gICAgXCJwYWNrYWdlXCI6IFwiY29yZWNoYXJ0XCIsXHJcbiAgICBcInZlcnNpb25cIjogMVxyXG4gIH0sXHJcbiAgXCJDb21ib0NoYXJ0XCI6IHtcclxuICAgIFwiY2xhc3NcIjogXCJDb21ib0NoYXJ0XCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJjb3JlY2hhcnRcIixcclxuICAgIFwidmVyc2lvblwiOiAxXHJcbiAgfSxcclxuICBcIkRvbnV0Q2hhcnRcIjoge1xyXG4gICAgXCJjbGFzc1wiOiBcIlBpZUNoYXJ0XCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJjb3JlY2hhcnRcIixcclxuICAgIFwidmVyc2lvblwiOiAxXHJcbiAgfSxcclxuICBcIkdhbnR0Q2hhcnRcIjoge1xyXG4gICAgXCJjbGFzc1wiOiBcIkdhbnR0XCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJnYW50dFwiLFxyXG4gICAgXCJ2ZXJzaW9uXCI6IDFcclxuICB9LFxyXG4gIFwiR2F1Z2VDaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiR2F1Z2VcIixcclxuICAgIFwicGFja2FnZVwiOiBcImdhdWdlXCIsXHJcbiAgICBcInZlcnNpb25cIjogMVxyXG4gIH0sXHJcbiAgXCJHZW9DaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiR2VvQ2hhcnRcIixcclxuICAgIFwicGFja2FnZVwiOiBcImdlb2NoYXJ0XCIsXHJcbiAgICBcInZlcnNpb25cIjogMVxyXG4gIH0sXHJcbiAgXCJIaXN0b2dyYW1DaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiSGlzdG9ncmFtXCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJjb3JlY2hhcnRcIixcclxuICAgIFwidmVyc2lvblwiOiAxXHJcbiAgfSxcclxuICBcIkxpbmVDaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiTGluZUNoYXJ0XCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJjb3JlY2hhcnRcIixcclxuICAgIFwidmVyc2lvblwiOiAxXHJcbiAgfSxcclxuICBcIlBpZUNoYXJ0XCI6IHtcclxuICAgIFwiY2xhc3NcIjogXCJQaWVDaGFydFwiLFxyXG4gICAgXCJwYWNrYWdlXCI6IFwiY29yZWNoYXJ0XCIsXHJcbiAgICBcInZlcnNpb25cIjogMVxyXG4gIH0sXHJcbiAgXCJTYW5rZXlDaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiU2Fua2V5XCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJzYW5rZXlcIixcclxuICAgIFwidmVyc2lvblwiOiAxXHJcbiAgfSxcclxuICBcIlNjYXR0ZXJDaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiU2NhdHRlckNoYXJ0XCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJjb3JlY2hhcnRcIixcclxuICAgIFwidmVyc2lvblwiOiAxXHJcbiAgfSxcclxuICBcIlN0ZXBwZWRBcmVhQ2hhcnRcIjoge1xyXG4gICAgXCJjbGFzc1wiOiBcIlN0ZXBwZWRBcmVhQ2hhcnRcIixcclxuICAgIFwicGFja2FnZVwiOiBcImNvcmVjaGFydFwiLFxyXG4gICAgXCJ2ZXJzaW9uXCI6IDFcclxuICB9LFxyXG4gIFwiVGFibGVDaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiVGFibGVcIixcclxuICAgIFwicGFja2FnZVwiOiBcInRhYmxlXCIsXHJcbiAgICBcInZlcnNpb25cIjogMVxyXG4gIH0sXHJcbiAgXCJUaW1lbGluZUNoYXJ0XCI6IHtcclxuICAgIFwiY2xhc3NcIjogXCJUaW1lbGluZVwiLFxyXG4gICAgXCJwYWNrYWdlXCI6IFwidGltZWxpbmVcIixcclxuICAgIFwidmVyc2lvblwiOiAxXHJcbiAgfSxcclxuICBcIlRyZWVNYXBDaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiVHJlZU1hcFwiLFxyXG4gICAgXCJwYWNrYWdlXCI6IFwidHJlZW1hcFwiLFxyXG4gICAgXCJ2ZXJzaW9uXCI6IDFcclxuICB9LFxyXG4gIFwiV29yZFRyZWVDaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiV29yZFRyZWVcIixcclxuICAgIFwicGFja2FnZVwiOiBcIndvcmR0cmVlXCIsXHJcbiAgICBcInZlcnNpb25cIjogMVxyXG4gIH1cclxufSIsImltcG9ydCBSZW5kZXJhYmxlIGZyb20gJy4vUmVuZGVyYWJsZSc7XHJcblxyXG4vKipcclxuICogQ2hhcnQgQ2xhc3NcclxuICpcclxuICogQGF1dGhvciAgICBLZXZpbiBIaWxsIDxrZXZpbmtoaWxsQGdtYWlsLmNvbT5cclxuICogQGNvcHlyaWdodCAoYykgMjAxNywgS2V2aW4gSGlsbFxyXG4gKiBAbGljZW5zZSAgIE1JVFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBSZW5kZXJhYmxlXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IENoYXJ0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBqc29uIEpTT04gb2JqZWN0IHJlcHJlc2VudGluZyBhIENoYXJ0LlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHtcclxuICAgICAqICAgICBsYWJlbDogXCJUZXN0XCIsXHJcbiAgICAgKiAgICAgdHlwZTogXCJQaWVDaGFydFwiLFxyXG4gICAgICogICAgIGVsZW1lbnRJZDogXCJteS1waWUtY2hhcnRcIixcclxuICAgICAqICAgICBkYXRhdGFibGU6IFtcclxuICAgICAqICAgICAgICAgWydUYXNrJywgJ0hvdXJzIHBlciBEYXknXSxcclxuICAgICAqICAgICAgICAgWydXb3JrJywgICAgIDExXSxcclxuICAgICAqICAgICAgICAgWydFYXQnLCAgICAgIDJdLFxyXG4gICAgICogICAgICAgICBbJ0NvbW11dGUnLCAgMl0sXHJcbiAgICAgKiAgICAgICAgIFsnV2F0Y2ggVFYnLCAyXSxcclxuICAgICAqICAgICAgICAgWydTbGVlcCcsICAgIDddXHJcbiAgICAgKiAgICAgXSxcclxuICAgICAqICAgICBvcHRpb25zOiB7XHJcbiAgICAgKiAgICAgICAgIHRpdGxlOiAnTXkgRGFpbHkgQWN0aXZpdGllcydcclxuICAgICAqICAgICB9XHJcbiAgICAgKiB9XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yIChqc29uKSB7XHJcbiAgICAgICAgc3VwZXIoanNvbik7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElmIHRoaXMgaXMgc2V0IHRvIHRydWUsIHRoZW4gdGhlIHtAbGluayBDaGFydH0gd2lsbCBiZSBvdXRwdXQgYXMgYSBQTkdcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucG5nT3V0cHV0ID0gQm9vbGVhbihqc29uLnBuZ091dHB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBY3Rpb25zIHRvIHBlcmZvcm0gYmVmb3JlIGRyYXdpbmcgdGhlIHtAbGluayBDaGFydH1cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIGhhdmUgYWNjZXNzIHRvIHdpbmRvdy5nb29nbGUgc2luY2UgaXQgaXMgY2FsbGVkXHJcbiAgICAgKiB3aXRoaW4gdGhlIHJlbmRlciBtZXRob2QuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3NldHVwKCkge1xyXG4gICAgICAgIHRoaXMuZ2NoYXJ0ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uW3RoaXMuY2xhc3NdKHRoaXMuZWxlbWVudCk7XHJcblxyXG4gICAgICAgIC8vIFRPRE86IGFwcGVuZCBMYXZhY2hhcnQgZGVmaW5lZCBldmVudHM/XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuZXZlbnRzKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuX2F0dGFjaEV2ZW50cygpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFjdGlvbnMgdG8gcGVyZm9ybSBvbmNlIHRoZSB7QGxpbmsgQ2hhcnR9IGhhcyBiZWVuIGRyYXduXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBoYXZlIGFjY2VzcyB0byB3aW5kb3cuZ29vZ2xlIHNpbmNlIGl0IGlzIGNhbGxlZFxyXG4gICAgICogd2l0aGluIHRoZSBydW4gbWV0aG9kLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9wb3N0RHJhdygpIHtcclxuICAgICAgICBpZiAodGhpcy5wbmdPdXRwdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHJhd1BuZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYXdzIHRoZSBjaGFydCBhcyBhIFBORyBpbnN0ZWFkIG9mIHRoZSBzdGFuZGFyZCBTVkdcclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9jaGFydC9pbnRlcmFjdGl2ZS9kb2NzL3ByaW50aW5nXHJcbiAgICAgKi9cclxuICAgIF9kcmF3UG5nKCkge1xyXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHRoaXMuZ2NoYXJ0LmdldEltYWdlVVJJKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEF0dGFjaCB0aGUgZGVmaW5lZCBjaGFydCBldmVudCBoYW5kbGVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgX2F0dGFjaEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKChjYWxsYmFjaywgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSB3aW5kb3c7XHJcbiAgICAgICAgICAgIGxldCBmdW5jID0gY2FsbGJhY2s7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dCA9IGNvbnRleHRbY2FsbGJhY2tbMF1dO1xyXG4gICAgICAgICAgICAgICAgZnVuYyA9IGNhbGxiYWNrWzFdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW2xhdmEuanNdIFRoZSBcIiR7dGhpcy51dWlkfTo6JHtldmVudH1cIiBldmVudCB3aWxsIGJlIGhhbmRsZWQgYnkgXCIke2Z1bmN9XCIgaW4gdGhlIGNvbnRleHRgLCBjb250ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBTZXQgdGhlIGNvbnRleHQgb2YgXCJ0aGlzXCIgd2l0aGluIHRoZSB1c2VyIHByb3ZpZGVkIGNhbGxiYWNrIHRvIHRoZVxyXG4gICAgICAgICAgICAgKiBjaGFydCB0aGF0IGZpcmVkIHRoZSBldmVudCB3aGlsZSBwcm92aWRpbmcgdGhlIGRhdGF0YWJsZSBvZiB0aGUgY2hhcnRcclxuICAgICAgICAgICAgICogdG8gdGhlIGNhbGxiYWNrIGFzIGFuIGFyZ3VtZW50LlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZ29vZ2xlLnZpc3VhbGl6YXRpb24uZXZlbnRzLmFkZExpc3RlbmVyKHRoaXMuZ2NoYXJ0LCBldmVudCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhbGxiYWNrID0gY29udGV4dFtmdW5jXS5iaW5kKHRoaXMuZ2NoYXJ0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVuZGVyYWJsZSBmcm9tICcuL1JlbmRlcmFibGUnO1xyXG5cclxuLyoqXHJcbiAqIERhc2hib2FyZCBDbGFzc1xyXG4gKlxyXG4gKiBAY2xhc3NcclxuICogQG1vZHVsZSAgICBtb2R1bGU6TGF2YUpzL0Rhc2hib2FyZFxyXG4gKiBAYXV0aG9yICAgIEtldmluIEhpbGwgPGtldmlua2hpbGxAZ21haWwuY29tPlxyXG4gKiBAY29weXJpZ2h0IChjKSAyMDE3LCBLZXZpbiBIaWxsXHJcbiAqIEBsaWNlbnNlICAgTUlUXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZW5kZXJhYmxlXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IERhc2hib2FyZFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBqc29uIEpTT04gb2JqZWN0IHJlcHJlc2VudGluZyBhIERhc2hib2FyZC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoanNvbikge1xyXG4gICAgICAgIGpzb24udHlwZSA9ICdEYXNoYm9hcmQnO1xyXG5cclxuICAgICAgICBzdXBlcihqc29uKTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kaW5ncyA9IGpzb24uYmluZGluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBY3Rpb25zIHRvIHBlcmZvcm0gYmVmb3JlIGRyYXdpbmcgdGhlIHtAbGluayBEYXNoYm9hcmR9XHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBoYXZlIGFjY2VzcyB0byB3aW5kb3cuZ29vZ2xlIHNpbmNlIGl0IGlzIGNhbGxlZFxyXG4gICAgICogd2l0aGluIHRoZSByZW5kZXIgbWV0aG9kLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9zZXR1cCgpIHtcclxuICAgICAgICB0aGlzLmdjaGFydCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXNoYm9hcmQodGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5fYXR0YWNoQmluZGluZ3MoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb2Nlc3MgYW5kIGF0dGFjaCB0aGUgYmluZGluZ3MgdG8gdGhlIGRhc2hib2FyZC5cclxuICAgICAqXHJcbiAgICAgKiBAVE9ETzogTmVlZHMgdG8gYmUgbW9kaWZpZWQgYW5kIHRlc3RlZCBmb3IgdGhlIG90aGVyIHR5cGVzIG9mIGJpbmRpbmdzLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIF9hdHRhY2hCaW5kaW5ncygpIHtcclxuICAgICAgICBmb3IgKGxldCBiaW5kaW5nIG9mIHRoaXMuYmluZGluZ3MpIHtcclxuICAgICAgICAgICAgbGV0IGNvbnRyb2xXcmFwcyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgY2hhcnRXcmFwcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgY29udHJvbFdyYXAgb2YgYmluZGluZy5jb250cm9sV3JhcHBlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xXcmFwcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5Db250cm9sV3JhcHBlcihjb250cm9sV3JhcClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoYXJ0V3JhcCBvZiBiaW5kaW5nLmNoYXJ0V3JhcHBlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNoYXJ0V3JhcHMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyKGNoYXJ0V3JhcClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2NoYXJ0LmJpbmQoY29udHJvbFdyYXBzLCBjaGFydFdyYXBzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IExhdmFKcyBmcm9tICcuL0xhdmFKcyc7XHJcblxyXG4vKipcclxuICogVXNlZCBmb3IgbG9hZGluZyByZW1vdGUgZGF0YSBhcyBhIHtAbGluayBEYXRhVGFibGV9XHJcbiAqXHJcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vY2hhcnQvaW50ZXJhY3RpdmUvZG9jcy9yZWZlcmVuY2UjUXVlcnlcclxuICogQGNsYXNzXHJcbiAqIEBhdXRob3IgICAgS2V2aW4gSGlsbCA8a2V2aW5raGlsbEBnbWFpbC5jb20+XHJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTcsIEtldmluIEhpbGxcclxuICogQGxpY2Vuc2UgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUIE1JVFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVF1ZXJ5XHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IERhdGFRdWVyeSBmb3IgYSBEYXRhVGFibGVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodXJsKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVVJMIG9mIHlvdXIgRGF0YXNvdXJjZVxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogT3B0aW9uYWwgcmVxdWVzdCBvcHRpb25zXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub3B0cyA9IHt9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDYWxsYmFjayBmb3IgYWNjZXNzaW5nIHRoZSBxdWVyeSBvYmplY3QgYmVmb3JlIHNlbmRcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vY2hhcnQvaW50ZXJhY3RpdmUvZG9jcy9yZWZlcmVuY2UjUXVlcnlcclxuICAgICAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2NoYXJ0L2ludGVyYWN0aXZlL2RvY3MvcXVlcnlsYW5ndWFnZVxyXG4gICAgICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnF1ZXJ5ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGUgcGFzc2VkIHBhcmFtIGlzIGFuIE9iamVjdCwgdXMgaXQgdG8gY29uZmlndXJlIHRoZSBEYXRhUXVlcnlcclxuICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmUodXJsKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIHRoaXMudXJsIGlzIHN0aWxsIG5vdCBhIHN0cmluZyBhZnRlciAuY29uZmlndXJlKCksIGVycm9yIG91dC5cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudXJsICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTGF2YUpzLkVycm9ycy5EYXRhUXVlcnlFcnJvcihcclxuICAgICAgICAgICAgICAgICdcInVybFwiIGlzIG11c3QgYmUgYSBzdHJpbmcuJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZSB0aGUgRGF0YVF1ZXJ5XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgY29uZmlnICAgICAgIENvbmZpZ3VyYXRpb24gb2JqZWN0IGZvciB0aGUgRGF0YVF1ZXJ5XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gICBjb25maWcudXJsICAgQ29ycmVzcG9uZHMgdG8gXCJkYXRhU291cmNlVXJsXCIgaW4gR29vZ2xlJ3MgZG9jc1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgY29uZmlnLm9wdHMgIENvcnJlc3BvbmRzIHRvIFwib3B0X29wdGlvbnNcIiBpbiBHb29nbGUncyBkb2NzXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25maWcucXVlcnkgVGhlIGN1cnJlbnQgcXVlcnkgaXMgcGFzc2VkIGZvciBtb2RpZmljYXRpb24gYmVmb3JlIHNlbmRpbmdcclxuICAgICAqL1xyXG4gICAgY29uZmlndXJlKHt1cmwsIG9wdHM9e30sIHF1ZXJ5fSkge1xyXG4gICAgICAgIGlmICghIHVybCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTGF2YUpzLkVycm9ycy5EYXRhUXVlcnlFcnJvcihcclxuICAgICAgICAgICAgICAgICdcInVybFwiIGlzIGEgbWFuZGF0b3J5IHBhcmFtZXRlciBmb3IgY29uZmlndXJpbmcgYSBEYXRhUXVlcnkuJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cmwgICA9IHVybDtcclxuICAgICAgICB0aGlzLm9wdHMgID0gb3B0cztcclxuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9ub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgdGhlIERhdGFRdWVyeVxyXG4gICAgICpcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIHNlbmQoKSB7XHJcbiAgICAgICAgbGV0IHF1ZXJ5ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLlF1ZXJ5KHRoaXMudXJsLCB0aGlzLm9wdHMpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5xdWVyeSkge1xyXG4gICAgICAgICAgICBxdWVyeSA9IHRoaXMucXVlcnkocXVlcnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcXVlcnkuc2VuZChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogTGF2YUpzRXJyb3IgRXJyb3JcclxuICpcclxuICogQmFzZSBlcnJvciB0aGF0IHRoZSBzcGVjaWZpYyBlcnJvcnMgZXh0ZW5kLlxyXG4gKlxyXG4gKiBAdHlwZSB7RnVuY3Rpb259XHJcbiAqL1xyXG5mdW5jdGlvbiBMYXZhSnNFcnJvcihtZXNzYWdlKSB7XHJcbiAgICB0aGlzLm5hbWUgPSAnTGF2YUpzRXJyb3InO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gKG1lc3NhZ2UgfHwgXCJcIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnZhbGlkQ2FsbGJhY2sgRXJyb3JcclxuICpcclxuICogVGhyb3duIHdoZW4gYW55dGhpbmcgYnV0IGEgZnVuY3Rpb24gaXMgZ2l2ZW4gYXMgYSBjYWxsYmFjay5cclxuICpcclxuICogQHR5cGUge0Z1bmN0aW9ufVxyXG4gKi9cclxuZnVuY3Rpb24gSW52YWxpZENhbGxiYWNrKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLm5hbWUgPSAnSW52YWxpZENhbGxiYWNrJztcclxuICAgIHRoaXMubWVzc2FnZSA9IGBbbGF2YS5qc10gXCIke3R5cGVvZiBjYWxsYmFja31cIiBpcyBub3QgYSB2YWxpZCBjYWxsYmFjay5gO1xyXG59XHJcblxyXG4vKipcclxuICogSW52YWxpZExhYmVsIEVycm9yXHJcbiAqXHJcbiAqIFRocm93biB3aGVuIGEge0BsaW5rIFJlbmRlcmFibGV9IGlzIG5vdCBmb3VuZCBpbiB0aGUgbW9kdWxlLlxyXG4gKlxyXG4gKiBAdHlwZSB7RnVuY3Rpb259XHJcbiAqL1xyXG5mdW5jdGlvbiBSZW5kZXJhYmxlTm90Rm91bmQobGFiZWwpIHtcclxuICAgIHRoaXMubmFtZSA9ICdSZW5kZXJhYmxlTm90Rm91bmQnO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gYFtsYXZhLmpzXSBBIHJlbmRlcmFibGUgd2l0aCB0aGUgbGFiZWwgXCIke2xhYmVsfVwiIHdhcyBub3QgZm91bmQuYDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEVsZW1lbnRJZE5vdEZvdW5kIEVycm9yXHJcbiAqXHJcbiAqIFRocm93biB3aGVuIHRoZSBnaXZlbiBJRCBmb3IgYW4gSFRNTEVsZW1lbnQgaXMgbm90IGZvdW5kIGluIHRoZSBET00uXHJcbiAqXHJcbiAqIEB0eXBlIHtGdW5jdGlvbn1cclxuICovXHJcbmZ1bmN0aW9uIEVsZW1lbnRJZE5vdEZvdW5kKGVsZW1JZCkge1xyXG4gICAgdGhpcy5uYW1lID0gJ0VsZW1lbnRJZE5vdEZvdW5kJztcclxuICAgIHRoaXMubWVzc2FnZSA9IGBbbGF2YS5qc10gRE9NIG5vZGUgd2hlcmUgaWQ9XCIke2VsZW1JZH1cIiB3YXMgbm90IGZvdW5kLmA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEYXRhUXVlcnlFcnJvclxyXG4gKlxyXG4gKiBUaHJvd24gd2hlbiB0aGUgZ2l2ZW4gSUQgZm9yIGFuIEhUTUxFbGVtZW50IGlzIG5vdCBmb3VuZCBpbiB0aGUgRE9NLlxyXG4gKlxyXG4gKiBAdHlwZSB7RnVuY3Rpb259XHJcbiAqL1xyXG5mdW5jdGlvbiBEYXRhUXVlcnlFcnJvcihtc2cpIHtcclxuICAgIHRoaXMubmFtZSA9ICdEYXRhUXVlcnlFcnJvcic7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtc2c7XHJcbn1cclxuXHJcbkxhdmFKc0Vycm9yLnByb3RvdHlwZSAgICAgICAgPSBFcnJvci5wcm90b3R5cGU7XHJcbkludmFsaWRDYWxsYmFjay5wcm90b3R5cGUgICAgPSBMYXZhSnNFcnJvci5wcm90b3R5cGU7XHJcblJlbmRlcmFibGVOb3RGb3VuZC5wcm90b3R5cGUgPSBMYXZhSnNFcnJvci5wcm90b3R5cGU7XHJcbkVsZW1lbnRJZE5vdEZvdW5kLnByb3RvdHlwZSAgPSBMYXZhSnNFcnJvci5wcm90b3R5cGU7XHJcbkRhdGFRdWVyeUVycm9yLnByb3RvdHlwZSAgICAgPSBMYXZhSnNFcnJvci5wcm90b3R5cGU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBMYXZhSnNFcnJvcjogICAgICAgIExhdmFKc0Vycm9yLFxyXG4gICAgSW52YWxpZENhbGxiYWNrOiAgICBJbnZhbGlkQ2FsbGJhY2ssXHJcbiAgICBSZW5kZXJhYmxlTm90Rm91bmQ6IFJlbmRlcmFibGVOb3RGb3VuZCxcclxuICAgIEVsZW1lbnRJZE5vdEZvdW5kOiAgRWxlbWVudElkTm90Rm91bmQsXHJcbiAgICBEYXRhUXVlcnlFcnJvcjogICAgIERhdGFRdWVyeUVycm9yXHJcbn1cclxuIiwiLyoganNoaW50IGJyb3dzZXI6dHJ1ZSAqL1xyXG4vKiBnbG9iYWxzIGdvb2dsZSAqL1xyXG5cclxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudHMnO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi9VdGlscyc7XHJcbmltcG9ydCBFcnJvcnMgZnJvbSAnLi9FcnJvcnMnXHJcbmltcG9ydCBDaGFydCBmcm9tICcuL0NoYXJ0JztcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL0Rhc2hib2FyZCc7XHJcbmltcG9ydCBEYXRhUXVlcnkgZnJvbSAnLi9EYXRhUXVlcnknO1xyXG5pbXBvcnQgUmVuZGVyYWJsZSBmcm9tICcuL1JlbmRlcmFibGUnO1xyXG5cclxuLyoqXHJcbiAqIEdvb2dsZSBDaGFydCBBUEkgd3JhcHBlciBsaWJyYXJ5XHJcbiAqXHJcbiAqIFRoaXMgbW9kdWxlIGNhbiBiZSB1c2VkIGFzIGEgc3RhbmRhbG9uZSwgYnJvd3NlciBiYXNlZCBsaWJyYXJ5LCBvciBpblxyXG4gKiBjb25qdW5jdGlvbiB3aXRoIHRoZSBQSFAgbGlicmFyeSwgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9rZXZpbmtoaWxsL2xhdmFjaGFydHNcIj5MYXZhY2hhcnRzPC9hPi5cclxuICpcclxuICogQGNsYXNzXHJcbiAqIEBhdXRob3IgICAgS2V2aW4gSGlsbCA8a2V2aW5raGlsbEBnbWFpbC5jb20+XHJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTcsIEtldmluIEhpbGxcclxuICogQGxpY2Vuc2UgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUIE1JVFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF2YUpzIGV4dGVuZHMgRXZlbnRFbWl0dGVyXHJcbntcclxuICAgIC8vbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xyXG4gICAgLyoqXHJcbiAgICAgKiBWZXJzaW9uIG9mIHRoZSBMYXZhSnMuanMgbW9kdWxlXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xyXG4gICAgICAgIHJldHVybiAnNC4wLjByYzEnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmVyc2lvbiBvZiB0aGUgR29vZ2xlIGNoYXJ0cyBBUEkgdG8gbG9hZFxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXQgR09PR0xFX0FQSV9WRVJTSU9OKCkge1xyXG4gICAgICAgIHJldHVybiAnY3VycmVudCc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcmxzIHRvIEdvb2dsZSdzIHN0YXRpYyBsb2FkZXJcclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0IEdPT0dMRV9MT0FERVJfVVJMKCkge1xyXG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vY2hhcnRzL2xvYWRlci5qcyc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd2FibGUgZXJyb3JzIGZvciB0aGUgTGF2YUpzIG1vZHVsZVxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtFcnJvcnN9XHJcbiAgICAgKi9cclxuICAgIGdldCBHKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGM6IHRoaXMuX2dvb2dsZS5jaGFydHMsXHJcbiAgICAgICAgICAgIHY6IHRoaXMuX2dvb2dsZS52aXN1YWxpemF0aW9uXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXRpYyBhY2Nlc3NvciBmb3IgdGhlIHtAbGluayBSZW5kZXJhYmxlfSBjbGFzc1xyXG4gICAgICpcclxuICAgICAqIEBjbGFzc1xyXG4gICAgICogQHR5cGUge1JlbmRlcmFibGV9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXQgUmVuZGVyYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gUmVuZGVyYWJsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXRpYyBhY2Nlc3NvciBmb3IgdGhlIHtAbGluayBDaGFydH0gY2xhc3NcclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7Q2hhcnR9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXQgQ2hhcnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIENoYXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhdGljIGFjY2Vzc29yIGZvciB0aGUge0BsaW5rIERhc2hib2FyZH0gY2xhc3NcclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7RGFzaGJvYXJkfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0IERhc2hib2FyZCgpIHtcclxuICAgICAgICByZXR1cm4gRGFzaGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhdGljIGFjY2Vzc29yIGZvciB0aGUge0BsaW5rIERhdGFRdWVyeX0gY2xhc3NcclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7RGF0YVF1ZXJ5fVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0IERhdGFRdWVyeSgpIHtcclxuICAgICAgICByZXR1cm4gRGF0YVF1ZXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dhYmxlIGVycm9ycyBmb3IgdGhlIExhdmFKcyBtb2R1bGVcclxuICAgICAqXHJcbiAgICAgKiBAdHlwZSB7RXJyb3JzfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0IEVycm9ycygpIHtcclxuICAgICAgICByZXR1cm4gRXJyb3JzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBMYXZhSnMgbGlicmFyeVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBuZXdPcHRpb25zXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG5ld09wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBKU09OIG9iamVjdCBvZiBjb25maWcgaXRlbXNcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwdWJsaWNcclxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG5ld09wdGlvbnMgfHwgcmVxdWlyZSgnLi4vcmVzb3VyY2VzL29wdGlvbnMuanNvbicpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXQgb2YgdmlzdWFsaXphdGlvbiBwYWNrYWdlcyBmb3Ige0BsaW5rIENoYXJ0fXMgYW5kIHtAbGluayBEYXNoYm9hcmR9c1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiBAdHlwZSB7U2V0LjxTdHJpbmc+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX3BhY2thZ2VzID0gbmV3IFNldCgpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBcnJheSBvZiBjaGFydHMgYW5kIGRhc2hib2FyZHMgc3RvcmVkIGluIHRoZSBtb2R1bGVcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICogQHR5cGUge01hcC48UmVuZGVyYWJsZT59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fdm9sY2FubyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVhZHkgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIG1vZHVsZSBpcyBmaW5pc2hlZCBydW5uaW5nLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiBAdHlwZSB7RnVuY3Rpb259XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fcmVhZHlDYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvL25vaW5zcGVjdGlvbiBKU01ldGhvZENhbkJlU3RhdGljXHJcbiAgICAvKipcclxuICAgICAqIEZsYWcgdGhhdCB3aWxsIGJlIHRydWUgb25jZSB3aW5kb3cuZ29vZ2xlIGlzIGF2YWlsYWJsZSBpbiBwYWdlLlxyXG4gICAgICpcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGdldCBnb29nbGVJc0xvYWRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHdpbmRvdy5nb29nbGUgIT09ICd1bmRlZmluZWQnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmxhZyB0aGF0IHdpbGwgYmUgdHJ1ZSBvbmNlIEdvb2dsZSdzIFN0YXRpYyBMb2FkZXIgaXMgaW4gcGFnZS5cclxuICAgICAqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICovXHJcbiAgICBnZXQgZ29vZ2xlTG9hZGVySW5QYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgc2NyaXB0IG9mIHNjcmlwdHMpIHtcclxuICAgICAgICAgICAgaWYgKHNjcmlwdC5zcmMgPT09IHRoaXMuR09PR0xFX0xPQURFUl9VUkwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIGxpYnJhcnkgYnkgbG9hZGluZyBnb29nbGUgdG8gdGhlIHdpbmRvdy5cclxuICAgICAqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdvb2dsZUlzTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICAgICAgICAgIC5fbG9hZEdvb2dsZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbbGF2YS5qc10gR29vZ2xlIGlzIHJlYWR5OicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJ1bnMgdGhlIExhdmFKcy5qcyBtb2R1bGVcclxuICAgICAqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAZW1pdHMge3JlYWR5fVxyXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBbbGF2YS5qc10gdiR7TGF2YUpzLlZFUlNJT059IFJ1bm5pbmcuLi5gKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnW2xhdmEuanNdIExvYWRpbmcgb3B0aW9uczonLCB0aGlzLm9wdGlvbnMpO1xyXG5cclxuICAgICAgICB0aGlzLl9hdHRhY2hSZWRyYXdIYW5kbGVyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICAgICAgICAgIC5pbml0KClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcnVuUHJvbWlzZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl92b2xjYW5vLmZvckVhY2gocmVuZGVyYWJsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtsYXZhLmpzXSBSZW5kZXJpbmcgJHtyZW5kZXJhYmxlLnV1aWR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJ1blByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcmFibGUucnVuKClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJ1blByb21pc2VzKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW2xhdmEuanNdIFJlYWR5IScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncmVhZHknKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3JlYWR5Q2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWFkeUNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9scyxKU01ldGhvZENhbkJlU3RhdGljXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgRGF0YVF1ZXJ5fSBmb3IgYSB7QGxpbmsgUmVuZGVyYWJsZX1cclxuICAgICAqXHJcbiAgICAgKiBJZiBhIFN0cmluZyBpcyBwYXNzZWQsIHRoZW4gYSBuZXcge0BsaW5rIERhdGFRdWVyeX0gaXMgY3JlYXRlZCB3aXRoIG5vIG9wdGlvbnMuXHJcbiAgICAgKiBJZiBhbiBPYmplY3QgaXMgcGFzc2VkLCB0aGVuIHRoZSBxdWVyeSBtdXN0IGJlIGRlZmluZWQgYnkgdGhlIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHVybFxyXG4gICAgICogQHJldHVybiB7RGF0YVF1ZXJ5fVxyXG4gICAgICovXHJcbiAgICBxdWVyeSh1cmwpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGFRdWVyeSh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbm9pbnNwZWN0aW9uIEpTTWV0aG9kQ2FuQmVTdGF0aWNcclxuICAgIC8qKlxyXG4gICAgICogU3RhdGljIG1ldGhvZCBmb3IgY3JlYXRpbmcgbmV3IENoYXJ0cyBhbmQgRGFzaGJvYXJkcyBmcm9tIGEgSlNPTiBkZWZpbml0aW9uLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBKU09OIHBheWxvYWQgY2FuIGNvbWUgZnJvbSBMYXZhY2hhcnRzIG9yIG1hbnVhbGx5IGlmIHVzZWRcclxuICAgICAqIGFzIGFuIGluZGVwZW5kZW50IGxpYnJhcnkuXHJcbiAgICAgKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBqc29uIG9iamVjdCByZXByZXNlbnRpbmcgYSBDaGFydCBvciBEYXNoYm9hcmQuXHJcbiAgICAgKiBAcmV0dXJuIHtDaGFydHxEYXNoYm9hcmR9XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZShqc29uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtsYXZhLmpzXSBDcmVhdGluZyBhIG5ldyAke2pzb24udHlwZX06YCwganNvbik7XHJcblxyXG4gICAgICAgIGlmIChqc29uLnR5cGUgPT09ICdEYXNoYm9hcmQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGF2YUpzLkRhc2hib2FyZChqc29uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgTGF2YUpzLkNoYXJ0KGpzb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIG9yIGNyZWF0ZXMgdGhlbiBzdG9yZXMgYSB7QGxpbmsgUmVuZGVyYWJsZX0gd2l0aGluIHRoZSBtb2R1bGUuXHJcbiAgICAgKlxyXG4gICAgICogQHRvZG8gSWYgdGhlIGxpYnJhcnkgaGFzIHJhbiwgYW5kIGlzIHJlYWR5LCBsb2FkaW5nIG5ldyBjaGFydHMgd2lsbCBmb3JjZSBhIHJlZHJhdyBvZiBhbGwgdGhlIGN1cnJlbnRseSBkcmF3biBjaGFydHMuXHJcbiAgICAgKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R8UmVuZGVyYWJsZX0gcmVuZGVyYWJsZVxyXG4gICAgICogQHJldHVybiB7Q2hhcnR8RGFzaGJvYXJkfSBUaGUge0BsaW5rIENoYXJ0fSAvIHtAbGluayBEYXNoYm9hcmR9IHRoYXQgd2FzIGp1c3Qgc3RvcmVkLlxyXG4gICAgICovXHJcbiAgICBzdG9yZShyZW5kZXJhYmxlKSB7XHJcbiAgICAgICAgaWYgKHJlbmRlcmFibGUgaW5zdGFuY2VvZiBMYXZhSnMuUmVuZGVyYWJsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmVuZGVyYWJsZSA9IHRoaXMuY3JlYXRlKHJlbmRlcmFibGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYFtsYXZhLmpzXSBTdG9yaW5nICR7cmVuZGVyYWJsZS51dWlkfWApO1xyXG5cclxuICAgICAgICB0aGlzLl9hZGRQYWNrYWdlcyhyZW5kZXJhYmxlLnBhY2thZ2VzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdm9sY2Fuby5zZXQocmVuZGVyYWJsZS5sYWJlbCwgcmVuZGVyYWJsZSk7XHJcblxyXG4gICAgICAgIC8vaWYgKHRoaXMuaXNSZWFkeSkge1xyXG4gICAgICAgIC8vICAgIHRoaXMucmVkcmF3QWxsKCk7XHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmUgYSB7QGxpbmsgQ2hhcnR9IC8ge0BsaW5rIERhc2hib2FyZH0gZnJvbSBzdG9yYWdlLlxyXG4gICAgICpcclxuICAgICAqIFRoZSB7QGxpbmsgQ2hhcnR9IG9iamVjdCBoYXMgdGhlIHVzZXIgZGVmaW5lZCBwcm9wZXJ0aWVzIHN1Y2ggYXMgZGF0YSwgb3B0aW9ucywgZm9ybWF0cywgZXRjLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBHb29nbGUgQ2hhcnQgb2JqZWN0IGlzIGF2YWlsYWJsZSBhcyBcIi5nY2hhcnRcIiBmcm9tIHRoZSByZXR1cm5lZCBMYXZhQ2hhcnQuXHJcbiAgICAgKiBJdCBjYW4gYmUgdXNlZCB0byBhY2Nlc3MgYW55IG9mIHRoZSBhdmFpbGFibGUgbWV0aG9kcyBzdWNoIGFzXHJcbiAgICAgKiBnZXRJbWFnZVVSSSgpIG9yIGdldENoYXJ0TGF5b3V0SW50ZXJmYWNlKCkuXHJcbiAgICAgKlxyXG4gICAgICogU2VlIGh0dHBzOi8vZ29vZ2xlLWRldmVsb3BlcnMuYXBwc3BvdC5jb20vY2hhcnQvaW50ZXJhY3RpdmUvZG9jcy9nYWxsZXJ5L2xpbmVjaGFydCNtZXRob2RzXHJcbiAgICAgKiBmb3Igc29tZSBleGFtcGxlcyByZWxhdGl2ZSB0byBMaW5lQ2hhcnRzLlxyXG4gICAgICpcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbGFiZWxcclxuICAgICAqIEB0aHJvd3Mge0xhdmFKcy5FcnJvcnMuUmVuZGVyYWJsZU5vdEZvdW5kfVxyXG4gICAgICogQHJldHVybiB7Q2hhcnR8RGFzaGJvYXJkfVxyXG4gICAgICovXHJcbiAgICBnZXQobGFiZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5fdm9sY2Fuby5oYXMobGFiZWwpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTGF2YUpzLkVycm9ycy5SZW5kZXJhYmxlTm90Rm91bmQobGFiZWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZvbGNhbm8uZ2V0KGxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFzc2lnbnMgYSBjYWxsYmFjayBmb3Igd2hlbiB0aGUgY2hhcnRzIGFyZSByZWFkeSB0byBiZSBpbnRlcmFjdGVkIHdpdGguXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIHdyYXAgY2FsbHMgdG8gbGF2YS5sb2FkRGF0YSgpIG9yIGxhdmEubG9hZE9wdGlvbnMoKVxyXG4gICAgICogdG8gcHJvdGVjdCBhZ2FpbnN0IGFjY2Vzc2luZyBjaGFydHMgdGhhdCBhcmVuJ3QgbG9hZGVkIHlldFxyXG4gICAgICpcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAdGhyb3dzIHtMYXZhSnMuRXJyb3JzLkludmFsaWRDYWxsYmFja31cclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIHJlYWR5KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTGF2YUpzLkVycm9ycy5JbnZhbGlkQ2FsbGJhY2soY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVhZHlDYWxsYmFjayA9IGNhbGxiYWNrLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9ub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIG5ldyBkYXRhIGludG8gdGhlIGNoYXJ0IGFuZCByZWRyYXdzLlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBVc2VkIHdpdGggYW4gQUpBWCBjYWxsIHRvIGEgUEhQIG1ldGhvZCByZXR1cm5pbmcgRGF0YVRhYmxlLT50b0pzb24oKSxcclxuICAgICAqIGEgY2hhcnQgY2FuIGJlIGR5bmFtaWNhbGx5IHVwZGF0ZSBpbiBwYWdlLCB3aXRob3V0IHJlbG9hZHMuXHJcbiAgICAgKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxhYmVsXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ganNvblxyXG4gICAgICogQHBhcmFtIHs/RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBsb2FkRGF0YShsYWJlbCwganNvbiwgY2FsbGJhY2spIHsgLy9UT0RPOiB0ZXN0IHRoaXMgd2l0aCBmb3JtYXRzXHJcbiAgICAgICAgY29uc3QgY2hhcnQgPSB0aGlzLmdldChsYWJlbCk7XHJcblxyXG4gICAgICAgIGNoYXJ0LnNldERhdGEoanNvbik7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YganNvbi5mb3JtYXRzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjaGFydC5hcHBseUZvcm1hdHMoanNvbi5mb3JtYXRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYXJ0LmRyYXcoKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhjaGFydC5nY2hhcnQsIGNoYXJ0LmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL25vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgbmV3IG9wdGlvbnMgaW50byBhIGNoYXJ0IGFuZCByZWRyYXdzLlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBVc2VkIHdpdGggYW4gQUpBWCBjYWxsLCBvciBqYXZhc2NyaXB0IGV2ZW50cywgdG8gbG9hZCBhIG5ldyBhcnJheSBvZiBvcHRpb25zIGludG8gYSBjaGFydC5cclxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gdXBkYXRlIGEgY2hhcnQgZHluYW1pY2FsbHksIHdpdGhvdXQgcmVsb2Fkcy5cclxuICAgICAqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGFiZWxcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBqc29uXHJcbiAgICAgKiBAcGFyYW0gez9GdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGxvYWRPcHRpb25zKGxhYmVsLCBqc29uLCBjYWxsYmFjaykgeyAvL1RPRE86IHRlc3QgdGhpc1xyXG4gICAgICAgIGNvbnN0IGNoYXJ0ID0gdGhpcy5nZXQobGFiZWwpO1xyXG5cclxuICAgICAgICBjaGFydC5vcHRpb25zID0ganNvbjtcclxuICAgICAgICBjaGFydC5kcmF3KCk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soY2hhcnQuZ2NoYXJ0LCBjaGFydC5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWRyYXdzIGFsbCBvZiB0aGUgcmVnaXN0ZXJlZCBjaGFydHMgb24gc2NyZWVuLlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGF0dGFjaGVkIHRvIHRoZSB3aW5kb3cgcmVzaXplIGV2ZW50IHdpdGggZGVib3VuY2luZ1xyXG4gICAgICogdG8gbWFrZSB0aGUgY2hhcnRzIHJlc3BvbnNpdmUgdG8gdGhlIGJyb3dzZXIgcmVzaXppbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgcmVkcmF3QWxsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl92b2xjYW5vLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFtsYXZhLmpzXSBOb3RoaW5nIHRvIHJlZHJhdy5gKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBbbGF2YS5qc10gUmVkcmF3aW5nICR7dGhpcy5fdm9sY2Fuby5zaXplfSByZW5kZXJhYmxlcy5gKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdm9sY2Fuby5mb3JFYWNoKHJlbmRlcmFibGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW2xhdmEuanNdIFJlZHJhd2luZyAke3JlbmRlcmFibGUudXVpZH1gKTtcclxuXHJcbiAgICAgICAgICAgIHJlbmRlcmFibGUuZHJhdygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgdG8gdGhlIGxpc3Qgb2YgcGFja2FnZXMgdGhhdCBHb29nbGUgbmVlZHMgdG8gbG9hZC5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8U3RyaW5nW119IHBhY2thZ2VzIFNpbmdsZSBvciBhcnJheSBvZiBwYWNrYWdlIG5hbWVzIHRvIGFkZC5cclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIF9hZGRQYWNrYWdlcyhwYWNrYWdlcykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcGFja2FnZXMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhY2thZ2VzLmFkZChwYWNrYWdlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoVXRpbHMuZ2V0VHlwZShwYWNrYWdlcykgPT09ICdBcnJheScpIHtcclxuICAgICAgICAgICAgcGFja2FnZXMgPSBuZXcgU2V0KHBhY2thZ2VzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3BhY2thZ2VzID0gbmV3IFNldChbdGhpcy5fcGFja2FnZXMsIC4uLnBhY2thZ2VzXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCB0aGUgR29vZ2xlIFN0YXRpYyBMb2FkZXIgYW5kIHJlc29sdmUgdGhlIHByb21pc2Ugd2hlbiByZWFkeS5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgX2xvYWRHb29nbGUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tsYXZhLmpzXSBSZXNvbHZpbmcgR29vZ2xlLi4uJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdvb2dsZUxvYWRlckluUGFnZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW2xhdmEuanNdIFN0YXRpYyBsb2FkZXIgZm91bmQsIGluaXRpYWxpemluZyB3aW5kb3cuZ29vZ2xlJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ29vZ2xlQ2hhcnRMb2FkZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbbGF2YS5qc10gU3RhdGljIGxvYWRlciBub3QgZm91bmQsIGFwcGVuZGluZyB0byBoZWFkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICAgICAgICAgIC5fYWRkR29vZ2xlU2NyaXB0VG9IZWFkKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dvb2dsZUNoYXJ0TG9hZGVyKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUnVucyB0aGUgR29vZ2xlIENoYXJ0IExvYWRlciB1c2luZyB0aGUgcGFzc2VkIFByb21pc2UgcmVzb2x2ZXIgYXNcclxuICAgICAqIHRoZSBzZXRPbkxvYWRDYWxsYmFjayBmdW5jdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgX2dvb2dsZUNoYXJ0TG9hZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IHRoaXMub3B0aW9ucy5sb2NhbGVcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbmZpZy5wYWNrYWdlcyA9IHRoaXMuX3BhY2thZ2VzLnNpemUgPiAwID8gWy4uLnRoaXMuX3BhY2thZ2VzXSA6IFsnY29yZWNoYXJ0J107XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcHNfYXBpX2tleSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5tYXBzQXBpS2V5ID0gdGhpcy5vcHRpb25zLm1hcHNfYXBpX2tleTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tsYXZhLmpzXSBMb2FkaW5nIEdvb2dsZSB3aXRoIGNvbmZpZzonLCBjb25maWcpO1xyXG5cclxuICAgICAgICAgICAgZ29vZ2xlLmNoYXJ0cy5sb2FkKExhdmFKcy5HT09HTEVfQVBJX1ZFUlNJT04sIGNvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICBnb29nbGUuY2hhcnRzLnNldE9uTG9hZENhbGxiYWNrKHJlc29sdmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IHNjcmlwdCB0YWcgZm9yIHRoZSBHb29nbGUgU3RhdGljIExvYWRlclxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgX2FkZEdvb2dsZVNjcmlwdFRvSGVhZCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuICAgICAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgICAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2NyaXB0LnNyYyA9IExhdmFKcy5HT09HTEVfTE9BREVSX1VSTDtcclxuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnIHx8ICgvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KHNjcmlwdC5yZWFkeVN0YXRlKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JpcHQub25sb2FkID0gc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEF0dGFjaCBhIGxpc3RlbmVyIHRvIHRoZSB3aW5kb3cgcmVzaXplIGV2ZW50IGZvciByZWRyYXdpbmcgdGhlIGNoYXJ0cy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgX2F0dGFjaFJlZHJhd0hhbmRsZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXNwb25zaXZlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGxldCBkZWJvdW5jZWQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgVXRpbHMuYWRkRXZlbnQod2luZG93LCAncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IHJlZHJhdyA9IHRoaXMucmVkcmF3QWxsKCkuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoZGVib3VuY2VkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkZWJvdW5jZWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW2xhdmEuanNdIFdpbmRvdyByZS1zaXplZCwgcmVkcmF3aW5nLi4uJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkcmF3QWxsKClcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMub3B0aW9ucy5kZWJvdW5jZV90aW1lb3V0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudHMnO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi9VdGlscydcclxuaW1wb3J0IExhdmFKcyBmcm9tICcuL0xhdmFKcydcclxuXHJcbi8qKlxyXG4gKiBUaGUge0BsaW5rIFJlbmRlcmFibGV9IGNsYXNzIGlzIHRoZSBiYXNlIGZvciB7QGxpbmsgQ2hhcnR9cyBhbmQge0BsaW5rIERhc2hib2FyZH1zXHJcbiAqIHRvIHNoYXJlIGNvbW1vbiBtZXRob2RzIGJldHdlZW4gdGhlIHR3byB0eXBlcy5cclxuICpcclxuICpcclxuICogQGF1dGhvciAgICBLZXZpbiBIaWxsIDxrZXZpbmtoaWxsQGdtYWlsLmNvbT5cclxuICogQGNvcHlyaWdodCAoYykgMjAxNywgS2V2aW4gSGlsbFxyXG4gKiBAbGljZW5zZSAgIE1JVFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyYWJsZSBleHRlbmRzIEV2ZW50RW1pdHRlclxyXG57XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBSZW5kZXJhYmxlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGpzb25cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoanNvbikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERhdGFUYWJsZSBmb3IgdGhlIHtAbGluayBDaGFydH0gLyB7QGxpbmsgRGFzaGJvYXJkfS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtEYXRhVGFibGV9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHb29nbGUgY2hhcnQgb2JqZWN0IGNyZWF0ZWQgb25jZSB0aGUge0BsaW5rIENoYXJ0fSAvIHtAbGluayBEYXNoYm9hcmR9XHJcbiAgICAgICAgICogaGFzIGJlZW4gcmVuZGVyZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZ2NoYXJ0ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBGb3JtYXR0ZXJzIGZvciB0aGUgRGF0YVRhYmxlXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5mb3JtYXRzID0ganNvbi5mb3JtYXRzIHx8IFtdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUeXBlIG9mIHtAbGluayBSZW5kZXJhYmxlfS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy50eXBlID0ganNvbi50eXBlO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBVbmlxdWUgbGFiZWwgZm9yIHRoZSB7QGxpbmsgQ2hhcnR9IC8ge0BsaW5rIERhc2hib2FyZH0uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMubGFiZWwgPSBqc29uLmxhYmVsO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb25maWd1cmFibGUgb3B0aW9ucyBmb3IgdGhlIHtAbGluayBDaGFydH0gLyB7QGxpbmsgRGFzaGJvYXJkfS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBqc29uLm9wdGlvbnM7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEVsZW1lbnQgSUQgb2YgdGhlIERPTSBub2RlIGluIHdoaWNoIHRvIHJlbmRlciB0aGUge0BsaW5rIENoYXJ0fSAvIHtAbGluayBEYXNoYm9hcmR9LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9IGpzb24uZWxlbWVudElkIHx8IGpzb24uZWxlbUlkIHx8IGpzb24uY29udGFpbmVySWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBFbGVtZW50IGluIHdoaWNoIHRoZSBSZW5kZXJhYmxlIHdpbGwgYmUgZHJhd24uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHVibGljXHJcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKTtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIElEIG9mIHRoZSBlbGVtZW50IHdhcyBub3QgZm91bmQsIHRocm93IGFuIGVycm9yLlxyXG4gICAgICAgIGlmICghIHRoaXMuZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgTGF2YUpzLkVycm9ycy5FbGVtZW50SWROb3RGb3VuZCh0aGlzLmVsZW1lbnRJZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbnkgZGVwZW5kZW5jeSBvbiBcImdvb2dsZVwiIG11c3QgYmUgd2l0aGluIHRoZSBydW4oKSBzY29wZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHN0YXRpYyBsb2FkZWQgaGFzIGNvbXBsZXRlZFxyXG4gICAgICAgICAqIHJlZ2lzdGVyaW5nIHdpbmRvdy5nb29nbGVcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm4ge1Byb21pc2V9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5ydW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldHVwKGpzb24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fYXR0YWNoRXZlbnRSZWxheXMoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldERhdGEoanNvbi5kYXRhIHx8IGpzb24uZGF0YXRhYmxlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1hdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXBwbHlGb3JtYXRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fcG9zdERyYXcgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtsYXZhLmpzXSBSdW5uaW5nICR7dGhpcy51dWlkfS5wb3N0RHJhdygpYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3N0RHJhdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZ29vZ2xlLnZpc3VhbGl6YXRpb24gY2xhc3MgbmVlZGVkIGZvciByZW5kZXJpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBHb29nbGUgdmlzdWFsaXphdGlvbiBjbGFzcyBuYW1lLlxyXG4gICAgICovXHJcbiAgICBnZXQgY2xhc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIFV0aWxzLmdldFZpelByb3BzKHRoaXMudHlwZSkuY2xhc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZ29vZ2xlLnZpc3VhbGl6YXRpb24gcGFja2FnZSBuZWVkZWQgZm9yIHJlbmRlcmluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IEdvb2dsZSB2aXN1YWxpemF0aW9uIHBhY2thZ2UgbmFtZS5cclxuICAgICAqL1xyXG4gICAgZ2V0IHBhY2thZ2VzKCkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5nZXRWaXpQcm9wcyh0aGlzLnR5cGUpLnBhY2thZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHtAbGluayBDaGFydH0gLyB7QGxpbmsgRGFzaGJvYXJkfS5cclxuICAgICAqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSB7QGxpbmsgUmVuZGVyYWJsZX0uXHJcbiAgICAgKi9cclxuICAgIGdldCB1dWlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgKyAnOjonICsgdGhpcy5sYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYXdzIHRoZSB7QGxpbmsgQ2hhcnR9IC8ge0BsaW5rIERhc2hib2FyZH0gd2l0aCB0aGUgcHJlZGVmaW5lZCBkYXRhIGFuZCBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqL1xyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmdjaGFydC5kcmF3KHRoaXMuZGF0YSwgdGhpcy5vcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGRhdGEgZm9yIHRoZSB7QGxpbmsgUmVuZGVyYWJsZX0uXHJcbiAgICAgKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb258QXJyYXl8RGF0YVF1ZXJ5fERhdGFUYWJsZX0gcGF5bG9hZCBTb3VyY2Ugb2YgZGF0YVxyXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgc2V0RGF0YShwYXlsb2FkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGF5bG9hZCBpbnN0YW5jZW9mIExhdmFKcy5EYXRhUXVlcnkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbbGF2YS5qc10gU2VuZGluZyBEYXRhUXVlcnkgZm9yICR7dGhpcy51dWlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgIHBheWxvYWQuc2VuZCgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbbGF2YS5qc10gRGF0YVF1ZXJ5IGZvciAke3RoaXMudXVpZH0gY29tcGxldGUuYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuZ2V0RGF0YVRhYmxlKCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKFV0aWxzLmNyZWF0ZURhdGFUYWJsZShwYXlsb2FkKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXR0YWNoIGV2ZW50IGVtaXR0ZXJzIG9udG8gdGhlIGdvb2dsZSBjaGFydCB0byByZWxheSB0aGUgZXZlbnRzXHJcbiAgICAgKiBmb3J3YXJkIG9udG8gdGhlIGxhdmFjaGFydC5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgR29vZ2xlIENoYXJ0IGFuZCBEYXRhVGFibGUgb2JqZWN0cyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgbGlzdGVuZXJcclxuICAgICAqIGNhbGxiYWNrIGZvciBpbnRlcmFjdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBfYXR0YWNoRXZlbnRSZWxheXMoKSB7XHJcbiAgICAgICAgbGV0IGRlZmF1bHRFdmVudHMgPSBbXHJcbiAgICAgICAgICAgICdyZWFkeScsXHJcbiAgICAgICAgICAgICdzZWxlY3QnLFxyXG4gICAgICAgICAgICAnZXJyb3InLFxyXG4gICAgICAgICAgICAnb25tb3VzZW92ZXInLFxyXG4gICAgICAgICAgICAnb25tb3VzZW91dCdcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBkZWZhdWx0RXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBnb29nbGUudmlzdWFsaXphdGlvbi5ldmVudHMuYWRkTGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdjaGFydCwgZXZlbnQsICgpID0+IHRoaXMuZW1pdChldmVudCwgdGhpcy5nY2hhcnQsIHRoaXMuZGF0YSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5IHRoZSBmb3JtYXRzIHRvIHRoZSBEYXRhVGFibGVcclxuICAgICAqXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIF9hcHBseUZvcm1hdHMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZm9ybWF0IG9mIHRoaXMuZm9ybWF0cykge1xyXG4gICAgICAgICAgICBsZXQgZm9ybWF0dGVyID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uW2Zvcm1hdC50eXBlXShmb3JtYXQub3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIGBbbGF2YS5qc10gRm9ybWF0dGluZyAke3RoaXMudXVpZH0uYCxcclxuICAgICAgICAgICAgICAgIGBDb2x1bW4gWyR7Zm9ybWF0LmluZGV4fV0gbm93IGZvcm1hdHRlZCB3aXRoOmAsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXJcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGZvcm1hdHRlci5mb3JtYXQodGhpcy5kYXRhLCBmb3JtYXQuaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKiBnbG9iYWxzIGRvY3VtZW50LCBnb29nbGUgKi9cclxuXHJcbi8qKlxyXG4gKiBAaWdub3JlXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFZpelByb3BzXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBjbGFzcyBWaXN1YWxpemF0aW9uIGNsYXNzLlxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gcGFja2FnZSBWaXN1YWxpemF0aW9uIHBhY2thZ2UuXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB2ZXJzaW9uIFZpc3VhbGl6YXRpb24gdmVyc2lvbi5cclxuICovXHJcblxyXG4vKipcclxuICogQ29sbGVjdGlvbiBvZiB1dGlsaXR5IGZ1bmN0aW9ucyB1c2VkIHRocm91Z2hvdXQgdGhlIG1vZHVsZXMuXHJcbiAqXHJcbiAqIEBjbGFzc1xyXG4gKiBAYXV0aG9yICAgIEtldmluIEhpbGwgPGtldmlua2hpbGxAZ21haWwuY29tPlxyXG4gKiBAY29weXJpZ2h0IChjKSAyMDE3LCBLZXZpbiBIaWxsXHJcbiAqIEBsaWNlbnNlICAgTUlUXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsc1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHR5cGUgb2Ygb2JqZWN0LCB3aXRoIGEgY2FwaXRhbCBmaXJzdCBsZXR0ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBUaGUgdHlwZSBvZiB0aGUgZ2l2ZW4gb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRUeXBlKG9iamVjdCkge1xyXG4gICAgICAgIGxldCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0eXBlLnJlcGxhY2UoJ1tvYmplY3QgJywgJycpLnJlcGxhY2UoJ10nLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaW1wbGUgUHJvbWlzZSBmb3IgdGhlIERPTSB0byBiZSByZWFkeS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZG9tTG9hZGVkKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHJlc29sdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRob2QgZm9yIGF0dGFjaGluZyBldmVudHMgdG8gb2JqZWN0cy5cclxuICAgICAqIEBsaW5rIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMxNTAxMzkgQ3JlZGl0IHRvIEFsZXggVi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICB0YXJnZXQgICAgICBUYXJnZXQgb2JqZWN0IHRvIGF0dGFjaCB0aGUgZXZlbnQgdG8uXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gICB0eXBlICAgICAgICBUeXBlIG9mIGV2ZW50LlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgICAgQ2FsbGJhY2sgdG8gZmlyZSB3aGVuIHRoZSBldmVudCBoYXBwZW5zLlxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSAgZXZlbnRSZXR1cm5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZEV2ZW50KHRhcmdldCwgdHlwZSwgY2FsbGJhY2ssIGV2ZW50UmV0dXJuKSB7XHJcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gbnVsbCB8fCB0eXBlb2YgdGFyZ2V0ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGV2ZW50UmV0dXJuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGFyZ2V0LmF0dGFjaEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRhcmdldC5hdHRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0YXJnZXRbXCJvblwiICsgdHlwZV0gPSBjYWxsYmFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgdmlzdWFsaXphdGlvbiBwcm9wZXJ0aWVzIG9mIHRoZSBnaXZlbiBjaGFydCB0eXBlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjaGFydFR5cGUgVHlwZSBvZiBjaGFydCBmb3IgbG9va3VwLlxyXG4gICAgICogQHJldHVybiB7Vml6UHJvcHN9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRWaXpQcm9wcyhjaGFydFR5cGUpIHtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0eU1hcCA9IHJlcXVpcmUoJy4uL3Jlc291cmNlcy92aXN1YWxpemF0aW9uLW1hcC5qc29uJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9wZXJ0eU1hcFtjaGFydFR5cGVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZGF0YSBmb3IgdGhlIGNoYXJ0IGJ5IGNyZWF0aW5nIGEgbmV3IERhdGFUYWJsZVxyXG4gICAgICpcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fEZ1bmN0aW9ufEFycmF5fSBwYXlsb2FkIEpzb24gcmVwcmVzZW50YXRpb24gb2YgYSBEYXRhVGFibGVcclxuICAgICAqIEByZXR1cm4ge0RhdGFUYWJsZX1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZURhdGFUYWJsZShwYXlsb2FkKSB7XHJcbiAgICAgICAgLy8gSWYgYSBmdW5jdGlvbiBpcyByZWNlaXZlZCwgdGhlbiBjcmVhdGUgYW4gbmV3IERhdGFUYWJsZSBhbmQgcGFzcyBpdCB0byB0aGVcclxuICAgICAgICAvLyBmdW5jdGlvbiBmb3IgdXNlciBtb2RpZmljYXRpb25zLlxyXG4gICAgICAgIGlmIChVdGlscy5nZXRUeXBlKHBheWxvYWQpID09PSAnRnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXlsb2FkKG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhbiBBcnJheSBpcyByZWNlaXZlZCwgdGhlbiBhdHRlbXB0IHRvIHVzZSBwYXJzZSB3aXRoIGFycmF5VG9EYXRhVGFibGUuXHJcbiAgICAgICAgaWYgKFV0aWxzLmdldFR5cGUocGF5bG9hZCkgPT09ICdBcnJheScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdvb2dsZS52aXN1YWxpemF0aW9uLmFycmF5VG9EYXRhVGFibGUocGF5bG9hZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTaW5jZSBHb29nbGUgY29tcGlsZXMgdGhlaXIgY2xhc3Nlcywgd2UgY2FuJ3QgdXNlIGluc3RhbmNlb2YgdG8gY2hlY2sgc2luY2VcclxuICAgICAgICAvLyBpdCBpcyBubyBsb25nZXIgY2FsbGVkIGEgXCJEYXRhVGFibGVcIiAoaXQncyBcImd2anNfUFwiIGJ1dCB0aGF0IGNvdWxkIGNoYW5nZS4uLilcclxuICAgICAgICAvLyBJZiB0aGlzIGNoZWNrIHBhc3NlcywgdGhlbiBpdCBhbHJlYWR5IGlzIGEgRGF0YVRhYmxlXHJcbiAgICAgICAgaWYgKFV0aWxzLmdldFR5cGUocGF5bG9hZC5nZXRUYWJsZVByb3BlcnRpZXMpID09PSAnRnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXlsb2FkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYSBwaHAgRGF0YVRhYmxlLT50b0pzb24oKSBwYXlsb2FkIGlzIHJlY2VpdmVkLCB3aXRoIGZvcm1hdHRlZCBjb2x1bW5zLFxyXG4gICAgICAgIC8vIHRoZW4gcGF5bG9hZC5kYXRhIHdpbGwgYmUgZGVmaW5lZCwgYW5kIHVzZWQgYXMgdGhlIERhdGFUYWJsZVxyXG4gICAgICAgIGlmIChVdGlscy5nZXRUeXBlKHBheWxvYWQuZGF0YSkgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHBheWxvYWQgPSBwYXlsb2FkLmRhdGE7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGUgcGF5bG9hZCBpcyBmcm9tIHRoZSBwaHAgY2xhc3MgSm9pbmVkRGF0YVRhYmxlLT50b0pzb24oKSwgdGhlbiBjcmVhdGVcclxuICAgICAgICAvLyB0d28gbmV3IERhdGFUYWJsZXMgYW5kIGpvaW4gdGhlbSB3aXRoIHRoZSBkZWZpbmVkIG9wdGlvbnMuXHJcbiAgICAgICAgaWYgKFV0aWxzLmdldFR5cGUocGF5bG9hZC5kYXRhKSA9PT0gJ0FycmF5Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZ29vZ2xlLnZpc3VhbGl6YXRpb24uZGF0YS5qb2luKFxyXG4gICAgICAgICAgICAgICAgbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZShwYXlsb2FkLmRhdGFbMF0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZShwYXlsb2FkLmRhdGFbMV0pLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5rZXlzLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5qb2luTWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5kdDJDb2x1bW5zLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5kdDJDb2x1bW5zXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB3ZSByZWFjaCBoZXJlLCB0aGVuIGl0IG11c3QgYmUgc3RhbmRhcmQgSlNPTiBmb3IgY3JlYXRpbmcgYSBEYXRhVGFibGUuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUocGF5bG9hZCk7XHJcbiAgICB9XHJcbn0iXX0=
