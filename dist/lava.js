(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Utils = require('./src/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _LavaJs = require('./src/LavaJs');

var _LavaJs2 = _interopRequireDefault(_LavaJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Assign the LavaJs.js module to the window.
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

},{"./src/LavaJs":7,"./src/Utils":9}],2:[function(require,module,exports){
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

            this._attachEventRelays();

            // TODO: append Lavachart defined events?
            // if (this.events) {
            //     this._attachEvents();
            // }
        }

        /**
         * Actions to perform once the {@link Chart} has been drawn
         *
         * This method will have access to window.google since it is called
         * within the render method.
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
         * Apply the formats to the DataTable
         *
         * @private
         * @param {Object[]} formats Array of format objects to apply.
         */

    }, {
        key: '_applyFormats',
        value: function _applyFormats(formats) {
            if (!formats) {
                formats = this.formats;
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = formats[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var format = _step.value;

                    var formatter = new google.visualization[format.type](format.options);

                    console.log('[lava.js] Column index [' + format.index + '] formatted with:', formatter);

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

},{"./Renderable":8}],4:[function(require,module,exports){
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

            this._attachEventRelays();
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

},{"./Renderable":8}],5:[function(require,module,exports){
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

},{"./LavaJs":7}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

    _createClass(LavaJs, null, [{
        key: 'VERSION',

        //noinspection JSUnusedGlobalSymbols
        /**
         * Version of the LavaJs.js module
         *
         * @public
         * @type {String}
         */
        get: function get() {
            return '4.0.0rc1';
        }

        /**
         * Version of the Google charts API to load
         *
         * @public
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
         * @public
         * @type {String}
         */

    }, {
        key: 'GOOGLE_LOADER_URL',
        get: function get() {
            return 'https://www.gstatic.com/charts/loader.js';
        }

        /**
         * Static accessor for the {@link Chart} class
         *
         * @class
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
         * @class
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
         * @class
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
         * @class
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

        //noinspection JSUnusedGlobalSymbols
        /**
         * A flag that will be set once the library is ready.
         *
         * @type {Boolean}
         */
        var _this = _possibleConstructorReturn(this, (LavaJs.__proto__ || Object.getPrototypeOf(LavaJs)).call(this));

        _this.isReady = false;

        /**
         * JSON object of config items
         *
         * @public
         * @type {Object}
         */
        _this.options = newOptions || require('./resources/options.json');

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

    /**
     * Flag that will be true once Google's Static Loader is in page.
     *
     * @public
     * @return {Boolean}
     */


    _createClass(LavaJs, [{
        key: 'query',


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
            console.log('Creating a new ' + json.type + ':', json);

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
            if (renderable instanceof _Renderable2.default === false) {
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
         * Initializes the library by loading google to the window.
         *
         * @return {Promise}
         */

    }, {
        key: 'init',
        value: function init() {
            return this._loadGoogle().then(function () {
                console.log('[lava.js] Google is ready.');
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

            console.log('[lava.js] Running...');
            console.log('[lava.js] Loading options:', this.options);

            this._attachRedrawHandler();

            return this.init().then(function () {
                _this2._volcano.forEach(function (renderable) {
                    console.log('[lava.js] Rendering ' + renderable.uuid);

                    renderable.render();
                });
            }).then(function () {
                console.log('[lava.js] Ready; Firing "ready" event.');

                _this2.isReady = true;

                _this2.emit('ready');

                if (typeof _this2._readyCallback === 'function') {
                    console.log('[lava.js] Running lava.ready(callback);');

                    _this2._readyCallback();
                }
            });
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

            chart.setOptions(json);
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
         * Attach a listener to the window resize event for redrawing the charts.
         *
         * @private
         * @return {void}
         */

    }, {
        key: '_attachRedrawHandler',
        value: function _attachRedrawHandler() {
            var _this3 = this;

            if (this.options.responsive === true) {
                var debounced = null;

                _Utils2.default.addEvent(window, 'resize', function () {
                    // let redraw = this.redrawAll().bind(this);

                    clearTimeout(debounced);

                    debounced = setTimeout(function () {
                        console.log('[lava.js] Window re-sized, redrawing...');

                        // redraw();
                        _this3.redrawAll();
                    }, _this3.options.debounce_timeout);
                });
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
            var _this4 = this;

            return new Promise(function (resolve) {
                console.log('[lava.js] Resolving Google...');

                if (_this4.googleIsLoaded) {
                    console.log('[lava.js] Static loader found, initializing window.google');

                    return _this4._googleChartLoader(resolve);
                }

                console.log('[lava.js] Static loader not found, appending to head');

                return _this4._addGoogleScriptToHead().then(function () {
                    return _this4._googleChartLoader(resolve);
                });
            });
        }

        /**
         * Runs the Google Chart Loader using the passed Promise resolver as
         * the setOnLoadCallback function.
         *
         * @private
         * @param {Promise.resolve} resolve Promise resolver.
         */

    }, {
        key: '_googleChartLoader',
        value: function _googleChartLoader(resolve) {
            var config = {
                language: this.options.locale
            };

            if (this._packages.size > 0) {
                config.packages = [].concat(_toConsumableArray(this._packages));
            } else {
                config.packages = ['corechart'];
            }

            if (this.options.maps_api_key !== '') {
                config.mapsApiKey = this.options.maps_api_key;
            }

            console.log('[lava.js] Loading Google with config:', config);

            google.charts.load(LavaJs.GOOGLE_API_VERSION, config);

            google.charts.setOnLoadCallback(resolve);
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
    }, {
        key: 'googleIsLoaded',
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

},{"./Chart":3,"./Dashboard":4,"./DataQuery":5,"./Errors":6,"./Renderable":8,"./Utils":9,"./resources/options.json":10,"events":2}],8:[function(require,module,exports){
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
         * Any dependency on "google" must be within the render scope.
         *
         * @return {void}
         */
        _this.render = function () {
            _this._setup(json);

            _this.setData(json.data || json.datatable).then(function () {
                _this.draw();
            }).then(function () {
                if (typeof _this._postDraw === 'function') {
                    console.log('[lava.js] Running ' + _this.uuid + '#postDraw');

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
         * @return {Promise}
         */
        value: function draw() {
            this.gchart.draw(this.data, this.options);

            return Promise.resolve();
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
         * Set the options for the {@link Renderable}.
         *
         * @public
         * @param {Object} options
         * @return {Renderable}
         */

    }, {
        key: 'setOptions',
        value: function setOptions(options) {
            this.options = options;

            return this;
        }

        /**
         * Attach event emitters onto the google chart to relay the events
         * forward onto the lavachart.
         *
         * The Google Chart and DataTable objects will be passed to the listener
         * callback for interaction.
         *
         * @private
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

},{"./LavaJs":7,"./Utils":9,"events":2}],9:[function(require,module,exports){
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
            var propertyMap = require('./resources/visualization-map.json');

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

                // TODO: if the DataTable has formats, then handle them here.
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

},{"./resources/visualization-map.json":11}],10:[function(require,module,exports){
module.exports={
  "auto_run"        : false,
  "locale"          : "en",
  "timezone"        : "America/Los_Angeles",
  "datetime_format" : "",
  "maps_api_key"    : "",
  "responsive"      : true,
  "debounce_timeout": 250
}
},{}],11:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwic3JjXFxDaGFydC5qcyIsInNyY1xcRGFzaGJvYXJkLmpzIiwic3JjXFxEYXRhUXVlcnkuanMiLCJzcmNcXEVycm9ycy5qcyIsInNyY1xcTGF2YUpzLmpzIiwic3JjXFxSZW5kZXJhYmxlLmpzIiwic3JjXFxVdGlscy5qcyIsInNyYy9yZXNvdXJjZXMvb3B0aW9ucy5qc29uIiwic3JjL3Jlc291cmNlcy92aXN1YWxpemF0aW9uLW1hcC5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNHQTs7OztBQUNBOzs7Ozs7QUFFQTs7O0FBTkE7QUFDQTs7QUFRQSxPQUFPLElBQVAsR0FBYyxzQkFBZDs7QUFFQTs7OztBQUlBLElBQUksT0FBTyxXQUFQLEtBQXVCLFdBQTNCLEVBQXdDO0FBQ3BDLFNBQU8sSUFBUCxDQUFZLE9BQVosR0FBc0IsV0FBdEI7QUFDSDs7QUFFRDs7Ozs7OztBQU9BLElBQUksT0FBTyxJQUFQLENBQVksT0FBWixDQUFvQixRQUFwQixLQUFpQyxJQUFyQyxFQUEyQztBQUN2QyxrQkFBTSxTQUFOLEdBQWtCLElBQWxCLENBQXVCLFlBQU07QUFDekIsV0FBTyxJQUFQLENBQVksR0FBWjtBQUNILEdBRkQ7QUFHSDs7O0FDOUJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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dGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoganNoaW50IGJyb3dzZXI6dHJ1ZSAqL1xyXG4vKiBnbG9iYWxzIF9fT1BUSU9OU19fICovXHJcblxyXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi9zcmMvVXRpbHMnO1xyXG5pbXBvcnQgTGF2YUpzIGZyb20gJy4vc3JjL0xhdmFKcyc7XHJcblxyXG4vKipcclxuICogQXNzaWduIHRoZSBMYXZhSnMuanMgbW9kdWxlIHRvIHRoZSB3aW5kb3cuXHJcbiAqL1xyXG53aW5kb3cubGF2YSA9IG5ldyBMYXZhSnMoKTtcclxuXHJcbi8qKlxyXG4gKiBJZiBMYXZhSnMgd2FzIGxvYWRlZCBmcm9tIExhdmFjaGFydHMsIHRoZSBfX09QVElPTlNfX1xyXG4gKiBwbGFjZWhvbGRlciB3aWxsIGJlIGEgSlNPTiBvYmplY3Qgb2Ygb3B0aW9ucy5cclxuICovXHJcbmlmICh0eXBlb2YgX19PUFRJT05TX18gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB3aW5kb3cubGF2YS5vcHRpb25zID0gX19PUFRJT05TX187XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJZiB0aGUgbW9kdWxlIGlzIGdldHRpbmcgcmFuIGZyb20gTGF2YWNoYXJ0cywgdGhlbiBhdXRvX3J1blxyXG4gKiB3aWxsIGJlIHRydWUgYW5kIG9uY2UgdGhlIERPTSBpcyByZWFkeSwgcmVuZGVyaW5nIHdpbGwgYmVnaW4uXHJcbiAqXHJcbiAqIElmIHRoZSBtb2R1bGUgaXMgcmFuIGFzIGEgSlMgbGlicmFyeSwgdGhlbiBhdXRvX3J1biBkZWZhdWx0c1xyXG4gKiB0byBmYWxzZSBzbyB0aGUgdXNlciBjYW4gc2V0dXAgdGhlIGNoYXJ0cyBhbmQgY2FsbCAucnVuKClcclxuICovXHJcbmlmICh3aW5kb3cubGF2YS5vcHRpb25zLmF1dG9fcnVuID09PSB0cnVlKSB7XHJcbiAgICBVdGlscy5kb21Mb2FkZWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICB3aW5kb3cubGF2YS5ydW4oKTtcclxuICAgIH0pO1xyXG59XHJcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuICgnICsgZXIgKyAnKScpO1xuICAgICAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChoYW5kbGVyKSkge1xuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcbiAgICBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBtO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG4gICAgdGhpcy5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgIGlzRnVuY3Rpb24obGlzdGVuZXIubGlzdGVuZXIpID9cbiAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gIGVsc2UgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZVxuICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSAmJiAhdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCkge1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuICAgICAgbSA9IHRoaXMuX21heExpc3RlbmVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIGlmIChtICYmIG0gPiAwICYmIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGggPiBtKSB7XG4gICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJyhub2RlKSB3YXJuaW5nOiBwb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5ICcgK1xuICAgICAgICAgICAgICAgICAgICAnbGVhayBkZXRlY3RlZC4gJWQgbGlzdGVuZXJzIGFkZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5sZW5ndGgpO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnRyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgZmlyZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBnKCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgZyk7XG5cbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgdGhpcy5vbih0eXBlLCBnKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIGxpc3QsIHBvc2l0aW9uLCBsZW5ndGgsIGk7XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gIHBvc2l0aW9uID0gLTE7XG5cbiAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG4gICAgICAoaXNGdW5jdGlvbihsaXN0Lmxpc3RlbmVyKSAmJiBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGlzdCkpIHtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG4gICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAobGlzdFtpXS5saXN0ZW5lciAmJiBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikpIHtcbiAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBrZXksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICByZXR1cm4gdGhpcztcblxuICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gIGlmICghdGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICBlbHNlIGlmICh0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxpc3RlbmVycykpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gIH0gZWxzZSBpZiAobGlzdGVuZXJzKSB7XG4gICAgLy8gTElGTyBvcmRlclxuICAgIHdoaWxlIChsaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcbiAgfVxuICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciByZXQ7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbdHlwZV0pXG4gICAgcmV0ID0gW107XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSBbdGhpcy5fZXZlbnRzW3R5cGVdXTtcbiAgZWxzZVxuICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuICByZXR1cm4gcmV0O1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24odHlwZSkge1xuICBpZiAodGhpcy5fZXZlbnRzKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgICBpZiAoaXNGdW5jdGlvbihldmxpc3RlbmVyKSlcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGV2bGlzdGVuZXIpXG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbiIsImltcG9ydCBSZW5kZXJhYmxlIGZyb20gJy4vUmVuZGVyYWJsZSc7XHJcblxyXG4vKipcclxuICogQ2hhcnQgQ2xhc3NcclxuICpcclxuICogQGF1dGhvciAgICBLZXZpbiBIaWxsIDxrZXZpbmtoaWxsQGdtYWlsLmNvbT5cclxuICogQGNvcHlyaWdodCAoYykgMjAxNywgS2V2aW4gSGlsbFxyXG4gKiBAbGljZW5zZSAgIE1JVFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBSZW5kZXJhYmxlXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IENoYXJ0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBqc29uIEpTT04gb2JqZWN0IHJlcHJlc2VudGluZyBhIENoYXJ0LlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHtcclxuICAgICAqICAgICBsYWJlbDogXCJUZXN0XCIsXHJcbiAgICAgKiAgICAgdHlwZTogXCJQaWVDaGFydFwiLFxyXG4gICAgICogICAgIGVsZW1lbnRJZDogXCJteS1waWUtY2hhcnRcIixcclxuICAgICAqICAgICBkYXRhdGFibGU6IFtcclxuICAgICAqICAgICAgICAgWydUYXNrJywgJ0hvdXJzIHBlciBEYXknXSxcclxuICAgICAqICAgICAgICAgWydXb3JrJywgICAgIDExXSxcclxuICAgICAqICAgICAgICAgWydFYXQnLCAgICAgIDJdLFxyXG4gICAgICogICAgICAgICBbJ0NvbW11dGUnLCAgMl0sXHJcbiAgICAgKiAgICAgICAgIFsnV2F0Y2ggVFYnLCAyXSxcclxuICAgICAqICAgICAgICAgWydTbGVlcCcsICAgIDddXHJcbiAgICAgKiAgICAgXSxcclxuICAgICAqICAgICBvcHRpb25zOiB7XHJcbiAgICAgKiAgICAgICAgIHRpdGxlOiAnTXkgRGFpbHkgQWN0aXZpdGllcydcclxuICAgICAqICAgICB9XHJcbiAgICAgKiB9XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yIChqc29uKSB7XHJcbiAgICAgICAgc3VwZXIoanNvbik7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElmIHRoaXMgaXMgc2V0IHRvIHRydWUsIHRoZW4gdGhlIHtAbGluayBDaGFydH0gd2lsbCBiZSBvdXRwdXQgYXMgYSBQTkdcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucG5nT3V0cHV0ID0gQm9vbGVhbihqc29uLnBuZ091dHB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBY3Rpb25zIHRvIHBlcmZvcm0gYmVmb3JlIGRyYXdpbmcgdGhlIHtAbGluayBDaGFydH1cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIGhhdmUgYWNjZXNzIHRvIHdpbmRvdy5nb29nbGUgc2luY2UgaXQgaXMgY2FsbGVkXHJcbiAgICAgKiB3aXRoaW4gdGhlIHJlbmRlciBtZXRob2QuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3NldHVwKCkge1xyXG4gICAgICAgIHRoaXMuZ2NoYXJ0ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uW3RoaXMuY2xhc3NdKHRoaXMuZWxlbWVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2F0dGFjaEV2ZW50UmVsYXlzKCk7XHJcblxyXG4gICAgICAgIC8vIFRPRE86IGFwcGVuZCBMYXZhY2hhcnQgZGVmaW5lZCBldmVudHM/XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuZXZlbnRzKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuX2F0dGFjaEV2ZW50cygpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFjdGlvbnMgdG8gcGVyZm9ybSBvbmNlIHRoZSB7QGxpbmsgQ2hhcnR9IGhhcyBiZWVuIGRyYXduXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBoYXZlIGFjY2VzcyB0byB3aW5kb3cuZ29vZ2xlIHNpbmNlIGl0IGlzIGNhbGxlZFxyXG4gICAgICogd2l0aGluIHRoZSByZW5kZXIgbWV0aG9kLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9wb3N0RHJhdygpIHtcclxuICAgICAgICBpZiAodGhpcy5wbmdPdXRwdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHJhd1BuZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYXdzIHRoZSBjaGFydCBhcyBhIFBORyBpbnN0ZWFkIG9mIHRoZSBzdGFuZGFyZCBTVkdcclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9jaGFydC9pbnRlcmFjdGl2ZS9kb2NzL3ByaW50aW5nXHJcbiAgICAgKi9cclxuICAgIF9kcmF3UG5nKCkge1xyXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHRoaXMuZ2NoYXJ0LmdldEltYWdlVVJJKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5IHRoZSBmb3JtYXRzIHRvIHRoZSBEYXRhVGFibGVcclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gZm9ybWF0cyBBcnJheSBvZiBmb3JtYXQgb2JqZWN0cyB0byBhcHBseS5cclxuICAgICAqL1xyXG4gICAgX2FwcGx5Rm9ybWF0cyhmb3JtYXRzKSB7XHJcbiAgICAgICAgaWYgKCEgZm9ybWF0cykge1xyXG4gICAgICAgICAgICBmb3JtYXRzID0gdGhpcy5mb3JtYXRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgZm9ybWF0IG9mIGZvcm1hdHMpIHtcclxuICAgICAgICAgICAgbGV0IGZvcm1hdHRlciA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbltmb3JtYXQudHlwZV0oZm9ybWF0Lm9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFtsYXZhLmpzXSBDb2x1bW4gaW5kZXggWyR7Zm9ybWF0LmluZGV4fV0gZm9ybWF0dGVkIHdpdGg6YCwgZm9ybWF0dGVyKTtcclxuXHJcbiAgICAgICAgICAgIGZvcm1hdHRlci5mb3JtYXQodGhpcy5kYXRhLCBmb3JtYXQuaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEF0dGFjaCB0aGUgZGVmaW5lZCBjaGFydCBldmVudCBoYW5kbGVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgX2F0dGFjaEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKChjYWxsYmFjaywgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSB3aW5kb3c7XHJcbiAgICAgICAgICAgIGxldCBmdW5jID0gY2FsbGJhY2s7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dCA9IGNvbnRleHRbY2FsbGJhY2tbMF1dO1xyXG4gICAgICAgICAgICAgICAgZnVuYyA9IGNhbGxiYWNrWzFdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW2xhdmEuanNdIFRoZSBcIiR7dGhpcy51dWlkfTo6JHtldmVudH1cIiBldmVudCB3aWxsIGJlIGhhbmRsZWQgYnkgXCIke2Z1bmN9XCIgaW4gdGhlIGNvbnRleHRgLCBjb250ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBTZXQgdGhlIGNvbnRleHQgb2YgXCJ0aGlzXCIgd2l0aGluIHRoZSB1c2VyIHByb3ZpZGVkIGNhbGxiYWNrIHRvIHRoZVxyXG4gICAgICAgICAgICAgKiBjaGFydCB0aGF0IGZpcmVkIHRoZSBldmVudCB3aGlsZSBwcm92aWRpbmcgdGhlIGRhdGF0YWJsZSBvZiB0aGUgY2hhcnRcclxuICAgICAgICAgICAgICogdG8gdGhlIGNhbGxiYWNrIGFzIGFuIGFyZ3VtZW50LlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZ29vZ2xlLnZpc3VhbGl6YXRpb24uZXZlbnRzLmFkZExpc3RlbmVyKHRoaXMuZ2NoYXJ0LCBldmVudCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhbGxiYWNrID0gY29udGV4dFtmdW5jXS5iaW5kKHRoaXMuZ2NoYXJ0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVuZGVyYWJsZSBmcm9tICcuL1JlbmRlcmFibGUnO1xyXG5cclxuLyoqXHJcbiAqIERhc2hib2FyZCBDbGFzc1xyXG4gKlxyXG4gKiBAY2xhc3NcclxuICogQG1vZHVsZSAgICBtb2R1bGU6TGF2YUpzL0Rhc2hib2FyZFxyXG4gKiBAYXV0aG9yICAgIEtldmluIEhpbGwgPGtldmlua2hpbGxAZ21haWwuY29tPlxyXG4gKiBAY29weXJpZ2h0IChjKSAyMDE3LCBLZXZpbiBIaWxsXHJcbiAqIEBsaWNlbnNlICAgTUlUXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZW5kZXJhYmxlXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IERhc2hib2FyZFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBqc29uIEpTT04gb2JqZWN0IHJlcHJlc2VudGluZyBhIERhc2hib2FyZC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoanNvbikge1xyXG4gICAgICAgIGpzb24udHlwZSA9ICdEYXNoYm9hcmQnO1xyXG5cclxuICAgICAgICBzdXBlcihqc29uKTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kaW5ncyA9IGpzb24uYmluZGluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBY3Rpb25zIHRvIHBlcmZvcm0gYmVmb3JlIGRyYXdpbmcgdGhlIHtAbGluayBEYXNoYm9hcmR9XHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBoYXZlIGFjY2VzcyB0byB3aW5kb3cuZ29vZ2xlIHNpbmNlIGl0IGlzIGNhbGxlZFxyXG4gICAgICogd2l0aGluIHRoZSByZW5kZXIgbWV0aG9kLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9zZXR1cCgpIHtcclxuICAgICAgICB0aGlzLmdjaGFydCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXNoYm9hcmQodGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5fYXR0YWNoRXZlbnRSZWxheXMoKTtcclxuICAgICAgICB0aGlzLl9hdHRhY2hCaW5kaW5ncygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvY2VzcyBhbmQgYXR0YWNoIHRoZSBiaW5kaW5ncyB0byB0aGUgZGFzaGJvYXJkLlxyXG4gICAgICpcclxuICAgICAqIEBUT0RPOiBOZWVkcyB0byBiZSBtb2RpZmllZCBhbmQgdGVzdGVkIGZvciB0aGUgb3RoZXIgdHlwZXMgb2YgYmluZGluZ3MuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgX2F0dGFjaEJpbmRpbmdzKCkge1xyXG4gICAgICAgIGZvciAobGV0IGJpbmRpbmcgb2YgdGhpcy5iaW5kaW5ncykge1xyXG4gICAgICAgICAgICBsZXQgY29udHJvbFdyYXBzID0gW107XHJcbiAgICAgICAgICAgIGxldCBjaGFydFdyYXBzID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBjb250cm9sV3JhcCBvZiBiaW5kaW5nLmNvbnRyb2xXcmFwcGVycykge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbFdyYXBzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbnRyb2xXcmFwcGVyKGNvbnRyb2xXcmFwKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgY2hhcnRXcmFwIG9mIGJpbmRpbmcuY2hhcnRXcmFwcGVycykge1xyXG4gICAgICAgICAgICAgICAgY2hhcnRXcmFwcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFdyYXBwZXIoY2hhcnRXcmFwKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nY2hhcnQuYmluZChjb250cm9sV3JhcHMsIGNoYXJ0V3JhcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgTGF2YUpzIGZyb20gJy4vTGF2YUpzJztcclxuXHJcbi8qKlxyXG4gKiBVc2VkIGZvciBsb2FkaW5nIHJlbW90ZSBkYXRhIGFzIGEge0BsaW5rIERhdGFUYWJsZX1cclxuICpcclxuICogQHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9jaGFydC9pbnRlcmFjdGl2ZS9kb2NzL3JlZmVyZW5jZSNRdWVyeVxyXG4gKiBAY2xhc3NcclxuICogQGF1dGhvciAgICBLZXZpbiBIaWxsIDxrZXZpbmtoaWxsQGdtYWlsLmNvbT5cclxuICogQGNvcHlyaWdodCAoYykgMjAxNywgS2V2aW4gSGlsbFxyXG4gKiBAbGljZW5zZSAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQgTUlUXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhUXVlcnlcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgRGF0YVF1ZXJ5IGZvciBhIERhdGFUYWJsZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih1cmwpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBVUkwgb2YgeW91ciBEYXRhc291cmNlXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBPcHRpb25hbCByZXF1ZXN0IG9wdGlvbnNcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vcHRzID0ge307XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhbGxiYWNrIGZvciBhY2Nlc3NpbmcgdGhlIHF1ZXJ5IG9iamVjdCBiZWZvcmUgc2VuZFxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9jaGFydC9pbnRlcmFjdGl2ZS9kb2NzL3JlZmVyZW5jZSNRdWVyeVxyXG4gICAgICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vY2hhcnQvaW50ZXJhY3RpdmUvZG9jcy9xdWVyeWxhbmd1YWdlXHJcbiAgICAgICAgICogQHR5cGUge0Z1bmN0aW9ufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucXVlcnkgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBwYXNzZWQgcGFyYW0gaXMgYW4gT2JqZWN0LCB1cyBpdCB0byBjb25maWd1cmUgdGhlIERhdGFRdWVyeVxyXG4gICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyZSh1cmwpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGUgdGhpcy51cmwgaXMgc3RpbGwgbm90IGEgc3RyaW5nIGFmdGVyIC5jb25maWd1cmUoKSwgZXJyb3Igb3V0LlxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy51cmwgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBMYXZhSnMuRXJyb3JzLkRhdGFRdWVyeUVycm9yKFxyXG4gICAgICAgICAgICAgICAgJ1widXJsXCIgaXMgbXVzdCBiZSBhIHN0cmluZy4nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlIHRoZSBEYXRhUXVlcnlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICBjb25maWcgICAgICAgQ29uZmlndXJhdGlvbiBvYmplY3QgZm9yIHRoZSBEYXRhUXVlcnlcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSAgIGNvbmZpZy51cmwgICBDb3JyZXNwb25kcyB0byBcImRhdGFTb3VyY2VVcmxcIiBpbiBHb29nbGUncyBkb2NzXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICBjb25maWcub3B0cyAgQ29ycmVzcG9uZHMgdG8gXCJvcHRfb3B0aW9uc1wiIGluIEdvb2dsZSdzIGRvY3NcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbmZpZy5xdWVyeSBUaGUgY3VycmVudCBxdWVyeSBpcyBwYXNzZWQgZm9yIG1vZGlmaWNhdGlvbiBiZWZvcmUgc2VuZGluZ1xyXG4gICAgICovXHJcbiAgICBjb25maWd1cmUoe3VybCwgb3B0cz17fSwgcXVlcnl9KSB7XHJcbiAgICAgICAgaWYgKCEgdXJsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBMYXZhSnMuRXJyb3JzLkRhdGFRdWVyeUVycm9yKFxyXG4gICAgICAgICAgICAgICAgJ1widXJsXCIgaXMgYSBtYW5kYXRvcnkgcGFyYW1ldGVyIGZvciBjb25maWd1cmluZyBhIERhdGFRdWVyeS4nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVybCAgID0gdXJsO1xyXG4gICAgICAgIHRoaXMub3B0cyAgPSBvcHRzO1xyXG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcclxuICAgIH1cclxuXHJcbiAgICAvL25vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcclxuICAgIC8qKlxyXG4gICAgICogU2VuZCB0aGUgRGF0YVF1ZXJ5XHJcbiAgICAgKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgc2VuZCgpIHtcclxuICAgICAgICBsZXQgcXVlcnkgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uUXVlcnkodGhpcy51cmwsIHRoaXMub3B0cyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5ID0gdGhpcy5xdWVyeShxdWVyeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBxdWVyeS5zZW5kKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5pc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBMYXZhSnNFcnJvciBFcnJvclxyXG4gKlxyXG4gKiBCYXNlIGVycm9yIHRoYXQgdGhlIHNwZWNpZmljIGVycm9ycyBleHRlbmQuXHJcbiAqXHJcbiAqIEB0eXBlIHtGdW5jdGlvbn1cclxuICovXHJcbmZ1bmN0aW9uIExhdmFKc0Vycm9yKG1lc3NhZ2UpIHtcclxuICAgIHRoaXMubmFtZSA9ICdMYXZhSnNFcnJvcic7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSAobWVzc2FnZSB8fCBcIlwiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludmFsaWRDYWxsYmFjayBFcnJvclxyXG4gKlxyXG4gKiBUaHJvd24gd2hlbiBhbnl0aGluZyBidXQgYSBmdW5jdGlvbiBpcyBnaXZlbiBhcyBhIGNhbGxiYWNrLlxyXG4gKlxyXG4gKiBAdHlwZSB7RnVuY3Rpb259XHJcbiAqL1xyXG5mdW5jdGlvbiBJbnZhbGlkQ2FsbGJhY2soY2FsbGJhY2spIHtcclxuICAgIHRoaXMubmFtZSA9ICdJbnZhbGlkQ2FsbGJhY2snO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gYFtsYXZhLmpzXSBcIiR7dHlwZW9mIGNhbGxiYWNrfVwiIGlzIG5vdCBhIHZhbGlkIGNhbGxiYWNrLmA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnZhbGlkTGFiZWwgRXJyb3JcclxuICpcclxuICogVGhyb3duIHdoZW4gYSB7QGxpbmsgUmVuZGVyYWJsZX0gaXMgbm90IGZvdW5kIGluIHRoZSBtb2R1bGUuXHJcbiAqXHJcbiAqIEB0eXBlIHtGdW5jdGlvbn1cclxuICovXHJcbmZ1bmN0aW9uIFJlbmRlcmFibGVOb3RGb3VuZChsYWJlbCkge1xyXG4gICAgdGhpcy5uYW1lID0gJ1JlbmRlcmFibGVOb3RGb3VuZCc7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBgW2xhdmEuanNdIEEgcmVuZGVyYWJsZSB3aXRoIHRoZSBsYWJlbCBcIiR7bGFiZWx9XCIgd2FzIG5vdCBmb3VuZC5gO1xyXG59XHJcblxyXG4vKipcclxuICogRWxlbWVudElkTm90Rm91bmQgRXJyb3JcclxuICpcclxuICogVGhyb3duIHdoZW4gdGhlIGdpdmVuIElEIGZvciBhbiBIVE1MRWxlbWVudCBpcyBub3QgZm91bmQgaW4gdGhlIERPTS5cclxuICpcclxuICogQHR5cGUge0Z1bmN0aW9ufVxyXG4gKi9cclxuZnVuY3Rpb24gRWxlbWVudElkTm90Rm91bmQoZWxlbUlkKSB7XHJcbiAgICB0aGlzLm5hbWUgPSAnRWxlbWVudElkTm90Rm91bmQnO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gYFtsYXZhLmpzXSBET00gbm9kZSB3aGVyZSBpZD1cIiR7ZWxlbUlkfVwiIHdhcyBub3QgZm91bmQuYDtcclxufVxyXG5cclxuLyoqXHJcbiAqIERhdGFRdWVyeUVycm9yXHJcbiAqXHJcbiAqIFRocm93biB3aGVuIHRoZSBnaXZlbiBJRCBmb3IgYW4gSFRNTEVsZW1lbnQgaXMgbm90IGZvdW5kIGluIHRoZSBET00uXHJcbiAqXHJcbiAqIEB0eXBlIHtGdW5jdGlvbn1cclxuICovXHJcbmZ1bmN0aW9uIERhdGFRdWVyeUVycm9yKG1zZykge1xyXG4gICAgdGhpcy5uYW1lID0gJ0RhdGFRdWVyeUVycm9yJztcclxuICAgIHRoaXMubWVzc2FnZSA9IG1zZztcclxufVxyXG5cclxuTGF2YUpzRXJyb3IucHJvdG90eXBlICAgICAgICA9IEVycm9yLnByb3RvdHlwZTtcclxuSW52YWxpZENhbGxiYWNrLnByb3RvdHlwZSAgICA9IExhdmFKc0Vycm9yLnByb3RvdHlwZTtcclxuUmVuZGVyYWJsZU5vdEZvdW5kLnByb3RvdHlwZSA9IExhdmFKc0Vycm9yLnByb3RvdHlwZTtcclxuRWxlbWVudElkTm90Rm91bmQucHJvdG90eXBlICA9IExhdmFKc0Vycm9yLnByb3RvdHlwZTtcclxuRGF0YVF1ZXJ5RXJyb3IucHJvdG90eXBlICAgICA9IExhdmFKc0Vycm9yLnByb3RvdHlwZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIExhdmFKc0Vycm9yOiAgICAgICAgTGF2YUpzRXJyb3IsXHJcbiAgICBJbnZhbGlkQ2FsbGJhY2s6ICAgIEludmFsaWRDYWxsYmFjayxcclxuICAgIFJlbmRlcmFibGVOb3RGb3VuZDogUmVuZGVyYWJsZU5vdEZvdW5kLFxyXG4gICAgRWxlbWVudElkTm90Rm91bmQ6ICBFbGVtZW50SWROb3RGb3VuZCxcclxuICAgIERhdGFRdWVyeUVycm9yOiAgICAgRGF0YVF1ZXJ5RXJyb3JcclxufVxyXG4iLCIvKiBqc2hpbnQgYnJvd3Nlcjp0cnVlICovXHJcbi8qIGdsb2JhbHMgZ29vZ2xlICovXHJcblxyXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50cyc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuL1V0aWxzJztcclxuaW1wb3J0IEVycm9ycyBmcm9tICcuL0Vycm9ycydcclxuaW1wb3J0IENoYXJ0IGZyb20gJy4vQ2hhcnQnO1xyXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vRGFzaGJvYXJkJztcclxuaW1wb3J0IERhdGFRdWVyeSBmcm9tICcuL0RhdGFRdWVyeSc7XHJcbmltcG9ydCBSZW5kZXJhYmxlIGZyb20gJy4vUmVuZGVyYWJsZSc7XHJcblxyXG4vKipcclxuICogR29vZ2xlIENoYXJ0IEFQSSB3cmFwcGVyIGxpYnJhcnlcclxuICpcclxuICogVGhpcyBtb2R1bGUgY2FuIGJlIHVzZWQgYXMgYSBzdGFuZGFsb25lLCBicm93c2VyIGJhc2VkIGxpYnJhcnksIG9yIGluXHJcbiAqIGNvbmp1bmN0aW9uIHdpdGggdGhlIFBIUCBsaWJyYXJ5LCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2tldmlua2hpbGwvbGF2YWNoYXJ0c1wiPkxhdmFjaGFydHM8L2E+LlxyXG4gKlxyXG4gKiBAY2xhc3NcclxuICogQGF1dGhvciAgICBLZXZpbiBIaWxsIDxrZXZpbmtoaWxsQGdtYWlsLmNvbT5cclxuICogQGNvcHlyaWdodCAoYykgMjAxNywgS2V2aW4gSGlsbFxyXG4gKiBAbGljZW5zZSAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQgTUlUXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXZhSnMgZXh0ZW5kcyBFdmVudEVtaXR0ZXJcclxue1xyXG4gICAgLy9ub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXHJcbiAgICAvKipcclxuICAgICAqIFZlcnNpb24gb2YgdGhlIExhdmFKcy5qcyBtb2R1bGVcclxuICAgICAqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XHJcbiAgICAgICAgcmV0dXJuICc0LjAuMHJjMSc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWZXJzaW9uIG9mIHRoZSBHb29nbGUgY2hhcnRzIEFQSSB0byBsb2FkXHJcbiAgICAgKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldCBHT09HTEVfQVBJX1ZFUlNJT04oKSB7XHJcbiAgICAgICAgcmV0dXJuICdjdXJyZW50JztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVybHMgdG8gR29vZ2xlJ3Mgc3RhdGljIGxvYWRlclxyXG4gICAgICpcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXQgR09PR0xFX0xPQURFUl9VUkwoKSB7XHJcbiAgICAgICAgcmV0dXJuICdodHRwczovL3d3dy5nc3RhdGljLmNvbS9jaGFydHMvbG9hZGVyLmpzJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXRpYyBhY2Nlc3NvciBmb3IgdGhlIHtAbGluayBDaGFydH0gY2xhc3NcclxuICAgICAqXHJcbiAgICAgKiBAY2xhc3NcclxuICAgICAqIEB0eXBlIHtDaGFydH1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldCBDaGFydCgpIHtcclxuICAgICAgICByZXR1cm4gQ2hhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGF0aWMgYWNjZXNzb3IgZm9yIHRoZSB7QGxpbmsgRGFzaGJvYXJkfSBjbGFzc1xyXG4gICAgICpcclxuICAgICAqIEBjbGFzc1xyXG4gICAgICogQHR5cGUge0Rhc2hib2FyZH1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldCBEYXNoYm9hcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIERhc2hib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXRpYyBhY2Nlc3NvciBmb3IgdGhlIHtAbGluayBEYXRhUXVlcnl9IGNsYXNzXHJcbiAgICAgKlxyXG4gICAgICogQGNsYXNzXHJcbiAgICAgKiBAdHlwZSB7RGF0YVF1ZXJ5fVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0IERhdGFRdWVyeSgpIHtcclxuICAgICAgICByZXR1cm4gRGF0YVF1ZXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dhYmxlIGVycm9ycyBmb3IgdGhlIExhdmFKcyBtb2R1bGVcclxuICAgICAqXHJcbiAgICAgKiBAY2xhc3NcclxuICAgICAqIEB0eXBlIHtFcnJvcnN9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXQgRXJyb3JzKCkge1xyXG4gICAgICAgIHJldHVybiBFcnJvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIExhdmFKcyBsaWJyYXJ5XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5ld09wdGlvbnNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobmV3T3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgZmxhZyB0aGF0IHdpbGwgYmUgc2V0IG9uY2UgdGhlIGxpYnJhcnkgaXMgcmVhZHkuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmlzUmVhZHkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSlNPTiBvYmplY3Qgb2YgY29uZmlnIGl0ZW1zXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHVibGljXHJcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBuZXdPcHRpb25zIHx8IHJlcXVpcmUoJy4vcmVzb3VyY2VzL29wdGlvbnMuanNvbicpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXQgb2YgdmlzdWFsaXphdGlvbiBwYWNrYWdlcyBmb3Ige0BsaW5rIENoYXJ0fXMgYW5kIHtAbGluayBEYXNoYm9hcmR9c1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiBAdHlwZSB7U2V0LjxTdHJpbmc+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX3BhY2thZ2VzID0gbmV3IFNldCgpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBcnJheSBvZiBjaGFydHMgYW5kIGRhc2hib2FyZHMgc3RvcmVkIGluIHRoZSBtb2R1bGVcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICogQHR5cGUge01hcC48UmVuZGVyYWJsZT59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fdm9sY2FubyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVhZHkgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIG1vZHVsZSBpcyBmaW5pc2hlZCBydW5uaW5nLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiBAdHlwZSB7RnVuY3Rpb259XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fcmVhZHlDYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZsYWcgdGhhdCB3aWxsIGJlIHRydWUgb25jZSBHb29nbGUncyBTdGF0aWMgTG9hZGVyIGlzIGluIHBhZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgZ2V0IGdvb2dsZUlzTG9hZGVkKCkge1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHNjcmlwdCBvZiBzY3JpcHRzKSB7XHJcbiAgICAgICAgICAgIGlmIChzY3JpcHQuc3JjID09PSB0aGlzLkdPT0dMRV9MT0FERVJfVVJMKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL25vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHMsSlNNZXRob2RDYW5CZVN0YXRpY1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIERhdGFRdWVyeX0gZm9yIGEge0BsaW5rIFJlbmRlcmFibGV9XHJcbiAgICAgKlxyXG4gICAgICogSWYgYSBTdHJpbmcgaXMgcGFzc2VkLCB0aGVuIGEgbmV3IHtAbGluayBEYXRhUXVlcnl9IGlzIGNyZWF0ZWQgd2l0aCBubyBvcHRpb25zLlxyXG4gICAgICogSWYgYW4gT2JqZWN0IGlzIHBhc3NlZCwgdGhlbiB0aGUgcXVlcnkgbXVzdCBiZSBkZWZpbmVkIGJ5IHRoZSBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB1cmxcclxuICAgICAqIEByZXR1cm4ge0RhdGFRdWVyeX1cclxuICAgICAqL1xyXG4gICAgcXVlcnkodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRhUXVlcnkodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICAvL25vaW5zcGVjdGlvbiBKU01ldGhvZENhbkJlU3RhdGljXHJcbiAgICAvKipcclxuICAgICAqIFN0YXRpYyBtZXRob2QgZm9yIGNyZWF0aW5nIG5ldyBDaGFydHMgYW5kIERhc2hib2FyZHMgZnJvbSBhIEpTT04gZGVmaW5pdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgSlNPTiBwYXlsb2FkIGNhbiBjb21lIGZyb20gTGF2YWNoYXJ0cyBvciBtYW51YWxseSBpZiB1c2VkXHJcbiAgICAgKiBhcyBhbiBpbmRlcGVuZGVudCBsaWJyYXJ5LlxyXG4gICAgICpcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEBwYXJhbSAge09iamVjdH0ganNvbiBvYmplY3QgcmVwcmVzZW50aW5nIGEgQ2hhcnQgb3IgRGFzaGJvYXJkLlxyXG4gICAgICogQHJldHVybiB7Q2hhcnR8RGFzaGJvYXJkfVxyXG4gICAgICovXHJcbiAgICBjcmVhdGUoanNvbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBDcmVhdGluZyBhIG5ldyAke2pzb24udHlwZX06YCwganNvbik7XHJcblxyXG4gICAgICAgIGlmIChqc29uLnR5cGUgPT09ICdEYXNoYm9hcmQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGF2YUpzLkRhc2hib2FyZChqc29uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgTGF2YUpzLkNoYXJ0KGpzb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIG9yIGNyZWF0ZXMgdGhlbiBzdG9yZXMgYSB7QGxpbmsgUmVuZGVyYWJsZX0gd2l0aGluIHRoZSBtb2R1bGUuXHJcbiAgICAgKlxyXG4gICAgICogQHRvZG8gSWYgdGhlIGxpYnJhcnkgaGFzIHJhbiwgYW5kIGlzIHJlYWR5LCBsb2FkaW5nIG5ldyBjaGFydHMgd2lsbCBmb3JjZSBhIHJlZHJhdyBvZiBhbGwgdGhlIGN1cnJlbnRseSBkcmF3biBjaGFydHMuXHJcbiAgICAgKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R8UmVuZGVyYWJsZX0gcmVuZGVyYWJsZVxyXG4gICAgICogQHJldHVybiB7Q2hhcnR8RGFzaGJvYXJkfSBUaGUge0BsaW5rIENoYXJ0fSAvIHtAbGluayBEYXNoYm9hcmR9IHRoYXQgd2FzIGp1c3Qgc3RvcmVkLlxyXG4gICAgICovXHJcbiAgICBzdG9yZShyZW5kZXJhYmxlKSB7XHJcbiAgICAgICAgaWYgKHJlbmRlcmFibGUgaW5zdGFuY2VvZiBSZW5kZXJhYmxlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZW5kZXJhYmxlID0gdGhpcy5jcmVhdGUocmVuZGVyYWJsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgW2xhdmEuanNdIFN0b3JpbmcgJHtyZW5kZXJhYmxlLnV1aWR9YCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2FkZFBhY2thZ2VzKHJlbmRlcmFibGUucGFja2FnZXMpO1xyXG5cclxuICAgICAgICB0aGlzLl92b2xjYW5vLnNldChyZW5kZXJhYmxlLmxhYmVsLCByZW5kZXJhYmxlKTtcclxuXHJcbiAgICAgICAgLy9pZiAodGhpcy5pc1JlYWR5KSB7XHJcbiAgICAgICAgLy8gICAgdGhpcy5yZWRyYXdBbGwoKTtcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZSBhIHtAbGluayBDaGFydH0gLyB7QGxpbmsgRGFzaGJvYXJkfSBmcm9tIHN0b3JhZ2UuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIHtAbGluayBDaGFydH0gb2JqZWN0IGhhcyB0aGUgdXNlciBkZWZpbmVkIHByb3BlcnRpZXMgc3VjaCBhcyBkYXRhLCBvcHRpb25zLCBmb3JtYXRzLCBldGMuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIEdvb2dsZSBDaGFydCBvYmplY3QgaXMgYXZhaWxhYmxlIGFzIFwiLmdjaGFydFwiIGZyb20gdGhlIHJldHVybmVkIExhdmFDaGFydC5cclxuICAgICAqIEl0IGNhbiBiZSB1c2VkIHRvIGFjY2VzcyBhbnkgb2YgdGhlIGF2YWlsYWJsZSBtZXRob2RzIHN1Y2ggYXNcclxuICAgICAqIGdldEltYWdlVVJJKCkgb3IgZ2V0Q2hhcnRMYXlvdXRJbnRlcmZhY2UoKS5cclxuICAgICAqXHJcbiAgICAgKiBTZWUgaHR0cHM6Ly9nb29nbGUtZGV2ZWxvcGVycy5hcHBzcG90LmNvbS9jaGFydC9pbnRlcmFjdGl2ZS9kb2NzL2dhbGxlcnkvbGluZWNoYXJ0I21ldGhvZHNcclxuICAgICAqIGZvciBzb21lIGV4YW1wbGVzIHJlbGF0aXZlIHRvIExpbmVDaGFydHMuXHJcbiAgICAgKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBsYWJlbFxyXG4gICAgICogQHRocm93cyB7TGF2YUpzLkVycm9ycy5SZW5kZXJhYmxlTm90Rm91bmR9XHJcbiAgICAgKiBAcmV0dXJuIHtDaGFydHxEYXNoYm9hcmR9XHJcbiAgICAgKi9cclxuICAgIGdldChsYWJlbCkge1xyXG4gICAgICAgIGlmICh0aGlzLl92b2xjYW5vLmhhcyhsYWJlbCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBMYXZhSnMuRXJyb3JzLlJlbmRlcmFibGVOb3RGb3VuZChsYWJlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fdm9sY2Fuby5nZXQobGFiZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIGxpYnJhcnkgYnkgbG9hZGluZyBnb29nbGUgdG8gdGhlIHdpbmRvdy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkR29vZ2xlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbbGF2YS5qc10gR29vZ2xlIGlzIHJlYWR5LicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUnVucyB0aGUgTGF2YUpzLmpzIG1vZHVsZVxyXG4gICAgICpcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEBlbWl0cyB7cmVhZHl9XHJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tsYXZhLmpzXSBSdW5uaW5nLi4uJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tsYXZhLmpzXSBMb2FkaW5nIG9wdGlvbnM6JywgdGhpcy5vcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYXR0YWNoUmVkcmF3SGFuZGxlcigpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgICAgICAgICAuaW5pdCgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZvbGNhbm8uZm9yRWFjaChyZW5kZXJhYmxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW2xhdmEuanNdIFJlbmRlcmluZyAke3JlbmRlcmFibGUudXVpZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyYWJsZS5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbbGF2YS5qc10gUmVhZHk7IEZpcmluZyBcInJlYWR5XCIgZXZlbnQuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3JlYWR5Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9yZWFkeUNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tsYXZhLmpzXSBSdW5uaW5nIGxhdmEucmVhZHkoY2FsbGJhY2spOycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWFkeUNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXNzaWducyBhIGNhbGxiYWNrIGZvciB3aGVuIHRoZSBjaGFydHMgYXJlIHJlYWR5IHRvIGJlIGludGVyYWN0ZWQgd2l0aC5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gd3JhcCBjYWxscyB0byBsYXZhLmxvYWREYXRhKCkgb3IgbGF2YS5sb2FkT3B0aW9ucygpXHJcbiAgICAgKiB0byBwcm90ZWN0IGFnYWluc3QgYWNjZXNzaW5nIGNoYXJ0cyB0aGF0IGFyZW4ndCBsb2FkZWQgeWV0XHJcbiAgICAgKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEB0aHJvd3Mge0xhdmFKcy5FcnJvcnMuSW52YWxpZENhbGxiYWNrfVxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgcmVhZHkoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBMYXZhSnMuRXJyb3JzLkludmFsaWRDYWxsYmFjayhjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9yZWFkeUNhbGxiYWNrID0gY2FsbGJhY2suYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvL25vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgbmV3IGRhdGEgaW50byB0aGUgY2hhcnQgYW5kIHJlZHJhd3MuXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIFVzZWQgd2l0aCBhbiBBSkFYIGNhbGwgdG8gYSBQSFAgbWV0aG9kIHJldHVybmluZyBEYXRhVGFibGUtPnRvSnNvbigpLFxyXG4gICAgICogYSBjaGFydCBjYW4gYmUgZHluYW1pY2FsbHkgdXBkYXRlIGluIHBhZ2UsIHdpdGhvdXQgcmVsb2Fkcy5cclxuICAgICAqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGFiZWxcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBqc29uXHJcbiAgICAgKiBAcGFyYW0gez9GdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGxvYWREYXRhKGxhYmVsLCBqc29uLCBjYWxsYmFjaykgeyAvL1RPRE86IHRlc3QgdGhpcyB3aXRoIGZvcm1hdHNcclxuICAgICAgICBjb25zdCBjaGFydCA9IHRoaXMuZ2V0KGxhYmVsKTtcclxuXHJcbiAgICAgICAgY2hhcnQuc2V0RGF0YShqc29uKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBqc29uLmZvcm1hdHMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNoYXJ0LmFwcGx5Rm9ybWF0cyhqc29uLmZvcm1hdHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hhcnQuZHJhdygpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGNoYXJ0LmdjaGFydCwgY2hhcnQuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyBuZXcgb3B0aW9ucyBpbnRvIGEgY2hhcnQgYW5kIHJlZHJhd3MuXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIFVzZWQgd2l0aCBhbiBBSkFYIGNhbGwsIG9yIGphdmFzY3JpcHQgZXZlbnRzLCB0byBsb2FkIGEgbmV3IGFycmF5IG9mIG9wdGlvbnMgaW50byBhIGNoYXJ0LlxyXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCB0byB1cGRhdGUgYSBjaGFydCBkeW5hbWljYWxseSwgd2l0aG91dCByZWxvYWRzLlxyXG4gICAgICpcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsYWJlbFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGpzb25cclxuICAgICAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgbG9hZE9wdGlvbnMobGFiZWwsIGpzb24sIGNhbGxiYWNrKSB7IC8vVE9ETzogdGVzdCB0aGlzXHJcbiAgICAgICAgY29uc3QgY2hhcnQgPSB0aGlzLmdldChsYWJlbCk7XHJcblxyXG4gICAgICAgIGNoYXJ0LnNldE9wdGlvbnMoanNvbik7XHJcbiAgICAgICAgY2hhcnQuZHJhdygpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGNoYXJ0LmdjaGFydCwgY2hhcnQuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVkcmF3cyBhbGwgb2YgdGhlIHJlZ2lzdGVyZWQgY2hhcnRzIG9uIHNjcmVlbi5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBhdHRhY2hlZCB0byB0aGUgd2luZG93IHJlc2l6ZSBldmVudCB3aXRoIGRlYm91bmNpbmdcclxuICAgICAqIHRvIG1ha2UgdGhlIGNoYXJ0cyByZXNwb25zaXZlIHRvIHRoZSBicm93c2VyIHJlc2l6aW5nLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIHJlZHJhd0FsbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdm9sY2Fuby5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbbGF2YS5qc10gTm90aGluZyB0byByZWRyYXcuYCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgW2xhdmEuanNdIFJlZHJhd2luZyAke3RoaXMuX3ZvbGNhbm8uc2l6ZX0gcmVuZGVyYWJsZXMuYCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZvbGNhbm8uZm9yRWFjaChyZW5kZXJhYmxlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFtsYXZhLmpzXSBSZWRyYXdpbmcgJHtyZW5kZXJhYmxlLnV1aWR9YCk7XHJcblxyXG4gICAgICAgICAgICByZW5kZXJhYmxlLmRyYXcoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHRvIHRoZSBsaXN0IG9mIHBhY2thZ2VzIHRoYXQgR29vZ2xlIG5lZWRzIHRvIGxvYWQuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfFN0cmluZ1tdfSBwYWNrYWdlcyBTaW5nbGUgb3IgYXJyYXkgb2YgcGFja2FnZSBuYW1lcyB0byBhZGQuXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBfYWRkUGFja2FnZXMocGFja2FnZXMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHBhY2thZ2VzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0aGlzLl9wYWNrYWdlcy5hZGQocGFja2FnZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFV0aWxzLmdldFR5cGUocGFja2FnZXMpID09PSAnQXJyYXknKSB7XHJcbiAgICAgICAgICAgIHBhY2thZ2VzID0gbmV3IFNldChwYWNrYWdlcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wYWNrYWdlcyA9IG5ldyBTZXQoW3RoaXMuX3BhY2thZ2VzLCAuLi5wYWNrYWdlc10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEF0dGFjaCBhIGxpc3RlbmVyIHRvIHRoZSB3aW5kb3cgcmVzaXplIGV2ZW50IGZvciByZWRyYXdpbmcgdGhlIGNoYXJ0cy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgX2F0dGFjaFJlZHJhd0hhbmRsZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXNwb25zaXZlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGxldCBkZWJvdW5jZWQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgVXRpbHMuYWRkRXZlbnQod2luZG93LCAncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IHJlZHJhdyA9IHRoaXMucmVkcmF3QWxsKCkuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoZGVib3VuY2VkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkZWJvdW5jZWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW2xhdmEuanNdIFdpbmRvdyByZS1zaXplZCwgcmVkcmF3aW5nLi4uJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkcmF3QWxsKClcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMub3B0aW9ucy5kZWJvdW5jZV90aW1lb3V0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCB0aGUgR29vZ2xlIFN0YXRpYyBMb2FkZXIgYW5kIHJlc29sdmUgdGhlIHByb21pc2Ugd2hlbiByZWFkeS5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgX2xvYWRHb29nbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW2xhdmEuanNdIFJlc29sdmluZyBHb29nbGUuLi4nKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdvb2dsZUlzTG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW2xhdmEuanNdIFN0YXRpYyBsb2FkZXIgZm91bmQsIGluaXRpYWxpemluZyB3aW5kb3cuZ29vZ2xlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dvb2dsZUNoYXJ0TG9hZGVyKHJlc29sdmUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW2xhdmEuanNdIFN0YXRpYyBsb2FkZXIgbm90IGZvdW5kLCBhcHBlbmRpbmcgdG8gaGVhZCcpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgICAgICAgICAgICAgIC5fYWRkR29vZ2xlU2NyaXB0VG9IZWFkKClcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZ29vZ2xlQ2hhcnRMb2FkZXIocmVzb2x2ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJ1bnMgdGhlIEdvb2dsZSBDaGFydCBMb2FkZXIgdXNpbmcgdGhlIHBhc3NlZCBQcm9taXNlIHJlc29sdmVyIGFzXHJcbiAgICAgKiB0aGUgc2V0T25Mb2FkQ2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7UHJvbWlzZS5yZXNvbHZlfSByZXNvbHZlIFByb21pc2UgcmVzb2x2ZXIuXHJcbiAgICAgKi9cclxuICAgIF9nb29nbGVDaGFydExvYWRlcihyZXNvbHZlKSB7XHJcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5vcHRpb25zLmxvY2FsZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9wYWNrYWdlcy5zaXplID4gMCkge1xyXG4gICAgICAgICAgICBjb25maWcucGFja2FnZXMgPSBbLi4udGhpcy5fcGFja2FnZXNdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5wYWNrYWdlcyA9IFsnY29yZWNoYXJ0J107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcHNfYXBpX2tleSAhPT0gJycpIHtcclxuICAgICAgICAgICAgY29uZmlnLm1hcHNBcGlLZXkgPSB0aGlzLm9wdGlvbnMubWFwc19hcGlfa2V5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tsYXZhLmpzXSBMb2FkaW5nIEdvb2dsZSB3aXRoIGNvbmZpZzonLCBjb25maWcpO1xyXG5cclxuICAgICAgICBnb29nbGUuY2hhcnRzLmxvYWQoTGF2YUpzLkdPT0dMRV9BUElfVkVSU0lPTiwgY29uZmlnKTtcclxuXHJcbiAgICAgICAgZ29vZ2xlLmNoYXJ0cy5zZXRPbkxvYWRDYWxsYmFjayhyZXNvbHZlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBzY3JpcHQgdGFnIGZvciB0aGUgR29vZ2xlIFN0YXRpYyBMb2FkZXJcclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIF9hZGRHb29nbGVTY3JpcHRUb0hlYWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcbiAgICAgICAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICAgICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICAgICAgICAgIHNjcmlwdC5zcmMgPSBMYXZhSnMuR09PR0xFX0xPQURFUl9VUkw7XHJcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyB8fCAoL2xvYWRlZHxjb21wbGV0ZS8udGVzdChzY3JpcHQucmVhZHlTdGF0ZSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50cyc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuL1V0aWxzJ1xyXG5pbXBvcnQgTGF2YUpzIGZyb20gJy4vTGF2YUpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoZSB7QGxpbmsgUmVuZGVyYWJsZX0gY2xhc3MgaXMgdGhlIGJhc2UgZm9yIHtAbGluayBDaGFydH1zIGFuZCB7QGxpbmsgRGFzaGJvYXJkfXNcclxuICogdG8gc2hhcmUgY29tbW9uIG1ldGhvZHMgYmV0d2VlbiB0aGUgdHdvIHR5cGVzLlxyXG4gKlxyXG4gKlxyXG4gKiBAYXV0aG9yICAgIEtldmluIEhpbGwgPGtldmlua2hpbGxAZ21haWwuY29tPlxyXG4gKiBAY29weXJpZ2h0IChjKSAyMDE3LCBLZXZpbiBIaWxsXHJcbiAqIEBsaWNlbnNlICAgTUlUXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IFJlbmRlcmFibGVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0ganNvblxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihqc29uKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGF0YVRhYmxlIGZvciB0aGUge0BsaW5rIENoYXJ0fSAvIHtAbGluayBEYXNoYm9hcmR9LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUge0RhdGFUYWJsZX1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdvb2dsZSBjaGFydCBvYmplY3QgY3JlYXRlZCBvbmNlIHRoZSB7QGxpbmsgQ2hhcnR9IC8ge0BsaW5rIERhc2hib2FyZH1cclxuICAgICAgICAgKiBoYXMgYmVlbiByZW5kZXJlZC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5nY2hhcnQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFR5cGUgb2Yge0BsaW5rIFJlbmRlcmFibGV9LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnR5cGUgPSBqc29uLnR5cGU7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVuaXF1ZSBsYWJlbCBmb3IgdGhlIHtAbGluayBDaGFydH0gLyB7QGxpbmsgRGFzaGJvYXJkfS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5sYWJlbCA9IGpzb24ubGFiZWw7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbmZpZ3VyYWJsZSBvcHRpb25zIGZvciB0aGUge0BsaW5rIENoYXJ0fSAvIHtAbGluayBEYXNoYm9hcmR9LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IGpzb24ub3B0aW9ucztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRWxlbWVudCBJRCBvZiB0aGUgRE9NIG5vZGUgaW4gd2hpY2ggdG8gcmVuZGVyIHRoZSB7QGxpbmsgQ2hhcnR9IC8ge0BsaW5rIERhc2hib2FyZH0uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZWxlbWVudElkID0ganNvbi5lbGVtZW50SWQgfHwganNvbi5lbGVtSWQgfHwganNvbi5jb250YWluZXJJZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIEVsZW1lbnQgaW4gd2hpY2ggdGhlIFJlbmRlcmFibGUgd2lsbCBiZSBkcmF3bi5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwdWJsaWNcclxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGUgSUQgb2YgdGhlIGVsZW1lbnQgd2FzIG5vdCBmb3VuZCwgdGhyb3cgYW4gZXJyb3IuXHJcbiAgICAgICAgaWYgKCEgdGhpcy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBMYXZhSnMuRXJyb3JzLkVsZW1lbnRJZE5vdEZvdW5kKHRoaXMuZWxlbWVudElkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFueSBkZXBlbmRlbmN5IG9uIFwiZ29vZ2xlXCIgbXVzdCBiZSB3aXRoaW4gdGhlIHJlbmRlciBzY29wZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5yZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldHVwKGpzb24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKGpzb24uZGF0YSB8fCBqc29uLmRhdGF0YWJsZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fcG9zdERyYXcgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtsYXZhLmpzXSBSdW5uaW5nICR7dGhpcy51dWlkfSNwb3N0RHJhd2ApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zdERyYXcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGdvb2dsZS52aXN1YWxpemF0aW9uIGNsYXNzIG5lZWRlZCBmb3IgcmVuZGVyaW5nLlxyXG4gICAgICpcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gR29vZ2xlIHZpc3VhbGl6YXRpb24gY2xhc3MgbmFtZS5cclxuICAgICAqL1xyXG4gICAgZ2V0IGNsYXNzKCkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5nZXRWaXpQcm9wcyh0aGlzLnR5cGUpLmNsYXNzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGdvb2dsZS52aXN1YWxpemF0aW9uIHBhY2thZ2UgbmVlZGVkIGZvciByZW5kZXJpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBHb29nbGUgdmlzdWFsaXphdGlvbiBwYWNrYWdlIG5hbWUuXHJcbiAgICAgKi9cclxuICAgIGdldCBwYWNrYWdlcygpIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMuZ2V0Vml6UHJvcHModGhpcy50eXBlKS5wYWNrYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSB7QGxpbmsgQ2hhcnR9IC8ge0BsaW5rIERhc2hib2FyZH0uXHJcbiAgICAgKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUge0BsaW5rIFJlbmRlcmFibGV9LlxyXG4gICAgICovXHJcbiAgICBnZXQgdXVpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlICsgJzo6JyArIHRoaXMubGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmF3cyB0aGUge0BsaW5rIENoYXJ0fSAvIHtAbGluayBEYXNoYm9hcmR9IHdpdGggdGhlIHByZWRlZmluZWQgZGF0YSBhbmQgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuZ2NoYXJ0LmRyYXcodGhpcy5kYXRhLCB0aGlzLm9wdGlvbnMpO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBkYXRhIGZvciB0aGUge0BsaW5rIFJlbmRlcmFibGV9LlxyXG4gICAgICpcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fEZ1bmN0aW9ufEFycmF5fERhdGFRdWVyeXxEYXRhVGFibGV9IHBheWxvYWQgU291cmNlIG9mIGRhdGFcclxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIHNldERhdGEocGF5bG9hZCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgaWYgKHBheWxvYWQgaW5zdGFuY2VvZiBMYXZhSnMuRGF0YVF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW2xhdmEuanNdIFNlbmRpbmcgRGF0YVF1ZXJ5IGZvciAke3RoaXMudXVpZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkLnNlbmQoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW2xhdmEuanNdIERhdGFRdWVyeSBmb3IgJHt0aGlzLnV1aWR9IGNvbXBsZXRlLmApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmdldERhdGFUYWJsZSgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShVdGlscy5jcmVhdGVEYXRhVGFibGUocGF5bG9hZCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgb3B0aW9ucyBmb3IgdGhlIHtAbGluayBSZW5kZXJhYmxlfS5cclxuICAgICAqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gICAgICogQHJldHVybiB7UmVuZGVyYWJsZX1cclxuICAgICAqL1xyXG4gICAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBdHRhY2ggZXZlbnQgZW1pdHRlcnMgb250byB0aGUgZ29vZ2xlIGNoYXJ0IHRvIHJlbGF5IHRoZSBldmVudHNcclxuICAgICAqIGZvcndhcmQgb250byB0aGUgbGF2YWNoYXJ0LlxyXG4gICAgICpcclxuICAgICAqIFRoZSBHb29nbGUgQ2hhcnQgYW5kIERhdGFUYWJsZSBvYmplY3RzIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBsaXN0ZW5lclxyXG4gICAgICogY2FsbGJhY2sgZm9yIGludGVyYWN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBfYXR0YWNoRXZlbnRSZWxheXMoKSB7XHJcbiAgICAgICAgbGV0IGRlZmF1bHRFdmVudHMgPSBbXHJcbiAgICAgICAgICAgICdyZWFkeScsXHJcbiAgICAgICAgICAgICdzZWxlY3QnLFxyXG4gICAgICAgICAgICAnZXJyb3InLFxyXG4gICAgICAgICAgICAnb25tb3VzZW92ZXInLFxyXG4gICAgICAgICAgICAnb25tb3VzZW91dCdcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBkZWZhdWx0RXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBnb29nbGUudmlzdWFsaXphdGlvbi5ldmVudHMuYWRkTGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdjaGFydCwgZXZlbnQsICgpID0+IHRoaXMuZW1pdChldmVudCwgdGhpcy5nY2hhcnQsIHRoaXMuZGF0YSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKiBnbG9iYWxzIGRvY3VtZW50LCBnb29nbGUgKi9cclxuXHJcbi8qKlxyXG4gKiBAaWdub3JlXHJcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFZpelByb3BzXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBjbGFzcyBWaXN1YWxpemF0aW9uIGNsYXNzLlxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gcGFja2FnZSBWaXN1YWxpemF0aW9uIHBhY2thZ2UuXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB2ZXJzaW9uIFZpc3VhbGl6YXRpb24gdmVyc2lvbi5cclxuICovXHJcblxyXG4vKipcclxuICogQ29sbGVjdGlvbiBvZiB1dGlsaXR5IGZ1bmN0aW9ucyB1c2VkIHRocm91Z2hvdXQgdGhlIG1vZHVsZXMuXHJcbiAqXHJcbiAqIEBjbGFzc1xyXG4gKiBAYXV0aG9yICAgIEtldmluIEhpbGwgPGtldmlua2hpbGxAZ21haWwuY29tPlxyXG4gKiBAY29weXJpZ2h0IChjKSAyMDE3LCBLZXZpbiBIaWxsXHJcbiAqIEBsaWNlbnNlICAgTUlUXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsc1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHR5cGUgb2Ygb2JqZWN0LCB3aXRoIGEgY2FwaXRhbCBmaXJzdCBsZXR0ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBUaGUgdHlwZSBvZiB0aGUgZ2l2ZW4gb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRUeXBlKG9iamVjdCkge1xyXG4gICAgICAgIGxldCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0eXBlLnJlcGxhY2UoJ1tvYmplY3QgJywgJycpLnJlcGxhY2UoJ10nLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaW1wbGUgUHJvbWlzZSBmb3IgdGhlIERPTSB0byBiZSByZWFkeS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZG9tTG9hZGVkKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHJlc29sdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRob2QgZm9yIGF0dGFjaGluZyBldmVudHMgdG8gb2JqZWN0cy5cclxuICAgICAqIEBsaW5rIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMxNTAxMzkgQ3JlZGl0IHRvIEFsZXggVi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICB0YXJnZXQgICAgICBUYXJnZXQgb2JqZWN0IHRvIGF0dGFjaCB0aGUgZXZlbnQgdG8uXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gICB0eXBlICAgICAgICBUeXBlIG9mIGV2ZW50LlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgICAgQ2FsbGJhY2sgdG8gZmlyZSB3aGVuIHRoZSBldmVudCBoYXBwZW5zLlxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSAgZXZlbnRSZXR1cm5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZEV2ZW50KHRhcmdldCwgdHlwZSwgY2FsbGJhY2ssIGV2ZW50UmV0dXJuKSB7XHJcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gbnVsbCB8fCB0eXBlb2YgdGFyZ2V0ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGV2ZW50UmV0dXJuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGFyZ2V0LmF0dGFjaEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRhcmdldC5hdHRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0YXJnZXRbXCJvblwiICsgdHlwZV0gPSBjYWxsYmFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgdmlzdWFsaXphdGlvbiBwcm9wZXJ0aWVzIG9mIHRoZSBnaXZlbiBjaGFydCB0eXBlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjaGFydFR5cGUgVHlwZSBvZiBjaGFydCBmb3IgbG9va3VwLlxyXG4gICAgICogQHJldHVybiB7Vml6UHJvcHN9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRWaXpQcm9wcyhjaGFydFR5cGUpIHtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0eU1hcCA9IHJlcXVpcmUoJy4vcmVzb3VyY2VzL3Zpc3VhbGl6YXRpb24tbWFwLmpzb24nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5TWFwW2NoYXJ0VHlwZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBkYXRhIGZvciB0aGUgY2hhcnQgYnkgY3JlYXRpbmcgYSBuZXcgRGF0YVRhYmxlXHJcbiAgICAgKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb258QXJyYXl9IHBheWxvYWQgSnNvbiByZXByZXNlbnRhdGlvbiBvZiBhIERhdGFUYWJsZVxyXG4gICAgICogQHJldHVybiB7RGF0YVRhYmxlfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlRGF0YVRhYmxlKHBheWxvYWQpIHtcclxuICAgICAgICAvLyBJZiBhIGZ1bmN0aW9uIGlzIHJlY2VpdmVkLCB0aGVuIGNyZWF0ZSBhbiBuZXcgRGF0YVRhYmxlIGFuZCBwYXNzIGl0IHRvIHRoZVxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGZvciB1c2VyIG1vZGlmaWNhdGlvbnMuXHJcbiAgICAgICAgaWYgKFV0aWxzLmdldFR5cGUocGF5bG9hZCkgPT09ICdGdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBheWxvYWQobmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFuIEFycmF5IGlzIHJlY2VpdmVkLCB0aGVuIGF0dGVtcHQgdG8gdXNlIHBhcnNlIHdpdGggYXJyYXlUb0RhdGFUYWJsZS5cclxuICAgICAgICBpZiAoVXRpbHMuZ2V0VHlwZShwYXlsb2FkKSA9PT0gJ0FycmF5Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZ29vZ2xlLnZpc3VhbGl6YXRpb24uYXJyYXlUb0RhdGFUYWJsZShwYXlsb2FkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNpbmNlIEdvb2dsZSBjb21waWxlcyB0aGVpciBjbGFzc2VzLCB3ZSBjYW4ndCB1c2UgaW5zdGFuY2VvZiB0byBjaGVjayBzaW5jZVxyXG4gICAgICAgIC8vIGl0IGlzIG5vIGxvbmdlciBjYWxsZWQgYSBcIkRhdGFUYWJsZVwiIChpdCdzIFwiZ3Zqc19QXCIgYnV0IHRoYXQgY291bGQgY2hhbmdlLi4uKVxyXG4gICAgICAgIC8vIElmIHRoaXMgY2hlY2sgcGFzc2VzLCB0aGVuIGl0IGFscmVhZHkgaXMgYSBEYXRhVGFibGVcclxuICAgICAgICBpZiAoVXRpbHMuZ2V0VHlwZShwYXlsb2FkLmdldFRhYmxlUHJvcGVydGllcykgPT09ICdGdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBheWxvYWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhIHBocCBEYXRhVGFibGUtPnRvSnNvbigpIHBheWxvYWQgaXMgcmVjZWl2ZWQsIHdpdGggZm9ybWF0dGVkIGNvbHVtbnMsXHJcbiAgICAgICAgLy8gdGhlbiBwYXlsb2FkLmRhdGEgd2lsbCBiZSBkZWZpbmVkLCBhbmQgdXNlZCBhcyB0aGUgRGF0YVRhYmxlXHJcbiAgICAgICAgaWYgKFV0aWxzLmdldFR5cGUocGF5bG9hZC5kYXRhKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgICAgICAgcGF5bG9hZCA9IHBheWxvYWQuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IGlmIHRoZSBEYXRhVGFibGUgaGFzIGZvcm1hdHMsIHRoZW4gaGFuZGxlIHRoZW0gaGVyZS5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIHBheWxvYWQgaXMgZnJvbSB0aGUgcGhwIGNsYXNzIEpvaW5lZERhdGFUYWJsZS0+dG9Kc29uKCksIHRoZW4gY3JlYXRlXHJcbiAgICAgICAgLy8gdHdvIG5ldyBEYXRhVGFibGVzIGFuZCBqb2luIHRoZW0gd2l0aCB0aGUgZGVmaW5lZCBvcHRpb25zLlxyXG4gICAgICAgIGlmIChVdGlscy5nZXRUeXBlKHBheWxvYWQuZGF0YSkgPT09ICdBcnJheScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdvb2dsZS52aXN1YWxpemF0aW9uLmRhdGEuam9pbihcclxuICAgICAgICAgICAgICAgIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUocGF5bG9hZC5kYXRhWzBdKSxcclxuICAgICAgICAgICAgICAgIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUocGF5bG9hZC5kYXRhWzFdKSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQua2V5cyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQuam9pbk1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQuZHQyQ29sdW1ucyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQuZHQyQ29sdW1uc1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgd2UgcmVhY2ggaGVyZSwgdGhlbiBpdCBtdXN0IGJlIHN0YW5kYXJkIEpTT04gZm9yIGNyZWF0aW5nIGEgRGF0YVRhYmxlLlxyXG4gICAgICAgIHJldHVybiBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKHBheWxvYWQpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHM9e1xyXG4gIFwiYXV0b19ydW5cIiAgICAgICAgOiBmYWxzZSxcclxuICBcImxvY2FsZVwiICAgICAgICAgIDogXCJlblwiLFxyXG4gIFwidGltZXpvbmVcIiAgICAgICAgOiBcIkFtZXJpY2EvTG9zX0FuZ2VsZXNcIixcclxuICBcImRhdGV0aW1lX2Zvcm1hdFwiIDogXCJcIixcclxuICBcIm1hcHNfYXBpX2tleVwiICAgIDogXCJcIixcclxuICBcInJlc3BvbnNpdmVcIiAgICAgIDogdHJ1ZSxcclxuICBcImRlYm91bmNlX3RpbWVvdXRcIjogMjUwXHJcbn0iLCJtb2R1bGUuZXhwb3J0cz17XHJcbiAgXCJBbm5vdGF0aW9uQ2hhcnRcIjoge1xyXG4gICAgXCJjbGFzc1wiOiBcIkFubm90YXRpb25DaGFydFwiLFxyXG4gICAgXCJwYWNrYWdlXCI6IFwiYW5ub3RhdGlvbmNoYXJ0XCIsXHJcbiAgICBcInZlcnNpb25cIjogMVxyXG4gIH0sXHJcbiAgXCJBcmVhQ2hhcnRcIjoge1xyXG4gICAgXCJjbGFzc1wiOiBcIkFyZWFDaGFydFwiLFxyXG4gICAgXCJwYWNrYWdlXCI6IFwiY29yZWNoYXJ0XCIsXHJcbiAgICBcInZlcnNpb25cIjogMVxyXG4gIH0sXHJcbiAgXCJCYXJDaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiQmFyQ2hhcnRcIixcclxuICAgIFwicGFja2FnZVwiOiBcImNvcmVjaGFydFwiLFxyXG4gICAgXCJ2ZXJzaW9uXCI6IDFcclxuICB9LFxyXG4gIFwiQnViYmxlQ2hhcnRcIjoge1xyXG4gICAgXCJjbGFzc1wiOiBcIkJ1YmJsZUNoYXJ0XCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJjb3JlY2hhcnRcIixcclxuICAgIFwidmVyc2lvblwiOiAxXHJcbiAgfSxcclxuICBcIkNhbGVuZGFyQ2hhcnRcIjoge1xyXG4gICAgXCJjbGFzc1wiOiBcIkNhbGVuZGFyXCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJjYWxlbmRhclwiLFxyXG4gICAgXCJ2ZXJzaW9uXCI6IDEuMVxyXG4gIH0sXHJcbiAgXCJDYW5kbGVzdGlja0NoYXJ0XCI6IHtcclxuICAgIFwiY2xhc3NcIjogXCJDYW5kbGVzdGlja0NoYXJ0XCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJjb3JlY2hhcnRcIixcclxuICAgIFwidmVyc2lvblwiOiAxXHJcbiAgfSxcclxuICBcIkNvbHVtbkNoYXJ0XCI6IHtcclxuICAgIFwiY2xhc3NcIjogXCJDb2x1bW5DaGFydFwiLFxyXG4gICAgXCJwYWNrYWdlXCI6IFwiY29yZWNoYXJ0XCIsXHJcbiAgICBcInZlcnNpb25cIjogMVxyXG4gIH0sXHJcbiAgXCJDb21ib0NoYXJ0XCI6IHtcclxuICAgIFwiY2xhc3NcIjogXCJDb21ib0NoYXJ0XCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJjb3JlY2hhcnRcIixcclxuICAgIFwidmVyc2lvblwiOiAxXHJcbiAgfSxcclxuICBcIkRvbnV0Q2hhcnRcIjoge1xyXG4gICAgXCJjbGFzc1wiOiBcIlBpZUNoYXJ0XCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJjb3JlY2hhcnRcIixcclxuICAgIFwidmVyc2lvblwiOiAxXHJcbiAgfSxcclxuICBcIkdhbnR0Q2hhcnRcIjoge1xyXG4gICAgXCJjbGFzc1wiOiBcIkdhbnR0XCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJnYW50dFwiLFxyXG4gICAgXCJ2ZXJzaW9uXCI6IDFcclxuICB9LFxyXG4gIFwiR2F1Z2VDaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiR2F1Z2VcIixcclxuICAgIFwicGFja2FnZVwiOiBcImdhdWdlXCIsXHJcbiAgICBcInZlcnNpb25cIjogMVxyXG4gIH0sXHJcbiAgXCJHZW9DaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiR2VvQ2hhcnRcIixcclxuICAgIFwicGFja2FnZVwiOiBcImdlb2NoYXJ0XCIsXHJcbiAgICBcInZlcnNpb25cIjogMVxyXG4gIH0sXHJcbiAgXCJIaXN0b2dyYW1DaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiSGlzdG9ncmFtXCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJjb3JlY2hhcnRcIixcclxuICAgIFwidmVyc2lvblwiOiAxXHJcbiAgfSxcclxuICBcIkxpbmVDaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiTGluZUNoYXJ0XCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJjb3JlY2hhcnRcIixcclxuICAgIFwidmVyc2lvblwiOiAxXHJcbiAgfSxcclxuICBcIlBpZUNoYXJ0XCI6IHtcclxuICAgIFwiY2xhc3NcIjogXCJQaWVDaGFydFwiLFxyXG4gICAgXCJwYWNrYWdlXCI6IFwiY29yZWNoYXJ0XCIsXHJcbiAgICBcInZlcnNpb25cIjogMVxyXG4gIH0sXHJcbiAgXCJTYW5rZXlDaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiU2Fua2V5XCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJzYW5rZXlcIixcclxuICAgIFwidmVyc2lvblwiOiAxXHJcbiAgfSxcclxuICBcIlNjYXR0ZXJDaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiU2NhdHRlckNoYXJ0XCIsXHJcbiAgICBcInBhY2thZ2VcIjogXCJjb3JlY2hhcnRcIixcclxuICAgIFwidmVyc2lvblwiOiAxXHJcbiAgfSxcclxuICBcIlN0ZXBwZWRBcmVhQ2hhcnRcIjoge1xyXG4gICAgXCJjbGFzc1wiOiBcIlN0ZXBwZWRBcmVhQ2hhcnRcIixcclxuICAgIFwicGFja2FnZVwiOiBcImNvcmVjaGFydFwiLFxyXG4gICAgXCJ2ZXJzaW9uXCI6IDFcclxuICB9LFxyXG4gIFwiVGFibGVDaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiVGFibGVcIixcclxuICAgIFwicGFja2FnZVwiOiBcInRhYmxlXCIsXHJcbiAgICBcInZlcnNpb25cIjogMVxyXG4gIH0sXHJcbiAgXCJUaW1lbGluZUNoYXJ0XCI6IHtcclxuICAgIFwiY2xhc3NcIjogXCJUaW1lbGluZVwiLFxyXG4gICAgXCJwYWNrYWdlXCI6IFwidGltZWxpbmVcIixcclxuICAgIFwidmVyc2lvblwiOiAxXHJcbiAgfSxcclxuICBcIlRyZWVNYXBDaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiVHJlZU1hcFwiLFxyXG4gICAgXCJwYWNrYWdlXCI6IFwidHJlZW1hcFwiLFxyXG4gICAgXCJ2ZXJzaW9uXCI6IDFcclxuICB9LFxyXG4gIFwiV29yZFRyZWVDaGFydFwiOiB7XHJcbiAgICBcImNsYXNzXCI6IFwiV29yZFRyZWVcIixcclxuICAgIFwicGFja2FnZVwiOiBcIndvcmR0cmVlXCIsXHJcbiAgICBcInZlcnNpb25cIjogMVxyXG4gIH1cclxufSJdfQ==
