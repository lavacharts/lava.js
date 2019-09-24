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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __importDefault(require("events"));
var Chart_1 = __importDefault(require("./Chart"));
var Dashboard_1 = __importDefault(require("./Dashboard"));
var DataQuery_1 = __importDefault(require("./DataQuery"));
var Errors_1 = __importDefault(require("./Errors"));
var Renderable_1 = __importDefault(require("./Renderable"));
var Utils_1 = __importDefault(require("./Utils"));
var LavaJs = (function (_super) {
    __extends(LavaJs, _super);
    function LavaJs(newOptions) {
        var _this = _super.call(this) || this;
        _this.options = newOptions || require("../resources/options.json");
        _this._packages = new Set();
        _this._volcano = new Map();
        _this._readyCallback = undefined;
        return _this;
    }
    Object.defineProperty(LavaJs, "VERSION", {
        get: function () {
            return "__VERSION__";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LavaJs, "GOOGLE_API_VERSION", {
        get: function () {
            return "current";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LavaJs, "GOOGLE_LOADER_URL", {
        get: function () {
            return "https://www.gstatic.com/charts/loader.js";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LavaJs, "Renderable", {
        get: function () {
            return Renderable_1.default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LavaJs, "Chart", {
        get: function () {
            return Chart_1.default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LavaJs, "Dashboard", {
        get: function () {
            return Dashboard_1.default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LavaJs, "DataQuery", {
        get: function () {
            return DataQuery_1.default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LavaJs, "Errors", {
        get: function () {
            return Errors_1.default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LavaJs.prototype, "googleIsLoaded", {
        get: function () {
            return typeof window.google !== "undefined";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LavaJs.prototype, "googleLoaderInPage", {
        get: function () {
            var scripts = document.getElementsByTagName("script");
            for (var _i = 0, scripts_1 = scripts; _i < scripts_1.length; _i++) {
                var script = scripts_1[_i];
                if (script.src === this.GOOGLE_LOADER_URL) {
                    return true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    LavaJs.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.googleIsLoaded) {
                            return [2, Promise.resolve(window.google)];
                        }
                        return [4, this._loadGoogle()];
                    case 1:
                        _a.sent();
                        console.log("[lava.js] Google is ready:");
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
                        this._attachRedrawHandler();
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
                        this._volcano.forEach(function (renderable) {
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
                        if (typeof this._readyCallback === "function") {
                            this._readyCallback();
                        }
                        return [2];
                }
            });
        });
    };
    LavaJs.prototype.query = function (url) {
        return new DataQuery_1.default(url);
    };
    LavaJs.prototype.create = function (json) {
        console.log("[lava.js] Creating a new " + json.type + ":", json);
        if (json.type === "Dashboard") {
            return new LavaJs.Dashboard(json);
        }
        return new LavaJs.Chart(json);
    };
    LavaJs.prototype.store = function (renderable) {
        if (renderable instanceof LavaJs.Renderable === false) {
            renderable = this.create(renderable);
        }
        console.log("[lava.js] Storing " + renderable.uuid);
        this._addPackages(renderable.packages);
        this._volcano.set(renderable.label, renderable);
        return renderable;
    };
    LavaJs.prototype.get = function (label) {
        if (this._volcano.has(label) === false) {
            throw new LavaJs.Errors.RenderableNotFound(label);
        }
        return this._volcano.get(label);
    };
    LavaJs.prototype.ready = function (callback) {
        if (typeof callback !== "function") {
            throw new LavaJs.Errors.InvalidCallback(callback);
        }
        this._readyCallback = callback.bind(this);
    };
    LavaJs.prototype.loadData = function (label, json, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var chart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        chart = this.get(label);
                        return [4, chart.setData(json)];
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
    LavaJs.prototype.loadOptions = function (label, json, callback) {
        var chart = this.get(label);
        chart.options = json;
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
        if (this._volcano.size === 0) {
            console.log("[lava.js] Nothing to redraw.");
            return false;
        }
        console.log("[lava.js] Redrawing " + this._volcano.size + " renderables.");
        this._volcano.forEach(function (renderable) {
            console.log("[lava.js] Redrawing " + renderable.uuid);
            renderable.draw();
        });
        return true;
    };
    LavaJs.prototype._addPackages = function (packages) {
        if (typeof packages === "string") {
            this._packages.add(packages);
        }
        if (Utils_1.default.getType(packages) === "Array") {
            packages = new Set(packages);
            this._packages = new Set(__spreadArrays([this._packages], packages));
        }
    };
    LavaJs.prototype._loadGoogle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("[lava.js] Resolving Google...");
                        if (!!this.googleLoaderInPage) return [3, 2];
                        console.log("[lava.js] Static loader not found, appending to head");
                        return [4, this._addGoogleScriptToHead()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        console.log("[lava.js] Static loader found, initializing window.google");
                        return [2, this._googleChartLoader()];
                }
            });
        });
    };
    LavaJs.prototype._googleChartLoader = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var config = {
                language: _this.options.locale
            };
            config.packages =
                _this._packages.size > 0 ? __spreadArrays(_this._packages) : ["corechart"];
            if (_this.options.maps_api_key !== "") {
                config.mapsApiKey = _this.options.maps_api_key;
            }
            console.log("[lava.js] Loading Google with config:", config);
            google.charts.load(LavaJs.GOOGLE_API_VERSION, config);
            google.charts.setOnLoadCallback(resolve);
        });
    };
    LavaJs.prototype._addGoogleScriptToHead = function () {
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
    LavaJs.prototype._attachRedrawHandler = function () {
        var _this = this;
        if (this.options.responsive === true) {
            var debounced_1 = null;
            Utils_1.default.addEvent(window, "resize", function () {
                clearTimeout(debounced_1);
                debounced_1 = setTimeout(function () {
                    console.log("[lava.js] Window re-sized, redrawing...");
                    _this.redrawAll();
                }, _this.options.debounce_timeout);
            });
        }
    };
    return LavaJs;
}(events_1.default));
exports.default = LavaJs;
//# sourceMappingURL=LavaJs.js.map