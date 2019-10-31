import { GoogleFactory, hasOwnProp } from "../lib";
import { ControlWrapperSpec } from "../types/wrapper";

export class ControlWrapper {
  /**
   * The class name of the control.
   */
  public readonly controlType: google.visualization.ControlWrapperType;

  /**
   * The ID of the DOM element on your page that will host the control.
   */
  public containerId: string;

  public options?: any;
  public state?: any;

  public static factory(
    payload: ControlWrapperSpec
  ): google.visualization.ControlWrapper {
    return GoogleFactory("ControlWrapper", payload);
  }

  constructor(payload: ControlWrapperSpec) {
    this.controlType = payload.controlType;
    this.containerId = payload.containerId;

    const payloadHasProperty = hasOwnProp(payload);

    if (payloadHasProperty("options")) {
      this.options = payload.options;
    }

    if (payloadHasProperty("state")) {
      this.state = payload.state;
    }
  }
}
