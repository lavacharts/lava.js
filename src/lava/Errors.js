/**
 * Errors module
 *
 * @module    lava/Errors
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2017, KHill Designs
 * @license   MIT
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
 * thrown when when anything but a function is given as a callback
 * @type {function}
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
 * Thrown when when anything but a string is given as a label.
 *
 * @type {function}
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
 * Thrown when when anything but a string is given as a label.
 *
 * @type {function}
 */
export function ElementIdNotFound()
{
    this.name = 'ElementIdNotFound';
    this.message = `[lava.js] DOM node where id="${elemId}" was not found.`;
}
ElementIdNotFound.prototype = LavaJsError.prototype;