import Debug from "debug";
import { TinyEmitter } from "tiny-emitter";

export enum Events {
  GOOGLE_READY = "google-ready",
  DRAW = "draw",
  RESIZE = "window-resize",
  DOM_READY = "dom-ready"
}

export class Eventful extends TinyEmitter {
  protected debug!: Debug.Debugger;

  protected emitEvent(event: Events, payload?: any): void {
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
