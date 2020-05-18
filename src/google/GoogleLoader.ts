import { TinyEmitter } from "tiny-emitter";

import { Chart } from "../Chart";
import { getChartPackage } from "../ChartProps";
import { Dashboard } from "../Dashboard";
import { Drawable } from "../Drawable";
import { Events } from "../Events";
import { instanceOfDashboard, makeDebugger } from "../lib";
import { Google, GoogleLoaderOptions } from "../types/google";

const debug = makeDebugger("GoogleLoader");

export class GoogleLoader extends TinyEmitter {
  /**
   * Version of the Google charts API to load
   */
  static API_VERSION = "current";

  /**
   * Url to Google's static loader
   */
  static LOADER_URL = "https://www.gstatic.com/charts/loader.js";

  /**
   * Language to load
   */
  private language: string;

  /**
   * API Key if using GeoCharts
   */
  private mapsApiKey: string;

  /**
   * Packages to load
   */
  private packages: Set<string> = new Set(["corechart"]);

  /**
   * Reference to the window
   */
  private $window: Window & typeof globalThis;

  /**
   * Create a new instance of the GoogleLoader
   *
   * @param options LavaJsOptions
   */
  constructor({ language = "en", mapsApiKey = "" }: GoogleLoaderOptions) {
    super();

    this.$window = window;
    this.language = language;
    this.mapsApiKey = mapsApiKey;

    // if (options.enableEditor) {
    //   this.packages.add("charteditor");
    // }
  }

  /**
   * Flag that will be true once window.google is available in page.
   */
  get googleIsDefined(): boolean {
    return typeof this.$window.google !== "undefined";
  }

  /**
   * Flag that will be true once Google's Static Loader is in page.
   */
  get scriptTagInPage(): boolean {
    const scripts = document.getElementsByTagName("script");

    for (const script of Array.from(scripts)) {
      if (script.src === GoogleLoader.LOADER_URL) {
        return true;
      }
    }

    return false;
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
  register<T extends Drawable>(drawable: Chart | Dashboard): void {
    if (instanceOfDashboard(drawable)) {
      this.packages.add("controls");
    } else {
      this.packages.add(getChartPackage(drawable));
    }
  }

  /**
   * Load the Google Static Loader and resolve the promise when ready.
   */
  async loadGoogle(): Promise<Google> {
    debug("Loading Google...");

    if (this.googleIsDefined) {
      return this.$window.google;
    }

    if (this.scriptTagInPage === false) {
      debug("Static loader not found");

      await this.injectGoogleStaticLoader(document.head);
    }

    debug(`Loading version "${GoogleLoader.API_VERSION}"`, this.config);

    this.$window.google.charts.load(GoogleLoader.API_VERSION, this.config);

    return new Promise(resolve => {
      this.$window.google.charts.setOnLoadCallback(() => {
        debug(`Google is loaded, firing <${Events.GOOGLE_READY}>`);

        this.emit(Events.GOOGLE_READY, this.$window.google);

        resolve(this.$window.google);
      });
    });
  }

  /**
   * Create a new script tag for the Google Static Loader
   */
  private injectGoogleStaticLoader(target: Node): Promise<void> {
    return new Promise(resolve => {
      const script = document.createElement("script") as ScriptElement;

      script.type = "text/javascript";
      script.defer = true;
      script.src = GoogleLoader.LOADER_URL;
      script.onload = script.onreadystatechange = (event: Event) => {
        // eslint-disable-next-line no-param-reassign
        event = event || window.event;

        if (
          event.type === "load" ||
          /loaded|complete/.test(script.readyState)
        ) {
          script.onload = script.onreadystatechange = null;
          debug("Gstatic chart loader is ready");
          resolve();
        }
      };

      debug("Injecting", script);

      target.appendChild(script);
    });
  }
}
