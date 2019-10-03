!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(10);t.createDataTable=o.createDataTable;const r=n(11);t.defaultOptions=r.defaultOptions,t.getType=function(e){return Object.prototype.toString.call(e).slice(8,-1)},t.domLoaded=function(){return new Promise(e=>{"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",()=>e)})},t.addEvent=function(e,t,n,o=!1){null!=e&&(e.addEventListener?e.addEventListener(t,n,o):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class o extends Error{constructor(e="There was an error"){super(e)}}t.LavaJsError=o;t.InvalidCallback=class extends o{constructor(e){super(`[lava.js] "${typeof e}" is not a valid callback.`)}};t.RenderableNotFound=class extends o{constructor(e){super(`[lava.js] A renderable with the label "${e}" was not found.`)}};t.DataError=class extends o{constructor(e){super(e)}};t.ElementIdNotFound=class extends o{constructor(e){super(`[lava.js] DOM node where id="${e}" was not found.`)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e){this.options=e,this.API_VERSION="current",this.LOADER_URL="https://www.gstatic.com/charts/loader.js",this.packages=new Set}get isLoaded(){return void 0!==window.google}get googleLoaderInPage(){const e=document.getElementsByTagName("script");for(const t of Array.from(e))if(t.src===this.LOADER_URL)return!0;return!1}get config(){const e={language:this.options.locale||"en",packages:Array.from(this.packages)};return""!==this.options.mapsApiKey&&(e.mapsApiKey=this.options.mapsApiKey),e}addPackage(e){this.packages.add(e)}async loadGoogle(){return console.log("[lava.js] Resolving Google..."),!1===this.googleLoaderInPage&&(console.log("[lava.js] Static loader not found, appending to head"),await this.addGoogleScriptToHead()),new Promise(e=>{console.log("[lava.js] Static loader found, initializing window.google"),window.google.charts.load(this.API_VERSION,this.config),console.log("[lava.js] Loaded Google with config:",this.config),window.google.charts.setOnLoadCallback(()=>{e(window.google)})})}addGoogleScriptToHead(){return new Promise(e=>{const t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=this.LOADER_URL,t.onload=t.onreadystatechange=n=>{("load"===(n=n||window.event).type||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,e())},document.head.appendChild(t)})}}},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(9)),a=o(n(4)),s=n(1),i=n(0),l=o(n(12));class c extends r.default{constructor(e){super(),this.type=e.type,this.label=e.label,this.dataSrc=e.data,this.elementId=e.elementId;const t=document.getElementById(this.elementId);if(null===t)throw new Error(`document.getElementById("${this.elementId}") did not return an HTMLElement`);this.container=t,this.options=e.options||{},this.formats=e.formats||[],this.class=l.default[this.type].class,this.package=l.default[this.type].package}get uuid(){return this.type+"::"+this.label}draw(){if("function"==typeof this._preDraw&&(console.log(`[lava.js] Running ${this.uuid}._preDraw()`),this._preDraw()),"function"==typeof this.preDraw&&(console.log(`[lava.js] Running ${this.uuid}.preDraw()`),this.preDraw()),!this.data)throw new s.DataError(`${this.uuid} Could not draw, data is ${this.data}`);this.googleChart.draw(this.data,this.options),"function"==typeof this._postDraw&&(console.log(`[lava.js] Running ${this.uuid}._postDraw()`),this._postDraw()),"function"==typeof this.postDraw&&(console.log(`[lava.js] Running ${this.uuid}.postDraw()`),this.postDraw())}async run(){if(!this.container)throw new s.ElementIdNotFound(this.elementId);await this.setData(this.dataSrc),this.formats&&this.applyFormats(),this.draw()}async setData(e){if(e instanceof a.default){console.log(`[lava.js] Sending DataQuery for ${this.uuid}`);const t=await e.send();console.log("[lava.js] Response received:",t),this.data=t.getDataTable()}else this.data=i.createDataTable(e);if(this.data instanceof google.visualization.DataTable==!1)throw new s.DataError(`There was a error setting the data for ${this.uuid}`);console.log(`[lava.js] Data set for ${this.uuid}`,this.data),e.formats&&this.applyFormats(e.formats)}applyFormats(e){e&&(this.formats=e);for(const e of this.formats){const t=new window.google.visualization[e.type](e.options);console.log(`[lava.js] Formatting data for ${this.uuid}.`),console.log(`[lava.js] Formatting column [${e.index}] with:`,e),t.format(this.data,e.index)}}}t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);class r{constructor(e,t,n){this.url=e,this.opts={sendMethod:"auto"},this.transformer=e=>e,n&&(this.transformer=n),t&&(this.opts=t)}static create(e){if(!e.url)throw new o.DataError('"url" is a mandatory parameter for creating a DataQuery.');const t=new r(e.url);return"object"==typeof e.opts&&(t.opts=e.opts),"function"==typeof e.transformer&&(t.transformer=e.transformer),t}send(){const e=new window.google.visualization.Query(this.url,this.opts);return new Promise((t,n)=>{this.transformer(e).send(e=>{e.isError()&&n(e),t(e)})})}}t.default=r},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(2));t.GoogleLoader=r.default;const a=o(n(7));t.default=a.default},function(e,t,n){"use strict";n.r(t);var o=n(5),r=n.n(o),a=n(0);window.lava=new r.a,void 0!==window.lavacharts&&window.lava.configure(window.lavacharts.options),window.lava.autorun&&Object(a.domLoaded)().then(()=>{window.lava.run()})},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(8)),a=o(n(13)),s=o(n(4)),i=n(1),l=o(n(2)),c=n(0);class u{constructor(e){this.options=c.defaultOptions,this.volcano=new Map,e&&this.configure(e),this.loader=new l.default(this.options)}get autorun(){return void 0===this.options.autoRun||this.options.autoRun}configure(e){this.options=Object.assign(this.options,e)}async init(e){console.log("[lava.js] Inititalizing..."),e&&("object"==typeof e&&this.store(e),e.length>0&&e.forEach(this.store,this)),!1===this.loader.isLoaded&&await this.loader.loadGoogle()}async run(){console.log(`[lava.js] v${u.VERSION} Running...`),console.log("[lava.js] Loading options:",this.options),this.attachRedrawHandler(),await this.init(),console.log("[lava.js] Google is ready",window.google),await this.renderAll(),"function"==typeof this.readyCallback&&(console.log("[lava.js] Ready!"),this.readyCallback())}renderAll(){const e=[];return this.volcano.forEach(t=>{console.log(`[lava.js] Rendering ${t.uuid}`),e.push(t.run())}),e}query(e){return"string"==typeof e?new s.default(e):s.default.create(e)}create(e){return console.log(`[lava.js] Creating a new ${e.type}:`,e),"Dashboard"===e.type?new a.default(e):new r.default(e)}store(e){const t=this.create(e);console.log(`[lava.js] Storing ${t.uuid}`),this.loader.addPackage(t.package),this.volcano.set(t.label,t)}get(e=""){if(!1===this.volcano.has(e))throw new i.RenderableNotFound(e);return this.volcano.get(e)}ready(e){if("function"!=typeof e)throw new i.InvalidCallback(e);this.readyCallback=e.bind(this)}async loadData(e,t){const n=this.get(e);return!!n&&(await n.setData(t),n.draw(),{data:n.data,chart:n.googleChart,options:n.options})}async loadOptions(e,t){const n=this.get(e);return!!n&&(n.options=Object.assign(n.options,t),n.draw(),{data:n.data,chart:n.googleChart,options:n.options})}redrawAll(){return 0===this.volcano.size?(console.log("[lava.js] Nothing to redraw."),!1):(console.log(`[lava.js] Redrawing ${this.volcano.size} renderables.`),this.volcano.forEach(e=>{console.log(`[lava.js] Redrawing ${e.uuid}`),e.draw()}),!0)}attachRedrawHandler(){if(!0===this.options.responsive){let e;c.addEvent(window,"resize",()=>{clearTimeout(e),e=setTimeout(()=>{console.log("[lava.js] Window re-sized, redrawing..."),this.redrawAll()},this.options.debounceTimeout)})}}}t.default=u,u.VERSION="4.0.0-beta3"},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(3));class a extends r.default{constructor(e){super(e),this.png=Boolean(e.png)}_preDraw(){const e=(t=this.container,e=>new window.google.visualization[e](t));var t;this.googleChart=e(this.class)}_postDraw(){this.png&&this.drawPng()}drawPng(){const e=document.createElement("img");e.src=this.googleChart.getImageURI(),this.container&&(this.container.innerHTML="",this.container.appendChild(e))}}t.default=a},function(e,t,n){"use strict";var o,r="object"==typeof Reflect?Reflect:null,a=r&&"function"==typeof r.apply?r.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};o=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function i(){i.init.call(this)}e.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var l=10;function c(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function u(e,t,n,o){var r,a,s,i;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(a=e._events)?(a=e._events=Object.create(null),e._eventsCount=0):(void 0!==a.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),a=e._events),s=a[t]),void 0===s)s=a[t]=n,++e._eventsCount;else if("function"==typeof s?s=a[t]=o?[n,s]:[s,n]:o?s.unshift(n):s.push(n),(r=c(e))>0&&s.length>r&&!s.warned){s.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=s.length,i=l,console&&console.warn&&console.warn(i)}return e}function d(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,a(this.listener,this.target,e))}function h(e,t,n){var o={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=d.bind(o);return r.listener=n,o.wrapFn=r,r}function p(e,t,n){var o=e._events;if(void 0===o)return[];var r=o[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):g(r,r.length)}function f(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function g(e,t){for(var n=new Array(t),o=0;o<t;++o)n[o]=e[o];return n}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return l},set:function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");l=e}}),i.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return c(this)},i.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var o="error"===e,r=this._events;if(void 0!==r)o=o&&void 0===r.error;else if(!o)return!1;if(o){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var i=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw i.context=s,i}var l=r[e];if(void 0===l)return!1;if("function"==typeof l)a(l,this,t);else{var c=l.length,u=g(l,c);for(n=0;n<c;++n)a(u[n],this,t)}return!0},i.prototype.addListener=function(e,t){return u(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return u(this,e,t,!0)},i.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,h(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,h(this,e,t)),this},i.prototype.removeListener=function(e,t){var n,o,r,a,s;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(o=this._events))return this;if(void 0===(n=o[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,a=n.length-1;a>=0;a--)if(n[a]===t||n[a].listener===t){s=n[a].listener,r=a;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(o[e]=n[0]),void 0!==o.removeListener&&this.emit("removeListener",e,s||t)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,n,o;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,a=Object.keys(n);for(o=0;o<a.length;++o)"removeListener"!==(r=a[o])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(o=t.length-1;o>=0;o--)this.removeListener(e,t[o]);return this},i.prototype.listeners=function(e){return p(this,e,!0)},i.prototype.rawListeners=function(e){return p(this,e,!1)},i.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):f.call(e,t)},i.prototype.listenerCount=f,i.prototype.eventNames=function(){return this._eventsCount>0?o(this._events):[]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);t.createDataTable=function(e){return"Function"===o.getType(e)?e(new window.google.visualization.DataTable):"Array"===o.getType(e)?window.google.visualization.arrayToDataTable(e):"Function"===o.getType(e.getTableProperties)?e:"Array"===o.getType(e.data)?window.google.visualization.data.join(new window.google.visualization.DataTable(e.data[0]),new window.google.visualization.DataTable(e.data[1]),e.keys,e.joinMethod,e.dt1Columns,e.dt2Columns):("Object"===o.getType(e.data)&&(e=e.data),new window.google.visualization.DataTable(e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions={autoRun:!0,datetimeFormat:"",debounceTimeout:250,locale:"en",mapsApiKey:"",responsive:!0,timezone:"America/Los_Angeles"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={AnnotationChart:{class:"AnnotationChart",package:"annotationchart",version:1},AreaChart:{class:"AreaChart",package:"corechart",version:1},BarChart:{class:"BarChart",package:"corechart",version:1},BubbleChart:{class:"BubbleChart",package:"corechart",version:1},CalendarChart:{class:"Calendar",package:"calendar",version:1.1},CandlestickChart:{class:"CandlestickChart",package:"corechart",version:1},ColumnChart:{class:"ColumnChart",package:"corechart",version:1},ComboChart:{class:"ComboChart",package:"corechart",version:1},DonutChart:{class:"PieChart",package:"corechart",version:1},GanttChart:{class:"Gantt",package:"gantt",version:1},GaugeChart:{class:"Gauge",package:"gauge",version:1},GeoChart:{class:"GeoChart",package:"geochart",version:1},HistogramChart:{class:"Histogram",package:"corechart",version:1},LineChart:{class:"LineChart",package:"corechart",version:1},PieChart:{class:"PieChart",package:"corechart",version:1},SankeyChart:{class:"Sankey",package:"sankey",version:1},ScatterChart:{class:"ScatterChart",package:"corechart",version:1},SteppedAreaChart:{class:"SteppedAreaChart",package:"corechart",version:1},TableChart:{class:"Table",package:"table",version:1},TimelineChart:{class:"Timeline",package:"timeline",version:1},TreeMapChart:{class:"TreeMap",package:"treemap",version:1},WordTreeChart:{class:"WordTree",package:"wordtree",version:1}}},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(3));class a extends r.default{constructor(e){e.type="Dashboard",super(e),this.googleChart=new window.google.visualization.Dashboard(this.container),this.bindings=e.bindings}}t.default=a}]);