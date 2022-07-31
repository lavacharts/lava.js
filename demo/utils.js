const randomInt = (/** @type {number} */ a, /** @type {number} */ b) =>
  Math.floor(Math.random() * (b - a + 1) + a);

export const r = (/** @type {number} */ min, /** @type {number} */ max) =>
  randomInt(min, max);

export const millions = randomInt.bind(null, 0, 1_000_000);
