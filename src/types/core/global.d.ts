import { Google, Lavacharts } from "../";
import LavaJs from "../../LavaJs";

declare global {
  interface Window {
    lava: LavaJs;
    google: Google;
    lavacharts?: Lavacharts;
  }
}
