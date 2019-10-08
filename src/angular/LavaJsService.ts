import { Injectable } from "@angular/core";

import LavaJs from "../LavaJs";

function getWindow(): Window {
  return window;
}

@Injectable()
export class LavaJsService {
  private _window: any;

  constructor() {
    this._window = getWindow();

    LavaJs.logger.log("Angular service provider loaded.");
  }

  /**
   * Returns the LavaJs instance attached to the window.
   */
  public getInstance(): LavaJs {
    return this._window.lava;
  }
}
