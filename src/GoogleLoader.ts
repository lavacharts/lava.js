import { getLogger } from "./lib";
import { GoogleLoaderOptions, LavaJsOptions, Logger } from "./types";

export enum LOADER_STATES {
  "NULL" = "NULL",
  "RESOLVING" = "RESOLVING",
  "RESOLVED" = "RESOLVED"
}

export default class GoogleLoader {
  /**
   * Version of the Google charts API to load
   */
  public static API_VERSION = "current";

  /**
   * Url to Google's static loader
   */
  public static LOADER_URL = "https://www.gstatic.com/charts/loader.js";

  /**
   * State of the `window.google`
   */
  public state: LOADER_STATES = LOADER_STATES.NULL;

  /**
   * Packages to load
   */
  private readonly packages: Set<string> = new Set();

  /**
   * Logging instance
   */
  private readonly logger: Logger;

  /**
   * Create a new instance of the GoogleLoader
   *
   * @param options LavaJsOptions
   */
  constructor(private options: LavaJsOptions) {
    this.logger = getLogger();
  }

  /**
   * Return the current state of the {@link GoogleLoader}
   */
  public getState(): LOADER_STATES {
    return this.state;
  }

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
   * Add one package to the list that Google needs to load.
   */
  public addPackage(pkgs: string): void {
    this.packages.add(pkgs);
  }

  /**
   * Load the Google Static Loader and resolve the promise when ready.
   */
  public async loadGoogle(): Promise<void> {
    this.state = LOADER_STATES.RESOLVING;

    this.logger.log("Resolving Google...");

    if (this.googleLoaderInPage === false) {
      this.logger.log("Static loader not found, appending to head");

      await this.addGoogleScriptToHead();
    }

    return new Promise(resolve => {
      this.logger.log("Static loader found, initializing window.google");

      window.google.charts.load(GoogleLoader.API_VERSION, this.config);

      this.logger.log("Loaded Google with config:");
      this.logger.log(this.config);

      window.google.charts.setOnLoadCallback(() => {
        resolve();

        this.state = LOADER_STATES.RESOLVED;
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
      script.src = GoogleLoader.LOADER_URL;
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
