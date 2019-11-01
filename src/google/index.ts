import { getLogger } from "../lib/logger";
import { Google } from "../types/google";

export function getGoogle(): Google {
  return window.google;
}

export function GoogleFactory(className: string, payload: any): any {
  const debug = getLogger().extend("GoogleFactory");

  debug(`Creating new ${className}()`, payload);

  return new (window.google.visualization as any)[className](payload);
}
