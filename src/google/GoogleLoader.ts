import { Chart } from "../Chart";
import { Dashboard } from "../Dashboard";
import { Drawable } from "../Drawable";
import { Eventful, Events } from "../Eventful";
import { getGoogle } from "../google";
import { getLogger } from "../lib";
import { LavaJsOptions } from "../types";
import { Google, GoogleLoaderOptions } from "../types/google";
import { getChartPackage } from "../VisualizationProperties";

export class GoogleLoader extends Eventful {
  /**
   * Version of the Google charts API to load
   */
  public static API_VERSION = "current";

  /**
   * Url to Google's static loader
   */
  public static LOADER_URL = "https://www.gstatic.com/charts/loader.js";

  /**
   * Packages to load
   */
  private readonly packages: Set<string> = new Set();

  /**
   * Create a new instance of the GoogleLoader
   *
   * @param options LavaJsOptions
   */
  constructor(private options: LavaJsOptions) {
    super();

    // if (options.enableEditor) {
    //   this.packages.add("charteditor");
    // }

    this.debug = getLogger().extend("GoogleLoader");
  }

  /**
   * Flag that will be true once window.google is available in page.
   */
  public get googleIsDefined(): boolean {
    return typeof window.google !== "undefined";
  }

  /**
   * Flag that will be true once Google's Static Loader is in page.
   */
  public get scriptTagInPage(): boolean {
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
  public get config(): GoogleLoaderOptions {
    const config: GoogleLoaderOptions = {
      language: this.options.language || "en",
      packages: Array.from(this.packages)
    };

    if (this.options.mapsApiKey !== "") {
      config.mapsApiKey = this.options.mapsApiKey;
    }

    return config;
  }

  /**
   * Extract and register the package needed to draw the chart.
   */
  public register<T extends Drawable>(drawable: Chart | Dashboard): void {
    if (drawable instanceof Dashboard) {
      this.packages.add("controls");
    } else {
      this.packages.add(getChartPackage(drawable));
    }
  }

  /**
   * Load the Google Static Loader and resolve the promise when ready.
   */
  public async loadGoogle(): Promise<Google> {
    this.debug("Loading Google...");

    if (this.googleIsDefined) {
      return getGoogle();
    }

    if (this.scriptTagInPage === false) {
      this.debug("Static loader not found");

      await this.injectGoogleStaticLoader(document.head);
    }

    this.debug(`Loading version "${GoogleLoader.API_VERSION}"`, this.config);

    window.google.charts.load(GoogleLoader.API_VERSION, this.config);

    return new Promise(resolve => {
      window.google.charts.setOnLoadCallback(() => {
        this.debug(`Google is loaded, firing <${Events.GOOGLE_READY}>`);
        this.emitEvent(Events.GOOGLE_READY, getGoogle());

        resolve(getGoogle());
      });
    });
  }

  /**
   * Create a new script tag for the Google Static Loader
   */
  private injectGoogleStaticLoader(target: Node): Promise<void> {
    const debug = this.debug.extend("StaticLoader");

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

      // debug(`Injecting ${script} into ${target}`);
      debug("Injecting", script);

      target.appendChild(script);
    });
  }
}