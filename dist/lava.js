window["lava"] =
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
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/lib */ "./src/lib/index.ts");
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_lib__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Create a new instance and attach to window.
 */
window.lava = new _src__WEBPACK_IMPORTED_MODULE_0___default.a();

/**
 * If LavaJs was loaded from Lavacharts, then window.lavacharts will
 * be defined with a JSON object of the options set within Lavacharts.
 */
if (typeof window.lavacharts !== "undefined") {
  window.lava.configure(window.lavacharts.options);
}

/**
 * If the module is getting ran from Lavacharts, then autoRun
 * will be true and once the DOM is ready, rendering will begin.
 *
 * If the module is ran as a JS library, then auto_run defaults
 * to false so the user can setup the charts and call .run()
 */
if (window.lava.autorun) {
  Object(_src_lib__WEBPACK_IMPORTED_MODULE_1__["domLoaded"])().then(() => {
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
function makeChartFactory(container) {
    return function (type) { return new window.google.visualization[type](container); };
}
var Chart = (function (_super) {
    __extends(Chart, _super);
    function Chart(payload) {
        var _this = _super.call(this, payload) || this;
        _this.png = Boolean(payload.png);
        return _this;
    }
    Chart.prototype._preDraw = function () {
        var chartFactory = makeChartFactory(this.container);
        this.gchart = chartFactory(this.class);
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
        return __awaiter(this, void 0, Promise, function () {
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

/***/ "./src/DataTable.ts":
/*!**************************!*\
  !*** ./src/DataTable.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(/*! ./lib */ "./src/lib/index.ts");
function createDataTable(payload) {
    if (lib_1.getType(payload) === "Function") {
        return payload(new window.google.visualization.DataTable());
    }
    if (lib_1.getType(payload) === "Array") {
        return window.google.visualization.arrayToDataTable(payload);
    }
    if (lib_1.getType(payload.getTableProperties) === "Function") {
        return payload;
    }
    if (lib_1.getType(payload.data) === "Array") {
        return window.google.visualization.data.join(new window.google.visualization.DataTable(payload.data[0]), new window.google.visualization.DataTable(payload.data[1]), payload.keys, payload.joinMethod, payload.dt1Columns, payload.dt2Columns);
    }
    if (lib_1.getType(payload.data) === "Object") {
        payload = payload.data;
    }
    return new window.google.visualization.DataTable(payload);
}
exports.createDataTable = createDataTable;


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
var GoogleLoader = (function () {
    function GoogleLoader(options) {
        this.options = options;
        this.API_VERSION = "current";
        this.LOADER_URL = "https://www.gstatic.com/charts/loader.js";
        this.packages = new Set(["corechart"]);
    }
    Object.defineProperty(GoogleLoader.prototype, "isLoaded", {
        get: function () {
            return typeof window.google !== "undefined";
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
                    if (script.src === this.LOADER_URL) {
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
    Object.defineProperty(GoogleLoader.prototype, "config", {
        get: function () {
            var config = {
                language: this.options.locale,
                packages: Array.from(this.packages)
            };
            if (this.options.mapsApiKey !== "") {
                config.mapsApiKey = this.options.mapsApiKey;
            }
            return config;
        },
        enumerable: true,
        configurable: true
    });
    GoogleLoader.prototype.addPackage = function (pkgs) {
        this.packages.add(pkgs);
    };
    GoogleLoader.prototype.addPackages = function (packages) {
        var _this = this;
        packages.forEach(function (pkg) { return _this.packages.add(pkg); });
    };
    GoogleLoader.prototype.loadGoogle = function () {
        return __awaiter(this, void 0, Promise, function () {
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
            window.google.charts.load(_this.API_VERSION, _this.config);
            window.google.charts.setOnLoadCallback(resolve);
        });
    };
    GoogleLoader.prototype.addGoogleScriptToHead = function () {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        var script = document.createElement("script");
                        script.type = "text/javascript";
                        script.async = true;
                        script.src = _this.LOADER_URL;
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
var Errors_1 = __webpack_require__(/*! ./Errors */ "./src/Errors.ts");
var GoogleLoader_1 = __importDefault(__webpack_require__(/*! ./GoogleLoader */ "./src/GoogleLoader.ts"));
var lib_1 = __webpack_require__(/*! ./lib */ "./src/lib/index.ts");
var LavaJs = (function (_super) {
    __extends(LavaJs, _super);
    function LavaJs(options) {
        var _this = _super.call(this) || this;
        _this.options = lib_1.defaultOptions;
        _this.volcano = new Map();
        if (options)
            _this.configure(options);
        _this.loader = new GoogleLoader_1.default(_this.options);
        return _this;
    }
    Object.defineProperty(LavaJs.prototype, "autorun", {
        get: function () {
            return typeof this.options.autoRun === "undefined"
                ? true
                : this.options.autoRun;
        },
        enumerable: true,
        configurable: true
    });
    LavaJs.prototype.configure = function (options) {
        this.options = Object.assign(this.options, options);
    };
    LavaJs.prototype.init = function () {
        return __awaiter(this, void 0, Promise, function () {
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
        return __awaiter(this, void 0, Promise, function () {
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
        return __awaiter(this, void 0, Promise, function () {
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
            lib_1.addEvent(window, "resize", function () {
                clearTimeout(debounced_1);
                debounced_1 = setTimeout(function () {
                    console.log("[lava.js] Window re-sized, redrawing...");
                    _this.redrawAll();
                }, _this.options.debounceTimeout);
            });
        }
    };
    LavaJs.VERSION = "4.0.0-beta2";
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
var DataQuery_1 = __importDefault(__webpack_require__(/*! ./DataQuery */ "./src/DataQuery.ts"));
var DataTable_1 = __webpack_require__(/*! ./DataTable */ "./src/DataTable.ts");
var Errors_1 = __webpack_require__(/*! ./Errors */ "./src/Errors.ts");
var VisualizationProps_1 = __importDefault(__webpack_require__(/*! ./VisualizationProps */ "./src/VisualizationProps.ts"));
var Renderable = (function (_super) {
    __extends(Renderable, _super);
    function Renderable(json) {
        var _this = _super.call(this) || this;
        _this.type = json.type;
        _this.label = json.label;
        _this.dataSrc = json.data;
        _this.elementId = json.elementId;
        var container = document.getElementById(_this.elementId);
        if (container) {
            _this.container = container;
        }
        _this.options = json.options || {};
        _this.formats = json.formats || [];
        return _this;
    }
    Object.defineProperty(Renderable.prototype, "class", {
        get: function () {
            return VisualizationProps_1.default[this.type].class;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Renderable.prototype, "packages", {
        get: function () {
            return [VisualizationProps_1.default[this.type].package];
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
        if (typeof this._preDraw === "function") {
            console.log("[lava.js] Running " + this.uuid + "._preDraw()");
            this._preDraw();
        }
        if (typeof this.preDraw === "function") {
            console.log("[lava.js] Running " + this.uuid + ".preDraw()");
            this.preDraw();
        }
        if (!this.data) {
            throw new Errors_1.DataError(this.uuid + " Could not draw, data is " + this.data);
        }
        this.gchart.draw(this.data, this.options);
        if (typeof this._postDraw === "function") {
            console.log("[lava.js] Running " + this.uuid + "._postDraw()");
            this._postDraw();
        }
        if (typeof this.postDraw === "function") {
            console.log("[lava.js] Running " + this.uuid + ".postDraw()");
            this.postDraw();
        }
    };
    Renderable.prototype.run = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.container) {
                            throw new Errors_1.ElementIdNotFound(this.elementId);
                        }
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
        return __awaiter(this, void 0, Promise, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(payload instanceof DataQuery_1.default)) return [3, 2];
                        console.log("[lava.js] Sending DataQuery for " + this.uuid);
                        return [4, payload.send()];
                    case 1:
                        response = _a.sent();
                        console.log("[lava.js] Response received:", response);
                        this.data = response.getDataTable();
                        return [3, 3];
                    case 2:
                        this.data = DataTable_1.createDataTable(payload);
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
    return Renderable;
}(events_1.default));
exports.default = Renderable;


/***/ }),

/***/ "./src/VisualizationProps.ts":
/*!***********************************!*\
  !*** ./src/VisualizationProps.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    AnnotationChart: {
        class: "AnnotationChart",
        package: "annotationchart",
        version: 1
    },
    AreaChart: {
        class: "AreaChart",
        package: "corechart",
        version: 1
    },
    BarChart: {
        class: "BarChart",
        package: "corechart",
        version: 1
    },
    BubbleChart: {
        class: "BubbleChart",
        package: "corechart",
        version: 1
    },
    CalendarChart: {
        class: "Calendar",
        package: "calendar",
        version: 1.1
    },
    CandlestickChart: {
        class: "CandlestickChart",
        package: "corechart",
        version: 1
    },
    ColumnChart: {
        class: "ColumnChart",
        package: "corechart",
        version: 1
    },
    ComboChart: {
        class: "ComboChart",
        package: "corechart",
        version: 1
    },
    DonutChart: {
        class: "PieChart",
        package: "corechart",
        version: 1
    },
    GanttChart: {
        class: "Gantt",
        package: "gantt",
        version: 1
    },
    GaugeChart: {
        class: "Gauge",
        package: "gauge",
        version: 1
    },
    GeoChart: {
        class: "GeoChart",
        package: "geochart",
        version: 1
    },
    HistogramChart: {
        class: "Histogram",
        package: "corechart",
        version: 1
    },
    LineChart: {
        class: "LineChart",
        package: "corechart",
        version: 1
    },
    PieChart: {
        class: "PieChart",
        package: "corechart",
        version: 1
    },
    SankeyChart: {
        class: "Sankey",
        package: "sankey",
        version: 1
    },
    ScatterChart: {
        class: "ScatterChart",
        package: "corechart",
        version: 1
    },
    SteppedAreaChart: {
        class: "SteppedAreaChart",
        package: "corechart",
        version: 1
    },
    TableChart: {
        class: "Table",
        package: "table",
        version: 1
    },
    TimelineChart: {
        class: "Timeline",
        package: "timeline",
        version: 1
    },
    TreeMapChart: {
        class: "TreeMap",
        package: "treemap",
        version: 1
    },
    WordTreeChart: {
        class: "WordTree",
        package: "wordtree",
        version: 1
    }
};


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
Object.defineProperty(exports, "__esModule", { value: true });
var LavaJs_1 = __importDefault(__webpack_require__(/*! ./LavaJs */ "./src/LavaJs.ts"));
exports.default = LavaJs_1.default;


/***/ }),

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var options_1 = __webpack_require__(/*! ./options */ "./src/lib/options.ts");
exports.defaultOptions = options_1.defaultOptions;
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


/***/ }),

/***/ "./src/lib/options.ts":
/*!****************************!*\
  !*** ./src/lib/options.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptions = {
    autoRun: true,
    datetimeFormat: "",
    debounceTimeout: 250,
    locale: "en",
    mapsApiKey: "",
    responsive: true,
    timezone: "America/Los_Angeles"
};


/***/ })

/******/ });
//# sourceMappingURL=lava.js.map