import { LavaJsOptions } from "..";
import { LavaJs } from "../..";

declare global {
  interface Window {
    lava: LavaJs;
    LavaJs: typeof LavaJs;
    google: typeof google;
    lavacharts?: {
      options: LavaJsOptions;
    };
  }
}
