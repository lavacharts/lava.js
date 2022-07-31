import "google.visualization";

import { LavaJs } from "../..";

import type { LavaJsOptions } from "..";

declare global {
  interface Window {
    lava: LavaJs;
    google: typeof google;
    lavacharts?: {
      options: LavaJsOptions;
    };
  }
}
