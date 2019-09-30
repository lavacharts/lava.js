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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src */ "./src/index.ts");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Utils */ "./src/Utils.ts");
/* harmony import */ var _src_Utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_Utils__WEBPACK_IMPORTED_MODULE_1__);
/* eslint:globals __OPTIONS__ */




/**
 * Attach the Lava.js module to the window
 * and create a new instance.
 */
window.lava = new LavaJs();

/**
 * If LavaJs was loaded from Lavacharts, the __OPTIONS__
 * placeholder will be a JSON object of options.
 */
if (typeof __OPTIONS__ !== "undefined") {
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
  _src_Utils__WEBPACK_IMPORTED_MODULE_1___default.a.domLoaded().then(() => {
    window.lava.run();
  });
}


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./src/Chart.ts":
/*!**********************!*\
  !*** ./src/Chart.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Renderable_1 = __importDefault(__webpack_require__(/*! ./Renderable */ "./src/Renderable.ts"));
var Chart = (function (_super) {
    __extends(Chart, _super);
    function Chart(payload) {
        var _this = _super.call(this, payload) || this;
        _this.png = Boolean(payload.png);
        return _this;
    }
    Chart.prototype.setup = function () {
        this.gchart = new window.google.visualization[this.class](this.container);
    };
    Chart.prototype._postDraw = function () {
        if (this.png) {
            this.drawPng();
        }
    };
    Chart.prototype.drawPng = function () {
        var img = document.createElement("img");
        img.src = this.gchart.getImageURI();
        if (this.container) {
            this.container.innerHTML = "";
            this.container.appendChild(img);
        }
    };
    Chart.prototype.attachEvents = function () {
        var _this = this;
        this.events.forEach(function (callback, event) {
            var context = window;
            var func = callback;
            if (typeof callback === "object") {
                context = context[callback[0]];
                func = callback[1];
            }
            console.log("[lava.js] The \"" + _this.uuid + "::" + event + "\" event will be handled by \"" + func + "\" in the context", context);
            window.google.visualization.events.addListener(_this.gchart, event, function () {
                var callback = Object.bind(context[Object.call.prototype.toString(func)], _this.gchart);
                callback(_this.data);
            });
        });
    };
    return Chart;
}(Renderable_1.default));
exports.default = Chart;


/***/ }),

/***/ "./src/Dashboard.ts":
/*!**************************!*\
  !*** ./src/Dashboard.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Renderable_1 = __importDefault(__webpack_require__(/*! ./Renderable */ "./src/Renderable.ts"));
var Dashboard = (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard(json) {
        var _this = this;
        json.type = "Dashboard";
        _this = _super.call(this, json) || this;
        _this.bindings = json.bindings;
        return _this;
    }
    Dashboard.prototype.setup = function () {
        this.gchart = new window.google.visualization.Dashboard(this.container);
        this._attachBindings();
    };
    Dashboard.prototype._attachBindings = function () {
        var e_1, _a, e_2, _b, e_3, _c;
        try {
            for (var _d = __values(this.bindings), _e = _d.next(); !_e.done; _e = _d.next()) {
                var binding = _e.value;
                var controlWraps = [];
                var chartWraps = [];
                try {
                    for (var _f = (e_2 = void 0, __values(binding.controlWrappers)), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var controlWrap = _g.value;
                        controlWraps.push(new google.visualization.ControlWrapper(controlWrap));
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                try {
                    for (var _h = (e_3 = void 0, __values(binding.chartWrappers)), _j = _h.next(); !_j.done; _j = _h.next()) {
                        var chartWrap = _j.value;
                        chartWraps.push(new google.visualization.ChartWrapper(chartWrap));
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                this.gchart.bind(controlWraps, chartWraps);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return Dashboard;
}(Renderable_1.default));
exports.default = Dashboard;


/***/ }),

/***/ "./src/DataQuery.ts":
/*!**************************!*\
  !*** ./src/DataQuery.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Errors_1 = __webpack_require__(/*! ./Errors */ "./src/Errors.ts");
var DataQuery = (function () {
    function DataQuery(url, opts, tap) {
        this.url = url;
        this.tap = function (query) { return query; };
        this.opts = { sendMethod: "auto" };
        if (tap) {
            this.tap = tap;
        }
        if (opts) {
            this.opts;
        }
    }
    DataQuery.create = function (payload) {
        if (!payload.url) {
            throw new Errors_1.DataError('"url" is a mandatory parameter for creating a DataQuery.');
        }
        var query = new DataQuery(payload.url);
        if (typeof payload.opts === "object") {
            query.opts = payload.opts;
        }
        if (typeof payload.tap === "function") {
            query.tap = payload.tap;
        }
        return query;
    };
    DataQuery.prototype.send = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            var _this = this;
            return __generator(this, function (_a) {
                query = new window.google.visualization.Query(this.url, this.opts);
                return [2, new Promise(function (resolve, reject) {
                        _this.tap(query).send(function (response) {
                            if (response.isError()) {
                                reject(response);
                            }
                            resolve(response);
                        });
                    })];
            });
        });
    };
    return DataQuery;
}());
exports.default = DataQuery;


/***/ }),

/***/ "./src/DefaultOptions.ts":
/*!*******************************!*\
  !*** ./src/DefaultOptions.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    autoRun: false,
    datetimeFormat: "",
    debounceTimeout: 250,
    locale: "en",
    mapsApiKey: "",
    responsive: true,
    timezone: "America/Los_Angeles"
};


/***/ }),

/***/ "./src/Errors.ts":
/*!***********************!*\
  !*** ./src/Errors.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LavaJsError = (function (_super) {
    __extends(LavaJsError, _super);
    function LavaJsError(message) {
        if (message === void 0) { message = "There was an error"; }
        return _super.call(this, message) || this;
    }
    return LavaJsError;
}(Error));
exports.LavaJsError = LavaJsError;
var InvalidCallback = (function (_super) {
    __extends(InvalidCallback, _super);
    function InvalidCallback(callback) {
        return _super.call(this, "[lava.js] \"" + typeof callback + "\" is not a valid callback.") || this;
    }
    return InvalidCallback;
}(LavaJsError));
exports.InvalidCallback = InvalidCallback;
var RenderableNotFound = (function (_super) {
    __extends(RenderableNotFound, _super);
    function RenderableNotFound(label) {
        return _super.call(this, "[lava.js] A renderable with the label \"" + label + "\" was not found.") || this;
    }
    return RenderableNotFound;
}(LavaJsError));
exports.RenderableNotFound = RenderableNotFound;
var DataError = (function (_super) {
    __extends(DataError, _super);
    function DataError(msg) {
        return _super.call(this, msg) || this;
    }
    return DataError;
}(LavaJsError));
exports.DataError = DataError;
var ElementIdNotFound = (function (_super) {
    __extends(ElementIdNotFound, _super);
    function ElementIdNotFound(elemId) {
        return _super.call(this, "[lava.js] DOM node where id=\"" + elemId + "\" was not found.") || this;
    }
    return ElementIdNotFound;
}(LavaJsError));
exports.ElementIdNotFound = ElementIdNotFound;
LavaJsError.prototype = Error.prototype;
DataError.prototype = LavaJsError.prototype;
InvalidCallback.prototype = LavaJsError.prototype;
ElementIdNotFound.prototype = LavaJsError.prototype;
RenderableNotFound.prototype = LavaJsError.prototype;


/***/ }),

/***/ "./src/GoogleLoader.ts":
/*!*****************************!*\
  !*** ./src/GoogleLoader.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_VERSION = "current";
exports.LOADER_URL = "https://www.gstatic.com/charts/loader.js";
var GoogleLoader = (function () {
    function GoogleLoader(options) {
        this.options = options;
        this.packages = new Set(["corechart"]);
    }
    Object.defineProperty(GoogleLoader.prototype, "isLoaded", {
        get: function () {
            return typeof window.google !== "undefined";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleLoader.prototype, "config", {
        get: function () {
            var config = {
                packages: this.packages,
                language: this.options.locale
            };
            if (this.options.mapsApiKey !== "") {
                Object.assign(config, { mapsApiKey: this.options.mapsApiKey });
            }
            return config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleLoader.prototype, "googleLoaderInPage", {
        get: function () {
            var e_1, _a;
            var scripts = document.getElementsByTagName("script");
            try {
                for (var _b = __values(Array.from(scripts)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var script = _c.value;
                    if (script.src === exports.LOADER_URL) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    GoogleLoader.prototype.addPackage = function (pkgs) {
        this.packages.add(pkgs);
    };
    GoogleLoader.prototype.addPackages = function (packages) {
        packages.forEach(this.packages.add);
    };
    GoogleLoader.prototype.loadGoogle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("[lava.js] Resolving Google...");
                        if (!(this.googleLoaderInPage === false)) return [3, 2];
                        console.log("[lava.js] Static loader not found, appending to head");
                        return [4, this.addGoogleScriptToHead()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        console.log("[lava.js] Static loader found, initializing window.google");
                        return [2, this.googleChartLoader()];
                }
            });
        });
    };
    GoogleLoader.prototype.googleChartLoader = function () {
        var _this = this;
        return new Promise(function (resolve) {
            console.log("[lava.js] Loading Google with config:", _this.config);
            window.google.charts.load(exports.API_VERSION, _this.config);
            window.google.charts.setOnLoadCallback(resolve);
        });
    };
    GoogleLoader.prototype.addGoogleScriptToHead = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        var script = document.createElement("script");
                        script.type = "text/javascript";
                        script.async = true;
                        script.src = exports.LOADER_URL;
                        script.onload = script.onreadystatechange = function (event) {
                            event = event || window.event;
                            if (event.type === "load" ||
                                /loaded|complete/.test(script.readyState)) {
                                script.onload = script.onreadystatechange = null;
                                resolve();
                            }
                        };
                        document.head.appendChild(script);
                    })];
            });
        });
    };
    return GoogleLoader;
}());
exports.default = GoogleLoader;


/***/ }),

/***/ "./src/LavaJs.ts":
/*!***********************!*\
  !*** ./src/LavaJs.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __importDefault(__webpack_require__(/*! events */ "./node_modules/events/events.js"));
var Chart_1 = __importDefault(__webpack_require__(/*! ./Chart */ "./src/Chart.ts"));
var Dashboard_1 = __importDefault(__webpack_require__(/*! ./Dashboard */ "./src/Dashboard.ts"));
var DataQuery_1 = __importDefault(__webpack_require__(/*! ./DataQuery */ "./src/DataQuery.ts"));
var DefaultOptions_1 = __importDefault(__webpack_require__(/*! ./DefaultOptions */ "./src/DefaultOptions.ts"));
var Errors_1 = __webpack_require__(/*! ./Errors */ "./src/Errors.ts");
var GoogleLoader_1 = __importDefault(__webpack_require__(/*! ./GoogleLoader */ "./src/GoogleLoader.ts"));
var Utils_1 = __webpack_require__(/*! ./Utils */ "./src/Utils.ts");
var LavaJs = (function (_super) {
    __extends(LavaJs, _super);
    function LavaJs(options) {
        var _this = _super.call(this) || this;
        _this.volcano = new Map();
        if (options) {
            _this.options = Object.assign(options, DefaultOptions_1.default);
        }
        else {
            _this.options = DefaultOptions_1.default;
        }
        _this.loader = new GoogleLoader_1.default(_this.options);
        return _this;
    }
    LavaJs.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.loader.isLoaded === false)) return [3, 2];
                        return [4, this.loader.loadGoogle()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        console.log("[lava.js] Google is ready", window.google);
                        return [2, window.google];
                }
            });
        });
    };
    LavaJs.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var runPromises, error_1, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runPromises = [];
                        console.log("[lava.js] v" + LavaJs.VERSION + " Running...");
                        console.log("[lava.js] Loading options:", this.options);
                        this.attachRedrawHandler();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.init()];
                    case 2:
                        _a.sent();
                        return [3, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.emit("error", error_1);
                        return [3, 4];
                    case 4:
                        this.volcano.forEach(function (renderable) {
                            console.log("[lava.js] Rendering " + renderable.uuid);
                            runPromises.push(renderable.run());
                        });
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4, Promise.all(runPromises)];
                    case 6:
                        _a.sent();
                        return [3, 8];
                    case 7:
                        error_2 = _a.sent();
                        this.emit("error", error_2);
                        return [3, 8];
                    case 8:
                        console.log("[lava.js] Ready!");
                        this.emit("ready");
                        if (typeof this.readyCallback === "function") {
                            this.readyCallback();
                        }
                        return [2];
                }
            });
        });
    };
    LavaJs.prototype.query = function (url) {
        if (typeof url === "string") {
            return new DataQuery_1.default(url);
        }
        else {
            return DataQuery_1.default.create(url);
        }
    };
    LavaJs.prototype.create = function (payload) {
        console.log("[lava.js] Creating a new " + payload.type + ":", payload);
        if (payload.type === "Dashboard") {
            return new Dashboard_1.default(payload);
        }
        return new Chart_1.default(payload);
    };
    LavaJs.prototype.store = function (renderable) {
        var newRenderable = this.create(renderable);
        console.log("[lava.js] Storing " + newRenderable.uuid);
        this.loader.addPackages(newRenderable.packages);
        this.volcano.set(newRenderable.label, newRenderable);
        return newRenderable;
    };
    LavaJs.prototype.get = function (label) {
        if (this.volcano.has(label) === false) {
            throw new Errors_1.RenderableNotFound(label);
        }
        return this.volcano.get(label);
    };
    LavaJs.prototype.ready = function (callback) {
        if (typeof callback !== "function") {
            throw new Errors_1.InvalidCallback(callback);
        }
        this.readyCallback = callback.bind(this);
    };
    LavaJs.prototype.loadData = function (label, payload, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var chart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        chart = this.get(label);
                        return [4, chart.setData(payload)];
                    case 1:
                        _a.sent();
                        chart.draw();
                        if (typeof callback === "function") {
                            callback(chart.data, chart.gchart);
                        }
                        return [2];
                }
            });
        });
    };
    LavaJs.prototype.loadOptions = function (label, payload, callback) {
        var chart = this.get(label);
        chart.options = Object.assign(chart.options, payload);
        try {
            chart.draw();
        }
        catch (error) {
            this.emit("error", error);
        }
        if (typeof callback === "function") {
            callback(chart.data, chart.gchart);
        }
    };
    LavaJs.prototype.redrawAll = function () {
        if (this.volcano.size === 0) {
            console.log("[lava.js] Nothing to redraw.");
            return false;
        }
        console.log("[lava.js] Redrawing " + this.volcano.size + " renderables.");
        this.volcano.forEach(function (renderable) {
            console.log("[lava.js] Redrawing " + renderable.uuid);
            renderable.draw();
        });
        return true;
    };
    LavaJs.prototype.attachRedrawHandler = function () {
        var _this = this;
        if (this.options.responsive === true) {
            var debounced_1;
            Utils_1.addEvent(window, "resize", function () {
                clearTimeout(debounced_1);
                debounced_1 = setTimeout(function () {
                    console.log("[lava.js] Window re-sized, redrawing...");
                    _this.redrawAll();
                }, _this.options.debounceTimeout);
            });
        }
    };
    LavaJs.VERSION = "__VERSION__";
    return LavaJs;
}(events_1.default));
exports.default = LavaJs;


/***/ }),

/***/ "./src/Renderable.ts":
/*!***************************!*\
  !*** ./src/Renderable.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __importDefault(__webpack_require__(/*! events */ "./node_modules/events/events.js"));
var _1 = __webpack_require__(/*! . */ "./src/index.ts");
var Errors_1 = __webpack_require__(/*! ./Errors */ "./src/Errors.ts");
var Utils_1 = __webpack_require__(/*! ./Utils */ "./src/Utils.ts");
var Renderable = (function (_super) {
    __extends(Renderable, _super);
    function Renderable(json) {
        var _this = _super.call(this) || this;
        _this.type = json.type;
        _this.label = json.label;
        _this.dataSrc = json.data;
        _this.elementId = json.elementId;
        _this.container = document.getElementById(_this.elementId);
        _this.options = json.options || {};
        _this.formats = json.formats || [];
        return _this;
    }
    Object.defineProperty(Renderable.prototype, "class", {
        get: function () {
            return Utils_1.getVizProps(this.type).class;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Renderable.prototype, "packages", {
        get: function () {
            return [Utils_1.getVizProps(this.type).package];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Renderable.prototype, "uuid", {
        get: function () {
            return this.type + "::" + this.label;
        },
        enumerable: true,
        configurable: true
    });
    Renderable.prototype.draw = function () {
        if (typeof this.preDraw === "function") {
            console.log("[lava.js] Running " + this.uuid + ".preDraw()");
            this.preDraw();
        }
        if (!this.data) {
            throw new Errors_1.DataError(this.uuid + " Could not draw, data is " + this.data);
        }
        this.gchart.draw(this.data, this.options);
        if (typeof this.postDraw === "function") {
            console.log("[lava.js] Running " + this.uuid + ".postDraw()");
            this.postDraw();
        }
    };
    Renderable.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.container) {
                            throw new Errors_1.ElementIdNotFound(this.elementId);
                        }
                        this.attachEventRelays();
                        return [4, this.setData(this.dataSrc)];
                    case 1:
                        _a.sent();
                        if (this.formats) {
                            this.applyFormats();
                        }
                        this.draw();
                        return [2];
                }
            });
        });
    };
    Renderable.prototype.setData = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(payload instanceof _1.DataQuery)) return [3, 2];
                        console.log("[lava.js] Sending DataQuery for " + this.uuid);
                        return [4, payload.send()];
                    case 1:
                        response = _a.sent();
                        console.log("[lava.js] Response received:", response);
                        this.data = response.getDataTable();
                        return [3, 3];
                    case 2:
                        this.data = _1.Utils.createDataTable(payload);
                        _a.label = 3;
                    case 3:
                        if (this.data instanceof google.visualization.DataTable === false) {
                            throw new Errors_1.DataError("There was a error setting the data for " + this.uuid);
                        }
                        console.log("[lava.js] Data set for " + this.uuid, this.data);
                        if (payload.formats) {
                            this.applyFormats(payload.formats);
                        }
                        return [2];
                }
            });
        });
    };
    Renderable.prototype.applyFormats = function (formats) {
        var e_1, _a;
        if (formats) {
            this.formats = formats;
        }
        try {
            for (var _b = __values(this.formats), _c = _b.next(); !_c.done; _c = _b.next()) {
                var format = _c.value;
                var formatter = new window.google.visualization[format.type](format.options);
                console.log("[lava.js] Formatting data for " + this.uuid + ".");
                console.log("[lava.js] Formatting column [" + format.index + "] with:", format);
                formatter.format(this.data, format.index);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Renderable.prototype.attachEventRelays = function () {
        var _this = this;
        ["ready", "select", "error", "onmouseover", "onmouseout"].forEach(function (event) {
            window.google.visualization.events.addListener(_this.gchart, event, function () {
                return _this.emit(event, _this.gchart, _this.data);
            });
        });
    };
    return Renderable;
}(events_1.default));
exports.default = Renderable;


/***/ }),

/***/ "./src/Utils.ts":
/*!**********************!*\
  !*** ./src/Utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var visualization_props_1 = __webpack_require__(/*! ./types/visualization-props */ "./src/types/visualization-props/index.ts");
function getType(object) {
    return Object.prototype.toString.call(object).slice(8, -1);
}
exports.getType = getType;
function domLoaded() {
    return new Promise(function (resolve) {
        if (document.readyState === "interactive" ||
            document.readyState === "complete") {
            resolve();
        }
        else {
            document.addEventListener("DOMContentLoaded", function () { return resolve; });
        }
    });
}
exports.domLoaded = domLoaded;
function addEvent(target, type, callback, useCapture) {
    if (useCapture === void 0) { useCapture = false; }
    if (target === null || typeof target === "undefined") {
        return;
    }
    if (target.addEventListener) {
        target.addEventListener(type, callback, useCapture);
    }
    else if (target.attachEvent) {
        target.attachEvent("on" + type, callback);
    }
    else {
        target["on" + type] = callback;
    }
}
exports.addEvent = addEvent;
function getVizProps(chartType) {
    return visualization_props_1.VizPropsMap[chartType];
}
exports.getVizProps = getVizProps;
function createDataTable(payload) {
    if (getType(payload) === "Function") {
        return payload(new window.google.visualization.DataTable());
    }
    if (getType(payload) === "Array") {
        return window.google.visualization.arrayToDataTable(payload);
    }
    if (getType(payload.getTableProperties) === "Function") {
        return payload;
    }
    if (getType(payload.data) === "Array") {
        return window.google.visualization.data.join(new window.google.visualization.DataTable(payload.data[0]), new window.google.visualization.DataTable(payload.data[1]), payload.keys, payload.joinMethod, payload.dt1Columns, payload.dt2Columns);
    }
    if (getType(payload.data) === "Object") {
        payload = payload.data;
    }
    return new window.google.visualization.DataTable(payload);
}
exports.createDataTable = createDataTable;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Chart_1 = __importDefault(__webpack_require__(/*! ./Chart */ "./src/Chart.ts"));
exports.Chart = Chart_1.default;
var Dashboard_1 = __importDefault(__webpack_require__(/*! ./Dashboard */ "./src/Dashboard.ts"));
exports.Dashboard = Dashboard_1.default;
var DataQuery_1 = __importDefault(__webpack_require__(/*! ./DataQuery */ "./src/DataQuery.ts"));
exports.DataQuery = DataQuery_1.default;
var DefaultOptions_1 = __importDefault(__webpack_require__(/*! ./DefaultOptions */ "./src/DefaultOptions.ts"));
exports.DefaultOptions = DefaultOptions_1.default;
var Errors = __importStar(__webpack_require__(/*! ./Errors */ "./src/Errors.ts"));
exports.Errors = Errors;
var LavaJs_1 = __importDefault(__webpack_require__(/*! ./LavaJs */ "./src/LavaJs.ts"));
var Renderable_1 = __importDefault(__webpack_require__(/*! ./Renderable */ "./src/Renderable.ts"));
exports.Renderable = Renderable_1.default;
var Utils = __importStar(__webpack_require__(/*! ./Utils */ "./src/Utils.ts"));
exports.Utils = Utils;
exports.default = LavaJs_1.default;


/***/ }),

/***/ "./src/types/visualization-props/chart-props.json":
/*!********************************************************!*\
  !*** ./src/types/visualization-props/chart-props.json ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module) {

!(function webpackMissingModule() { var e = new Error("Cannot find module './chart-props.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/***/ }),

/***/ "./src/types/visualization-props/index.ts":
/*!************************************************!*\
  !*** ./src/types/visualization-props/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chart_props_json_1 = __importDefault(__webpack_require__(/*! ./chart-props.json */ "./src/types/visualization-props/chart-props.json"));
exports.VizPropsMap = chart_props_json_1.default;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoYXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9EYXNoYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RhdGFRdWVyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVmYXVsdE9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Vycm9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR29vZ2xlTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9MYXZhSnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlbmRlcmFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvdmlzdWFsaXphdGlvbi1wcm9wcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFB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Syx3QkFBYyxDQVNMO0FBUmhCLGtGQUFtQztBQVlqQyx3QkFBTTtBQVhSLHVGQUE4QjtBQUM5QixtR0FBc0M7QUFXcEMscUJBWEssb0JBQVUsQ0FXTDtBQVZaLCtFQUFpQztBQVcvQixzQkFBSztBQVRQLGtCQUFlLGdCQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R0Qiw0SUFBa0Q7QUFnQ3JDLG1CQUFXLEdBQXNDLDBCQUFnQixDQUFDIiwiZmlsZSI6ImxhdmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LnRzXCIpO1xuIiwiLyogZXNsaW50Omdsb2JhbHMgX19PUFRJT05TX18gKi9cblxuaW1wb3J0IGxhdmEgZnJvbSBcIi4vc3JjXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vc3JjL1V0aWxzXCI7XG5cbi8qKlxuICogQXR0YWNoIHRoZSBMYXZhLmpzIG1vZHVsZSB0byB0aGUgd2luZG93XG4gKiBhbmQgY3JlYXRlIGEgbmV3IGluc3RhbmNlLlxuICovXG53aW5kb3cubGF2YSA9IG5ldyBMYXZhSnMoKTtcblxuLyoqXG4gKiBJZiBMYXZhSnMgd2FzIGxvYWRlZCBmcm9tIExhdmFjaGFydHMsIHRoZSBfX09QVElPTlNfX1xuICogcGxhY2Vob2xkZXIgd2lsbCBiZSBhIEpTT04gb2JqZWN0IG9mIG9wdGlvbnMuXG4gKi9cbmlmICh0eXBlb2YgX19PUFRJT05TX18gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgd2luZG93LmxhdmEub3B0aW9ucyA9IF9fT1BUSU9OU19fO1xufVxuXG4vKipcbiAqIElmIHRoZSBtb2R1bGUgaXMgZ2V0dGluZyByYW4gZnJvbSBMYXZhY2hhcnRzLCB0aGVuIGF1dG9fcnVuXG4gKiB3aWxsIGJlIHRydWUgYW5kIG9uY2UgdGhlIERPTSBpcyByZWFkeSwgcmVuZGVyaW5nIHdpbGwgYmVnaW4uXG4gKlxuICogSWYgdGhlIG1vZHVsZSBpcyByYW4gYXMgYSBKUyBsaWJyYXJ5LCB0aGVuIGF1dG9fcnVuIGRlZmF1bHRzXG4gKiB0byBmYWxzZSBzbyB0aGUgdXNlciBjYW4gc2V0dXAgdGhlIGNoYXJ0cyBhbmQgY2FsbCAucnVuKClcbiAqL1xuaWYgKHdpbmRvdy5sYXZhLm9wdGlvbnMuYXV0b19ydW4gPT09IHRydWUpIHtcbiAgVXRpbHMuZG9tTG9hZGVkKCkudGhlbigoKSA9PiB7XG4gICAgd2luZG93LmxhdmEucnVuKCk7XG4gIH0pO1xufVxuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uICRnZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuICRnZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSAkZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgUmVmbGVjdEFwcGx5KHRoaXMubGlzdGVuZXIsIHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iLCJpbXBvcnQgUmVuZGVyYWJsZSBmcm9tIFwiLi9SZW5kZXJhYmxlXCI7XG5pbXBvcnQgeyBSZW5kZXJhYmxlVG1wbCB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBTdXBwb3J0ZWRDaGFydHMgfSBmcm9tIFwiLi90eXBlcy92aXN1YWxpemF0aW9uLXByb3BzL2luZGV4XCI7XG5cbi8qKlxuICogQ2hhcnQgQ2xhc3NcbiAqXG4gKiBAYXV0aG9yICAgIEtldmluIEhpbGwgPGtldmlua2hpbGxAZ21haWwuY29tPlxuICogQGNvcHlyaWdodCAoYykgMjAxOSwgS2V2aW4gSGlsbFxuICogQGxpY2Vuc2UgICBNSVRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBSZW5kZXJhYmxlIHtcbiAgcG5nOiBib29sZWFuO1xuICBldmVudHM6IGFueTtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IENoYXJ0LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB7XG4gICAqICAgICBsYWJlbDogJ1Rlc3QnLFxuICAgKiAgICAgdHlwZTogJ1BpZUNoYXJ0JyxcbiAgICogICAgIGVsZW1lbnRJZDogJ215LXBpZS1jaGFydCcsXG4gICAqICAgICBkYXRhdGFibGU6IFtcbiAgICogICAgICAgICBbJ1Rhc2snLCAnSG91cnMgcGVyIERheSddLFxuICAgKiAgICAgICAgIFsnV29yaycsICAgICAxMV0sXG4gICAqICAgICAgICAgWydFYXQnLCAgICAgIDJdLFxuICAgKiAgICAgICAgIFsnQ29tbXV0ZScsICAyXSxcbiAgICogICAgICAgICBbJ1dhdGNoIFRWJywgMl0sXG4gICAqICAgICAgICAgWydTbGVlcCcsICAgIDddXG4gICAqICAgICBdLFxuICAgKiAgICAgb3B0aW9uczoge1xuICAgKiAgICAgICAgIHRpdGxlOiAnTXkgRGFpbHkgQWN0aXZpdGllcydcbiAgICogICAgIH1cbiAgICogfVxuICAgKi9cbiAgY29uc3RydWN0b3IocGF5bG9hZDogUmVuZGVyYWJsZVRtcGwpIHtcbiAgICBzdXBlcihwYXlsb2FkKTtcblxuICAgIC8qKlxuICAgICAqIElmIHRoaXMgaXMgc2V0IHRvIHRydWUsIHRoZW4gdGhlIHtAbGluayBDaGFydH0gd2lsbCBiZSBvdXRwdXQgYXMgYSBQTkdcbiAgICAgKlxuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucG5nID0gQm9vbGVhbihwYXlsb2FkLnBuZyk7XG4gIH1cblxuICAvKipcbiAgICogQWN0aW9ucyB0byBwZXJmb3JtIGJlZm9yZSBkcmF3aW5nIHRoZSB7QGxpbmsgQ2hhcnR9XG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgaGF2ZSBhY2Nlc3MgdG8gd2luZG93Lmdvb2dsZSBzaW5jZSBpdCBpcyBjYWxsZWRcbiAgICogd2l0aGluIHRoZSByZW5kZXIgbWV0aG9kLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBzZXR1cCgpOiB2b2lkIHtcbiAgICB0aGlzLmdjaGFydCA9IG5ldyB3aW5kb3cuZ29vZ2xlLnZpc3VhbGl6YXRpb25bXG4gICAgICB0aGlzLmNsYXNzIGFzIFN1cHBvcnRlZENoYXJ0c1xuICAgIF0odGhpcy5jb250YWluZXIpIGFzIGdvb2dsZS52aXN1YWxpemF0aW9uLkNoYXJ0QmFzZTtcblxuICAgIC8vIFRPRE86IGFwcGVuZCBMYXZhY2hhcnQgZGVmaW5lZCBldmVudHM/XG4gICAgLy8gaWYgKHRoaXMuZXZlbnRzKSB7XG4gICAgLy8gICAgIHRoaXMuYXR0YWNoRXZlbnRzKCk7XG4gICAgLy8gfVxuICB9XG5cbiAgLyoqXG4gICAqIEFjdGlvbnMgdG8gcGVyZm9ybSBvbmNlIHRoZSB7QGxpbmsgQ2hhcnR9IGhhcyBiZWVuIGRyYXduXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgaGF2ZSBhY2Nlc3MgdG8gd2luZG93Lmdvb2dsZSBzaW5jZSBpdCBpcyBjYWxsZWRcbiAgICogd2l0aGluIHRoZSBydW4gbWV0aG9kLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfcG9zdERyYXcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG5nKSB7XG4gICAgICB0aGlzLmRyYXdQbmcoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRHJhd3MgdGhlIGNoYXJ0IGFzIGEgUE5HIGluc3RlYWQgb2YgdGhlIHN0YW5kYXJkIFNWR1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2NoYXJ0L2ludGVyYWN0aXZlL2RvY3MvcHJpbnRpbmdcbiAgICovXG4gIHByaXZhdGUgZHJhd1BuZygpOiB2b2lkIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zcmMgPSB0aGlzLmdjaGFydC5nZXRJbWFnZVVSSSgpO1xuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoIHRoZSBkZWZpbmVkIGNoYXJ0IGV2ZW50IGhhbmRsZXJzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcHJpdmF0ZSBhdHRhY2hFdmVudHMoKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudHMuZm9yRWFjaCgoY2FsbGJhY2s6IEZ1bmN0aW9uLCBldmVudDogYW55KSA9PiB7XG4gICAgICBsZXQgY29udGV4dCA9IHdpbmRvdztcbiAgICAgIGxldCBmdW5jID0gY2FsbGJhY2s7XG5cbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAgIC8vQHRzLWlnbm9yZSBJIGRvbid0IGtub3cgd2hhdCB0byBkbyBoZXJlXG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0W2NhbGxiYWNrWzBdXTtcbiAgICAgICAgZnVuYyA9IGNhbGxiYWNrWzFdO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYFtsYXZhLmpzXSBUaGUgXCIke3RoaXMudXVpZH06OiR7ZXZlbnR9XCIgZXZlbnQgd2lsbCBiZSBoYW5kbGVkIGJ5IFwiJHtmdW5jfVwiIGluIHRoZSBjb250ZXh0YCxcbiAgICAgICAgY29udGV4dFxuICAgICAgKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdGhlIGNvbnRleHQgb2YgXCJ0aGlzXCIgd2l0aGluIHRoZSB1c2VyIHByb3ZpZGVkIGNhbGxiYWNrIHRvIHRoZVxuICAgICAgICogY2hhcnQgdGhhdCBmaXJlZCB0aGUgZXZlbnQgd2hpbGUgcHJvdmlkaW5nIHRoZSBkYXRhdGFibGUgb2YgdGhlIGNoYXJ0XG4gICAgICAgKiB0byB0aGUgY2FsbGJhY2sgYXMgYW4gYXJndW1lbnQuXG4gICAgICAgKi9cbiAgICAgIHdpbmRvdy5nb29nbGUudmlzdWFsaXphdGlvbi5ldmVudHMuYWRkTGlzdGVuZXIodGhpcy5nY2hhcnQsIGV2ZW50LCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gT2JqZWN0LmJpbmQoXG4gICAgICAgICAgY29udGV4dFtPYmplY3QuY2FsbC5wcm90b3R5cGUudG9TdHJpbmcoZnVuYyldLFxuICAgICAgICAgIHRoaXMuZ2NoYXJ0XG4gICAgICAgICkgYXMgKGRhdGE6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSkgPT4gYW55O1xuXG4gICAgICAgIGNhbGxiYWNrKHRoaXMuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlbmRlcmFibGUgZnJvbSBcIi4vUmVuZGVyYWJsZVwiO1xuXG4vKipcbiAqIERhc2hib2FyZCBDbGFzc1xuICpcbiAqIEBjbGFzc1xuICogQG1vZHVsZSAgICBtb2R1bGU6TGF2YUpzL0Rhc2hib2FyZFxuICogQGF1dGhvciAgICBLZXZpbiBIaWxsIDxrZXZpbmtoaWxsQGdtYWlsLmNvbT5cbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTksIEtldmluIEhpbGxcbiAqIEBsaWNlbnNlICAgTUlUXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlbmRlcmFibGUge1xuICBiaW5kaW5nczogYW55O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgRGFzaGJvYXJkXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBqc29uIEpTT04gb2JqZWN0IHJlcHJlc2VudGluZyBhIERhc2hib2FyZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGpzb24pIHtcbiAgICBqc29uLnR5cGUgPSBcIkRhc2hib2FyZFwiO1xuXG4gICAgc3VwZXIoanNvbik7XG5cbiAgICB0aGlzLmJpbmRpbmdzID0ganNvbi5iaW5kaW5ncztcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3Rpb25zIHRvIHBlcmZvcm0gYmVmb3JlIGRyYXdpbmcgdGhlIHtAbGluayBEYXNoYm9hcmR9XG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgaGF2ZSBhY2Nlc3MgdG8gd2luZG93Lmdvb2dsZSBzaW5jZSBpdCBpcyBjYWxsZWRcbiAgICogd2l0aGluIHRoZSByZW5kZXIgbWV0aG9kLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBzZXR1cCgpIHtcbiAgICB0aGlzLmdjaGFydCA9IG5ldyB3aW5kb3cuZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGFzaGJvYXJkKHRoaXMuY29udGFpbmVyKTtcblxuICAgIHRoaXMuX2F0dGFjaEJpbmRpbmdzKCk7XG4gIH1cblxuICAvKipcbiAgICogUHJvY2VzcyBhbmQgYXR0YWNoIHRoZSBiaW5kaW5ncyB0byB0aGUgZGFzaGJvYXJkLlxuICAgKlxuICAgKiBAVE9ETzogTmVlZHMgdG8gYmUgbW9kaWZpZWQgYW5kIHRlc3RlZCBmb3IgdGhlIG90aGVyIHR5cGVzIG9mIGJpbmRpbmdzLlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgX2F0dGFjaEJpbmRpbmdzKCkge1xuICAgIGZvciAoY29uc3QgYmluZGluZyBvZiB0aGlzLmJpbmRpbmdzKSB7XG4gICAgICBjb25zdCBjb250cm9sV3JhcHMgPSBbXTtcbiAgICAgIGNvbnN0IGNoYXJ0V3JhcHMgPSBbXTtcblxuICAgICAgZm9yIChjb25zdCBjb250cm9sV3JhcCBvZiBiaW5kaW5nLmNvbnRyb2xXcmFwcGVycykge1xuICAgICAgICBjb250cm9sV3JhcHMucHVzaChuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29udHJvbFdyYXBwZXIoY29udHJvbFdyYXApKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBjaGFydFdyYXAgb2YgYmluZGluZy5jaGFydFdyYXBwZXJzKSB7XG4gICAgICAgIGNoYXJ0V3JhcHMucHVzaChuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyKGNoYXJ0V3JhcCkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmdjaGFydC5iaW5kKGNvbnRyb2xXcmFwcywgY2hhcnRXcmFwcyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhRXJyb3IgfSBmcm9tIFwiLi9FcnJvcnNcIjtcbmltcG9ydCB7IFF1ZXJ5VGFwIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEYXRhUXVlcnlUbXBsIHtcbiAgdXJsOiBzdHJpbmc7XG4gIG9wdHM/OiBnb29nbGUudmlzdWFsaXphdGlvbi5RdWVyeU9wdGlvbnM7XG4gIHRhcD86IFF1ZXJ5VGFwO1xufVxuXG4vKipcbiAqIFVzZWQgZm9yIGxvYWRpbmcgcmVtb3RlIGRhdGEgYXMgYSB7QGxpbmsgRGF0YVRhYmxlfVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vY2hhcnQvaW50ZXJhY3RpdmUvZG9jcy9yZWZlcmVuY2UjUXVlcnlcbiAqIEBjbGFzc1xuICogQGF1dGhvciAgICBLZXZpbiBIaWxsIDxrZXZpbmtoaWxsQGdtYWlsLmNvbT5cbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTksIEtldmluIEhpbGxcbiAqIEBsaWNlbnNlICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVCBNSVRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVF1ZXJ5IHtcbiAgcHVibGljIHRhcDogUXVlcnlUYXAgPSAoXG4gICAgcXVlcnk6IGdvb2dsZS52aXN1YWxpemF0aW9uLlF1ZXJ5XG4gICk6IGdvb2dsZS52aXN1YWxpemF0aW9uLlF1ZXJ5ID0+IHF1ZXJ5O1xuXG4gIHB1YmxpYyBvcHRzOiBnb29nbGUudmlzdWFsaXphdGlvbi5RdWVyeU9wdGlvbnMgPSB7IHNlbmRNZXRob2Q6IFwiYXV0b1wiIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBEYXRhUXVlcnkgZm9yIGEgRGF0YVRhYmxlXG4gICAqXG4gICAqIEB0aHJvd3Mge0RhdGFFcnJvcn1cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB1cmw6IHN0cmluZyxcbiAgICBvcHRzPzogZ29vZ2xlLnZpc3VhbGl6YXRpb24uUXVlcnlPcHRpb25zLFxuICAgIHRhcD86IFF1ZXJ5VGFwXG4gICkge1xuICAgIGlmICh0YXApIHtcbiAgICAgIHRoaXMudGFwID0gdGFwO1xuICAgIH1cblxuICAgIGlmIChvcHRzKSB7XG4gICAgICB0aGlzLm9wdHM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBhIG5ldyBEYXRhUXVlcnkgYmFzZWQgb24gdGhlIGdpdmVuIHBheWxvYWRcbiAgICpcbiAgICogQHRocm93cyB7RGF0YUVycm9yfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZShwYXlsb2FkOiBEYXRhUXVlcnlUbXBsKTogRGF0YVF1ZXJ5IHtcbiAgICBpZiAoIXBheWxvYWQudXJsKSB7XG4gICAgICB0aHJvdyBuZXcgRGF0YUVycm9yKFxuICAgICAgICAnXCJ1cmxcIiBpcyBhIG1hbmRhdG9yeSBwYXJhbWV0ZXIgZm9yIGNyZWF0aW5nIGEgRGF0YVF1ZXJ5LidcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnkgPSBuZXcgRGF0YVF1ZXJ5KHBheWxvYWQudXJsKTtcblxuICAgIGlmICh0eXBlb2YgcGF5bG9hZC5vcHRzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBxdWVyeS5vcHRzID0gcGF5bG9hZC5vcHRzIGFzIGdvb2dsZS52aXN1YWxpemF0aW9uLlF1ZXJ5T3B0aW9ucztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBheWxvYWQudGFwID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHF1ZXJ5LnRhcCA9IHBheWxvYWQudGFwIGFzIFF1ZXJ5VGFwO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIC8vbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICAvKipcbiAgICogU2VuZCB0aGUgRGF0YVF1ZXJ5XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gIGFzeW5jIHNlbmQoKTogUHJvbWlzZTxnb29nbGUudmlzdWFsaXphdGlvbi5RdWVyeVJlc3BvbnNlPiB7XG4gICAgY29uc3QgcXVlcnkgPSBuZXcgd2luZG93Lmdvb2dsZS52aXN1YWxpemF0aW9uLlF1ZXJ5KHRoaXMudXJsLCB0aGlzLm9wdHMpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMudGFwKHF1ZXJ5KS5zZW5kKChyZXNwb25zZTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uUXVlcnlSZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuaXNFcnJvcigpKSB7XG4gICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBhdXRvUnVuOiBmYWxzZSxcclxuICBkYXRldGltZUZvcm1hdDogXCJcIixcclxuICBkZWJvdW5jZVRpbWVvdXQ6IDI1MCxcclxuICBsb2NhbGU6IFwiZW5cIixcclxuICBtYXBzQXBpS2V5OiBcIlwiLFxyXG4gIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgdGltZXpvbmU6IFwiQW1lcmljYS9Mb3NfQW5nZWxlc1wiXHJcbn07XHJcbiIsIi8qKlxuICogTGF2YUpzRXJyb3IgRXJyb3JcbiAqXG4gKiBCYXNlIGVycm9yIHRoYXQgdGhlIHNwZWNpZmljIGVycm9ycyBleHRlbmQuXG4gKi9cbmV4cG9ydCBjbGFzcyBMYXZhSnNFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSA9IFwiVGhlcmUgd2FzIGFuIGVycm9yXCIpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgfVxufVxuXG4vKipcbiAqIEludmFsaWRDYWxsYmFjayBFcnJvclxuICpcbiAqIFRocm93biB3aGVuIGFueXRoaW5nIGJ1dCBhIGZ1bmN0aW9uIGlzIGdpdmVuIGFzIGEgY2FsbGJhY2suXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZhbGlkQ2FsbGJhY2sgZXh0ZW5kcyBMYXZhSnNFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGNhbGxiYWNrOiBhbnkpIHtcbiAgICBzdXBlcihgW2xhdmEuanNdIFwiJHt0eXBlb2YgY2FsbGJhY2t9XCIgaXMgbm90IGEgdmFsaWQgY2FsbGJhY2suYCk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbnZhbGlkTGFiZWwgRXJyb3JcbiAqXG4gKiBUaHJvd24gd2hlbiBhIHtAbGluayBSZW5kZXJhYmxlfSBpcyBub3QgZm91bmQgaW4gdGhlIG1vZHVsZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlbmRlcmFibGVOb3RGb3VuZCBleHRlbmRzIExhdmFKc0Vycm9yIHtcbiAgY29uc3RydWN0b3IobGFiZWw6IHN0cmluZykge1xuICAgIHN1cGVyKGBbbGF2YS5qc10gQSByZW5kZXJhYmxlIHdpdGggdGhlIGxhYmVsIFwiJHtsYWJlbH1cIiB3YXMgbm90IGZvdW5kLmApO1xuICB9XG59XG5cbi8qKlxuICogRWxlbWVudElkTm90Rm91bmQgRXJyb3JcbiAqXG4gKiBUaHJvd24gd2hlbiB0aGUgZ2l2ZW4gSUQgZm9yIGFuIEhUTUxFbGVtZW50IGlzIG5vdCBmb3VuZCBpbiB0aGUgRE9NLlxuICovXG5leHBvcnQgY2xhc3MgRGF0YUVycm9yIGV4dGVuZHMgTGF2YUpzRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcihtc2c6IHN0cmluZykge1xuICAgIHN1cGVyKG1zZyk7XG4gIH1cbn1cblxuLyoqXG4gKiBFbGVtZW50SWROb3RGb3VuZCBFcnJvclxuICpcbiAqIFRocm93biB3aGVuIHRoZSBnaXZlbiBJRCBmb3IgYW4gSFRNTEVsZW1lbnQgaXMgbm90IGZvdW5kIGluIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjbGFzcyBFbGVtZW50SWROb3RGb3VuZCBleHRlbmRzIExhdmFKc0Vycm9yIHtcbiAgY29uc3RydWN0b3IoZWxlbUlkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgW2xhdmEuanNdIERPTSBub2RlIHdoZXJlIGlkPVwiJHtlbGVtSWR9XCIgd2FzIG5vdCBmb3VuZC5gKTtcbiAgfVxufVxuXG5MYXZhSnNFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5EYXRhRXJyb3IucHJvdG90eXBlID0gTGF2YUpzRXJyb3IucHJvdG90eXBlO1xuSW52YWxpZENhbGxiYWNrLnByb3RvdHlwZSA9IExhdmFKc0Vycm9yLnByb3RvdHlwZTtcbkVsZW1lbnRJZE5vdEZvdW5kLnByb3RvdHlwZSA9IExhdmFKc0Vycm9yLnByb3RvdHlwZTtcblJlbmRlcmFibGVOb3RGb3VuZC5wcm90b3R5cGUgPSBMYXZhSnNFcnJvci5wcm90b3R5cGU7XG4iLCJpbXBvcnQgeyBMYXZhSnNPcHRpb25zLCBNb2Rlcm5IVE1MU2NyaXB0RWxlbWVudCB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbi8qKlxuICogVmVyc2lvbiBvZiB0aGUgR29vZ2xlIGNoYXJ0cyBBUEkgdG8gbG9hZFxuICovXG5leHBvcnQgY29uc3QgQVBJX1ZFUlNJT04gPSBcImN1cnJlbnRcIjtcblxuLyoqXG4gKiBVcmwgdG8gR29vZ2xlJ3Mgc3RhdGljIGxvYWRlclxuICovXG5leHBvcnQgY29uc3QgTE9BREVSX1VSTCA9IFwiaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vY2hhcnRzL2xvYWRlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb29nbGVMb2FkZXIge1xuICAvKipcbiAgICogUGFja2FnZXMgdG8gbG9hZFxuICAgKi9cbiAgcHJpdmF0ZSBwYWNrYWdlczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KFtcImNvcmVjaGFydFwiXSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcHRpb25zOiBMYXZhSnNPcHRpb25zKSB7XG4gICAgLy9cbiAgfVxuXG4gIC8qKlxuICAgKiBGbGFnIHRoYXQgd2lsbCBiZSB0cnVlIG9uY2Ugd2luZG93Lmdvb2dsZSBpcyBhdmFpbGFibGUgaW4gcGFnZS5cbiAgICovXG4gIGdldCBpc0xvYWRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdy5nb29nbGUgIT09IFwidW5kZWZpbmVkXCI7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBvcHRpb25zIGZvciB0aGUgZ29vZ2xlIGxvYWRlci5cbiAgICovXG4gIGdldCBjb25maWcoKTogYW55IHtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgIHBhY2thZ2VzOiB0aGlzLnBhY2thZ2VzLFxuICAgICAgICBsYW5ndWFnZTogdGhpcy5vcHRpb25zLmxvY2FsZVxuICAgICAgfSAvKiAgYXMgR29vZ2xlQ2hhcnRDb25maWcgKi87XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm1hcHNBcGlLZXkgIT09IFwiXCIpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCB7IG1hcHNBcGlLZXk6IHRoaXMub3B0aW9ucy5tYXBzQXBpS2V5IH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICAvKipcbiAgICogRmxhZyB0aGF0IHdpbGwgYmUgdHJ1ZSBvbmNlIEdvb2dsZSdzIFN0YXRpYyBMb2FkZXIgaXMgaW4gcGFnZS5cbiAgICovXG4gIGdldCBnb29nbGVMb2FkZXJJblBhZ2UoKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXG4gICAgZm9yIChjb25zdCBzY3JpcHQgb2YgQXJyYXkuZnJvbShzY3JpcHRzKSkge1xuICAgICAgaWYgKHNjcmlwdC5zcmMgPT09IExPQURFUl9VUkwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBvbmUgcGFja2FnZSB0byB0aGUgbGlzdCB0aGF0IEdvb2dsZSBuZWVkcyB0byBsb2FkLlxuICAgKi9cbiAgYWRkUGFja2FnZShwa2dzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnBhY2thZ2VzLmFkZChwa2dzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbXVsdGlwbGUgcGFja2FnZXMgdG8gdGhlIGxpc3QgdGhhdCBHb29nbGUgbmVlZHMgdG8gbG9hZC5cbiAgICovXG4gIGFkZFBhY2thZ2VzKHBhY2thZ2VzOiBzdHJpbmdbXSB8IFNldDxzdHJpbmc+KTogdm9pZCB7XG4gICAgcGFja2FnZXMuZm9yRWFjaCh0aGlzLnBhY2thZ2VzLmFkZCk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCB0aGUgR29vZ2xlIFN0YXRpYyBMb2FkZXIgYW5kIHJlc29sdmUgdGhlIHByb21pc2Ugd2hlbiByZWFkeS5cbiAgICovXG4gIGFzeW5jIGxvYWRHb29nbGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc29sZS5sb2coXCJbbGF2YS5qc10gUmVzb2x2aW5nIEdvb2dsZS4uLlwiKTtcblxuICAgIGlmICh0aGlzLmdvb2dsZUxvYWRlckluUGFnZSA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW2xhdmEuanNdIFN0YXRpYyBsb2FkZXIgbm90IGZvdW5kLCBhcHBlbmRpbmcgdG8gaGVhZFwiKTtcblxuICAgICAgYXdhaXQgdGhpcy5hZGRHb29nbGVTY3JpcHRUb0hlYWQoKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIltsYXZhLmpzXSBTdGF0aWMgbG9hZGVyIGZvdW5kLCBpbml0aWFsaXppbmcgd2luZG93Lmdvb2dsZVwiKTtcblxuICAgIHJldHVybiB0aGlzLmdvb2dsZUNoYXJ0TG9hZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUnVucyB0aGUgR29vZ2xlIENoYXJ0IExvYWRlciB1c2luZyB0aGUgcGFzc2VkIFByb21pc2UgcmVzb2x2ZXIgYXNcbiAgICogdGhlIHNldE9uTG9hZENhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKi9cbiAgZ29vZ2xlQ2hhcnRMb2FkZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJbbGF2YS5qc10gTG9hZGluZyBHb29nbGUgd2l0aCBjb25maWc6XCIsIHRoaXMuY29uZmlnKTtcblxuICAgICAgd2luZG93Lmdvb2dsZS5jaGFydHMubG9hZChBUElfVkVSU0lPTiwgdGhpcy5jb25maWcpO1xuXG4gICAgICB3aW5kb3cuZ29vZ2xlLmNoYXJ0cy5zZXRPbkxvYWRDYWxsYmFjayhyZXNvbHZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgc2NyaXB0IHRhZyBmb3IgdGhlIEdvb2dsZSBTdGF0aWMgTG9hZGVyXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGFkZEdvb2dsZVNjcmlwdFRvSGVhZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcInNjcmlwdFwiXG4gICAgICApIGFzIE1vZGVybkhUTUxTY3JpcHRFbGVtZW50O1xuXG4gICAgICBzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4gICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgc2NyaXB0LnNyYyA9IExPQURFUl9VUkw7XG4gICAgICBzY3JpcHQub25sb2FkID0gc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBldmVudC50eXBlID09PSBcImxvYWRcIiB8fFxuICAgICAgICAgIC9sb2FkZWR8Y29tcGxldGUvLnRlc3Qoc2NyaXB0LnJlYWR5U3RhdGUpXG4gICAgICAgICkge1xuICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcblxuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCJldmVudHNcIjtcblxuaW1wb3J0IENoYXJ0IGZyb20gXCIuL0NoYXJ0XCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL0Rhc2hib2FyZFwiO1xuaW1wb3J0IERhdGFRdWVyeSwgeyBEYXRhUXVlcnlUbXBsIH0gZnJvbSBcIi4vRGF0YVF1ZXJ5XCI7XG5pbXBvcnQgRGVmYXVsdE9wdGlvbnMgZnJvbSBcIi4vRGVmYXVsdE9wdGlvbnNcIjtcbmltcG9ydCB7IEludmFsaWRDYWxsYmFjaywgUmVuZGVyYWJsZU5vdEZvdW5kIH0gZnJvbSBcIi4vRXJyb3JzXCI7XG5pbXBvcnQgR29vZ2xlTG9hZGVyIGZyb20gXCIuL0dvb2dsZUxvYWRlclwiO1xuaW1wb3J0IFJlbmRlcmFibGUgZnJvbSBcIi4vUmVuZGVyYWJsZVwiO1xuaW1wb3J0IHsgTGF2YUpzT3B0aW9ucywgUmVuZGVyYWJsZVRtcGwgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgYWRkRXZlbnQgfSBmcm9tIFwiLi9VdGlsc1wiO1xuXG4vKipcbiAqIEdvb2dsZSBDaGFydCBBUEkgd3JhcHBlciBsaWJyYXJ5XG4gKlxuICogVGhpcyBtb2R1bGUgY2FuIGJlIHVzZWQgYXMgYSBzdGFuZGFsb25lLCBicm93c2VyIGJhc2VkIGxpYnJhcnksIG9yIGluXG4gKiBjb25qdW5jdGlvbiB3aXRoIHRoZSBQSFAgbGlicmFyeSwgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9rZXZpbmtoaWxsL2xhdmFjaGFydHNcIj5MYXZhY2hhcnRzPC9hPi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBhdXRob3IgICAgS2V2aW4gSGlsbCA8a2V2aW5raGlsbEBnbWFpbC5jb20+XG4gKiBAY29weXJpZ2h0IChjKSAyMDE5LCBLZXZpbiBIaWxsXG4gKiBAbGljZW5zZSAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQgTUlUXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhdmFKcyBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBWZXJzaW9uIG9mIHRoZSBMYXZhSnMgbW9kdWxlXG4gICAqL1xuICBzdGF0aWMgVkVSU0lPTiA9IFwiX19WRVJTSU9OX19cIjtcblxuICAvKipcbiAgICogQ29uZmlndXJhYmxlIG9wdGlvbnMgZm9yIHRoZSBsaWJyYXJ5XG4gICAqL1xuICBwcml2YXRlIG9wdGlvbnM6IExhdmFKc09wdGlvbnM7XG5cbiAgLyoqXG4gICAqIENoYXJ0IHN0b3JhZ2VcbiAgICovXG4gIHByaXZhdGUgdm9sY2FubzogTWFwPHN0cmluZywgUmVuZGVyYWJsZT4gPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIFJlYWR5IENhbGxiYWNrXG4gICAqL1xuICBwcml2YXRlIHJlYWR5Q2FsbGJhY2shOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogTG9hZGVyIGNsYXNzIGZvciBhcHBlbmRpbmcgdGhlIGdvb2dsZSBzY3JpcHQgYW5kIG1ha2luZyB3aW5kb3cuZ29vZ2xlIGF2YWlsYWJsZVxuICAgKi9cbiAgcHJpdmF0ZSBsb2FkZXI6IEdvb2dsZUxvYWRlcjtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBMYXZhSnMgbGlicmFyeVxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucz86IExhdmFKc09wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucywgRGVmYXVsdE9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBEZWZhdWx0T3B0aW9ucztcbiAgICB9XG5cbiAgICB0aGlzLmxvYWRlciA9IG5ldyBHb29nbGVMb2FkZXIodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgbGlicmFyeSBieSBsb2FkaW5nIGdvb2dsZSB0byB0aGUgd2luZG93LlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGluaXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAodGhpcy5sb2FkZXIuaXNMb2FkZWQgPT09IGZhbHNlKSB7XG4gICAgICBhd2FpdCB0aGlzLmxvYWRlci5sb2FkR29vZ2xlKCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJbbGF2YS5qc10gR29vZ2xlIGlzIHJlYWR5XCIsIHdpbmRvdy5nb29nbGUpO1xuXG4gICAgcmV0dXJuIHdpbmRvdy5nb29nbGU7XG4gIH1cblxuICAvKipcbiAgICogUnVucyB0aGUgTGF2YUpzLmpzIG1vZHVsZVxuICAgKlxuICAgKiBAZW1pdHMge3JlYWR5fVxuICAgKi9cbiAgcHVibGljIGFzeW5jIHJ1bigpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHJ1blByb21pc2VzOiBQcm9taXNlPGFueT5bXSA9IFtdO1xuXG4gICAgY29uc29sZS5sb2coYFtsYXZhLmpzXSB2JHtMYXZhSnMuVkVSU0lPTn0gUnVubmluZy4uLmApO1xuICAgIGNvbnNvbGUubG9nKFwiW2xhdmEuanNdIExvYWRpbmcgb3B0aW9uczpcIiwgdGhpcy5vcHRpb25zKTtcblxuICAgIHRoaXMuYXR0YWNoUmVkcmF3SGFuZGxlcigpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnJvcik7XG4gICAgfVxuXG4gICAgdGhpcy52b2xjYW5vLmZvckVhY2gocmVuZGVyYWJsZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgW2xhdmEuanNdIFJlbmRlcmluZyAke3JlbmRlcmFibGUudXVpZH1gKTtcblxuICAgICAgcnVuUHJvbWlzZXMucHVzaChyZW5kZXJhYmxlLnJ1bigpKTtcbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChydW5Qcm9taXNlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycm9yKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIltsYXZhLmpzXSBSZWFkeSFcIik7XG5cbiAgICB0aGlzLmVtaXQoXCJyZWFkeVwiKTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5yZWFkeUNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIERhdGFRdWVyeX0gZm9yIGEge0BsaW5rIFJlbmRlcmFibGV9XG4gICAqXG4gICAqIElmIGEgU3RyaW5nIGlzIHBhc3NlZCwgdGhlbiBhIG5ldyB7QGxpbmsgRGF0YVF1ZXJ5fSBpcyBjcmVhdGVkIHdpdGggbm8gb3B0aW9ucy5cbiAgICogSWYgYW4gT2JqZWN0IGlzIHBhc3NlZCwgdGhlbiB0aGUgcXVlcnkgbXVzdCBiZSBkZWZpbmVkIGJ5IHRoZSBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgcXVlcnkodXJsOiBzdHJpbmcgfCBEYXRhUXVlcnlUbXBsKTogRGF0YVF1ZXJ5IHtcbiAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIG5ldyBEYXRhUXVlcnkodXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIERhdGFRdWVyeS5jcmVhdGUodXJsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhdGljIG1ldGhvZCBmb3IgY3JlYXRpbmcgbmV3IENoYXJ0cyBhbmQgRGFzaGJvYXJkcyBmcm9tIGEgcGF5bG9hZCBkZWZpbml0aW9uLlxuICAgKlxuICAgKiBUaGUgcGF5bG9hZCBwYXlsb2FkIGNhbiBjb21lIGZyb20gTGF2YWNoYXJ0cyBvciBtYW51YWxseSBpZiB1c2VkXG4gICAqIGFzIGFuIGluZGVwZW5kZW50IGxpYnJhcnkuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlKHBheWxvYWQ6IFJlbmRlcmFibGVUbXBsKTogQ2hhcnQgfCBEYXNoYm9hcmQge1xuICAgIGNvbnNvbGUubG9nKGBbbGF2YS5qc10gQ3JlYXRpbmcgYSBuZXcgJHtwYXlsb2FkLnR5cGV9OmAsIHBheWxvYWQpO1xuXG4gICAgaWYgKHBheWxvYWQudHlwZSA9PT0gXCJEYXNoYm9hcmRcIikge1xuICAgICAgcmV0dXJuIG5ldyBEYXNoYm9hcmQocGF5bG9hZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBDaGFydChwYXlsb2FkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZXMgb3IgY3JlYXRlcyB0aGVuIHN0b3JlcyBhIHtAbGluayBSZW5kZXJhYmxlfSB3aXRoaW4gdGhlIG1vZHVsZS5cbiAgICpcbiAgICogQHRvZG8gSWYgdGhlIGxpYnJhcnkgaGFzIHJhbiwgYW5kIGlzIHJlYWR5LCBsb2FkaW5nIG5ldyBjaGFydHMgd2lsbCBmb3JjZSBhIHJlZHJhd0FsbCBvZiBhbGwgdGhlIGN1cnJlbnRseSBkcmF3biBjaGFydHMuXG4gICAqL1xuICBwdWJsaWMgc3RvcmUocmVuZGVyYWJsZTogUmVuZGVyYWJsZVRtcGwpOiBDaGFydCB8IERhc2hib2FyZCB7XG4gICAgLy8gaWYgKHJlbmRlcmFibGUgaW5zdGFuY2VvZiBSZW5kZXJhYmxlID09PSBmYWxzZSkge1xuICAgIC8vICAgcmVuZGVyYWJsZSA9IHRoaXMuY3JlYXRlKHJlbmRlcmFibGUpO1xuICAgIC8vIH1cbiAgICBjb25zdCBuZXdSZW5kZXJhYmxlID0gdGhpcy5jcmVhdGUocmVuZGVyYWJsZSk7XG5cbiAgICBjb25zb2xlLmxvZyhgW2xhdmEuanNdIFN0b3JpbmcgJHtuZXdSZW5kZXJhYmxlLnV1aWR9YCk7XG5cbiAgICB0aGlzLmxvYWRlci5hZGRQYWNrYWdlcyhuZXdSZW5kZXJhYmxlLnBhY2thZ2VzKTtcblxuICAgIHRoaXMudm9sY2Fuby5zZXQobmV3UmVuZGVyYWJsZS5sYWJlbCwgbmV3UmVuZGVyYWJsZSk7XG5cbiAgICAvL2lmICh0aGlzLmlzUmVhZHkpIHtcbiAgICAvLyAgICB0aGlzLnJlZHJhd0FsbCgpO1xuICAgIC8vfVxuXG4gICAgcmV0dXJuIG5ld1JlbmRlcmFibGU7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgYSB7QGxpbmsgQ2hhcnR9IC8ge0BsaW5rIERhc2hib2FyZH0gZnJvbSBzdG9yYWdlLlxuICAgKlxuICAgKiBUaGUge0BsaW5rIENoYXJ0fSBvYmplY3QgaGFzIHRoZSB1c2VyIGRlZmluZWQgcHJvcGVydGllcyBzdWNoIGFzIGRhdGEsIG9wdGlvbnMsIGZvcm1hdHMsIGV0Yy5cbiAgICpcbiAgICogVGhlIEdvb2dsZSBDaGFydCBvYmplY3QgaXMgYXZhaWxhYmxlIGFzIFwiLmdjaGFydFwiIGZyb20gdGhlIHJldHVybmVkIExhdmFDaGFydC5cbiAgICogSXQgY2FuIGJlIHVzZWQgdG8gYWNjZXNzIGFueSBvZiB0aGUgYXZhaWxhYmxlIG1ldGhvZHMgc3VjaCBhc1xuICAgKiBnZXRJbWFnZVVSSSgpIG9yIGdldENoYXJ0TGF5b3V0SW50ZXJmYWNlKCkuXG4gICAqXG4gICAqIFNlZSBodHRwczovL2dvb2dsZS1kZXZlbG9wZXJzLmFwcHNwb3QuY29tL2NoYXJ0L2ludGVyYWN0aXZlL2RvY3MvZ2FsbGVyeS9saW5lY2hhcnQjbWV0aG9kc1xuICAgKiBmb3Igc29tZSBleGFtcGxlcyByZWxhdGl2ZSB0byBMaW5lQ2hhcnRzLlxuICAgKlxuICAgKiBAdGhyb3dzIHtSZW5kZXJhYmxlTm90Rm91bmR9XG4gICAqL1xuICBwdWJsaWMgZ2V0KGxhYmVsOiBzdHJpbmcpOiBDaGFydCB8IERhc2hib2FyZCB7XG4gICAgaWYgKHRoaXMudm9sY2Fuby5oYXMobGFiZWwpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IFJlbmRlcmFibGVOb3RGb3VuZChsYWJlbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudm9sY2Fuby5nZXQobGFiZWwpIGFzIENoYXJ0IHwgRGFzaGJvYXJkO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2lnbnMgYSBjYWxsYmFjayBmb3Igd2hlbiB0aGUgY2hhcnRzIGFyZSByZWFkeSB0byBiZSBpbnRlcmFjdGVkIHdpdGguXG4gICAqXG4gICAqIFRoaXMgaXMgdXNlZCB0byB3cmFwIGNhbGxzIHRvIGxhdmEubG9hZERhdGEoKSBvciBsYXZhLmxvYWRPcHRpb25zKClcbiAgICogdG8gcHJvdGVjdCBhZ2FpbnN0IGFjY2Vzc2luZyBjaGFydHMgdGhhdCBhcmVuJ3QgbG9hZGVkIHlldFxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEB0aHJvd3Mge0ludmFsaWRDYWxsYmFja31cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHB1YmxpYyByZWFkeShjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQ2FsbGJhY2soY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHRoaXMucmVhZHlDYWxsYmFjayA9IGNhbGxiYWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgbmV3IGRhdGEgaW50byB0aGUgY2hhcnQgYW5kIHJlZHJhd3MuXG4gICAqXG4gICAqXG4gICAqIFVzZWQgd2l0aCBhbiBBSkFYIGNhbGwgdG8gYSBQSFAgbWV0aG9kIHJldHVybmluZyBEYXRhVGFibGUtPnRvcGF5bG9hZCgpLFxuICAgKiBhIGNoYXJ0IGNhbiBiZSBkeW5hbWljYWxseSB1cGRhdGUgaW4gcGFnZSwgd2l0aG91dCByZWxvYWRzLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGxvYWREYXRhKFxuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgcGF5bG9hZDogb2JqZWN0LFxuICAgIGNhbGxiYWNrPzogRnVuY3Rpb25cbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBjaGFydCA9IHRoaXMuZ2V0KGxhYmVsKTtcblxuICAgIGF3YWl0IGNoYXJ0LnNldERhdGEocGF5bG9hZCk7XG5cbiAgICBjaGFydC5kcmF3KCk7XG5cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNhbGxiYWNrKGNoYXJ0LmRhdGEsIGNoYXJ0LmdjaGFydCk7XG4gICAgfVxuICB9XG5cbiAgLy9ub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG4gIC8qKlxuICAgKiBMb2FkcyBuZXcgb3B0aW9ucyBpbnRvIGEgY2hhcnQgYW5kIHJlZHJhd3MuXG4gICAqXG4gICAqXG4gICAqIFVzZWQgd2l0aCBhbiBBSkFYIGNhbGwsIG9yIGphdmFzY3JpcHQgZXZlbnRzLCB0byBsb2FkIGEgbmV3IGFycmF5IG9mIG9wdGlvbnMgaW50byBhIGNoYXJ0LlxuICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHVwZGF0ZSBhIGNoYXJ0IGR5bmFtaWNhbGx5LCB3aXRob3V0IHJlbG9hZHMuXG4gICAqL1xuICBwdWJsaWMgbG9hZE9wdGlvbnMoXG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICBwYXlsb2FkOiBvYmplY3QsXG4gICAgY2FsbGJhY2s/OiBGdW5jdGlvblxuICApOiB2b2lkIHtcbiAgICAvL1RPRE86IHRlc3QgdGhpc1xuICAgIGNvbnN0IGNoYXJ0ID0gdGhpcy5nZXQobGFiZWwpO1xuXG4gICAgY2hhcnQub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oY2hhcnQub3B0aW9ucywgcGF5bG9hZCk7XG5cbiAgICB0cnkge1xuICAgICAgY2hhcnQuZHJhdygpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjYWxsYmFjayhjaGFydC5kYXRhLCBjaGFydC5nY2hhcnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWRyYXdzIGFsbCBvZiB0aGUgcmVnaXN0ZXJlZCBjaGFydHMgb24gc2NyZWVuLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBhdHRhY2hlZCB0byB0aGUgd2luZG93IHJlc2l6ZSBldmVudCB3aXRoIGRlYm91bmNpbmdcbiAgICogdG8gbWFrZSB0aGUgY2hhcnRzIHJlc3BvbnNpdmUgdG8gdGhlIGJyb3dzZXIgcmVzaXppbmcuXG4gICAqL1xuICBwdWJsaWMgcmVkcmF3QWxsKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnZvbGNhbm8uc2l6ZSA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coYFtsYXZhLmpzXSBOb3RoaW5nIHRvIHJlZHJhdy5gKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGBbbGF2YS5qc10gUmVkcmF3aW5nICR7dGhpcy52b2xjYW5vLnNpemV9IHJlbmRlcmFibGVzLmApO1xuXG4gICAgdGhpcy52b2xjYW5vLmZvckVhY2gocmVuZGVyYWJsZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgW2xhdmEuanNdIFJlZHJhd2luZyAke3JlbmRlcmFibGUudXVpZH1gKTtcblxuICAgICAgcmVuZGVyYWJsZS5kcmF3KCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2ggYSBsaXN0ZW5lciB0byB0aGUgd2luZG93IHJlc2l6ZSBldmVudCBmb3IgcmVkcmF3aW5nIHRoZSBjaGFydHMuXG4gICAqL1xuICBwcml2YXRlIGF0dGFjaFJlZHJhd0hhbmRsZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZXNwb25zaXZlID09PSB0cnVlKSB7XG4gICAgICBsZXQgZGVib3VuY2VkITogTm9kZUpTLlRpbWVvdXQ7XG5cbiAgICAgIGFkZEV2ZW50KHdpbmRvdywgXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICAvLyBsZXQgcmVkcmF3QWxsID0gdGhpcy5yZWRyYXdBbGwoKS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGNsZWFyVGltZW91dChkZWJvdW5jZWQpO1xuXG4gICAgICAgIGRlYm91bmNlZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiW2xhdmEuanNdIFdpbmRvdyByZS1zaXplZCwgcmVkcmF3aW5nLi4uXCIpO1xuXG4gICAgICAgICAgdGhpcy5yZWRyYXdBbGwoKTtcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLmRlYm91bmNlVGltZW91dCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50c1wiO1xuXG5pbXBvcnQgeyBEYXRhUXVlcnksIFV0aWxzIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IERhdGFFcnJvciwgRWxlbWVudElkTm90Rm91bmQgfSBmcm9tIFwiLi9FcnJvcnNcIjtcbmltcG9ydCB7XG4gIEZvcm1hdHRlcixcbiAgSHRtbEVsZW1lbnRPck51bGwsXG4gIFJlbmRlcmFibGVUbXBsLFxuICBSZW5kZXJhYmxlVHlwZSxcbiAgVmFsaWRGb3JtYXR0ZXJUeXBlc1xufSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgU3VwcG9ydGVkQ2hhcnRzIH0gZnJvbSBcIi4vdHlwZXMvdmlzdWFsaXphdGlvbi1wcm9wcy9pbmRleFwiO1xuaW1wb3J0IHsgZ2V0Vml6UHJvcHMgfSBmcm9tIFwiLi9VdGlsc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgUmVuZGVyYWJsZX0gY2xhc3MgaXMgdGhlIGJhc2UgZm9yIHtAbGluayBDaGFydH1zIGFuZCB7QGxpbmsgRGFzaGJvYXJkfXNcbiAqIHRvIHNoYXJlIGNvbW1vbiBtZXRob2RzIGJldHdlZW4gdGhlIHR3byB0eXBlcy5cbiAqXG4gKlxuICogQGF1dGhvciAgICBLZXZpbiBIaWxsIDxrZXZpbmtoaWxsQGdtYWlsLmNvbT5cbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTksIEtldmluIEhpbGxcbiAqIEBsaWNlbnNlICAgTUlUXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmFibGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogVW5pcXVlIGxhYmVsIGZvciB0aGUge0BsaW5rIENoYXJ0fSAvIHtAbGluayBEYXNoYm9hcmR9LlxuICAgKi9cbiAgcHVibGljIGxhYmVsOiBhbnk7XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyYWJsZSBvcHRpb25zLlxuICAgKi9cbiAgcHVibGljIG9wdGlvbnM6IHtcbiAgICBbSzogc3RyaW5nXTogc3RyaW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEYXRhVGFibGUgZm9yIHRoZSB7QGxpbmsgQ2hhcnR9IC8ge0BsaW5rIERhc2hib2FyZH0uXG4gICAqL1xuICBwdWJsaWMgZGF0YSE6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZTtcblxuICAvKipcbiAgICogR29vZ2xlIGNoYXJ0IG9iamVjdCBjcmVhdGVkIG9uY2UgdGhlIHtAbGluayBDaGFydH0gLyB7QGxpbmsgRGFzaGJvYXJkfVxuICAgKiBoYXMgYmVlbiByZW5kZXJlZC5cbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHB1YmxpYyBnY2hhcnQ6IGFueTtcblxuICAvKipcbiAgICogSFRNTEVsZW1lbnQgaW50byB3aGljaCB0aGUgY2hhcnQgd2lsbCBiZSByZW5kZXJlZC5cbiAgICovXG4gIHByb3RlY3RlZCBjb250YWluZXI6IEh0bWxFbGVtZW50T3JOdWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgc291cmNlIG9mIHRoZSBEYXRhVGFibGUsIHRvIGJlIHVzZWQgaW4gc2V0RGF0YSgpLlxuICAgKi9cbiAgcHJpdmF0ZSBkYXRhU3JjOiBhbnk7XG5cbiAgLyoqXG4gICAqIEVsZW1lbnQgSUQgb2YgdGhlIERPTSBub2RlIGZvciB0aGUgY29udGFpbmVyLlxuICAgKi9cbiAgcHJvdGVjdGVkIGVsZW1lbnRJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBGb3JtYXR0ZXJzIGZvciB0aGUgRGF0YVRhYmxlXG4gICAqL1xuICBwcm90ZWN0ZWQgZm9ybWF0czogRm9ybWF0dGVyW107XG5cbiAgLyoqXG4gICAqIFR5cGUgb2Yge0BsaW5rIFJlbmRlcmFibGV9LlxuICAgKi9cbiAgcHJvdGVjdGVkIHR5cGU6IFN1cHBvcnRlZENoYXJ0cztcblxuICAvKipcbiAgICogUHJlRHJhdyBob29rXG4gICAqL1xuICBwdWJsaWMgcHJlRHJhdyE6IEZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBQb3N0RHJhdyBob29rXG4gICAqL1xuICBwdWJsaWMgcG9zdERyYXchOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFJlbmRlcmFibGVcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGpzb25cbiAgICovXG4gIGNvbnN0cnVjdG9yKGpzb246IFJlbmRlcmFibGVUbXBsKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZSA9IGpzb24udHlwZTtcbiAgICB0aGlzLmxhYmVsID0ganNvbi5sYWJlbDtcbiAgICB0aGlzLmRhdGFTcmMgPSBqc29uLmRhdGE7XG4gICAgdGhpcy5lbGVtZW50SWQgPSBqc29uLmVsZW1lbnRJZDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IGpzb24ub3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLmZvcm1hdHMgPSBqc29uLmZvcm1hdHMgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogVGhlIGdvb2dsZS52aXN1YWxpemF0aW9uIGNsYXNzIG5lZWRlZCBmb3IgcmVuZGVyaW5nLlxuICAgKi9cbiAgcHVibGljIGdldCBjbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXRWaXpQcm9wcyh0aGlzLnR5cGUpLmNsYXNzO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBnb29nbGUudmlzdWFsaXphdGlvbiBwYWNrYWdlIG5lZWRlZCBmb3IgcmVuZGVyaW5nLlxuICAgKi9cbiAgcHVibGljIGdldCBwYWNrYWdlcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtnZXRWaXpQcm9wcyh0aGlzLnR5cGUpLnBhY2thZ2VdO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUge0BsaW5rIENoYXJ0fSAvIHtAbGluayBEYXNoYm9hcmR9LlxuICAgKi9cbiAgcHVibGljIGdldCB1dWlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSArIFwiOjpcIiArIHRoaXMubGFiZWw7XG4gIH1cblxuICAvKipcbiAgICogRHJhd3MgdGhlIHtAbGluayBDaGFydH0gLyB7QGxpbmsgRGFzaGJvYXJkfSB3aXRoIHRoZSBwcmVkZWZpbmVkIGRhdGEgYW5kIG9wdGlvbnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHB1YmxpYyBkcmF3KCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgdGhpcy5wcmVEcmF3ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBbbGF2YS5qc10gUnVubmluZyAke3RoaXMudXVpZH0ucHJlRHJhdygpYCk7XG5cbiAgICAgIHRoaXMucHJlRHJhdygpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5kYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRGF0YUVycm9yKGAke3RoaXMudXVpZH0gQ291bGQgbm90IGRyYXcsIGRhdGEgaXMgJHt0aGlzLmRhdGF9YCk7XG4gICAgfVxuXG4gICAgdGhpcy5nY2hhcnQuZHJhdyh0aGlzLmRhdGEsIHRoaXMub3B0aW9ucyk7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMucG9zdERyYXcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uc29sZS5sb2coYFtsYXZhLmpzXSBSdW5uaW5nICR7dGhpcy51dWlkfS5wb3N0RHJhdygpYCk7XG5cbiAgICAgIHRoaXMucG9zdERyYXcoKTtcbiAgICB9XG4gIH1cblxuICAvL25vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgLyoqXG4gICAqIFJ1biB0aGUgc2V0dXAgYW5kIGRyYXcgdGhlIGNoYXJ0LlxuICAgKlxuICAgKiBBbnkgZGVwZW5kZW5jeSBvbiBcImdvb2dsZVwiIG11c3QgYmUgd2l0aGluIHRoZSBydW4oKSBzY29wZS5cbiAgICpcbiAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCBhZnRlciB0aGUgc3RhdGljIGxvYWRlZCBoYXMgY29tcGxldGVkXG4gICAqIHJlZ2lzdGVyaW5nIHdpbmRvdy5nb29nbGVcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gIGFzeW5jIHJ1bigpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRocm93IG5ldyBFbGVtZW50SWROb3RGb3VuZCh0aGlzLmVsZW1lbnRJZCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5fc2V0dXAoKTtcblxuICAgIHRoaXMuYXR0YWNoRXZlbnRSZWxheXMoKTtcblxuICAgIGF3YWl0IHRoaXMuc2V0RGF0YSh0aGlzLmRhdGFTcmMpO1xuXG4gICAgaWYgKHRoaXMuZm9ybWF0cykge1xuICAgICAgdGhpcy5hcHBseUZvcm1hdHMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIC8vIF9zZXR1cCgpIHtcbiAgLy8gICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgLy8gfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB7QGxpbmsgRGF0YVRhYmxlfSBmb3IgdGhlIHtAbGluayBSZW5kZXJhYmxlfS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAcGFyYW0ge09iamVjdHxGdW5jdGlvbnxBcnJheXxEYXRhUXVlcnl8RGF0YVRhYmxlfSBwYXlsb2FkIFNvdXJjZSBvZiBkYXRhXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgc2V0RGF0YShwYXlsb2FkOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAocGF5bG9hZCBpbnN0YW5jZW9mIERhdGFRdWVyeSkge1xuICAgICAgY29uc29sZS5sb2coYFtsYXZhLmpzXSBTZW5kaW5nIERhdGFRdWVyeSBmb3IgJHt0aGlzLnV1aWR9YCk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcGF5bG9hZC5zZW5kKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGBbbGF2YS5qc10gUmVzcG9uc2UgcmVjZWl2ZWQ6YCwgcmVzcG9uc2UpO1xuXG4gICAgICB0aGlzLmRhdGEgPSByZXNwb25zZS5nZXREYXRhVGFibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhID0gVXRpbHMuY3JlYXRlRGF0YVRhYmxlKHBheWxvYWQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGEgaW5zdGFuY2VvZiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRGF0YUVycm9yKFxuICAgICAgICBgVGhlcmUgd2FzIGEgZXJyb3Igc2V0dGluZyB0aGUgZGF0YSBmb3IgJHt0aGlzLnV1aWR9YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhgW2xhdmEuanNdIERhdGEgc2V0IGZvciAke3RoaXMudXVpZH1gLCB0aGlzLmRhdGEpO1xuXG4gICAgaWYgKHBheWxvYWQuZm9ybWF0cykge1xuICAgICAgdGhpcy5hcHBseUZvcm1hdHMocGF5bG9hZC5mb3JtYXRzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIGZvcm1hdHMgdG8gdGhlIERhdGFUYWJsZVxuICAgKi9cbiAgcHVibGljIGFwcGx5Rm9ybWF0cyhmb3JtYXRzPzogRm9ybWF0dGVyW10pOiB2b2lkIHtcbiAgICBpZiAoZm9ybWF0cykge1xuICAgICAgdGhpcy5mb3JtYXRzID0gZm9ybWF0cztcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGZvcm1hdCBvZiB0aGlzLmZvcm1hdHMpIHtcbiAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyB3aW5kb3cuZ29vZ2xlLnZpc3VhbGl6YXRpb25bXG4gICAgICAgIGZvcm1hdC50eXBlIGFzIFZhbGlkRm9ybWF0dGVyVHlwZXNcbiAgICAgIF0oZm9ybWF0Lm9wdGlvbnMpO1xuXG4gICAgICBjb25zb2xlLmxvZyhgW2xhdmEuanNdIEZvcm1hdHRpbmcgZGF0YSBmb3IgJHt0aGlzLnV1aWR9LmApO1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGBbbGF2YS5qc10gRm9ybWF0dGluZyBjb2x1bW4gWyR7Zm9ybWF0LmluZGV4fV0gd2l0aDpgLFxuICAgICAgICBmb3JtYXRcbiAgICAgICk7XG5cbiAgICAgIGZvcm1hdHRlci5mb3JtYXQodGhpcy5kYXRhLCBmb3JtYXQuaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2ggZXZlbnQgZW1pdHRlcnMgb250byB0aGUgZ29vZ2xlIGNoYXJ0IHRvIHJlbGF5IHRoZSBldmVudHNcbiAgICogZm9yd2FyZCBvbnRvIHRoZSBsYXZhY2hhcnQuXG4gICAqXG4gICAqIFRoZSBHb29nbGUgQ2hhcnQgYW5kIERhdGFUYWJsZSBvYmplY3RzIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBsaXN0ZW5lclxuICAgKiBjYWxsYmFjayBmb3IgaW50ZXJhY3Rpb24uXG4gICAqL1xuICBwcm90ZWN0ZWQgYXR0YWNoRXZlbnRSZWxheXMoKTogdm9pZCB7XG4gICAgW1wicmVhZHlcIiwgXCJzZWxlY3RcIiwgXCJlcnJvclwiLCBcIm9ubW91c2VvdmVyXCIsIFwib25tb3VzZW91dFwiXS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIHdpbmRvdy5nb29nbGUudmlzdWFsaXphdGlvbi5ldmVudHMuYWRkTGlzdGVuZXIodGhpcy5nY2hhcnQsIGV2ZW50LCAoKSA9PlxuICAgICAgICB0aGlzLmVtaXQoZXZlbnQsIHRoaXMuZ2NoYXJ0LCB0aGlzLmRhdGEpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZW5kZXJhYmxlVHlwZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQge1xuICBTdXBwb3J0ZWRDaGFydHMsXG4gIFZpelByb3BzLFxuICBWaXpQcm9wc01hcFxufSBmcm9tIFwiLi90eXBlcy92aXN1YWxpemF0aW9uLXByb3BzXCI7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdHlwZSBvZiBvYmplY3QsIHdpdGggYSBjYXBpdGFsIGZpcnN0IGxldHRlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUob2JqZWN0OiBhbnkpOiBzdHJpbmcge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkuc2xpY2UoOCwgLTEpO1xufVxuXG4vKipcbiAqIFNpbXBsZSBQcm9taXNlIGZvciB0aGUgRE9NIHRvIGJlIHJlYWR5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZG9tTG9hZGVkKCk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8XG4gICAgICBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCJcbiAgICApIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gcmVzb2x2ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBNZXRob2QgZm9yIGF0dGFjaGluZyBldmVudHMgdG8gb2JqZWN0cy5cbiAqXG4gKiBAbGluayBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMTUwMTM5IENyZWRpdCB0byBBbGV4IFYuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudChcbiAgdGFyZ2V0OiBhbnksXG4gIHR5cGU6IHN0cmluZyxcbiAgY2FsbGJhY2s6IEZ1bmN0aW9uLFxuICB1c2VDYXB0dXJlID0gZmFsc2Vcbik6IHZvaWQge1xuICBpZiAodGFyZ2V0ID09PSBudWxsIHx8IHR5cGVvZiB0YXJnZXQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSk7XG4gIH0gZWxzZSBpZiAodGFyZ2V0LmF0dGFjaEV2ZW50KSB7XG4gICAgdGFyZ2V0LmF0dGFjaEV2ZW50KFwib25cIiArIHR5cGUsIGNhbGxiYWNrKTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXRbXCJvblwiICsgdHlwZV0gPSBjYWxsYmFjaztcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHZpc3VhbGl6YXRpb24gcHJvcGVydGllcyBvZiB0aGUgZ2l2ZW4gY2hhcnQgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZpelByb3BzKGNoYXJ0VHlwZTogU3VwcG9ydGVkQ2hhcnRzKTogVml6UHJvcHMge1xuICByZXR1cm4gVml6UHJvcHNNYXBbY2hhcnRUeXBlXTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBkYXRhIGZvciB0aGUgY2hhcnQgYnkgY3JlYXRpbmcgYSBuZXcgRGF0YVRhYmxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb258QXJyYXl9IHBheWxvYWQgSnNvbiByZXByZXNlbnRhdGlvbiBvZiBhIERhdGFUYWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGF0YVRhYmxlKHBheWxvYWQ6IGFueSk6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSB7XG4gIC8vIElmIGEgZnVuY3Rpb24gaXMgcmVjZWl2ZWQsIHRoZW4gY3JlYXRlIGFuIG5ldyBEYXRhVGFibGUgYW5kIHBhc3MgaXQgdG8gdGhlXG4gIC8vIGZ1bmN0aW9uIGZvciB1c2VyIG1vZGlmaWNhdGlvbnMuXG4gIGlmIChnZXRUeXBlKHBheWxvYWQpID09PSBcIkZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gcGF5bG9hZChuZXcgd2luZG93Lmdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpKTtcbiAgfVxuXG4gIC8vIElmIGFuIEFycmF5IGlzIHJlY2VpdmVkLCB0aGVuIGF0dGVtcHQgdG8gdXNlIHBhcnNlIHdpdGggYXJyYXlUb0RhdGFUYWJsZS5cbiAgaWYgKGdldFR5cGUocGF5bG9hZCkgPT09IFwiQXJyYXlcIikge1xuICAgIHJldHVybiB3aW5kb3cuZ29vZ2xlLnZpc3VhbGl6YXRpb24uYXJyYXlUb0RhdGFUYWJsZShwYXlsb2FkKTtcbiAgfVxuXG4gIC8vIFNpbmNlIEdvb2dsZSBjb21waWxlcyB0aGVpciBjbGFzc2VzLCB3ZSBjYW4ndCB1c2UgaW5zdGFuY2VvZiB0byBjaGVjayBzaW5jZVxuICAvLyBpdCBpcyBubyBsb25nZXIgY2FsbGVkIGEgXCJEYXRhVGFibGVcIiAoaXQncyBcImd2anNfUFwiIGJ1dCB0aGF0IGNvdWxkIGNoYW5nZS4uLilcbiAgLy8gSWYgdGhpcyBjaGVjayBwYXNzZXMsIHRoZW4gaXQgYWxyZWFkeSBpcyBhIERhdGFUYWJsZVxuICBpZiAoZ2V0VHlwZShwYXlsb2FkLmdldFRhYmxlUHJvcGVydGllcykgPT09IFwiRnVuY3Rpb25cIikge1xuICAgIHJldHVybiBwYXlsb2FkO1xuICB9XG5cbiAgLy8gSWYgdGhlIHBheWxvYWQgaXMgZnJvbSB0aGUgcGhwIGNsYXNzIEpvaW5lZERhdGFUYWJsZS0+dG9Kc29uKCksIHRoZW4gY3JlYXRlXG4gIC8vIHR3byBuZXcgRGF0YVRhYmxlcyBhbmQgam9pbiB0aGVtIHdpdGggdGhlIGRlZmluZWQgb3B0aW9ucy5cbiAgaWYgKGdldFR5cGUocGF5bG9hZC5kYXRhKSA9PT0gXCJBcnJheVwiKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nb29nbGUudmlzdWFsaXphdGlvbi5kYXRhLmpvaW4oXG4gICAgICBuZXcgd2luZG93Lmdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZShwYXlsb2FkLmRhdGFbMF0pLFxuICAgICAgbmV3IHdpbmRvdy5nb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUocGF5bG9hZC5kYXRhWzFdKSxcbiAgICAgIHBheWxvYWQua2V5cyxcbiAgICAgIHBheWxvYWQuam9pbk1ldGhvZCxcbiAgICAgIHBheWxvYWQuZHQxQ29sdW1ucyxcbiAgICAgIHBheWxvYWQuZHQyQ29sdW1uc1xuICAgICk7XG4gIH1cblxuICAvLyBJZiBhIHBocCBEYXRhVGFibGUtPnRvSnNvbigpIHBheWxvYWQgaXMgcmVjZWl2ZWQsIHdpdGggZm9ybWF0dGVkIGNvbHVtbnMsXG4gIC8vIHRoZW4gcGF5bG9hZC5kYXRhIHdpbGwgYmUgZGVmaW5lZC4gVXNlIHRoaXMgdG8gY3JlYXRlIHRoZSBEYXRhVGFibGUuXG4gIGlmIChnZXRUeXBlKHBheWxvYWQuZGF0YSkgPT09IFwiT2JqZWN0XCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBwYXlsb2FkID0gcGF5bG9hZC5kYXRhO1xuICB9XG5cbiAgLy8gSWYgd2UgcmVhY2ggaGVyZSwgdGhlbiBpdCBtdXN0IGJlIHN0YW5kYXJkIEpTT04gZm9yIGNyZWF0aW5nIGEgRGF0YVRhYmxlLlxuICByZXR1cm4gbmV3IHdpbmRvdy5nb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUocGF5bG9hZCk7XG59XG4iLCJpbXBvcnQgQ2hhcnQgZnJvbSBcIi4vQ2hhcnRcIjtcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9EYXNoYm9hcmRcIjtcclxuaW1wb3J0IERhdGFRdWVyeSBmcm9tIFwiLi9EYXRhUXVlcnlcIjtcclxuaW1wb3J0IERlZmF1bHRPcHRpb25zIGZyb20gXCIuL0RlZmF1bHRPcHRpb25zXCI7XHJcbmltcG9ydCAqIGFzIEVycm9ycyBmcm9tIFwiLi9FcnJvcnNcIjtcclxuaW1wb3J0IExhdmFKcyBmcm9tIFwiLi9MYXZhSnNcIjtcclxuaW1wb3J0IFJlbmRlcmFibGUgZnJvbSBcIi4vUmVuZGVyYWJsZVwiO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF2YUpzO1xyXG5cclxuZXhwb3J0IHtcclxuICBEZWZhdWx0T3B0aW9ucyxcclxuICBDaGFydCxcclxuICBEYXNoYm9hcmQsXHJcbiAgRGF0YVF1ZXJ5LFxyXG4gIEVycm9ycyxcclxuICBSZW5kZXJhYmxlLFxyXG4gIFV0aWxzXHJcbn07XHJcbiIsImltcG9ydCB2aXN1YWxpemF0aW9uTWFwIGZyb20gXCIuL2NoYXJ0LXByb3BzLmpzb25cIjtcclxuXHJcbmV4cG9ydCB0eXBlIFN1cHBvcnRlZENoYXJ0cyA9XHJcbiAgfCBcIkFubm90YXRpb25DaGFydFwiXHJcbiAgfCBcIkFyZWFDaGFydFwiXHJcbiAgfCBcIkJhckNoYXJ0XCJcclxuICB8IFwiQnViYmxlQ2hhcnRcIlxyXG4gIHwgXCJDYWxlbmRhckNoYXJ0XCJcclxuICB8IFwiQ2FuZGxlc3RpY2tDaGFydFwiXHJcbiAgfCBcIkNvbHVtbkNoYXJ0XCJcclxuICB8IFwiQ29tYm9DaGFydFwiXHJcbiAgfCBcIkRvbnV0Q2hhcnRcIlxyXG4gIHwgXCJHYW50dENoYXJ0XCJcclxuICB8IFwiR2F1Z2VDaGFydFwiXHJcbiAgfCBcIkdlb0NoYXJ0XCJcclxuICB8IFwiSGlzdG9ncmFtQ2hhcnRcIlxyXG4gIHwgXCJMaW5lQ2hhcnRcIlxyXG4gIHwgXCJQaWVDaGFydFwiXHJcbiAgfCBcIlNhbmtleUNoYXJ0XCJcclxuICB8IFwiU2NhdHRlckNoYXJ0XCJcclxuICB8IFwiU3RlcHBlZEFyZWFDaGFydFwiXHJcbiAgfCBcIlRhYmxlQ2hhcnRcIlxyXG4gIHwgXCJUaW1lbGluZUNoYXJ0XCJcclxuICB8IFwiVHJlZU1hcENoYXJ0XCJcclxuICB8IFwiV29yZFRyZWVDaGFydFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWaXpQcm9wcyB7XHJcbiAgY2xhc3M6IHN0cmluZztcclxuICBwYWNrYWdlOiBzdHJpbmc7XHJcbiAgdmVyc2lvbjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVml6UHJvcHNNYXA6IFJlY29yZDxTdXBwb3J0ZWRDaGFydHMsIFZpelByb3BzPiA9IHZpc3VhbGl6YXRpb25NYXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=