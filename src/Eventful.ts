import Debug from "debug";
import { TinyEmitter } from "tiny-emitter";

export enum EVENTS {
  GOOGLE_READY = "google-ready",
  INITIALIZING = "init",
  PRE_DRAW = "predraw",
  DRAW = "draw",
  POST_DRAW = "postdraw",
  RESIZE = "window-resize",
  READY = "ready",
  DOM_READY = "dom-ready"
}

export default class Eventful extends TinyEmitter {
  protected debug!: Debug.Debugger;

  protected emitEvent(event: EVENTS, payload?: any): void {
    if (this.debug instanceof Debug.debug) {
      this.debug(`Firing Event <${event}>`);
    }

    if (typeof payload !== "undefined") {
      super.emit(event, payload);
    } else {
      super.emit(event);
    }
  }
}
