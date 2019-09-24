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
var events_1 = __importDefault(require("events"));
var LavaJs_1 = __importDefault(require("./LavaJs"));
var Utils_1 = __importDefault(require("./Utils"));
var Renderable = (function (_super) {
    __extends(Renderable, _super);
    function Renderable(json) {
        var _this = _super.call(this) || this;
        _this.label = json.label;
        _this.type = json.type;
        _this.options = json.options;
        _this.formats = json.formats;
        _this._elementId = json.elementId || json.elemId || json.containerId;
        _this._dataSrc = json.data || json.datatable;
        _this.data = undefined;
        _this.gchart = undefined;
        _this.container = document.getElementById(_this._elementId);
        return _this;
    }
    Object.defineProperty(Renderable.prototype, "class", {
        get: function () {
            return Utils_1.default.getVizProps(this.type).class;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Renderable.prototype, "packages", {
        get: function () {
            return Utils_1.default.getVizProps(this.type).package;
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
            console.log("[lava.js] Running " + this.uuid + ".preDraw()");
            this._preDraw();
        }
        if (!this.data) {
            throw new LavaJs_1.default.Errors.DataError(this.uuid + " Could not draw, data is " + this.data);
        }
        this.gchart.draw(this.data, this.options);
        if (typeof this._postDraw === "function") {
            console.log("[lava.js] Running " + this.uuid + ".postDraw()");
            this._postDraw();
        }
    };
    Renderable.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.container) {
                            throw new LavaJs_1.default.Errors.ElementIdNotFound(this._elementId);
                        }
                        this._setup();
                        this._attachEventRelays();
                        return [4, this.setData(this._dataSrc)];
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
                        if (!(payload instanceof LavaJs_1.default.DataQuery)) return [3, 2];
                        console.log("[lava.js] Sending DataQuery for " + this.uuid);
                        return [4, payload.send()];
                    case 1:
                        response = _a.sent();
                        console.log("[lava.js] Response received:", response);
                        this.data = response.getDataTable();
                        return [3, 3];
                    case 2:
                        this.data = Utils_1.default.createDataTable(payload);
                        _a.label = 3;
                    case 3:
                        if (!this.data) {
                            throw new LavaJs_1.default.Errors.DataError("There was a error setting the data for " + this.uuid);
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
        if (formats) {
            this.formats = formats;
        }
        for (var _i = 0, _a = this.formats; _i < _a.length; _i++) {
            var format = _a[_i];
            var formatter = new google.visualization[format.type](format.options);
            console.log("[lava.js] Formatting data for " + this.uuid + ".");
            console.log("[lava.js] Formatting column [" + format.index + "] with:", format);
            formatter.format(this.data, format.index);
        }
    };
    Renderable.prototype._attachEventRelays = function () {
        var _this = this;
        var defaultEvents = [
            "ready",
            "select",
            "error",
            "onmouseover",
            "onmouseout"
        ];
        defaultEvents.forEach(function (event) {
            google.visualization.events.addListener(_this.gchart, event, function () {
                return _this.emit(event, _this.gchart, _this.data);
            });
        });
    };
    return Renderable;
}(events_1.default));
exports.default = Renderable;
//# sourceMappingURL=Renderable.js.map