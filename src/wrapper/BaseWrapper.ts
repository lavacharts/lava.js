import { onGoogleReady } from "../lib";
import { Google, GoogleHandler } from "../types/google";

export class BaseWrapper {
  public options!: Record<string, any>;
  public googleReady!: GoogleHandler;

  constructor(public containerId: string) {
    onGoogleReady((google: Google) => {
      if (typeof this.googleReady === "function") {
        this.googleReady(google);
      }
    });
  }

  // public function getGoogleClassInstance() {
  //   return GoogleFactory("ChartWrapper", chartWrap)
  // }
}
