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
var Renderable_1 = __importDefault(require("./Renderable"));
var Dashboard = (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard(json) {
        var _this = this;
        json.type = "Dashboard";
        _this = _super.call(this, json) || this;
        _this.bindings = json.bindings;
        return _this;
    }
    Dashboard.prototype._setup = function () {
        this.gchart = new google.visualization.Dashboard(this.container);
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
//# sourceMappingURL=Dashboard.js.map