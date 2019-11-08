import { LavaJsOptions } from "./types";

export const DefaultOptions = {
  autodraw: false,
  autoloadGoogle: true,
  debug: false,
  language: "en",
  mapsApiKey: "",
  responsive: true,
  // datetimeFormat: "",
  debounceTimeout: 250,
  chartPackages: ["corechart"],
  timezone: "America/Los_Angeles"
} as LavaJsOptions;
