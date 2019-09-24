/**
 * LavaJsError Error
 *
 * Base error that the specific errors extend.
 *
 * @type {Function}
 */
function LavaJsError(message) {
    this.name = 'LavaJsError';
    this.message = (message || "");
}

/**
 * InvalidCallback Error
 *
 * Thrown when anything but a function is given as a callback.
 *
 * @type {Function}
 */
function InvalidCallback(callback) {
    this.name = 'InvalidCallback';
    this.message = `[lava.js] "${typeof callback}" is not a valid callback.`;
}

/**
 * InvalidLabel Error
 *
 * Thrown when a {@link Renderable} is not found in the module.
 *
 * @type {Function}
 */
function RenderableNotFound(label) {
    this.name = 'RenderableNotFound';
    this.message = `[lava.js] A renderable with the label "${label}" was not found.`;
}

/**
 * ElementIdNotFound Error
 *
 * Thrown when the given ID for an HTMLElement is not found in the DOM.
 *
 * @type {Function}
 */
function ElementIdNotFound(elemId) {
    this.name = 'ElementIdNotFound';
    this.message = `[lava.js] DOM node where id="${elemId}" was not found.`;
}

/**
 * DataError
 *
 * Thrown when the given ID for an HTMLElement is not found in the DOM.
 *
 * @type {Function}
 */
function DataError(msg) {
    this.name = 'DataError';
    this.message = msg;
}


LavaJsError.prototype        = Error.prototype;
InvalidCallback.prototype    = LavaJsError.prototype;
RenderableNotFound.prototype = LavaJsError.prototype;
ElementIdNotFound.prototype  = LavaJsError.prototype;
DataError.prototype     = LavaJsError.prototype;

export default {
    LavaJsError:        LavaJsError,
    DataError:          DataError,
    InvalidCallback:    InvalidCallback,
    RenderableNotFound: RenderableNotFound,
    ElementIdNotFound:  ElementIdNotFound
}
