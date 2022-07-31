import { action, makeObservable, observable } from "mobx";

import { Chart } from "../Chart";
import { getChartPackage } from "../ChartProps";
import { Dashboard } from "../Dashboard";
import { instanceOfDashboard, makeDebugger } from "../lib/utils";
import { injectStaticLoader } from "./static-loader";

import type { GoogleHandler, GoogleLoaderOptions } from "../types";

const debug = makeDebugger("GoogleLoader");

export class GoogleLoader {
  /**
   * Version of the Google charts API to load
   */
  static API_VERSION = "current"; //

  /**
   * Url to Google's static loader
   */
  static LOADER_URL = "https://www.gstatic.com/charts/loader.js";

  /**
   * Observable prop for when the library is ready to draw charts
   */
  googleReady = false;

  /**
   * Packages to load
   */
  packages: Set<string> = new Set(["corechart"]);

  /**
   * Language to load
   */
  private language: string;

  /**
   * API Key if using GeoCharts
   */
  private mapsApiKey: string;

  /**
   * Create a new instance of the GoogleLoader
   *
   * @param options LavaJsOptions
   */
  constructor({ language = "en", mapsApiKey = "" }: GoogleLoaderOptions) {
    makeObservable(this, {
      googleReady: observable,
      toggleGoogleReady: action
    });

    this.language = language;
    this.mapsApiKey = mapsApiKey;

    // if (options.enableEditor) {
    //   this.packages.add("charteditor");
    // }
  }

  toggleGoogleReady() {
    this.googleReady = !this.googleReady;
  }

  /**
   * Flag that will be true once window.google is available in page.
   */
  get googleIsDefined(): boolean {
    return typeof window.google !== "undefined";
  }

  /**
   * Flag that will be true once Google's Static Loader is in page.
   */
  get scriptTagInPage(): boolean {
    const scripts = document.getElementsByTagName("script");

    return Array.from(scripts)
      .map(script => script.src)
      .includes(GoogleLoader.LOADER_URL);
  }

  /**
   * Get the options for the google loader.
   */
  get config(): GoogleLoaderOptions {
    const config: GoogleLoaderOptions = {
      language: this.language,
      packages: Array.from(this.packages)
    };

    if (this.mapsApiKey !== "") {
      config.mapsApiKey = this.mapsApiKey;
    }

    return config;
  }

  /**
   * Extract and register the package needed to draw the chart.
   */
  register(drawable: Chart | Dashboard): void {
    if (instanceOfDashboard(drawable)) {
      this.packages.add("controls");
    } else {
      this.packages.add(getChartPackage(drawable));
    }
  }

  /**
   * Load the Google Static Loader and resolve the promise when ready.
   */
  async loadGoogle(): Promise<typeof google> {
    debug("Loading Google...");

    await injectStaticLoader(document.head);

    return new Promise(resolve => {
      debug(`Loading version "${GoogleLoader.API_VERSION}"`, this.config);

      window.google.charts.load(GoogleLoader.API_VERSION, this.config);
      window.google.charts.setOnLoadCallback(() => {
        debug(`window.google is ready.`);
        this.toggleGoogleReady();
        resolve(window.google);
      });
    });
  }
}
