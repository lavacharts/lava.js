"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = (function () {
    function Utils() {
    }
    Utils.getType = function (object) {
        var type = Object.prototype.toString.call(object);
        return type.replace("[object ", "").replace("]", "");
    };
    Utils.domLoaded = function () {
        return new Promise(function (resolve) {
            if (document.readyState === "interactive" ||
                document.readyState === "complete") {
                resolve();
            }
            else {
                document.addEventListener("DOMContentLoaded", resolve);
            }
        });
    };
    Utils.addEvent = function (target, type, callback, eventReturn) {
        if (target === null || typeof target === "undefined") {
            return;
        }
        if (target.addEventListener) {
            target.addEventListener(type, callback, eventReturn);
        }
        else if (target.attachEvent) {
            target.attachEvent("on" + type, callback);
        }
        else {
            target["on" + type] = callback;
        }
    };
    Utils.getVizProps = function (chartType) {
        var propertyMap = require("../resources/visualization-map.json");
        return propertyMap[chartType];
    };
    Utils.createDataTable = function (payload) {
        if (Utils.getType(payload) === "Function") {
            return payload(new google.visualization.DataTable());
        }
        if (Utils.getType(payload) === "Array") {
            return google.visualization.arrayToDataTable(payload);
        }
        if (Utils.getType(payload.getTableProperties) === "Function") {
            return payload;
        }
        if (Utils.getType(payload.data) === "Array") {
            return google.visualization.data.join(new google.visualization.DataTable(payload.data[0]), new google.visualization.DataTable(payload.data[1]), payload.keys, payload.joinMethod, payload.dt2Columns, payload.dt2Columns);
        }
        if (Utils.getType(payload.data) === "Object") {
            payload = payload.data;
        }
        return new google.visualization.DataTable(payload);
    };
    return Utils;
}());
exports.default = Utils;
//# sourceMappingURL=Utils.js.map