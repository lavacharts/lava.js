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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src */ \"./src/index.ts\");\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/lib */ \"./src/lib/index.ts\");\n/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_lib__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n/**\r\n * Create a new instance and attach to window.\r\n */\r\nwindow.lava = new _src__WEBPACK_IMPORTED_MODULE_0___default.a();\r\n\r\n/**\r\n * If LavaJs was loaded from Lavacharts, then window.lavacharts will\r\n * be defined with a JSON object of the options set within Lavacharts.\r\n */\r\nif (typeof window.lavacharts !== \"undefined\") {\r\n  window.lava.configure(window.lavacharts.options);\r\n}\r\n\r\n/**\r\n * If the module is getting ran from Lavacharts, then autoRun\r\n * will be true and once the DOM is ready, rendering will begin.\r\n *\r\n * If the module is ran as a JS library, then auto_run defaults\r\n * to false so the user can setup the charts and call .run()\r\n */\r\nif (window.lava.autorun) {\r\n  Object(_src_lib__WEBPACK_IMPORTED_MODULE_1__[\"domLoaded\"])().then(() => {\r\n    window.lava.run();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar R = typeof Reflect === 'object' ? Reflect : null\nvar ReflectApply = R && typeof R.apply === 'function'\n  ? R.apply\n  : function ReflectApply(target, receiver, args) {\n    return Function.prototype.apply.call(target, receiver, args);\n  }\n\nvar ReflectOwnKeys\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target)\n      .concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\n\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\n\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n}\n\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\nmodule.exports = EventEmitter;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nvar defaultMaxListeners = 10;\n\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function() {\n    return defaultMaxListeners;\n  },\n  set: function(arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n    defaultMaxListeners = arg;\n  }\n});\n\nEventEmitter.init = function() {\n\n  if (this._events === undefined ||\n      this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n\n  this._maxListeners = this._maxListeners || undefined;\n};\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n  this._maxListeners = n;\n  return this;\n};\n\nfunction $getMaxListeners(that) {\n  if (that._maxListeners === undefined)\n    return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\n\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return $getMaxListeners(this);\n};\n\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n  var doError = (type === 'error');\n\n  var events = this._events;\n  if (events !== undefined)\n    doError = (doError && events.error === undefined);\n  else if (!doError)\n    return false;\n\n  // If there is no 'error' event listener then throw.\n  if (doError) {\n    var er;\n    if (args.length > 0)\n      er = args[0];\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    }\n    // At least give some kind of context to the user\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n\n  var handler = events[type];\n\n  if (handler === undefined)\n    return false;\n\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n    for (var i = 0; i < len; ++i)\n      ReflectApply(listeners[i], this, args);\n  }\n\n  return true;\n};\n\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n\n  events = target._events;\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type,\n                  listener.listener ? listener.listener : listener);\n\n      // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n      events = target._events;\n    }\n    existing = events[type];\n  }\n\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] =\n        prepend ? [listener, existing] : [existing, listener];\n      // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    }\n\n    // Check for listener leak\n    m = $getMaxListeners(target);\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true;\n      // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n      var w = new Error('Possible EventEmitter memory leak detected. ' +\n                          existing.length + ' ' + String(type) + ' listeners ' +\n                          'added. Use emitter.setMaxListeners() to ' +\n                          'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n\n  return target;\n}\n\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.prependListener =\n    function prependListener(type, listener) {\n      return _addListener(this, type, listener, true);\n    };\n\nfunction onceWrapper() {\n  var args = [];\n  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    ReflectApply(this.listener, this.target, args);\n  }\n}\n\nfunction _onceWrap(target, type, listener) {\n  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\n\nEventEmitter.prototype.once = function once(type, listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\n\nEventEmitter.prototype.prependOnceListener =\n    function prependOnceListener(type, listener) {\n      if (typeof listener !== 'function') {\n        throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n      }\n      this.prependListener(type, _onceWrap(this, type, listener));\n      return this;\n    };\n\n// Emits a 'removeListener' event if and only if the listener was removed.\nEventEmitter.prototype.removeListener =\n    function removeListener(type, listener) {\n      var list, events, position, i, originalListener;\n\n      if (typeof listener !== 'function') {\n        throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n      }\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      list = events[type];\n      if (list === undefined)\n        return this;\n\n      if (list === listener || list.listener === listener) {\n        if (--this._eventsCount === 0)\n          this._events = Object.create(null);\n        else {\n          delete events[type];\n          if (events.removeListener)\n            this.emit('removeListener', type, list.listener || listener);\n        }\n      } else if (typeof list !== 'function') {\n        position = -1;\n\n        for (i = list.length - 1; i >= 0; i--) {\n          if (list[i] === listener || list[i].listener === listener) {\n            originalListener = list[i].listener;\n            position = i;\n            break;\n          }\n        }\n\n        if (position < 0)\n          return this;\n\n        if (position === 0)\n          list.shift();\n        else {\n          spliceOne(list, position);\n        }\n\n        if (list.length === 1)\n          events[type] = list[0];\n\n        if (events.removeListener !== undefined)\n          this.emit('removeListener', type, originalListener || listener);\n      }\n\n      return this;\n    };\n\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n\nEventEmitter.prototype.removeAllListeners =\n    function removeAllListeners(type) {\n      var listeners, events, i;\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      // not listening for removeListener, no need to emit\n      if (events.removeListener === undefined) {\n        if (arguments.length === 0) {\n          this._events = Object.create(null);\n          this._eventsCount = 0;\n        } else if (events[type] !== undefined) {\n          if (--this._eventsCount === 0)\n            this._events = Object.create(null);\n          else\n            delete events[type];\n        }\n        return this;\n      }\n\n      // emit removeListener for all listeners on all events\n      if (arguments.length === 0) {\n        var keys = Object.keys(events);\n        var key;\n        for (i = 0; i < keys.length; ++i) {\n          key = keys[i];\n          if (key === 'removeListener') continue;\n          this.removeAllListeners(key);\n        }\n        this.removeAllListeners('removeListener');\n        this._events = Object.create(null);\n        this._eventsCount = 0;\n        return this;\n      }\n\n      listeners = events[type];\n\n      if (typeof listeners === 'function') {\n        this.removeListener(type, listeners);\n      } else if (listeners !== undefined) {\n        // LIFO order\n        for (i = listeners.length - 1; i >= 0; i--) {\n          this.removeListener(type, listeners[i]);\n        }\n      }\n\n      return this;\n    };\n\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n\n  if (events === undefined)\n    return [];\n\n  var evlistener = events[type];\n  if (evlistener === undefined)\n    return [];\n\n  if (typeof evlistener === 'function')\n    return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n\n  return unwrap ?\n    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\n\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\n\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\n\nEventEmitter.prototype.listenerCount = listenerCount;\nfunction listenerCount(type) {\n  var events = this._events;\n\n  if (events !== undefined) {\n    var evlistener = events[type];\n\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n\n  return 0;\n}\n\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\n\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n  for (var i = 0; i < n; ++i)\n    copy[i] = arr[i];\n  return copy;\n}\n\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++)\n    list[index] = list[index + 1];\n  list.pop();\n}\n\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n  return ret;\n}\n\n\n//# sourceURL=webpack:///./node_modules/events/events.js?");

/***/ }),

/***/ "./src/Chart.ts":
/*!**********************!*\
  !*** ./src/Chart.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Renderable_1 = __importDefault(__webpack_require__(/*! ./Renderable */ \"./src/Renderable.ts\"));\r\nfunction makeChartFactory(container) {\r\n    return type => new window.google.visualization[type](container);\r\n}\r\nclass Chart extends Renderable_1.default {\r\n    constructor(payload) {\r\n        super(payload);\r\n        this.png = Boolean(payload.png);\r\n    }\r\n    _preDraw() {\r\n        const chartFactory = makeChartFactory(this.container);\r\n        this.googleChart = chartFactory(this.class);\r\n    }\r\n    _postDraw() {\r\n        if (this.png) {\r\n            this.drawPng();\r\n        }\r\n    }\r\n    drawPng() {\r\n        const img = document.createElement(\"img\");\r\n        img.src = this.googleChart.getImageURI();\r\n        if (this.container) {\r\n            this.container.innerHTML = \"\";\r\n            this.container.appendChild(img);\r\n        }\r\n    }\r\n}\r\nexports.default = Chart;\r\n\n\n//# sourceURL=webpack:///./src/Chart.ts?");

/***/ }),

/***/ "./src/Dashboard.ts":
/*!**************************!*\
  !*** ./src/Dashboard.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Renderable_1 = __importDefault(__webpack_require__(/*! ./Renderable */ \"./src/Renderable.ts\"));\r\nclass Dashboard extends Renderable_1.default {\r\n    constructor(json) {\r\n        json.type = \"Dashboard\";\r\n        super(json);\r\n        this.googleChart = new window.google.visualization.Dashboard(this\r\n            .container);\r\n        this.bindings = json.bindings;\r\n    }\r\n}\r\nexports.default = Dashboard;\r\n\n\n//# sourceURL=webpack:///./src/Dashboard.ts?");

/***/ }),

/***/ "./src/DataQuery.ts":
/*!**************************!*\
  !*** ./src/DataQuery.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Errors_1 = __webpack_require__(/*! ./Errors */ \"./src/Errors.ts\");\r\nclass DataQuery {\r\n    constructor(url, opts, transformer) {\r\n        this.url = url;\r\n        this.opts = { sendMethod: \"auto\" };\r\n        this.transformer = (query) => query;\r\n        if (transformer) {\r\n            this.transformer = transformer;\r\n        }\r\n        if (opts) {\r\n            this.opts = opts;\r\n        }\r\n    }\r\n    static create(payload) {\r\n        if (!payload.url) {\r\n            throw new Errors_1.DataError('\"url\" is a mandatory parameter for creating a DataQuery.');\r\n        }\r\n        const query = new DataQuery(payload.url);\r\n        if (typeof payload.opts === \"object\") {\r\n            query.opts = payload.opts;\r\n        }\r\n        if (typeof payload.transformer === \"function\") {\r\n            query.transformer = payload.transformer;\r\n        }\r\n        return query;\r\n    }\r\n    send() {\r\n        const query = new window.google.visualization.Query(this.url, this.opts);\r\n        return new Promise((resolve, reject) => {\r\n            this.transformer(query).send(response => {\r\n                if (response.isError()) {\r\n                    reject(response);\r\n                }\r\n                resolve(response);\r\n            });\r\n        });\r\n    }\r\n}\r\nexports.default = DataQuery;\r\n\n\n//# sourceURL=webpack:///./src/DataQuery.ts?");

/***/ }),

/***/ "./src/Errors.ts":
/*!***********************!*\
  !*** ./src/Errors.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass LavaJsError extends Error {\r\n    constructor(message = \"There was an error\") {\r\n        super(message);\r\n    }\r\n}\r\nexports.LavaJsError = LavaJsError;\r\nclass InvalidCallback extends LavaJsError {\r\n    constructor(callback) {\r\n        super(`[lava.js] \"${typeof callback}\" is not a valid callback.`);\r\n    }\r\n}\r\nexports.InvalidCallback = InvalidCallback;\r\nclass RenderableNotFound extends LavaJsError {\r\n    constructor(label) {\r\n        super(`[lava.js] A renderable with the label \"${label}\" was not found.`);\r\n    }\r\n}\r\nexports.RenderableNotFound = RenderableNotFound;\r\nclass DataError extends LavaJsError {\r\n    constructor(msg) {\r\n        super(msg);\r\n    }\r\n}\r\nexports.DataError = DataError;\r\nclass ElementIdNotFound extends LavaJsError {\r\n    constructor(elemId) {\r\n        super(`[lava.js] DOM node where id=\"${elemId}\" was not found.`);\r\n    }\r\n}\r\nexports.ElementIdNotFound = ElementIdNotFound;\r\n\n\n//# sourceURL=webpack:///./src/Errors.ts?");

/***/ }),

/***/ "./src/GoogleLoader.ts":
/*!*****************************!*\
  !*** ./src/GoogleLoader.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass GoogleLoader {\r\n    constructor(options) {\r\n        this.options = options;\r\n        this.API_VERSION = \"current\";\r\n        this.LOADER_URL = \"https://www.gstatic.com/charts/loader.js\";\r\n        this.packages = new Set();\r\n    }\r\n    get isLoaded() {\r\n        return typeof window.google !== \"undefined\";\r\n    }\r\n    get googleLoaderInPage() {\r\n        const scripts = document.getElementsByTagName(\"script\");\r\n        for (const script of Array.from(scripts)) {\r\n            if (script.src === this.LOADER_URL) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    get config() {\r\n        const config = {\r\n            language: this.options.locale || \"en\",\r\n            packages: Array.from(this.packages)\r\n        };\r\n        if (this.options.mapsApiKey !== \"\") {\r\n            config.mapsApiKey = this.options.mapsApiKey;\r\n        }\r\n        return config;\r\n    }\r\n    addPackage(pkgs) {\r\n        this.packages.add(pkgs);\r\n    }\r\n    async loadGoogle() {\r\n        console.log(\"[lava.js] Resolving Google...\");\r\n        if (this.googleLoaderInPage === false) {\r\n            console.log(\"[lava.js] Static loader not found, appending to head\");\r\n            await this.addGoogleScriptToHead();\r\n        }\r\n        return new Promise(resolve => {\r\n            console.log(\"[lava.js] Static loader found, initializing window.google\");\r\n            window.google.charts.load(this.API_VERSION, this.config);\r\n            console.log(\"[lava.js] Loaded Google with config:\", this.config);\r\n            window.google.charts.setOnLoadCallback(() => {\r\n                resolve(window.google);\r\n            });\r\n        });\r\n    }\r\n    addGoogleScriptToHead() {\r\n        return new Promise(resolve => {\r\n            const script = document.createElement(\"script\");\r\n            script.type = \"text/javascript\";\r\n            script.async = true;\r\n            script.src = this.LOADER_URL;\r\n            script.onload = script.onreadystatechange = (event) => {\r\n                event = event || window.event;\r\n                if (event.type === \"load\" ||\r\n                    /loaded|complete/.test(script.readyState)) {\r\n                    script.onload = script.onreadystatechange = null;\r\n                    resolve();\r\n                }\r\n            };\r\n            document.head.appendChild(script);\r\n        });\r\n    }\r\n}\r\nexports.default = GoogleLoader;\r\n\n\n//# sourceURL=webpack:///./src/GoogleLoader.ts?");

/***/ }),

/***/ "./src/LavaJs.ts":
/*!***********************!*\
  !*** ./src/LavaJs.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Chart_1 = __importDefault(__webpack_require__(/*! ./Chart */ \"./src/Chart.ts\"));\r\nconst Dashboard_1 = __importDefault(__webpack_require__(/*! ./Dashboard */ \"./src/Dashboard.ts\"));\r\nconst DataQuery_1 = __importDefault(__webpack_require__(/*! ./DataQuery */ \"./src/DataQuery.ts\"));\r\nconst Errors_1 = __webpack_require__(/*! ./Errors */ \"./src/Errors.ts\");\r\nconst GoogleLoader_1 = __importDefault(__webpack_require__(/*! ./GoogleLoader */ \"./src/GoogleLoader.ts\"));\r\nconst lib_1 = __webpack_require__(/*! ./lib */ \"./src/lib/index.ts\");\r\nclass LavaJs {\r\n    constructor(options) {\r\n        this.options = lib_1.defaultOptions;\r\n        this.volcano = new Map();\r\n        if (options)\r\n            this.configure(options);\r\n        this.loader = new GoogleLoader_1.default(this.options);\r\n    }\r\n    get autorun() {\r\n        return typeof this.options.autoRun === \"undefined\"\r\n            ? true\r\n            : this.options.autoRun;\r\n    }\r\n    configure(options) {\r\n        this.options = Object.assign(this.options, options);\r\n    }\r\n    async init(renderables) {\r\n        console.log(\"[lava.js] Inititalizing...\");\r\n        if (renderables) {\r\n            if (renderables instanceof Array) {\r\n                renderables.forEach(this.store, this);\r\n            }\r\n            if (typeof renderables === \"object\") {\r\n                this.store(renderables);\r\n            }\r\n        }\r\n        if (this.loader.isLoaded === false) {\r\n            await this.loader.loadGoogle();\r\n        }\r\n    }\r\n    async run() {\r\n        console.group(`[lava.js] v${LavaJs.VERSION}`);\r\n        console.log(\"loaded options\", this.options);\r\n        this.attachRedrawHandler();\r\n        await this.init();\r\n        console.log(\"google is ready\", window.google);\r\n        await this.renderAll();\r\n        if (typeof this.readyCallback === \"function\") {\r\n            console.log(\"ready!\");\r\n            this.readyCallback();\r\n        }\r\n        console.groupEnd();\r\n    }\r\n    renderAll() {\r\n        const promises = [];\r\n        this.volcano.forEach(renderable => {\r\n            console.log(`[lava.js] Rendering ${renderable.uuid}`);\r\n            promises.push(renderable.run());\r\n        });\r\n        return promises;\r\n    }\r\n    query(url) {\r\n        if (typeof url === \"string\") {\r\n            return new DataQuery_1.default(url);\r\n        }\r\n        else {\r\n            return DataQuery_1.default.create(url);\r\n        }\r\n    }\r\n    create(payload) {\r\n        console.log(`[lava.js] Creating a new ${payload.type}:`, payload);\r\n        if (payload.type === \"Dashboard\") {\r\n            return new Dashboard_1.default(payload);\r\n        }\r\n        return new Chart_1.default(payload);\r\n    }\r\n    store(renderable) {\r\n        const newRenderable = this.create(renderable);\r\n        console.log(`[lava.js] Storing ${newRenderable.uuid}`);\r\n        this.loader.addPackage(newRenderable.package);\r\n        this.volcano.set(newRenderable.label, newRenderable);\r\n    }\r\n    get(label = \"\") {\r\n        if (this.volcano.has(label) === false) {\r\n            throw new Errors_1.RenderableNotFound(label);\r\n        }\r\n        return this.volcano.get(label);\r\n    }\r\n    ready(callback) {\r\n        if (typeof callback !== \"function\") {\r\n            throw new Errors_1.InvalidCallback(callback);\r\n        }\r\n        this.readyCallback = callback.bind(this);\r\n    }\r\n    async loadData(label, payload) {\r\n        const chart = this.get(label);\r\n        if (chart) {\r\n            await chart.setData(payload);\r\n            chart.draw();\r\n            return {\r\n                data: chart.data,\r\n                chart: chart.googleChart,\r\n                options: chart.options\r\n            };\r\n        }\r\n        return false;\r\n    }\r\n    async loadOptions(label, payload) {\r\n        const chart = this.get(label);\r\n        if (chart) {\r\n            chart.options = Object.assign(chart.options, payload);\r\n            chart.draw();\r\n            return {\r\n                data: chart.data,\r\n                chart: chart.googleChart,\r\n                options: chart.options\r\n            };\r\n        }\r\n        return false;\r\n    }\r\n    redrawAll() {\r\n        if (this.volcano.size === 0) {\r\n            console.log(`[lava.js] Nothing to redraw.`);\r\n            return false;\r\n        }\r\n        console.log(`[lava.js] Redrawing ${this.volcano.size} renderables.`);\r\n        this.volcano.forEach(renderable => {\r\n            console.log(`[lava.js] Redrawing ${renderable.uuid}`);\r\n            renderable.draw();\r\n        });\r\n        return true;\r\n    }\r\n    attachRedrawHandler() {\r\n        if (this.options.responsive === true) {\r\n            let debounced;\r\n            lib_1.addEvent(window, \"resize\", () => {\r\n                clearTimeout(debounced);\r\n                debounced = setTimeout(() => {\r\n                    console.log(\"[lava.js] Window re-sized, redrawing...\");\r\n                    this.redrawAll();\r\n                }, this.options.debounceTimeout);\r\n            });\r\n        }\r\n    }\r\n}\r\nexports.default = LavaJs;\r\nLavaJs.VERSION = \"4.0.0-beta3\";\r\n\n\n//# sourceURL=webpack:///./src/LavaJs.ts?");

/***/ }),

/***/ "./src/Renderable.ts":
/*!***************************!*\
  !*** ./src/Renderable.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst events_1 = __importDefault(__webpack_require__(/*! events */ \"./node_modules/events/events.js\"));\r\nconst DataQuery_1 = __importDefault(__webpack_require__(/*! ./DataQuery */ \"./src/DataQuery.ts\"));\r\nconst Errors_1 = __webpack_require__(/*! ./Errors */ \"./src/Errors.ts\");\r\nconst lib_1 = __webpack_require__(/*! ./lib */ \"./src/lib/index.ts\");\r\nconst VisualizationProps_1 = __importDefault(__webpack_require__(/*! ./VisualizationProps */ \"./src/VisualizationProps.ts\"));\r\nclass Renderable extends events_1.default {\r\n    constructor(json) {\r\n        super();\r\n        this.type = json.type;\r\n        this.label = json.label;\r\n        this.dataSrc = json.data;\r\n        this.elementId = json.elementId;\r\n        this.container = document.getElementById(this.elementId);\r\n        if (this.container === null) {\r\n            throw new Error(`document.getElementById(\"${this.elementId}\") did not return an HTMLElement`);\r\n        }\r\n        this.options = json.options || {};\r\n        this.formats = json.formats || [];\r\n        this.class = VisualizationProps_1.default[this.type].class;\r\n        this.package = VisualizationProps_1.default[this.type].package;\r\n    }\r\n    get uuid() {\r\n        return this.type + \"::\" + this.label;\r\n    }\r\n    draw() {\r\n        if (typeof this._preDraw === \"function\") {\r\n            console.log(`[lava.js] Running ${this.uuid}._preDraw()`);\r\n            this._preDraw();\r\n        }\r\n        if (typeof this.preDraw === \"function\") {\r\n            console.log(`[lava.js] Running ${this.uuid}.preDraw()`);\r\n            this.preDraw();\r\n        }\r\n        if (!this.data) {\r\n            throw new Errors_1.DataError(`${this.uuid} Could not draw, data is ${this.data}`);\r\n        }\r\n        this.googleChart.draw(this.data, this.options);\r\n        if (typeof this._postDraw === \"function\") {\r\n            console.log(`[lava.js] Running ${this.uuid}._postDraw()`);\r\n            this._postDraw();\r\n        }\r\n        if (typeof this.postDraw === \"function\") {\r\n            console.log(`[lava.js] Running ${this.uuid}.postDraw()`);\r\n            this.postDraw();\r\n        }\r\n    }\r\n    async run() {\r\n        if (!this.container) {\r\n            throw new Errors_1.ElementIdNotFound(this.elementId);\r\n        }\r\n        await this.setData(this.dataSrc);\r\n        if (this.formats) {\r\n            this.applyFormats();\r\n        }\r\n        this.draw();\r\n    }\r\n    async setData(payload) {\r\n        if (payload instanceof DataQuery_1.default) {\r\n            console.log(`[lava.js] Sending DataQuery for ${this.uuid}`);\r\n            const response = await payload.send();\r\n            console.log(`[lava.js] Response received:`, response);\r\n            this.data = response.getDataTable();\r\n        }\r\n        else {\r\n            this.data = lib_1.createDataTable(payload);\r\n        }\r\n        if (this.data instanceof google.visualization.DataTable === false) {\r\n            throw new Errors_1.DataError(`There was a error setting the data for ${this.uuid}`);\r\n        }\r\n        console.log(`[lava.js] Data set for ${this.uuid}`, this.data);\r\n        if (payload.formats) {\r\n            this.applyFormats(payload.formats);\r\n        }\r\n    }\r\n    applyFormats(formats) {\r\n        if (formats) {\r\n            this.formats = formats;\r\n        }\r\n        for (const format of this.formats) {\r\n            const formatter = new window.google.visualization[format.type](format.options);\r\n            console.log(`[lava.js] Formatting data for ${this.uuid}.`);\r\n            console.log(`[lava.js] Formatting column [${format.index}] with:`, format);\r\n            formatter.format(this.data, format.index);\r\n        }\r\n    }\r\n}\r\nexports.default = Renderable;\r\n\n\n//# sourceURL=webpack:///./src/Renderable.ts?");

/***/ }),

/***/ "./src/VisualizationProps.ts":
/*!***********************************!*\
  !*** ./src/VisualizationProps.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = {\r\n    AnnotationChart: {\r\n        class: \"AnnotationChart\",\r\n        package: \"annotationchart\",\r\n        version: 1\r\n    },\r\n    AreaChart: {\r\n        class: \"AreaChart\",\r\n        package: \"corechart\",\r\n        version: 1\r\n    },\r\n    BarChart: {\r\n        class: \"BarChart\",\r\n        package: \"corechart\",\r\n        version: 1\r\n    },\r\n    BubbleChart: {\r\n        class: \"BubbleChart\",\r\n        package: \"corechart\",\r\n        version: 1\r\n    },\r\n    CalendarChart: {\r\n        class: \"Calendar\",\r\n        package: \"calendar\",\r\n        version: 1.1\r\n    },\r\n    CandlestickChart: {\r\n        class: \"CandlestickChart\",\r\n        package: \"corechart\",\r\n        version: 1\r\n    },\r\n    ColumnChart: {\r\n        class: \"ColumnChart\",\r\n        package: \"corechart\",\r\n        version: 1\r\n    },\r\n    ComboChart: {\r\n        class: \"ComboChart\",\r\n        package: \"corechart\",\r\n        version: 1\r\n    },\r\n    DonutChart: {\r\n        class: \"PieChart\",\r\n        package: \"corechart\",\r\n        version: 1\r\n    },\r\n    GanttChart: {\r\n        class: \"Gantt\",\r\n        package: \"gantt\",\r\n        version: 1\r\n    },\r\n    GaugeChart: {\r\n        class: \"Gauge\",\r\n        package: \"gauge\",\r\n        version: 1\r\n    },\r\n    GeoChart: {\r\n        class: \"GeoChart\",\r\n        package: \"geochart\",\r\n        version: 1\r\n    },\r\n    HistogramChart: {\r\n        class: \"Histogram\",\r\n        package: \"corechart\",\r\n        version: 1\r\n    },\r\n    LineChart: {\r\n        class: \"LineChart\",\r\n        package: \"corechart\",\r\n        version: 1\r\n    },\r\n    PieChart: {\r\n        class: \"PieChart\",\r\n        package: \"corechart\",\r\n        version: 1\r\n    },\r\n    SankeyChart: {\r\n        class: \"Sankey\",\r\n        package: \"sankey\",\r\n        version: 1\r\n    },\r\n    ScatterChart: {\r\n        class: \"ScatterChart\",\r\n        package: \"corechart\",\r\n        version: 1\r\n    },\r\n    SteppedAreaChart: {\r\n        class: \"SteppedAreaChart\",\r\n        package: \"corechart\",\r\n        version: 1\r\n    },\r\n    TableChart: {\r\n        class: \"Table\",\r\n        package: \"table\",\r\n        version: 1\r\n    },\r\n    TimelineChart: {\r\n        class: \"Timeline\",\r\n        package: \"timeline\",\r\n        version: 1\r\n    },\r\n    TreeMapChart: {\r\n        class: \"TreeMap\",\r\n        package: \"treemap\",\r\n        version: 1\r\n    },\r\n    WordTreeChart: {\r\n        class: \"WordTree\",\r\n        package: \"wordtree\",\r\n        version: 1\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/VisualizationProps.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst GoogleLoader_1 = __importDefault(__webpack_require__(/*! ./GoogleLoader */ \"./src/GoogleLoader.ts\"));\r\nexports.GoogleLoader = GoogleLoader_1.default;\r\nconst LavaJs_1 = __importDefault(__webpack_require__(/*! ./LavaJs */ \"./src/LavaJs.ts\"));\r\nexports.default = LavaJs_1.default;\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/lib/datatable.ts":
/*!******************************!*\
  !*** ./src/lib/datatable.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst _1 = __webpack_require__(/*! . */ \"./src/lib/index.ts\");\r\nfunction createDataTable(payload) {\r\n    if (_1.getType(payload) === \"Function\") {\r\n        return payload(new window.google.visualization.DataTable());\r\n    }\r\n    if (_1.getType(payload) === \"Array\") {\r\n        return window.google.visualization.arrayToDataTable(payload);\r\n    }\r\n    if (_1.getType(payload.getTableProperties) === \"Function\") {\r\n        return payload;\r\n    }\r\n    if (_1.getType(payload.data) === \"Array\") {\r\n        return window.google.visualization.data.join(new window.google.visualization.DataTable(payload.data[0]), new window.google.visualization.DataTable(payload.data[1]), payload.keys, payload.joinMethod, payload.dt1Columns, payload.dt2Columns);\r\n    }\r\n    if (_1.getType(payload.data) === \"Object\") {\r\n        payload = payload.data;\r\n    }\r\n    return new window.google.visualization.DataTable(payload);\r\n}\r\nexports.createDataTable = createDataTable;\r\n\n\n//# sourceURL=webpack:///./src/lib/datatable.ts?");

/***/ }),

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst datatable_1 = __webpack_require__(/*! ./datatable */ \"./src/lib/datatable.ts\");\r\nexports.createDataTable = datatable_1.createDataTable;\r\nconst options_1 = __webpack_require__(/*! ./options */ \"./src/lib/options.ts\");\r\nexports.defaultOptions = options_1.defaultOptions;\r\nfunction getType(object) {\r\n    return Object.prototype.toString.call(object).slice(8, -1);\r\n}\r\nexports.getType = getType;\r\nfunction domLoaded() {\r\n    return new Promise(resolve => {\r\n        if (document.readyState === \"interactive\" ||\r\n            document.readyState === \"complete\") {\r\n            resolve();\r\n        }\r\n        else {\r\n            document.addEventListener(\"DOMContentLoaded\", () => resolve);\r\n        }\r\n    });\r\n}\r\nexports.domLoaded = domLoaded;\r\nfunction addEvent(target, type, callback, useCapture = false) {\r\n    if (target === null || typeof target === \"undefined\") {\r\n        return;\r\n    }\r\n    if (target.addEventListener) {\r\n        target.addEventListener(type, callback, useCapture);\r\n    }\r\n    else if (target.attachEvent) {\r\n        target.attachEvent(\"on\" + type, callback);\r\n    }\r\n    else {\r\n        target[\"on\" + type] = callback;\r\n    }\r\n}\r\nexports.addEvent = addEvent;\r\n\n\n//# sourceURL=webpack:///./src/lib/index.ts?");

/***/ }),

/***/ "./src/lib/options.ts":
/*!****************************!*\
  !*** ./src/lib/options.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.defaultOptions = {\r\n    autoRun: true,\r\n    datetimeFormat: \"\",\r\n    debounceTimeout: 250,\r\n    locale: \"en\",\r\n    mapsApiKey: \"\",\r\n    responsive: true,\r\n    timezone: \"America/Los_Angeles\"\r\n};\r\n\n\n//# sourceURL=webpack:///./src/lib/options.ts?");

/***/ })

/******/ });