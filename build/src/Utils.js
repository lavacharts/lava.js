"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var visualization_map_json_1 = __importDefault(require("../resources/visualization-map.json"));
function getType(object) {
    var type = Object.prototype.toString.call(object);
    return type.replace("[object ", "").replace("]", "");
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
function getVizProps(chartType) {
    return visualization_map_json_1.default[chartType];
}
exports.getVizProps = getVizProps;
function createDataTable(payload) {
    if (getType(payload) === "Function") {
        return payload(new window.google.visualization.DataTable());
    }
    if (getType(payload) === "Array") {
        return window.google.visualization.arrayToDataTable(payload);
    }
    if (getType(payload.getTableProperties) === "Function") {
        return payload;
    }
    if (getType(payload.data) === "Array") {
        return window.google.visualization.data.join(new window.google.visualization.DataTable(payload.data[0]), new window.google.visualization.DataTable(payload.data[1]), payload.keys, payload.joinMethod, payload.dt2Columns, payload.dt2Columns);
    }
    if (getType(payload.data) === "Object") {
        payload = payload.data;
    }
    return new window.google.visualization.DataTable(payload);
}
exports.createDataTable = createDataTable;
//# sourceMappingURL=Utils.js.map