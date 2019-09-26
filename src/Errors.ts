/**
 * LavaJsError Error
 *
 * Base error that the specific errors extend.
 */
export class LavaJsError extends Error {
  constructor(message = "There was an error") {
    super(message);
  }
}

/**
 * InvalidCallback Error
 *
 * Thrown when anything but a function is given as a callback.
 */
export class InvalidCallback extends LavaJsError {
  constructor(callback: any) {
    super(`[lava.js] "${typeof callback}" is not a valid callback.`);
  }
}

/**
 * InvalidLabel Error
 *
 * Thrown when a {@link Renderable} is not found in the module.
 */
export class RenderableNotFound extends LavaJsError {
  constructor(label: string) {
    super(`[lava.js] A renderable with the label "${label}" was not found.`);
  }
}

/**
 * ElementIdNotFound Error
 *
 * Thrown when the given ID for an HTMLElement is not found in the DOM.
 */
export class DataError extends LavaJsError {
  constructor(elemId: string) {
    super(`[lava.js] There was an error setting the data for the chart.`);
  }
}

/**
 * ElementIdNotFound Error
 *
 * Thrown when the given ID for an HTMLElement is not found in the DOM.
 */
export class ElementIdNotFound extends LavaJsError {
  constructor(elemId: string) {
    super(`[lava.js] DOM node where id="${elemId}" was not found.`);
  }
}

LavaJsError.prototype = Error.prototype;
DataError.prototype = LavaJsError.prototype;
InvalidCallback.prototype = LavaJsError.prototype;
ElementIdNotFound.prototype = LavaJsError.prototype;
RenderableNotFound.prototype = LavaJsError.prototype;
