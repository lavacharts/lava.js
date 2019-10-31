import Debug, { Debugger } from "debug";

const debug = Debug("LavaJs");

export function getLogger(): Debugger {
  return debug;
}

export const ConsoleLogger = {
  getInstance(): Debugger {
    return debug;
  },

  setState(isEnabled: boolean): void {
    debug.enabled = isEnabled;
  },

  enable(): void {
    debug.enabled = true;
  },

  disable(): void {
    debug.enabled = false;
  }
};
