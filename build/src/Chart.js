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
var Chart = (function (_super) {
    __extends(Chart, _super);
    function Chart(payload) {
        var _this = _super.call(this, payload) || this;
        _this.png = Boolean(payload.png);
        return _this;
    }
    Chart.prototype.setup = function () {
        this.gchart = new google.visualization[this.class](this.container);
    };
    Chart.prototype.postDraw = function () {
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
    Chart.prototype._attachEvents = function () {
        var _this = this;
        this.events.forEach(function (callback, event) {
            var context = window;
            var func = callback;
            if (typeof callback === "object") {
                context = context[callback[0]];
                func = callback[1];
            }
            console.log("[lava.js] The \"" + _this.uuid + "::" + event + "\" event will be handled by \"" + func + "\" in the context", context);
            google.visualization.events.addListener(_this.gchart, event, function () {
                var callback = context[func].bind(_this.gchart);
                callback(_this.data);
            });
        });
    };
    return Chart;
}(Renderable_1.default));
exports.default = Chart;
//# sourceMappingURL=Chart.js.map