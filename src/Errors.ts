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
 * ElementIdNotFound Error
 *
 * Thrown when the given ID for an HTMLElement is not found in the DOM.
 */
export class DataError extends LavaJsError {
  constructor(msg: string) {
    super(msg);
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
