/**
 * LavaJsError Error
 *
 * Base error that the specific errors extend.
 *
 * @type {Function}
 */
export function LavaJsError(message)
{
    this.name = 'LavaJsError';
    this.message = (message || "");
}
LavaJsError.prototype = Error.prototype;

/**
 * InvalidCallback Error
 *
 * Thrown when anything but a function is given as a callback.
 *
 * @type {Function}
 */
export function InvalidCallback(callback)
{
    this.name = 'InvalidCallback';
    this.message = `[lava.js] "${typeof callback}" is not a valid callback.`;
}
InvalidCallback.prototype = LavaJsError.prototype;

/**
 * InvalidLabel Error
 *
 * Thrown when a {@link Renderable} is not found in the module.
 *
 * @type {Function}
 */
export function RenderableNotFound()
{
    this.name = 'RenderableNotFound';
    this.message = `[lava.js] A renderable with the label "${label}" was not found.`;
}
RenderableNotFound.prototype = LavaJsError.prototype;

/**
 * ElementIdNotFound Error
 *
 * Thrown when the given ID for an HTMLElement is not found in the DOM.
 *
 * @type {Function}
 */
export function ElementIdNotFound()
{
    this.name = 'ElementIdNotFound';
    this.message = `[lava.js] DOM node where id="${elemId}" was not found.`;
}
ElementIdNotFound.prototype = LavaJsError.prototype;