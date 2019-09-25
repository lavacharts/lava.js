import Chart from "./Chart";
import Dashboard from "./Dashboard";
import DataQuery from "./DataQuery";
import DefaultOptions from "./DefaultOptions";
import * as Errors from "./Errors";
import LavaJs from "./LavaJs";
import Renderable from "./Renderable";
import * as Utils from "./Utils";

export default LavaJs;

/**
 * Version of the Google charts API to load
 */
export const GOOGLE_API_VERSION = "current";

/**
 * Url to Google's static loader
 */
export const GOOGLE_LOADER_URL = "https://www.gstatic.com/charts/loader.js";

export {
  DefaultOptions,
  Chart,
  Dashboard,
  DataQuery,
  Errors,
  Renderable,
  Utils
};
