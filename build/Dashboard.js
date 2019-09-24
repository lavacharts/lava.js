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
        for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {
            var binding = _a[_i];
            var controlWraps = [];
            var chartWraps = [];
            for (var _b = 0, _c = binding.controlWrappers; _b < _c.length; _b++) {
                var controlWrap = _c[_b];
                controlWraps.push(new google.visualization.ControlWrapper(controlWrap));
            }
            for (var _d = 0, _e = binding.chartWrappers; _d < _e.length; _d++) {
                var chartWrap = _e[_d];
                chartWraps.push(new google.visualization.ChartWrapper(chartWrap));
            }
            this.gchart.bind(controlWraps, chartWraps);
        }
    };
    return Dashboard;
}(Renderable_1.default));
exports.default = Dashboard;
//# sourceMappingURL=Dashboard.js.map