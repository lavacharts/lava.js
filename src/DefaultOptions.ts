import type { LavaJsOptions } from "./types";

export const DefaultOptions = {
  autodraw: true,
  autoloadGoogle: true,
  chartPackages: ["corechart"],
  // datetimeFormat: "",
  debounceTimeout: 500,
  debug: false,
  language: "en",
  mapsApiKey: "",
  responsive: true,
  timezone: "America/Los_Angeles"
} as LavaJsOptions;
