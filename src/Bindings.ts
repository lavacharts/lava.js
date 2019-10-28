import { EVENTS } from "./Eventful";
import { getLava } from "./lib";
import { Google } from "./types/google";

export default class ControlWrapper {
  static create(
    payload: google.visualization.ControlWrapperOptions
  ): ControlWrapper {
    console.log(payload);

    return new ControlWrapper(...payload);
  }

  constructor() {
    getLava().on(EVENTS.DRAW, (google: Google) => {
      console.log("heyo");
    });
  }
}
