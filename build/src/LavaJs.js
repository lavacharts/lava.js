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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
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
var events_1 = __importDefault(require("events"));
var _1 = require(".");
var Chart_1 = __importDefault(require("./Chart"));
var Dashboard_1 = __importDefault(require("./Dashboard"));
var DataQuery_1 = __importDefault(require("./DataQuery"));
var DefaultOptions_1 = __importDefault(require("./DefaultOptions"));
var Errors_1 = require("./Errors");
var Renderable_1 = __importDefault(require("./Renderable"));
var Utils = __importStar(require("./Utils"));
var LavaJs = (function (_super) {
    __extends(LavaJs, _super);
    function LavaJs(options) {
        var _this = _super.call(this) || this;
        _this.packages = new Set();
        _this.volcano = new Map();
        _this.readyCallback = null;
        _this.options = DefaultOptions_1.default;
        if (options) {
            _this.options = Object.assign(_this.options, options);
        }
        return _this;
    }
    Object.defineProperty(LavaJs.prototype, "googleIsLoaded", {
        get: function () {
            return typeof window.google !== "undefined";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LavaJs.prototype, "googleLoaderInPage", {
        get: function () {
            var e_1, _a;
            var scripts = document.getElementsByTagName("script");
            try {
                for (var scripts_1 = __values(scripts), scripts_1_1 = scripts_1.next(); !scripts_1_1.done; scripts_1_1 = scripts_1.next()) {
                    var script = scripts_1_1.value;
                    if (script.src === _1.GOOGLE_LOADER_URL) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (scripts_1_1 && !scripts_1_1.done && (_a = scripts_1.return)) _a.call(scripts_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    LavaJs.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.googleIsLoaded === false)) return [3, 2];
                        return [4, this.loadGoogle()];
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
        return new DataQuery_1.default(url);
    };
    LavaJs.prototype.create = function (payload) {
        console.log("[lava.js] Creating a new " + payload.type + ":", payload);
        if (payload.type === "Dashboard") {
            return new Dashboard_1.default(payload);
        }
        return new Chart_1.default(payload);
    };
    LavaJs.prototype.store = function (renderable) {
        if (renderable instanceof Renderable_1.default === false) {
            renderable = this.create(renderable);
        }
        console.log("[lava.js] Storing " + renderable.uuid);
        this.addPackages(renderable.packages);
        this.volcano.set(renderable.label, renderable);
        return renderable;
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
    LavaJs.prototype.addPackages = function (packages) {
        if (typeof packages === "string") {
            this.packages.add(packages);
        }
        if (Utils.getType(packages) === "Array") {
            packages = new Set(packages);
            this.packages = new Set(__spread([this.packages], packages));
        }
    };
    LavaJs.prototype.loadGoogle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("[lava.js] Resolving Google...");
                        if (!!this.googleLoaderInPage) return [3, 2];
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
    LavaJs.prototype.googleChartLoader = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var config = {
                language: _this.options.locale
            };
            config.packages =
                _this.packages.size > 0 ? __spread(_this.packages) : ["corechart"];
            if (_this.options.mapsApiKey !== "") {
                config.mapsApiKey = _this.options.mapsApiKey;
            }
            console.log("[lava.js] Loading Google with config:", config);
            window.google.charts.load(LavaJs.GOOGLE_API_VERSION, config);
            window.google.charts.setOnLoadCallback(resolve);
        });
    };
    LavaJs.prototype.addGoogleScriptToHead = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        var script = document.createElement("script");
                        script.type = "text/javascript";
                        script.async = true;
                        script.src = LavaJs.GOOGLE_LOADER_URL;
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
    LavaJs.prototype.attachRedrawHandler = function () {
        var _this = this;
        if (this.options.responsive === true) {
            var debounced_1 = 0;
            Utils.addEvent(window, "resize", function () {
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
//# sourceMappingURL=LavaJs.js.map