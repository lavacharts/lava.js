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
    Object.defineProperty(GoogleLoader.prototype, "config", {
        get: function () {
            var config = {
                packages: Array.from(this.packages),
                language: this.options.locale
            };
            if (this.options.mapsApiKey !== "") {
                Object.assign(config, {
                    mapsApiKey: this.options.mapsApiKey
                });
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
    Renderable.prototype.attachEventRelays = function () {
        var _this = this;
        var events = ["ready", "select", "error", "onmouseover", "onmouseout"];
        var _loop_1 = function (event_1) {
            window.google.visualization.events.addListener(this_1.gchart, event_1, function () {
                return _this.emit(event_1, _this.gchart, _this.data);
            });
        };
        var this_1 = this;
        for (var event_1 in events) {
            _loop_1(event_1);
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
    autoRun: false,
    datetimeFormat: "",
    debounceTimeout: 250,
    locale: "en",
    mapsApiKey: "",
    responsive: true,
    timezone: "America/Los_Angeles"
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoYXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9EYXNoYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RhdGFRdWVyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGF0YVRhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9FcnJvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dvb2dsZUxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF2YUpzLnRzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXJhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9WaXN1YWxpemF0aW9uUHJvcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtR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SSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNyRDtTQUFNLElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRTtRQUM3QixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDM0M7U0FBTTtRQUNMLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO0tBQ2hDO0FBQ0gsQ0FBQztBQWpCRCw0QkFpQkM7Ozs7Ozs7Ozs7Ozs7OztBQy9DWSxzQkFBYyxHQUFHO0lBQzVCLE9BQU8sRUFBRSxLQUFLO0lBQ2QsY0FBYyxFQUFFLEVBQUU7SUFDbEIsZUFBZSxFQUFFLEdBQUc7SUFDcEIsTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVLEVBQUUsRUFBRTtJQUNkLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLFFBQVEsRUFBRSxxQkFBcUI7Q0FDZixDQUFDIiwiZmlsZSI6ImxhdmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IExhdmFKcyBmcm9tIFwiLi9zcmNcIjtcclxuaW1wb3J0IHsgZG9tTG9hZGVkIH0gZnJvbSBcIi4vc3JjL2xpYlwiO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBhbmQgYXR0YWNoIHRvIHdpbmRvdy5cclxuICovXHJcbndpbmRvdy5sYXZhID0gbmV3IExhdmFKcygpO1xyXG5cclxuLyoqXHJcbiAqIElmIExhdmFKcyB3YXMgbG9hZGVkIGZyb20gTGF2YWNoYXJ0cywgdGhlbiB3aW5kb3cubGF2YWNoYXJ0cyB3aWxsXHJcbiAqIGJlIGRlZmluZWQgd2l0aCBhIEpTT04gb2JqZWN0IG9mIHRoZSBvcHRpb25zIHNldCB3aXRoaW4gTGF2YWNoYXJ0cy5cclxuICovXHJcbmlmICh0eXBlb2Ygd2luZG93LmxhdmFjaGFydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICB3aW5kb3cubGF2YS5jb25maWd1cmUod2luZG93LmxhdmFjaGFydHMub3B0aW9ucyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJZiB0aGUgbW9kdWxlIGlzIGdldHRpbmcgcmFuIGZyb20gTGF2YWNoYXJ0cywgdGhlbiBhdXRvUnVuXHJcbiAqIHdpbGwgYmUgdHJ1ZSBhbmQgb25jZSB0aGUgRE9NIGlzIHJlYWR5LCByZW5kZXJpbmcgd2lsbCBiZWdpbi5cclxuICpcclxuICogSWYgdGhlIG1vZHVsZSBpcyByYW4gYXMgYSBKUyBsaWJyYXJ5LCB0aGVuIGF1dG9fcnVuIGRlZmF1bHRzXHJcbiAqIHRvIGZhbHNlIHNvIHRoZSB1c2VyIGNhbiBzZXR1cCB0aGUgY2hhcnRzIGFuZCBjYWxsIC5ydW4oKVxyXG4gKi9cclxuaWYgKHdpbmRvdy5sYXZhLmF1dG9ydW4pIHtcclxuICBkb21Mb2FkZWQoKS50aGVuKCgpID0+IHtcclxuICAgIHdpbmRvdy5sYXZhLnJ1bigpO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiAkZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiAkZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gJGdldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIFJlZmxlY3RBcHBseSh0aGlzLmxpc3RlbmVyLCB0aGlzLnRhcmdldCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuIiwiaW1wb3J0IFJlbmRlcmFibGUgZnJvbSBcIi4vUmVuZGVyYWJsZVwiO1xuaW1wb3J0IHsgUmVuZGVyYWJsZVRtcGwgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgQ2hhcnRGYWN0b3J5IH0gZnJvbSBcIi4vdHlwZXMvY2hhcnRcIjtcblxuZnVuY3Rpb24gbWFrZUNoYXJ0RmFjdG9yeShjb250YWluZXI6IEhUTUxFbGVtZW50KTogQ2hhcnRGYWN0b3J5IHtcbiAgcmV0dXJuIHR5cGUgPT4gbmV3IHdpbmRvdy5nb29nbGUudmlzdWFsaXphdGlvblt0eXBlXShjb250YWluZXIpO1xufVxuXG4vKipcbiAqIENoYXJ0IENsYXNzXG4gKlxuICogQGF1dGhvciAgICBLZXZpbiBIaWxsIDxrZXZpbmtoaWxsQGdtYWlsLmNvbT5cbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTksIEtldmluIEhpbGxcbiAqIEBsaWNlbnNlICAgTUlUXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgUmVuZGVyYWJsZSB7XG4gIC8qKlxuICAgKiBJZiB0aGlzIGlzIHNldCB0byB0cnVlLCB0aGVuIHRoZSB7QGxpbmsgQ2hhcnR9IHdpbGwgYmUgb3V0cHV0IGFzIGEgUE5HXG4gICAqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgcG5nOiBib29sZWFuO1xuXG4gIGV2ZW50cyE6IEFycmF5PGFueT47XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBDaGFydC5cbiAgICpcbiAgICogQGV4YW1wbFxuICAgKiB7XG4gICAqICAgICBsYWJlbDogJ1Rlc3QnLFxuICAgKiAgICAgdHlwZTogJ1BpZUNoYXJ0JyxcbiAgICogICAgIGVsZW1lbnRJZDogJ215LXBpZS1jaGFydCcsXG4gICAqICAgICBkYXRhdGFibGU6IFtcbiAgICogICAgICAgICBbJ1Rhc2snLCAnSG91cnMgcGVyIERheSddLFxuICAgKiAgICAgICAgIFsnV29yaycsICAgICAxMV0sXG4gICAqICAgICAgICAgWydFYXQnLCAgICAgIDJdLFxuICAgKiAgICAgICAgIFsnQ29tbXV0ZScsICAyXSxcbiAgICogICAgICAgICBbJ1dhdGNoIFRWJywgMl0sXG4gICAqICAgICAgICAgWydTbGVlcCcsICAgIDddXG4gICAqICAgICBdLFxuICAgKiAgICAgb3B0aW9uczoge1xuICAgKiAgICAgICAgIHRpdGxlOiAnTXkgRGFpbHkgQWN0aXZpdGllcydcbiAgICogICAgIH1cbiAgICogfVxuICAgKi9cbiAgY29uc3RydWN0b3IocGF5bG9hZDogUmVuZGVyYWJsZVRtcGwpIHtcbiAgICBzdXBlcihwYXlsb2FkKTtcblxuICAgIHRoaXMucG5nID0gQm9vbGVhbihwYXlsb2FkLnBuZyk7XG4gIH1cblxuICAvKipcbiAgICogQWN0aW9ucyB0byBwZXJmb3JtIGJlZm9yZSBkcmF3aW5nIHRoZSB7QGxpbmsgQ2hhcnR9XG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgaGF2ZSBhY2Nlc3MgdG8gd2luZG93Lmdvb2dsZSBzaW5jZSBpdCBpcyBjYWxsZWRcbiAgICogd2l0aGluIHRoZSByZW5kZXIgbWV0aG9kLlxuICAgKi9cbiAgcHJvdGVjdGVkIF9wcmVEcmF3KCk6IHZvaWQge1xuICAgIGNvbnN0IGNoYXJ0RmFjdG9yeSA9IG1ha2VDaGFydEZhY3RvcnkodGhpcy5jb250YWluZXIpO1xuXG4gICAgdGhpcy5nY2hhcnQgPSBjaGFydEZhY3RvcnkodGhpcy5jbGFzcyk7XG5cbiAgICAvLyBUT0RPOiBhcHBlbmQgTGF2YWNoYXJ0IGRlZmluZWQgZXZlbnRzP1xuICAgIC8vIGlmICh0aGlzLmV2ZW50cykge1xuICAgIC8vICAgICB0aGlzLmF0dGFjaEV2ZW50cygpO1xuICAgIC8vIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBY3Rpb25zIHRvIHBlcmZvcm0gb25jZSB0aGUge0BsaW5rIENoYXJ0fSBoYXMgYmVlbiBkcmF3blxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGhhdmUgYWNjZXNzIHRvIHdpbmRvdy5nb29nbGUgc2luY2UgaXQgaXMgY2FsbGVkXG4gICAqIHdpdGhpbiB0aGUgcnVuIG1ldGhvZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByb3RlY3RlZCBfcG9zdERyYXcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG5nKSB7XG4gICAgICB0aGlzLmRyYXdQbmcoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRHJhd3MgdGhlIGNoYXJ0IGFzIGEgUE5HIGluc3RlYWQgb2YgdGhlIHN0YW5kYXJkIFNWR1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2NoYXJ0L2ludGVyYWN0aXZlL2RvY3MvcHJpbnRpbmdcbiAgICovXG4gIHByaXZhdGUgZHJhd1BuZygpOiB2b2lkIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zcmMgPSB0aGlzLmdjaGFydC5nZXRJbWFnZVVSSSgpO1xuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoIHRoZSBkZWZpbmVkIGNoYXJ0IGV2ZW50IGhhbmRsZXJzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgLy8gcHJpdmF0ZSBhdHRhY2hFdmVudHMoKTogdm9pZCB7XG4gIC8vICAgdGhpcy5ldmVudHMuZm9yRWFjaCgoY2FsbGJhY2s6IEZ1bmN0aW9uLCBldmVudDogYW55KSA9PiB7XG4gIC8vICAgICBsZXQgY29udGV4dCA9IHdpbmRvdztcbiAgLy8gICAgIGxldCBmdW5jID0gY2FsbGJhY2s7XG5cbiAgLy8gICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwib2JqZWN0XCIpIHtcbiAgLy8gICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gIC8vICAgICAgIC8vQHRzLWlnbm9yZSBJIGRvbid0IGtub3cgd2hhdCB0byBkbyBoZXJlXG4gIC8vICAgICAgIGNvbnRleHQgPSBjb250ZXh0W2NhbGxiYWNrWzBdXTtcbiAgLy8gICAgICAgZnVuYyA9IGNhbGxiYWNrWzFdO1xuICAvLyAgICAgfVxuXG4gIC8vICAgICBjb25zb2xlLmxvZyhcbiAgLy8gICAgICAgYFtsYXZhLmpzXSBUaGUgXCIke3RoaXMudXVpZH06OiR7ZXZlbnR9XCIgZXZlbnQgd2lsbCBiZSBoYW5kbGVkIGJ5IFwiJHtmdW5jfVwiIGluIHRoZSBjb250ZXh0YCxcbiAgLy8gICAgICAgY29udGV4dFxuICAvLyAgICAgKTtcblxuICAvLyAgICAgLyoqXG4gIC8vICAgICAgKiBTZXQgdGhlIGNvbnRleHQgb2YgXCJ0aGlzXCIgd2l0aGluIHRoZSB1c2VyIHByb3ZpZGVkIGNhbGxiYWNrIHRvIHRoZVxuICAvLyAgICAgICogY2hhcnQgdGhhdCBmaXJlZCB0aGUgZXZlbnQgd2hpbGUgcHJvdmlkaW5nIHRoZSBkYXRhdGFibGUgb2YgdGhlIGNoYXJ0XG4gIC8vICAgICAgKiB0byB0aGUgY2FsbGJhY2sgYXMgYW4gYXJndW1lbnQuXG4gIC8vICAgICAgKi9cbiAgLy8gICAgIHdpbmRvdy5nb29nbGUudmlzdWFsaXphdGlvbi5ldmVudHMuYWRkTGlzdGVuZXIodGhpcy5nY2hhcnQsIGV2ZW50LCAoKSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IGNhbGxiYWNrID0gT2JqZWN0LmJpbmQoXG4gIC8vICAgICAgICAgY29udGV4dFtPYmplY3QuY2FsbC5wcm90b3R5cGUudG9TdHJpbmcoZnVuYyldLFxuICAvLyAgICAgICAgIHRoaXMuZ2NoYXJ0XG4gIC8vICAgICAgICkgYXMgKGRhdGE6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSkgPT4gYW55O1xuXG4gIC8vICAgICAgIGNhbGxiYWNrKHRoaXMuZGF0YSk7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfVxufVxuIiwiaW1wb3J0IFJlbmRlcmFibGUgZnJvbSBcIi4vUmVuZGVyYWJsZVwiO1xuXG4vKipcbiAqIERhc2hib2FyZCBDbGFzc1xuICpcbiAqIEBjbGFzc1xuICogQG1vZHVsZSAgICBtb2R1bGU6TGF2YUpzL0Rhc2hib2FyZFxuICogQGF1dGhvciAgICBLZXZpbiBIaWxsIDxrZXZpbmtoaWxsQGdtYWlsLmNvbT5cbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTksIEtldmluIEhpbGxcbiAqIEBsaWNlbnNlICAgTUlUXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlbmRlcmFibGUge1xuICBiaW5kaW5nczogYW55O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgRGFzaGJvYXJkXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBqc29uIEpTT04gb2JqZWN0IHJlcHJlc2VudGluZyBhIERhc2hib2FyZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGpzb246IGFueSkge1xuICAgIGpzb24udHlwZSA9IFwiRGFzaGJvYXJkXCI7XG5cbiAgICBzdXBlcihqc29uKTtcblxuICAgIHRoaXMuYmluZGluZ3MgPSBqc29uLmJpbmRpbmdzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGlvbnMgdG8gcGVyZm9ybSBiZWZvcmUgZHJhd2luZyB0aGUge0BsaW5rIERhc2hib2FyZH1cbiAgICpcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBoYXZlIGFjY2VzcyB0byB3aW5kb3cuZ29vZ2xlIHNpbmNlIGl0IGlzIGNhbGxlZFxuICAgKiB3aXRoaW4gdGhlIHJlbmRlciBtZXRob2QuXG4gICAqL1xuICBwdWJsaWMgc2V0dXAoKTogdm9pZCB7XG4gICAgdGhpcy5nY2hhcnQgPSBuZXcgd2luZG93Lmdvb2dsZS52aXN1YWxpemF0aW9uLkRhc2hib2FyZCh0aGlzLmNvbnRhaW5lcik7XG5cbiAgICAvLyB0aGlzLl9hdHRhY2hCaW5kaW5ncygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2Nlc3MgYW5kIGF0dGFjaCB0aGUgYmluZGluZ3MgdG8gdGhlIGRhc2hib2FyZC5cbiAgICpcbiAgICogQFRPRE86IE5lZWRzIHRvIGJlIG1vZGlmaWVkIGFuZCB0ZXN0ZWQgZm9yIHRoZSBvdGhlciB0eXBlcyBvZiBiaW5kaW5ncy5cbiAgICovXG4gIC8vIHByaXZhdGUgX2F0dGFjaEJpbmRpbmdzKCk6IHZvaWQge1xuICAvLyAgIGZvciAoY29uc3QgYmluZGluZyBvZiB0aGlzLmJpbmRpbmdzKSB7XG4gIC8vICAgICBjb25zdCBjb250cm9sV3JhcHMgPSBbXTtcbiAgLy8gICAgIGNvbnN0IGNoYXJ0V3JhcHMgPSBbXTtcblxuICAvLyAgICAgZm9yIChjb25zdCBjb250cm9sV3JhcCBvZiBiaW5kaW5nLmNvbnRyb2xXcmFwcGVycykge1xuICAvLyAgICAgICBjb250cm9sV3JhcHMucHVzaChuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29udHJvbFdyYXBwZXIoY29udHJvbFdyYXApKTtcbiAgLy8gICAgIH1cblxuICAvLyAgICAgZm9yIChjb25zdCBjaGFydFdyYXAgb2YgYmluZGluZy5jaGFydFdyYXBwZXJzKSB7XG4gIC8vICAgICAgIGNoYXJ0V3JhcHMucHVzaChuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyKGNoYXJ0V3JhcCkpO1xuICAvLyAgICAgfVxuXG4gIC8vICAgICB0aGlzLmdjaGFydC5iaW5kKGNvbnRyb2xXcmFwcywgY2hhcnRXcmFwcyk7XG4gIC8vICAgfVxuICAvLyB9XG59XG4iLCJpbXBvcnQgeyBEYXRhRXJyb3IgfSBmcm9tIFwiLi9FcnJvcnNcIjtcbmltcG9ydCB7IFF1ZXJ5VGFwIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEYXRhUXVlcnlUbXBsIHtcbiAgdXJsOiBzdHJpbmc7XG4gIG9wdHM/OiBnb29nbGUudmlzdWFsaXphdGlvbi5RdWVyeU9wdGlvbnM7XG4gIHRhcD86IFF1ZXJ5VGFwO1xufVxuXG4vKipcbiAqIFVzZWQgZm9yIGxvYWRpbmcgcmVtb3RlIGRhdGEgYXMgYSB7QGxpbmsgRGF0YVRhYmxlfVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vY2hhcnQvaW50ZXJhY3RpdmUvZG9jcy9yZWZlcmVuY2UjUXVlcnlcbiAqIEBjbGFzc1xuICogQGF1dGhvciAgICBLZXZpbiBIaWxsIDxrZXZpbmtoaWxsQGdtYWlsLmNvbT5cbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTksIEtldmluIEhpbGxcbiAqIEBsaWNlbnNlICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVCBNSVRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVF1ZXJ5IHtcbiAgcHVibGljIHRhcDogUXVlcnlUYXAgPSAoXG4gICAgcXVlcnk6IGdvb2dsZS52aXN1YWxpemF0aW9uLlF1ZXJ5XG4gICk6IGdvb2dsZS52aXN1YWxpemF0aW9uLlF1ZXJ5ID0+IHF1ZXJ5O1xuXG4gIHB1YmxpYyBvcHRzOiBnb29nbGUudmlzdWFsaXphdGlvbi5RdWVyeU9wdGlvbnMgPSB7IHNlbmRNZXRob2Q6IFwiYXV0b1wiIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBEYXRhUXVlcnkgZm9yIGEgRGF0YVRhYmxlXG4gICAqXG4gICAqIEB0aHJvd3Mge0RhdGFFcnJvcn1cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB1cmw6IHN0cmluZyxcbiAgICBvcHRzPzogZ29vZ2xlLnZpc3VhbGl6YXRpb24uUXVlcnlPcHRpb25zLFxuICAgIHRhcD86IFF1ZXJ5VGFwXG4gICkge1xuICAgIGlmICh0YXApIHtcbiAgICAgIHRoaXMudGFwID0gdGFwO1xuICAgIH1cblxuICAgIGlmIChvcHRzKSB7XG4gICAgICB0aGlzLm9wdHM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBhIG5ldyBEYXRhUXVlcnkgYmFzZWQgb24gdGhlIGdpdmVuIHBheWxvYWRcbiAgICpcbiAgICogQHRocm93cyB7RGF0YUVycm9yfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZShwYXlsb2FkOiBEYXRhUXVlcnlUbXBsKTogRGF0YVF1ZXJ5IHtcbiAgICBpZiAoIXBheWxvYWQudXJsKSB7XG4gICAgICB0aHJvdyBuZXcgRGF0YUVycm9yKFxuICAgICAgICAnXCJ1cmxcIiBpcyBhIG1hbmRhdG9yeSBwYXJhbWV0ZXIgZm9yIGNyZWF0aW5nIGEgRGF0YVF1ZXJ5LidcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnkgPSBuZXcgRGF0YVF1ZXJ5KHBheWxvYWQudXJsKTtcblxuICAgIGlmICh0eXBlb2YgcGF5bG9hZC5vcHRzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBxdWVyeS5vcHRzID0gcGF5bG9hZC5vcHRzIGFzIGdvb2dsZS52aXN1YWxpemF0aW9uLlF1ZXJ5T3B0aW9ucztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBheWxvYWQudGFwID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHF1ZXJ5LnRhcCA9IHBheWxvYWQudGFwIGFzIFF1ZXJ5VGFwO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIC8vbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICAvKipcbiAgICogU2VuZCB0aGUgRGF0YVF1ZXJ5XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gIGFzeW5jIHNlbmQoKTogUHJvbWlzZTxnb29nbGUudmlzdWFsaXphdGlvbi5RdWVyeVJlc3BvbnNlPiB7XG4gICAgY29uc3QgcXVlcnkgPSBuZXcgd2luZG93Lmdvb2dsZS52aXN1YWxpemF0aW9uLlF1ZXJ5KHRoaXMudXJsLCB0aGlzLm9wdHMpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMudGFwKHF1ZXJ5KS5zZW5kKChyZXNwb25zZTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uUXVlcnlSZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuaXNFcnJvcigpKSB7XG4gICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFR5cGUgfSBmcm9tIFwiLi9saWJcIjtcblxuLyoqXG4gKiBTZXRzIHRoZSBkYXRhIGZvciB0aGUgY2hhcnQgYnkgY3JlYXRpbmcgYSBuZXcgRGF0YVRhYmxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb258QXJyYXl9IHBheWxvYWQgSnNvbiByZXByZXNlbnRhdGlvbiBvZiBhIERhdGFUYWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGF0YVRhYmxlKHBheWxvYWQ6IGFueSk6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSB7XG4gIC8vIElmIGEgZnVuY3Rpb24gaXMgcmVjZWl2ZWQsIHRoZW4gY3JlYXRlIGFuIG5ldyBEYXRhVGFibGUgYW5kIHBhc3MgaXQgdG8gdGhlXG4gIC8vIGZ1bmN0aW9uIGZvciB1c2VyIG1vZGlmaWNhdGlvbnMuXG4gIGlmIChnZXRUeXBlKHBheWxvYWQpID09PSBcIkZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gcGF5bG9hZChuZXcgd2luZG93Lmdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpKTtcbiAgfVxuXG4gIC8vIElmIGFuIEFycmF5IGlzIHJlY2VpdmVkLCB0aGVuIGF0dGVtcHQgdG8gdXNlIHBhcnNlIHdpdGggYXJyYXlUb0RhdGFUYWJsZS5cbiAgaWYgKGdldFR5cGUocGF5bG9hZCkgPT09IFwiQXJyYXlcIikge1xuICAgIHJldHVybiB3aW5kb3cuZ29vZ2xlLnZpc3VhbGl6YXRpb24uYXJyYXlUb0RhdGFUYWJsZShwYXlsb2FkKTtcbiAgfVxuXG4gIC8vIFNpbmNlIEdvb2dsZSBjb21waWxlcyB0aGVpciBjbGFzc2VzLCB3ZSBjYW4ndCB1c2UgaW5zdGFuY2VvZiB0byBjaGVjayBzaW5jZVxuICAvLyBpdCBpcyBubyBsb25nZXIgY2FsbGVkIGEgXCJEYXRhVGFibGVcIiAoaXQncyBcImd2anNfUFwiIGJ1dCB0aGF0IGNvdWxkIGNoYW5nZS4uLilcbiAgLy8gSWYgdGhpcyBjaGVjayBwYXNzZXMsIHRoZW4gaXQgYWxyZWFkeSBpcyBhIERhdGFUYWJsZVxuICBpZiAoZ2V0VHlwZShwYXlsb2FkLmdldFRhYmxlUHJvcGVydGllcykgPT09IFwiRnVuY3Rpb25cIikge1xuICAgIHJldHVybiBwYXlsb2FkO1xuICB9XG5cbiAgLy8gSWYgdGhlIHBheWxvYWQgaXMgZnJvbSB0aGUgcGhwIGNsYXNzIEpvaW5lZERhdGFUYWJsZS0+dG9Kc29uKCksIHRoZW4gY3JlYXRlXG4gIC8vIHR3byBuZXcgRGF0YVRhYmxlcyBhbmQgam9pbiB0aGVtIHdpdGggdGhlIGRlZmluZWQgb3B0aW9ucy5cbiAgaWYgKGdldFR5cGUocGF5bG9hZC5kYXRhKSA9PT0gXCJBcnJheVwiKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nb29nbGUudmlzdWFsaXphdGlvbi5kYXRhLmpvaW4oXG4gICAgICBuZXcgd2luZG93Lmdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZShwYXlsb2FkLmRhdGFbMF0pLFxuICAgICAgbmV3IHdpbmRvdy5nb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUocGF5bG9hZC5kYXRhWzFdKSxcbiAgICAgIHBheWxvYWQua2V5cyxcbiAgICAgIHBheWxvYWQuam9pbk1ldGhvZCxcbiAgICAgIHBheWxvYWQuZHQxQ29sdW1ucyxcbiAgICAgIHBheWxvYWQuZHQyQ29sdW1uc1xuICAgICk7XG4gIH1cblxuICAvLyBJZiBhIHBocCBEYXRhVGFibGUtPnRvSnNvbigpIHBheWxvYWQgaXMgcmVjZWl2ZWQsIHdpdGggZm9ybWF0dGVkIGNvbHVtbnMsXG4gIC8vIHRoZW4gcGF5bG9hZC5kYXRhIHdpbGwgYmUgZGVmaW5lZC4gVXNlIHRoaXMgdG8gY3JlYXRlIHRoZSBEYXRhVGFibGUuXG4gIGlmIChnZXRUeXBlKHBheWxvYWQuZGF0YSkgPT09IFwiT2JqZWN0XCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBwYXlsb2FkID0gcGF5bG9hZC5kYXRhO1xuICB9XG5cbiAgLy8gSWYgd2UgcmVhY2ggaGVyZSwgdGhlbiBpdCBtdXN0IGJlIHN0YW5kYXJkIEpTT04gZm9yIGNyZWF0aW5nIGEgRGF0YVRhYmxlLlxuICByZXR1cm4gbmV3IHdpbmRvdy5nb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUocGF5bG9hZCk7XG59XG4iLCIvKipcbiAqIExhdmFKc0Vycm9yIEVycm9yXG4gKlxuICogQmFzZSBlcnJvciB0aGF0IHRoZSBzcGVjaWZpYyBlcnJvcnMgZXh0ZW5kLlxuICovXG5leHBvcnQgY2xhc3MgTGF2YUpzRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UgPSBcIlRoZXJlIHdhcyBhbiBlcnJvclwiKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbnZhbGlkQ2FsbGJhY2sgRXJyb3JcbiAqXG4gKiBUaHJvd24gd2hlbiBhbnl0aGluZyBidXQgYSBmdW5jdGlvbiBpcyBnaXZlbiBhcyBhIGNhbGxiYWNrLlxuICovXG5leHBvcnQgY2xhc3MgSW52YWxpZENhbGxiYWNrIGV4dGVuZHMgTGF2YUpzRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihjYWxsYmFjazogYW55KSB7XG4gICAgc3VwZXIoYFtsYXZhLmpzXSBcIiR7dHlwZW9mIGNhbGxiYWNrfVwiIGlzIG5vdCBhIHZhbGlkIGNhbGxiYWNrLmApO1xuICB9XG59XG5cbi8qKlxuICogSW52YWxpZExhYmVsIEVycm9yXG4gKlxuICogVGhyb3duIHdoZW4gYSB7QGxpbmsgUmVuZGVyYWJsZX0gaXMgbm90IGZvdW5kIGluIHRoZSBtb2R1bGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZW5kZXJhYmxlTm90Rm91bmQgZXh0ZW5kcyBMYXZhSnNFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGxhYmVsOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgW2xhdmEuanNdIEEgcmVuZGVyYWJsZSB3aXRoIHRoZSBsYWJlbCBcIiR7bGFiZWx9XCIgd2FzIG5vdCBmb3VuZC5gKTtcbiAgfVxufVxuXG4vKipcbiAqIEVsZW1lbnRJZE5vdEZvdW5kIEVycm9yXG4gKlxuICogVGhyb3duIHdoZW4gdGhlIGdpdmVuIElEIGZvciBhbiBIVE1MRWxlbWVudCBpcyBub3QgZm91bmQgaW4gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNsYXNzIERhdGFFcnJvciBleHRlbmRzIExhdmFKc0Vycm9yIHtcbiAgY29uc3RydWN0b3IobXNnOiBzdHJpbmcpIHtcbiAgICBzdXBlcihtc2cpO1xuICB9XG59XG5cbi8qKlxuICogRWxlbWVudElkTm90Rm91bmQgRXJyb3JcbiAqXG4gKiBUaHJvd24gd2hlbiB0aGUgZ2l2ZW4gSUQgZm9yIGFuIEhUTUxFbGVtZW50IGlzIG5vdCBmb3VuZCBpbiB0aGUgRE9NLlxuICovXG5leHBvcnQgY2xhc3MgRWxlbWVudElkTm90Rm91bmQgZXh0ZW5kcyBMYXZhSnNFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1JZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoYFtsYXZhLmpzXSBET00gbm9kZSB3aGVyZSBpZD1cIiR7ZWxlbUlkfVwiIHdhcyBub3QgZm91bmQuYCk7XG4gIH1cbn1cblxuTGF2YUpzRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuRGF0YUVycm9yLnByb3RvdHlwZSA9IExhdmFKc0Vycm9yLnByb3RvdHlwZTtcbkludmFsaWRDYWxsYmFjay5wcm90b3R5cGUgPSBMYXZhSnNFcnJvci5wcm90b3R5cGU7XG5FbGVtZW50SWROb3RGb3VuZC5wcm90b3R5cGUgPSBMYXZhSnNFcnJvci5wcm90b3R5cGU7XG5SZW5kZXJhYmxlTm90Rm91bmQucHJvdG90eXBlID0gTGF2YUpzRXJyb3IucHJvdG90eXBlO1xuIiwiaW1wb3J0IHsgTGF2YUpzT3B0aW9ucywgTW9kZXJuSFRNTFNjcmlwdEVsZW1lbnQgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG4vKipcbiAqIFZlcnNpb24gb2YgdGhlIEdvb2dsZSBjaGFydHMgQVBJIHRvIGxvYWRcbiAqL1xuZXhwb3J0IGNvbnN0IEFQSV9WRVJTSU9OID0gXCJjdXJyZW50XCI7XG5cbi8qKlxuICogVXJsIHRvIEdvb2dsZSdzIHN0YXRpYyBsb2FkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IExPQURFUl9VUkwgPSBcImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2NoYXJ0cy9sb2FkZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlTG9hZGVyIHtcbiAgLyoqXG4gICAqIFBhY2thZ2VzIHRvIGxvYWRcbiAgICovXG4gIHByaXZhdGUgcGFja2FnZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChbXCJjb3JlY2hhcnRcIl0pO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0aW9uczogTGF2YUpzT3B0aW9ucykge31cblxuICAvKipcbiAgICogRmxhZyB0aGF0IHdpbGwgYmUgdHJ1ZSBvbmNlIHdpbmRvdy5nb29nbGUgaXMgYXZhaWxhYmxlIGluIHBhZ2UuXG4gICAqL1xuICBnZXQgaXNMb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cuZ29vZ2xlICE9PSBcInVuZGVmaW5lZFwiO1xuICB9XG5cbiAgLyoqXG4gICAqIEZsYWcgdGhhdCB3aWxsIGJlIHRydWUgb25jZSBHb29nbGUncyBTdGF0aWMgTG9hZGVyIGlzIGluIHBhZ2UuXG4gICAqL1xuICBnZXQgZ29vZ2xlTG9hZGVySW5QYWdlKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblxuICAgIGZvciAoY29uc3Qgc2NyaXB0IG9mIEFycmF5LmZyb20oc2NyaXB0cykpIHtcbiAgICAgIGlmIChzY3JpcHQuc3JjID09PSBMT0FERVJfVVJMKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG9wdGlvbnMgZm9yIHRoZSBnb29nbGUgbG9hZGVyLlxuICAgKi9cbiAgZ2V0IGNvbmZpZygpOiBhbnkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgcGFja2FnZXM6IEFycmF5LmZyb20odGhpcy5wYWNrYWdlcyksXG4gICAgICAgIGxhbmd1YWdlOiB0aGlzLm9wdGlvbnMubG9jYWxlXG4gICAgICB9IC8qICBhcyBHb29nbGVDaGFydENvbmZpZyAqLztcblxuICAgIGlmICh0aGlzLm9wdGlvbnMubWFwc0FwaUtleSAhPT0gXCJcIikge1xuICAgICAgT2JqZWN0LmFzc2lnbihjb25maWcsIHtcbiAgICAgICAgbWFwc0FwaUtleTogdGhpcy5vcHRpb25zLm1hcHNBcGlLZXlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG9uZSBwYWNrYWdlIHRvIHRoZSBsaXN0IHRoYXQgR29vZ2xlIG5lZWRzIHRvIGxvYWQuXG4gICAqL1xuICBwdWJsaWMgYWRkUGFja2FnZShwa2dzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnBhY2thZ2VzLmFkZChwa2dzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbXVsdGlwbGUgcGFja2FnZXMgdG8gdGhlIGxpc3QgdGhhdCBHb29nbGUgbmVlZHMgdG8gbG9hZC5cbiAgICovXG4gIHB1YmxpYyBhZGRQYWNrYWdlcyhwYWNrYWdlczogc3RyaW5nW10gfCBTZXQ8c3RyaW5nPik6IHZvaWQge1xuICAgIHBhY2thZ2VzLmZvckVhY2goKHBrZzogc3RyaW5nKSA9PiB0aGlzLnBhY2thZ2VzLmFkZChwa2cpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIHRoZSBHb29nbGUgU3RhdGljIExvYWRlciBhbmQgcmVzb2x2ZSB0aGUgcHJvbWlzZSB3aGVuIHJlYWR5LlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGxvYWRHb29nbGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc29sZS5sb2coXCJbbGF2YS5qc10gUmVzb2x2aW5nIEdvb2dsZS4uLlwiKTtcblxuICAgIGlmICh0aGlzLmdvb2dsZUxvYWRlckluUGFnZSA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW2xhdmEuanNdIFN0YXRpYyBsb2FkZXIgbm90IGZvdW5kLCBhcHBlbmRpbmcgdG8gaGVhZFwiKTtcblxuICAgICAgYXdhaXQgdGhpcy5hZGRHb29nbGVTY3JpcHRUb0hlYWQoKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIltsYXZhLmpzXSBTdGF0aWMgbG9hZGVyIGZvdW5kLCBpbml0aWFsaXppbmcgd2luZG93Lmdvb2dsZVwiKTtcblxuICAgIHJldHVybiB0aGlzLmdvb2dsZUNoYXJ0TG9hZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUnVucyB0aGUgR29vZ2xlIENoYXJ0IExvYWRlciB1c2luZyB0aGUgcGFzc2VkIFByb21pc2UgcmVzb2x2ZXIgYXNcbiAgICogdGhlIHNldE9uTG9hZENhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKi9cbiAgcHVibGljIGdvb2dsZUNoYXJ0TG9hZGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW2xhdmEuanNdIExvYWRpbmcgR29vZ2xlIHdpdGggY29uZmlnOlwiLCB0aGlzLmNvbmZpZyk7XG5cbiAgICAgIHdpbmRvdy5nb29nbGUuY2hhcnRzLmxvYWQoQVBJX1ZFUlNJT04sIHRoaXMuY29uZmlnKTtcblxuICAgICAgd2luZG93Lmdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2socmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHNjcmlwdCB0YWcgZm9yIHRoZSBHb29nbGUgU3RhdGljIExvYWRlclxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBhZGRHb29nbGVTY3JpcHRUb0hlYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJzY3JpcHRcIlxuICAgICAgKSBhcyBNb2Rlcm5IVE1MU2NyaXB0RWxlbWVudDtcblxuICAgICAgc2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgIHNjcmlwdC5zcmMgPSBMT0FERVJfVVJMO1xuICAgICAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBldmVudCA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgZXZlbnQudHlwZSA9PT0gXCJsb2FkXCIgfHxcbiAgICAgICAgICAvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KHNjcmlwdC5yZWFkeVN0YXRlKVxuICAgICAgICApIHtcbiAgICAgICAgICBzY3JpcHQub25sb2FkID0gc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG5cbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCI7XG5cbmltcG9ydCBDaGFydCBmcm9tIFwiLi9DaGFydFwiO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9EYXNoYm9hcmRcIjtcbmltcG9ydCBEYXRhUXVlcnksIHsgRGF0YVF1ZXJ5VG1wbCB9IGZyb20gXCIuL0RhdGFRdWVyeVwiO1xuaW1wb3J0IHsgSW52YWxpZENhbGxiYWNrLCBSZW5kZXJhYmxlTm90Rm91bmQgfSBmcm9tIFwiLi9FcnJvcnNcIjtcbmltcG9ydCBHb29nbGVMb2FkZXIgZnJvbSBcIi4vR29vZ2xlTG9hZGVyXCI7XG5pbXBvcnQgeyBhZGRFdmVudCwgZGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9saWJcIjtcbmltcG9ydCBSZW5kZXJhYmxlIGZyb20gXCIuL1JlbmRlcmFibGVcIjtcbmltcG9ydCB7IExhdmFKc09wdGlvbnMsIFJlbmRlcmFibGVUbXBsIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuLyoqXG4gKiBHb29nbGUgQ2hhcnQgQVBJIHdyYXBwZXIgbGlicmFyeVxuICpcbiAqIFRoaXMgbW9kdWxlIGNhbiBiZSB1c2VkIGFzIGEgc3RhbmRhbG9uZSwgYnJvd3NlciBiYXNlZCBsaWJyYXJ5LCBvciBpblxuICogY29uanVuY3Rpb24gd2l0aCB0aGUgUEhQIGxpYnJhcnksIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20va2V2aW5raGlsbC9sYXZhY2hhcnRzXCI+TGF2YWNoYXJ0czwvYT4uXG4gKlxuICogQGNsYXNzXG4gKiBAYXV0aG9yICAgIEtldmluIEhpbGwgPGtldmlua2hpbGxAZ21haWwuY29tPlxuICogQGNvcHlyaWdodCAoYykgMjAxOSwgS2V2aW4gSGlsbFxuICogQGxpY2Vuc2UgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUIE1JVFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXZhSnMgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvKipcbiAgICogVmVyc2lvbiBvZiB0aGUgTGF2YUpzIG1vZHVsZVxuICAgKi9cbiAgc3RhdGljIFZFUlNJT04gPSBcIjQuMC4wLWJldGEyXCI7XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyYWJsZSBvcHRpb25zIGZvciB0aGUgbGlicmFyeVxuICAgKi9cbiAgcHJpdmF0ZSBvcHRpb25zOiBMYXZhSnNPcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIENoYXJ0IHN0b3JhZ2VcbiAgICovXG4gIHByaXZhdGUgdm9sY2FubzogTWFwPHN0cmluZywgUmVuZGVyYWJsZT4gPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIFJlYWR5IENhbGxiYWNrXG4gICAqL1xuICBwcml2YXRlIHJlYWR5Q2FsbGJhY2shOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogTG9hZGVyIGNsYXNzIGZvciBhcHBlbmRpbmcgdGhlIGdvb2dsZSBzY3JpcHQgYW5kIG1ha2luZyB3aW5kb3cuZ29vZ2xlIGF2YWlsYWJsZVxuICAgKi9cbiAgcHJpdmF0ZSBsb2FkZXI6IEdvb2dsZUxvYWRlcjtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBMYXZhSnMgbGlicmFyeVxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucz86IExhdmFKc09wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKG9wdGlvbnMpIHRoaXMuY29uZmlndXJlKG9wdGlvbnMpO1xuXG4gICAgdGhpcy5sb2FkZXIgPSBuZXcgR29vZ2xlTG9hZGVyKHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogRm9yd2FyZCB0aGUgYXV0b1J1biBvcHRpb24gdG8gdGhlIG1haW4gb2JqZWN0IHRvIGNoZWNrIGluIHBhZ2UuXG4gICAqL1xuICBnZXQgYXV0b3J1bigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMub3B0aW9ucy5hdXRvUnVuID09PSBcInVuZGVmaW5lZFwiXG4gICAgICA/IHRydWVcbiAgICAgIDogdGhpcy5vcHRpb25zLmF1dG9SdW47XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlIHRoZSBMYXZhSnMgbW9kdWxlLlxuICAgKi9cbiAgcHVibGljIGNvbmZpZ3VyZShvcHRpb25zOiBMYXZhSnNPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBsaWJyYXJ5IGJ5IGxvYWRpbmcgZ29vZ2xlIHRvIHRoZSB3aW5kb3cuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgaW5pdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICh0aGlzLmxvYWRlci5pc0xvYWRlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGF3YWl0IHRoaXMubG9hZGVyLmxvYWRHb29nbGUoKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIltsYXZhLmpzXSBHb29nbGUgaXMgcmVhZHlcIiwgd2luZG93Lmdvb2dsZSk7XG5cbiAgICByZXR1cm4gd2luZG93Lmdvb2dsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW5zIHRoZSBMYXZhSnMuanMgbW9kdWxlXG4gICAqXG4gICAqIEBlbWl0cyB7cmVhZHl9XG4gICAqL1xuICBwdWJsaWMgYXN5bmMgcnVuKCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgcnVuUHJvbWlzZXM6IFByb21pc2U8YW55PltdID0gW107XG5cbiAgICBjb25zb2xlLmxvZyhgW2xhdmEuanNdIHYke0xhdmFKcy5WRVJTSU9OfSBSdW5uaW5nLi4uYCk7XG4gICAgY29uc29sZS5sb2coXCJbbGF2YS5qc10gTG9hZGluZyBvcHRpb25zOlwiLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgdGhpcy5hdHRhY2hSZWRyYXdIYW5kbGVyKCk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5pbml0KCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycm9yKTtcbiAgICB9XG5cbiAgICB0aGlzLnZvbGNhbm8uZm9yRWFjaChyZW5kZXJhYmxlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBbbGF2YS5qc10gUmVuZGVyaW5nICR7cmVuZGVyYWJsZS51dWlkfWApO1xuXG4gICAgICBydW5Qcm9taXNlcy5wdXNoKHJlbmRlcmFibGUucnVuKCkpO1xuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKHJ1blByb21pc2VzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiW2xhdmEuanNdIFJlYWR5IVwiKTtcblxuICAgIHRoaXMuZW1pdChcInJlYWR5XCIpO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnJlYWR5Q2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyB7QGxpbmsgRGF0YVF1ZXJ5fSBmb3IgYSB7QGxpbmsgUmVuZGVyYWJsZX1cbiAgICpcbiAgICogSWYgYSBTdHJpbmcgaXMgcGFzc2VkLCB0aGVuIGEgbmV3IHtAbGluayBEYXRhUXVlcnl9IGlzIGNyZWF0ZWQgd2l0aCBubyBvcHRpb25zLlxuICAgKiBJZiBhbiBPYmplY3QgaXMgcGFzc2VkLCB0aGVuIHRoZSBxdWVyeSBtdXN0IGJlIGRlZmluZWQgYnkgdGhlIG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBxdWVyeSh1cmw6IHN0cmluZyB8IERhdGFRdWVyeVRtcGwpOiBEYXRhUXVlcnkge1xuICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGFRdWVyeSh1cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRGF0YVF1ZXJ5LmNyZWF0ZSh1cmwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdGF0aWMgbWV0aG9kIGZvciBjcmVhdGluZyBuZXcgQ2hhcnRzIGFuZCBEYXNoYm9hcmRzIGZyb20gYSBwYXlsb2FkIGRlZmluaXRpb24uXG4gICAqXG4gICAqIFRoZSBwYXlsb2FkIHBheWxvYWQgY2FuIGNvbWUgZnJvbSBMYXZhY2hhcnRzIG9yIG1hbnVhbGx5IGlmIHVzZWRcbiAgICogYXMgYW4gaW5kZXBlbmRlbnQgbGlicmFyeS5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGUocGF5bG9hZDogUmVuZGVyYWJsZVRtcGwpOiBDaGFydCB8IERhc2hib2FyZCB7XG4gICAgY29uc29sZS5sb2coYFtsYXZhLmpzXSBDcmVhdGluZyBhIG5ldyAke3BheWxvYWQudHlwZX06YCwgcGF5bG9hZCk7XG5cbiAgICBpZiAocGF5bG9hZC50eXBlID09PSBcIkRhc2hib2FyZFwiKSB7XG4gICAgICByZXR1cm4gbmV3IERhc2hib2FyZChwYXlsb2FkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IENoYXJ0KHBheWxvYWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyBvciBjcmVhdGVzIHRoZW4gc3RvcmVzIGEge0BsaW5rIFJlbmRlcmFibGV9IHdpdGhpbiB0aGUgbW9kdWxlLlxuICAgKlxuICAgKiBAdG9kbyBJZiB0aGUgbGlicmFyeSBoYXMgcmFuLCBhbmQgaXMgcmVhZHksIGxvYWRpbmcgbmV3IGNoYXJ0cyB3aWxsIGZvcmNlIGEgcmVkcmF3QWxsIG9mIGFsbCB0aGUgY3VycmVudGx5IGRyYXduIGNoYXJ0cy5cbiAgICovXG4gIHB1YmxpYyBzdG9yZShyZW5kZXJhYmxlOiBSZW5kZXJhYmxlVG1wbCk6IENoYXJ0IHwgRGFzaGJvYXJkIHtcbiAgICAvLyBpZiAocmVuZGVyYWJsZSBpbnN0YW5jZW9mIFJlbmRlcmFibGUgPT09IGZhbHNlKSB7XG4gICAgLy8gICByZW5kZXJhYmxlID0gdGhpcy5jcmVhdGUocmVuZGVyYWJsZSk7XG4gICAgLy8gfVxuICAgIGNvbnN0IG5ld1JlbmRlcmFibGUgPSB0aGlzLmNyZWF0ZShyZW5kZXJhYmxlKTtcblxuICAgIGNvbnNvbGUubG9nKGBbbGF2YS5qc10gU3RvcmluZyAke25ld1JlbmRlcmFibGUudXVpZH1gKTtcblxuICAgIHRoaXMubG9hZGVyLmFkZFBhY2thZ2VzKG5ld1JlbmRlcmFibGUucGFja2FnZXMpO1xuXG4gICAgdGhpcy52b2xjYW5vLnNldChuZXdSZW5kZXJhYmxlLmxhYmVsLCBuZXdSZW5kZXJhYmxlKTtcblxuICAgIC8vaWYgKHRoaXMuaXNSZWFkeSkge1xuICAgIC8vICAgIHRoaXMucmVkcmF3QWxsKCk7XG4gICAgLy99XG5cbiAgICByZXR1cm4gbmV3UmVuZGVyYWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhIHtAbGluayBDaGFydH0gLyB7QGxpbmsgRGFzaGJvYXJkfSBmcm9tIHN0b3JhZ2UuXG4gICAqXG4gICAqIFRoZSB7QGxpbmsgQ2hhcnR9IG9iamVjdCBoYXMgdGhlIHVzZXIgZGVmaW5lZCBwcm9wZXJ0aWVzIHN1Y2ggYXMgZGF0YSwgb3B0aW9ucywgZm9ybWF0cywgZXRjLlxuICAgKlxuICAgKiBUaGUgR29vZ2xlIENoYXJ0IG9iamVjdCBpcyBhdmFpbGFibGUgYXMgXCIuZ2NoYXJ0XCIgZnJvbSB0aGUgcmV0dXJuZWQgTGF2YUNoYXJ0LlxuICAgKiBJdCBjYW4gYmUgdXNlZCB0byBhY2Nlc3MgYW55IG9mIHRoZSBhdmFpbGFibGUgbWV0aG9kcyBzdWNoIGFzXG4gICAqIGdldEltYWdlVVJJKCkgb3IgZ2V0Q2hhcnRMYXlvdXRJbnRlcmZhY2UoKS5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZ29vZ2xlLWRldmVsb3BlcnMuYXBwc3BvdC5jb20vY2hhcnQvaW50ZXJhY3RpdmUvZG9jcy9nYWxsZXJ5L2xpbmVjaGFydCNtZXRob2RzXG4gICAqIGZvciBzb21lIGV4YW1wbGVzIHJlbGF0aXZlIHRvIExpbmVDaGFydHMuXG4gICAqXG4gICAqIEB0aHJvd3Mge1JlbmRlcmFibGVOb3RGb3VuZH1cbiAgICovXG4gIHB1YmxpYyBnZXQobGFiZWw6IHN0cmluZyk6IENoYXJ0IHwgRGFzaGJvYXJkIHtcbiAgICBpZiAodGhpcy52b2xjYW5vLmhhcyhsYWJlbCkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgUmVuZGVyYWJsZU5vdEZvdW5kKGxhYmVsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy52b2xjYW5vLmdldChsYWJlbCkgYXMgQ2hhcnQgfCBEYXNoYm9hcmQ7XG4gIH1cblxuICAvKipcbiAgICogQXNzaWducyBhIGNhbGxiYWNrIGZvciB3aGVuIHRoZSBjaGFydHMgYXJlIHJlYWR5IHRvIGJlIGludGVyYWN0ZWQgd2l0aC5cbiAgICpcbiAgICogVGhpcyBpcyB1c2VkIHRvIHdyYXAgY2FsbHMgdG8gbGF2YS5sb2FkRGF0YSgpIG9yIGxhdmEubG9hZE9wdGlvbnMoKVxuICAgKiB0byBwcm90ZWN0IGFnYWluc3QgYWNjZXNzaW5nIGNoYXJ0cyB0aGF0IGFyZW4ndCBsb2FkZWQgeWV0XG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogQHRocm93cyB7SW52YWxpZENhbGxiYWNrfVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcHVibGljIHJlYWR5KGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRDYWxsYmFjayhjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgdGhpcy5yZWFkeUNhbGxiYWNrID0gY2FsbGJhY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBuZXcgZGF0YSBpbnRvIHRoZSBjaGFydCBhbmQgcmVkcmF3cy5cbiAgICpcbiAgICpcbiAgICogVXNlZCB3aXRoIGFuIEFKQVggY2FsbCB0byBhIFBIUCBtZXRob2QgcmV0dXJuaW5nIERhdGFUYWJsZS0+dG9wYXlsb2FkKCksXG4gICAqIGEgY2hhcnQgY2FuIGJlIGR5bmFtaWNhbGx5IHVwZGF0ZSBpbiBwYWdlLCB3aXRob3V0IHJlbG9hZHMuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgbG9hZERhdGEoXG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICBwYXlsb2FkOiBvYmplY3QsXG4gICAgY2FsbGJhY2s/OiBGdW5jdGlvblxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IGNoYXJ0ID0gdGhpcy5nZXQobGFiZWwpO1xuXG4gICAgYXdhaXQgY2hhcnQuc2V0RGF0YShwYXlsb2FkKTtcblxuICAgIGNoYXJ0LmRyYXcoKTtcblxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY2FsbGJhY2soY2hhcnQuZGF0YSwgY2hhcnQuZ2NoYXJ0KTtcbiAgICB9XG4gIH1cblxuICAvL25vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgLyoqXG4gICAqIExvYWRzIG5ldyBvcHRpb25zIGludG8gYSBjaGFydCBhbmQgcmVkcmF3cy5cbiAgICpcbiAgICpcbiAgICogVXNlZCB3aXRoIGFuIEFKQVggY2FsbCwgb3IgamF2YXNjcmlwdCBldmVudHMsIHRvIGxvYWQgYSBuZXcgYXJyYXkgb2Ygb3B0aW9ucyBpbnRvIGEgY2hhcnQuXG4gICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gdXBkYXRlIGEgY2hhcnQgZHluYW1pY2FsbHksIHdpdGhvdXQgcmVsb2Fkcy5cbiAgICovXG4gIHB1YmxpYyBsb2FkT3B0aW9ucyhcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIHBheWxvYWQ6IG9iamVjdCxcbiAgICBjYWxsYmFjaz86IEZ1bmN0aW9uXG4gICk6IHZvaWQge1xuICAgIC8vVE9ETzogdGVzdCB0aGlzXG4gICAgY29uc3QgY2hhcnQgPSB0aGlzLmdldChsYWJlbCk7XG5cbiAgICBjaGFydC5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihjaGFydC5vcHRpb25zLCBwYXlsb2FkKTtcblxuICAgIHRyeSB7XG4gICAgICBjaGFydC5kcmF3KCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNhbGxiYWNrKGNoYXJ0LmRhdGEsIGNoYXJ0LmdjaGFydCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZHJhd3MgYWxsIG9mIHRoZSByZWdpc3RlcmVkIGNoYXJ0cyBvbiBzY3JlZW4uXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGF0dGFjaGVkIHRvIHRoZSB3aW5kb3cgcmVzaXplIGV2ZW50IHdpdGggZGVib3VuY2luZ1xuICAgKiB0byBtYWtlIHRoZSBjaGFydHMgcmVzcG9uc2l2ZSB0byB0aGUgYnJvd3NlciByZXNpemluZy5cbiAgICovXG4gIHB1YmxpYyByZWRyYXdBbGwoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMudm9sY2Fuby5zaXplID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhgW2xhdmEuanNdIE5vdGhpbmcgdG8gcmVkcmF3LmApO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYFtsYXZhLmpzXSBSZWRyYXdpbmcgJHt0aGlzLnZvbGNhbm8uc2l6ZX0gcmVuZGVyYWJsZXMuYCk7XG5cbiAgICB0aGlzLnZvbGNhbm8uZm9yRWFjaChyZW5kZXJhYmxlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBbbGF2YS5qc10gUmVkcmF3aW5nICR7cmVuZGVyYWJsZS51dWlkfWApO1xuXG4gICAgICByZW5kZXJhYmxlLmRyYXcoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaCBhIGxpc3RlbmVyIHRvIHRoZSB3aW5kb3cgcmVzaXplIGV2ZW50IGZvciByZWRyYXdpbmcgdGhlIGNoYXJ0cy5cbiAgICovXG4gIHByaXZhdGUgYXR0YWNoUmVkcmF3SGFuZGxlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlc3BvbnNpdmUgPT09IHRydWUpIHtcbiAgICAgIGxldCBkZWJvdW5jZWQ6IG51bWJlcjtcblxuICAgICAgYWRkRXZlbnQod2luZG93LCBcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgIC8vIGxldCByZWRyYXdBbGwgPSB0aGlzLnJlZHJhd0FsbCgpLmJpbmQodGhpcyk7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KGRlYm91bmNlZCk7XG5cbiAgICAgICAgZGVib3VuY2VkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJbbGF2YS5qc10gV2luZG93IHJlLXNpemVkLCByZWRyYXdpbmcuLi5cIik7XG5cbiAgICAgICAgICB0aGlzLnJlZHJhd0FsbCgpO1xuICAgICAgICB9LCB0aGlzLm9wdGlvbnMuZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCI7XG5cbmltcG9ydCBEYXRhUXVlcnkgZnJvbSBcIi4vRGF0YVF1ZXJ5XCI7XG5pbXBvcnQgeyBjcmVhdGVEYXRhVGFibGUgfSBmcm9tIFwiLi9EYXRhVGFibGVcIjtcbmltcG9ydCB7IERhdGFFcnJvciwgRWxlbWVudElkTm90Rm91bmQgfSBmcm9tIFwiLi9FcnJvcnNcIjtcbmltcG9ydCB7IEZvcm1hdHRlciwgUmVuZGVyYWJsZVRtcGwgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgQ2hhcnRDbGFzc2VzLCBSZW5kZXJhYmxlVHlwZSwgU3VwcG9ydGVkQ2hhcnRzIH0gZnJvbSBcIi4vdHlwZXMvc3RyaW5nc1wiO1xuaW1wb3J0IFZpelByb3BzIGZyb20gXCIuL1Zpc3VhbGl6YXRpb25Qcm9wc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgUmVuZGVyYWJsZX0gY2xhc3MgaXMgdGhlIGJhc2UgZm9yIHtAbGluayBDaGFydH1zIGFuZCB7QGxpbmsgRGFzaGJvYXJkfXNcbiAqIHRvIHNoYXJlIGNvbW1vbiBtZXRob2RzIGJldHdlZW4gdGhlIHR3byB0eXBlcy5cbiAqXG4gKlxuICogQGF1dGhvciAgICBLZXZpbiBIaWxsIDxrZXZpbmtoaWxsQGdtYWlsLmNvbT5cbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTksIEtldmluIEhpbGxcbiAqIEBsaWNlbnNlICAgTUlUXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmFibGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBbSzogc3RyaW5nXTogYW55O1xuXG4gIC8qKlxuICAgKiBVbmlxdWUgbGFiZWwgZm9yIHRoZSB7QGxpbmsgQ2hhcnR9IC8ge0BsaW5rIERhc2hib2FyZH0uXG4gICAqL1xuICBwdWJsaWMgbGFiZWw6IGFueTtcblxuICAvKipcbiAgICogQ29uZmlndXJhYmxlIG9wdGlvbnMuXG4gICAqL1xuICBwdWJsaWMgb3B0aW9uczogUmVjb3JkPHN0cmluZywgYW55PjtcblxuICAvKipcbiAgICogRGF0YVRhYmxlIGZvciB0aGUge0BsaW5rIENoYXJ0fSAvIHtAbGluayBEYXNoYm9hcmR9LlxuICAgKi9cbiAgcHVibGljIGRhdGEhOiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGU7XG5cbiAgLyoqXG4gICAqIFByZURyYXcgaG9va1xuICAgKi9cbiAgcHVibGljIHByZURyYXchOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogUG9zdERyYXcgaG9va1xuICAgKi9cbiAgcHVibGljIHBvc3REcmF3ITogRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEdvb2dsZSBjaGFydCBvYmplY3QgY3JlYXRlZCBvbmNlIHRoZSB7QGxpbmsgQ2hhcnR9IC8ge0BsaW5rIERhc2hib2FyZH1cbiAgICogaGFzIGJlZW4gcmVuZGVyZWQuXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBwdWJsaWMgZ2NoYXJ0OiBhbnk7XG5cbiAgLyoqXG4gICAqIEhUTUxFbGVtZW50IGludG8gd2hpY2ggdGhlIGNoYXJ0IHdpbGwgYmUgcmVuZGVyZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgY29udGFpbmVyITogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEVsZW1lbnQgSUQgb2YgdGhlIERPTSBub2RlIGZvciB0aGUgY29udGFpbmVyLlxuICAgKi9cbiAgcHJvdGVjdGVkIGVsZW1lbnRJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBGb3JtYXR0ZXJzIGZvciB0aGUgRGF0YVRhYmxlXG4gICAqL1xuICBwcm90ZWN0ZWQgZm9ybWF0czogRm9ybWF0dGVyW107XG5cbiAgLyoqXG4gICAqIFR5cGUgb2Yge0BsaW5rIFJlbmRlcmFibGV9LlxuICAgKi9cbiAgcHJvdGVjdGVkIHR5cGU6IFN1cHBvcnRlZENoYXJ0cyB8IFJlbmRlcmFibGVUeXBlO1xuXG4gIC8qKlxuICAgKiBUaGUgc291cmNlIG9mIHRoZSBEYXRhVGFibGUsIHRvIGJlIHVzZWQgaW4gc2V0RGF0YSgpLlxuICAgKi9cbiAgcHJpdmF0ZSBkYXRhU3JjOiBhbnk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBSZW5kZXJhYmxlXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBqc29uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihqc29uOiBSZW5kZXJhYmxlVG1wbCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnR5cGUgPSBqc29uLnR5cGU7XG4gICAgdGhpcy5sYWJlbCA9IGpzb24ubGFiZWw7XG4gICAgdGhpcy5kYXRhU3JjID0ganNvbi5kYXRhO1xuICAgIHRoaXMuZWxlbWVudElkID0ganNvbi5lbGVtZW50SWQ7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCk7XG5cbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBqc29uLm9wdGlvbnMgfHwge307XG4gICAgdGhpcy5mb3JtYXRzID0ganNvbi5mb3JtYXRzIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBnb29nbGUudmlzdWFsaXphdGlvbiBjbGFzcyBuZWVkZWQgZm9yIHJlbmRlcmluZy5cbiAgICovXG4gIHB1YmxpYyBnZXQgY2xhc3MoKTogQ2hhcnRDbGFzc2VzIHtcbiAgICByZXR1cm4gVml6UHJvcHNbdGhpcy50eXBlIGFzIFN1cHBvcnRlZENoYXJ0c10uY2xhc3M7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGdvb2dsZS52aXN1YWxpemF0aW9uIHBhY2thZ2UgbmVlZGVkIGZvciByZW5kZXJpbmcuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHBhY2thZ2VzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1ZpelByb3BzW3RoaXMudHlwZSBhcyBTdXBwb3J0ZWRDaGFydHNdLnBhY2thZ2VdO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUge0BsaW5rIENoYXJ0fSAvIHtAbGluayBEYXNoYm9hcmR9LlxuICAgKi9cbiAgcHVibGljIGdldCB1dWlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSArIFwiOjpcIiArIHRoaXMubGFiZWw7XG4gIH1cblxuICAvKipcbiAgICogRHJhd3MgdGhlIHtAbGluayBDaGFydH0gLyB7QGxpbmsgRGFzaGJvYXJkfSB3aXRoIHRoZSBwcmVkZWZpbmVkIGRhdGEgYW5kIG9wdGlvbnMuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHB1YmxpYyBkcmF3KCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fcHJlRHJhdyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhgW2xhdmEuanNdIFJ1bm5pbmcgJHt0aGlzLnV1aWR9Ll9wcmVEcmF3KClgKTtcblxuICAgICAgdGhpcy5fcHJlRHJhdygpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5wcmVEcmF3ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBbbGF2YS5qc10gUnVubmluZyAke3RoaXMudXVpZH0ucHJlRHJhdygpYCk7XG5cbiAgICAgIHRoaXMucHJlRHJhdygpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5kYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRGF0YUVycm9yKGAke3RoaXMudXVpZH0gQ291bGQgbm90IGRyYXcsIGRhdGEgaXMgJHt0aGlzLmRhdGF9YCk7XG4gICAgfVxuXG4gICAgdGhpcy5nY2hhcnQuZHJhdyh0aGlzLmRhdGEsIHRoaXMub3B0aW9ucyk7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuX3Bvc3REcmF3ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBbbGF2YS5qc10gUnVubmluZyAke3RoaXMudXVpZH0uX3Bvc3REcmF3KClgKTtcblxuICAgICAgdGhpcy5fcG9zdERyYXcoKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMucG9zdERyYXcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uc29sZS5sb2coYFtsYXZhLmpzXSBSdW5uaW5nICR7dGhpcy51dWlkfS5wb3N0RHJhdygpYCk7XG5cbiAgICAgIHRoaXMucG9zdERyYXcoKTtcbiAgICB9XG4gIH1cblxuICAvL25vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgLyoqXG4gICAqIFJ1biB0aGUgc2V0dXAgYW5kIGRyYXcgdGhlIGNoYXJ0LlxuICAgKlxuICAgKiBBbnkgZGVwZW5kZW5jeSBvbiBcImdvb2dsZVwiIG11c3QgYmUgd2l0aGluIHRoZSBydW4oKSBzY29wZS5cbiAgICpcbiAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCBhZnRlciB0aGUgc3RhdGljIGxvYWRlZCBoYXMgY29tcGxldGVkXG4gICAqIHJlZ2lzdGVyaW5nIHdpbmRvdy5nb29nbGVcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gIGFzeW5jIHJ1bigpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRocm93IG5ldyBFbGVtZW50SWROb3RGb3VuZCh0aGlzLmVsZW1lbnRJZCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5fc2V0dXAoKTtcblxuICAgIHRoaXMuYXR0YWNoRXZlbnRSZWxheXMoKTtcblxuICAgIGF3YWl0IHRoaXMuc2V0RGF0YSh0aGlzLmRhdGFTcmMpO1xuXG4gICAgaWYgKHRoaXMuZm9ybWF0cykge1xuICAgICAgdGhpcy5hcHBseUZvcm1hdHMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB7QGxpbmsgRGF0YVRhYmxlfSBmb3IgdGhlIHtAbGluayBSZW5kZXJhYmxlfS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAcGFyYW0ge09iamVjdHxGdW5jdGlvbnxBcnJheXxEYXRhUXVlcnl8RGF0YVRhYmxlfSBwYXlsb2FkIFNvdXJjZSBvZiBkYXRhXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgc2V0RGF0YShwYXlsb2FkOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAocGF5bG9hZCBpbnN0YW5jZW9mIERhdGFRdWVyeSkge1xuICAgICAgY29uc29sZS5sb2coYFtsYXZhLmpzXSBTZW5kaW5nIERhdGFRdWVyeSBmb3IgJHt0aGlzLnV1aWR9YCk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcGF5bG9hZC5zZW5kKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGBbbGF2YS5qc10gUmVzcG9uc2UgcmVjZWl2ZWQ6YCwgcmVzcG9uc2UpO1xuXG4gICAgICB0aGlzLmRhdGEgPSByZXNwb25zZS5nZXREYXRhVGFibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhID0gY3JlYXRlRGF0YVRhYmxlKHBheWxvYWQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGEgaW5zdGFuY2VvZiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRGF0YUVycm9yKFxuICAgICAgICBgVGhlcmUgd2FzIGEgZXJyb3Igc2V0dGluZyB0aGUgZGF0YSBmb3IgJHt0aGlzLnV1aWR9YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhgW2xhdmEuanNdIERhdGEgc2V0IGZvciAke3RoaXMudXVpZH1gLCB0aGlzLmRhdGEpO1xuXG4gICAgaWYgKHBheWxvYWQuZm9ybWF0cykge1xuICAgICAgdGhpcy5hcHBseUZvcm1hdHMocGF5bG9hZC5mb3JtYXRzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIGZvcm1hdHMgdG8gdGhlIERhdGFUYWJsZVxuICAgKi9cbiAgcHVibGljIGFwcGx5Rm9ybWF0cyhmb3JtYXRzPzogRm9ybWF0dGVyW10pOiB2b2lkIHtcbiAgICBpZiAoZm9ybWF0cykge1xuICAgICAgdGhpcy5mb3JtYXRzID0gZm9ybWF0cztcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGZvcm1hdCBvZiB0aGlzLmZvcm1hdHMpIHtcbiAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyB3aW5kb3cuZ29vZ2xlLnZpc3VhbGl6YXRpb25bZm9ybWF0LnR5cGVdKFxuICAgICAgICBmb3JtYXQub3B0aW9uc1xuICAgICAgKTtcblxuICAgICAgY29uc29sZS5sb2coYFtsYXZhLmpzXSBGb3JtYXR0aW5nIGRhdGEgZm9yICR7dGhpcy51dWlkfS5gKTtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgW2xhdmEuanNdIEZvcm1hdHRpbmcgY29sdW1uIFske2Zvcm1hdC5pbmRleH1dIHdpdGg6YCxcbiAgICAgICAgZm9ybWF0XG4gICAgICApO1xuXG4gICAgICBmb3JtYXR0ZXIuZm9ybWF0KHRoaXMuZGF0YSwgZm9ybWF0LmluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoIGV2ZW50IGVtaXR0ZXJzIG9udG8gdGhlIGdvb2dsZSBjaGFydCB0byByZWxheSB0aGUgZXZlbnRzXG4gICAqIGZvcndhcmQgb250byB0aGUgbGF2YWNoYXJ0LlxuICAgKlxuICAgKiBUaGUgR29vZ2xlIENoYXJ0IGFuZCBEYXRhVGFibGUgb2JqZWN0cyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgbGlzdGVuZXJcbiAgICogY2FsbGJhY2sgZm9yIGludGVyYWN0aW9uLlxuICAgKi9cbiAgcHJvdGVjdGVkIGF0dGFjaEV2ZW50UmVsYXlzKCk6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50cyA9IFtcInJlYWR5XCIsIFwic2VsZWN0XCIsIFwiZXJyb3JcIiwgXCJvbm1vdXNlb3ZlclwiLCBcIm9ubW91c2VvdXRcIl07XG5cbiAgICBmb3IgKGNvbnN0IGV2ZW50IGluIGV2ZW50cykge1xuICAgICAgd2luZG93Lmdvb2dsZS52aXN1YWxpemF0aW9uLmV2ZW50cy5hZGRMaXN0ZW5lcih0aGlzLmdjaGFydCwgZXZlbnQsICgpID0+XG4gICAgICAgIHRoaXMuZW1pdChldmVudCwgdGhpcy5nY2hhcnQsIHRoaXMuZGF0YSlcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBWaXpQcm9wcyB9IGZyb20gXCIuL3R5cGVzL2NoYXJ0XCI7XHJcbmltcG9ydCB7IFN1cHBvcnRlZENoYXJ0cyB9IGZyb20gXCIuL3R5cGVzL3N0cmluZ3NcIjtcclxuXHJcbnR5cGUgVmlzdWFsaXphdGlvblByb3BlcnR5RGljdCA9IHtcclxuICBbSyBpbiBTdXBwb3J0ZWRDaGFydHNdOiBWaXpQcm9wcztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBBbm5vdGF0aW9uQ2hhcnQ6IHtcclxuICAgIGNsYXNzOiBcIkFubm90YXRpb25DaGFydFwiLFxyXG4gICAgcGFja2FnZTogXCJhbm5vdGF0aW9uY2hhcnRcIixcclxuICAgIHZlcnNpb246IDFcclxuICB9LFxyXG4gIEFyZWFDaGFydDoge1xyXG4gICAgY2xhc3M6IFwiQXJlYUNoYXJ0XCIsXHJcbiAgICBwYWNrYWdlOiBcImNvcmVjaGFydFwiLFxyXG4gICAgdmVyc2lvbjogMVxyXG4gIH0sXHJcbiAgQmFyQ2hhcnQ6IHtcclxuICAgIGNsYXNzOiBcIkJhckNoYXJ0XCIsXHJcbiAgICBwYWNrYWdlOiBcImNvcmVjaGFydFwiLFxyXG4gICAgdmVyc2lvbjogMVxyXG4gIH0sXHJcbiAgQnViYmxlQ2hhcnQ6IHtcclxuICAgIGNsYXNzOiBcIkJ1YmJsZUNoYXJ0XCIsXHJcbiAgICBwYWNrYWdlOiBcImNvcmVjaGFydFwiLFxyXG4gICAgdmVyc2lvbjogMVxyXG4gIH0sXHJcbiAgQ2FsZW5kYXJDaGFydDoge1xyXG4gICAgY2xhc3M6IFwiQ2FsZW5kYXJcIixcclxuICAgIHBhY2thZ2U6IFwiY2FsZW5kYXJcIixcclxuICAgIHZlcnNpb246IDEuMVxyXG4gIH0sXHJcbiAgQ2FuZGxlc3RpY2tDaGFydDoge1xyXG4gICAgY2xhc3M6IFwiQ2FuZGxlc3RpY2tDaGFydFwiLFxyXG4gICAgcGFja2FnZTogXCJjb3JlY2hhcnRcIixcclxuICAgIHZlcnNpb246IDFcclxuICB9LFxyXG4gIENvbHVtbkNoYXJ0OiB7XHJcbiAgICBjbGFzczogXCJDb2x1bW5DaGFydFwiLFxyXG4gICAgcGFja2FnZTogXCJjb3JlY2hhcnRcIixcclxuICAgIHZlcnNpb246IDFcclxuICB9LFxyXG4gIENvbWJvQ2hhcnQ6IHtcclxuICAgIGNsYXNzOiBcIkNvbWJvQ2hhcnRcIixcclxuICAgIHBhY2thZ2U6IFwiY29yZWNoYXJ0XCIsXHJcbiAgICB2ZXJzaW9uOiAxXHJcbiAgfSxcclxuICBEb251dENoYXJ0OiB7XHJcbiAgICBjbGFzczogXCJQaWVDaGFydFwiLFxyXG4gICAgcGFja2FnZTogXCJjb3JlY2hhcnRcIixcclxuICAgIHZlcnNpb246IDFcclxuICB9LFxyXG4gIEdhbnR0Q2hhcnQ6IHtcclxuICAgIGNsYXNzOiBcIkdhbnR0XCIsXHJcbiAgICBwYWNrYWdlOiBcImdhbnR0XCIsXHJcbiAgICB2ZXJzaW9uOiAxXHJcbiAgfSxcclxuICBHYXVnZUNoYXJ0OiB7XHJcbiAgICBjbGFzczogXCJHYXVnZVwiLFxyXG4gICAgcGFja2FnZTogXCJnYXVnZVwiLFxyXG4gICAgdmVyc2lvbjogMVxyXG4gIH0sXHJcbiAgR2VvQ2hhcnQ6IHtcclxuICAgIGNsYXNzOiBcIkdlb0NoYXJ0XCIsXHJcbiAgICBwYWNrYWdlOiBcImdlb2NoYXJ0XCIsXHJcbiAgICB2ZXJzaW9uOiAxXHJcbiAgfSxcclxuICBIaXN0b2dyYW1DaGFydDoge1xyXG4gICAgY2xhc3M6IFwiSGlzdG9ncmFtXCIsXHJcbiAgICBwYWNrYWdlOiBcImNvcmVjaGFydFwiLFxyXG4gICAgdmVyc2lvbjogMVxyXG4gIH0sXHJcbiAgTGluZUNoYXJ0OiB7XHJcbiAgICBjbGFzczogXCJMaW5lQ2hhcnRcIixcclxuICAgIHBhY2thZ2U6IFwiY29yZWNoYXJ0XCIsXHJcbiAgICB2ZXJzaW9uOiAxXHJcbiAgfSxcclxuICBQaWVDaGFydDoge1xyXG4gICAgY2xhc3M6IFwiUGllQ2hhcnRcIixcclxuICAgIHBhY2thZ2U6IFwiY29yZWNoYXJ0XCIsXHJcbiAgICB2ZXJzaW9uOiAxXHJcbiAgfSxcclxuICBTYW5rZXlDaGFydDoge1xyXG4gICAgY2xhc3M6IFwiU2Fua2V5XCIsXHJcbiAgICBwYWNrYWdlOiBcInNhbmtleVwiLFxyXG4gICAgdmVyc2lvbjogMVxyXG4gIH0sXHJcbiAgU2NhdHRlckNoYXJ0OiB7XHJcbiAgICBjbGFzczogXCJTY2F0dGVyQ2hhcnRcIixcclxuICAgIHBhY2thZ2U6IFwiY29yZWNoYXJ0XCIsXHJcbiAgICB2ZXJzaW9uOiAxXHJcbiAgfSxcclxuICBTdGVwcGVkQXJlYUNoYXJ0OiB7XHJcbiAgICBjbGFzczogXCJTdGVwcGVkQXJlYUNoYXJ0XCIsXHJcbiAgICBwYWNrYWdlOiBcImNvcmVjaGFydFwiLFxyXG4gICAgdmVyc2lvbjogMVxyXG4gIH0sXHJcbiAgVGFibGVDaGFydDoge1xyXG4gICAgY2xhc3M6IFwiVGFibGVcIixcclxuICAgIHBhY2thZ2U6IFwidGFibGVcIixcclxuICAgIHZlcnNpb246IDFcclxuICB9LFxyXG4gIFRpbWVsaW5lQ2hhcnQ6IHtcclxuICAgIGNsYXNzOiBcIlRpbWVsaW5lXCIsXHJcbiAgICBwYWNrYWdlOiBcInRpbWVsaW5lXCIsXHJcbiAgICB2ZXJzaW9uOiAxXHJcbiAgfSxcclxuICBUcmVlTWFwQ2hhcnQ6IHtcclxuICAgIGNsYXNzOiBcIlRyZWVNYXBcIixcclxuICAgIHBhY2thZ2U6IFwidHJlZW1hcFwiLFxyXG4gICAgdmVyc2lvbjogMVxyXG4gIH0sXHJcbiAgV29yZFRyZWVDaGFydDoge1xyXG4gICAgY2xhc3M6IFwiV29yZFRyZWVcIixcclxuICAgIHBhY2thZ2U6IFwid29yZHRyZWVcIixcclxuICAgIHZlcnNpb246IDFcclxuICB9XHJcbn0gYXMgVmlzdWFsaXphdGlvblByb3BlcnR5RGljdDtcclxuIiwiaW1wb3J0IExhdmFKcyBmcm9tIFwiLi9MYXZhSnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhdmFKcztcclxuIiwiaW1wb3J0IHsgZGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHRPcHRpb25zIH07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdHlwZSBvZiBvYmplY3QsIHdpdGggYSBjYXBpdGFsIGZpcnN0IGxldHRlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUob2JqZWN0OiBhbnkpOiBzdHJpbmcge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkuc2xpY2UoOCwgLTEpO1xufVxuXG4vKipcbiAqIFNpbXBsZSBQcm9taXNlIGZvciB0aGUgRE9NIHRvIGJlIHJlYWR5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZG9tTG9hZGVkKCk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8XG4gICAgICBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCJcbiAgICApIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gcmVzb2x2ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBNZXRob2QgZm9yIGF0dGFjaGluZyBldmVudHMgdG8gb2JqZWN0cy5cbiAqXG4gKiBAbGluayBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMTUwMTM5IENyZWRpdCB0byBBbGV4IFYuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudChcbiAgdGFyZ2V0OiBhbnksXG4gIHR5cGU6IHN0cmluZyxcbiAgY2FsbGJhY2s6IEZ1bmN0aW9uLFxuICB1c2VDYXB0dXJlID0gZmFsc2Vcbik6IHZvaWQge1xuICBpZiAodGFyZ2V0ID09PSBudWxsIHx8IHR5cGVvZiB0YXJnZXQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSk7XG4gIH0gZWxzZSBpZiAodGFyZ2V0LmF0dGFjaEV2ZW50KSB7XG4gICAgdGFyZ2V0LmF0dGFjaEV2ZW50KFwib25cIiArIHR5cGUsIGNhbGxiYWNrKTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXRbXCJvblwiICsgdHlwZV0gPSBjYWxsYmFjaztcbiAgfVxufVxuIiwiaW1wb3J0IHsgTGF2YUpzT3B0aW9ucyB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gIGF1dG9SdW46IGZhbHNlLFxyXG4gIGRhdGV0aW1lRm9ybWF0OiBcIlwiLFxyXG4gIGRlYm91bmNlVGltZW91dDogMjUwLFxyXG4gIGxvY2FsZTogXCJlblwiLFxyXG4gIG1hcHNBcGlLZXk6IFwiXCIsXHJcbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICB0aW1lem9uZTogXCJBbWVyaWNhL0xvc19BbmdlbGVzXCJcclxufSBhcyBMYXZhSnNPcHRpb25zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9