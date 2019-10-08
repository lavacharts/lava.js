import { logger } from "./LavaJs";
import { Google, GoogleLoaderOptions, LavaJsOptions } from "./types";

export default class GoogleLoader {
  /**
   * Version of the Google charts API to load
   */
  API_VERSION = "current";

  /**
   * Url to Google's static loader
   */
  LOADER_URL = "https://www.gstatic.com/charts/loader.js";

  /**
   * Packages to load
   */
  private packages: Set<string> = new Set();

  constructor(private options: LavaJsOptions) {}

  /**
   * Flag that will be true once window.google is available in page.
   */
  public get isLoaded(): boolean {
    return typeof window.google !== "undefined";
  }

  /**
   * Flag that will be true once Google's Static Loader is in page.
   */
  public get googleLoaderInPage(): boolean {
    const scripts = document.getElementsByTagName("script");

    for (const script of Array.from(scripts)) {
      if (script.src === this.LOADER_URL) {
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
      language: this.options.locale || "en",
      packages: Array.from(this.packages)
    };

    if (this.options.mapsApiKey !== "") {
      config.mapsApiKey = this.options.mapsApiKey;
    }

    return config;
  }

  /**
   * Get a reference to the window.google object or load it if needed.
   */
  // public async getGoogle(): Promise<Google> {
  //   if (this.isLoaded) {
  //     return window.google;
  //   }

  //   return this.loadGoogle();
  // }

  /**
   * Add one package to the list that Google needs to load.
   */
  public addPackage(pkgs: string): void {
    this.packages.add(pkgs);
  }

  /**
   * Load the Google Static Loader and resolve the promise when ready.
   */
  public async loadGoogle(): Promise<Google> {
    logger.log("Resolving Google...");

    if (this.googleLoaderInPage === false) {
      logger.log("Static loader not found, appending to head");

      await this.addGoogleScriptToHead();
    }

    return new Promise(resolve => {
      logger.log("Static loader found, initializing window.google");

      window.google.charts.load(this.API_VERSION, this.config);

      logger.log("Loaded Google with config:", this.config);

      window.google.charts.setOnLoadCallback(() => {
        resolve(window.google);
      });
    });
  }

  /**
   * Create a new script tag for the Google Static Loader
   */
  private addGoogleScriptToHead(): Promise<void> {
    return new Promise(resolve => {
      const script = document.createElement("script") as ScriptElement;

      script.type = "text/javascript";
      script.async = true;
      script.src = this.LOADER_URL;
      script.onload = script.onreadystatechange = (event: Event) => {
        // eslint-disable-next-line no-param-reassign
        event = event || window.event;

        if (
          event.type === "load" ||
          /loaded|complete/.test(script.readyState)
        ) {
          script.onload = script.onreadystatechange = null;

          resolve();
        }
      };

      document.head.appendChild(script);
    });
  }
}
