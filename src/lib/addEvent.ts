/**
 * Method for attaching events to objects.
 *
 * @author Alex V.
 * @link http://stackoverflow.com/a/3150139
 */
export function addEvent(
  target: any,
  type: string,
  callback: Function,
  useCapture = false
): void {
  if (target === null || typeof target === "undefined") {
    return;
  }
  if (target.addEventListener) {
    target.addEventListener(type, callback, useCapture);
  } else if (target.attachEvent) {
    target.attachEvent("on" + type, callback);
  } else {
    target["on" + type] = callback;
  }
}
