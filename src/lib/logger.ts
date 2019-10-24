import Debug, { Debugger } from "debug";

const debug = Debug("LavaJs");

export function getLogger(): Debugger {
  return debug;
}

export const ConsoleLogger = {
  getInstance(): Debugger {
    return debug;
  },

  enable(): void {
    debug.enabled = true;
  },

  disable(): void {
    debug.enabled = false;
  }
};
