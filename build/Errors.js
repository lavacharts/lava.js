"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function LavaJsError(message) {
    this.name = 'LavaJsError';
    this.message = (message || "");
}
function InvalidCallback(callback) {
    this.name = 'InvalidCallback';
    this.message = "[lava.js] \"" + typeof callback + "\" is not a valid callback.";
}
function RenderableNotFound(label) {
    this.name = 'RenderableNotFound';
    this.message = "[lava.js] A renderable with the label \"" + label + "\" was not found.";
}
function ElementIdNotFound(elemId) {
    this.name = 'ElementIdNotFound';
    this.message = "[lava.js] DOM node where id=\"" + elemId + "\" was not found.";
}
function DataError(msg) {
    this.name = 'DataError';
    this.message = msg;
}
LavaJsError.prototype = Error.prototype;
InvalidCallback.prototype = LavaJsError.prototype;
RenderableNotFound.prototype = LavaJsError.prototype;
ElementIdNotFound.prototype = LavaJsError.prototype;
DataError.prototype = LavaJsError.prototype;
exports.default = {
    LavaJsError: LavaJsError,
    DataError: DataError,
    InvalidCallback: InvalidCallback,
    RenderableNotFound: RenderableNotFound,
    ElementIdNotFound: ElementIdNotFound
};
//# sourceMappingURL=Errors.js.map