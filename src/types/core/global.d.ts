import LavaJs from "../..";
import { Google } from "./index";

declare global {
  interface Window {
    lava: LavaJs;
    google: Google;
  }
}
