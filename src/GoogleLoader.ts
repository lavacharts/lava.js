import {
  GoogleLoaderOptions,
  LavaJsOptions,
  ModernHTMLScriptElement
} from "./types";

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
  private packages: Set<string> = new Set(["corechart"]);

  constructor(private options: LavaJsOptions) {}

  /**
   * Flag that will be true once window.google is available in page.
   */
  get isLoaded(): boolean {
    return typeof window.google !== "undefined";
  }

  /**
   * Flag that will be true once Google's Static Loader is in page.
   */
  get googleLoaderInPage(): boolean {
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
  get config(): any {
    const config = {
      language: this.options.locale,
      packages: Array.from(this.packages)
    } as GoogleLoaderOptions;

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
   * Add multiple packages to the list that Google needs to load.
   */
  public addPackages(packages: string[] | Set<string>): void {
    packages.forEach((pkg: string) => this.packages.add(pkg));
  }

  /**
   * Load the Google Static Loader and resolve the promise when ready.
   */
  public async loadGoogle(): Promise<void> {
    console.log("[lava.js] Resolving Google...");

    if (this.googleLoaderInPage === false) {
      console.log("[lava.js] Static loader not found, appending to head");

      await this.addGoogleScriptToHead();
    }

    console.log("[lava.js] Static loader found, initializing window.google");

    return this.googleChartLoader();
  }

  /**
   * Runs the Google Chart Loader using the passed Promise resolver as
   * the setOnLoadCallback function.
   */
  public googleChartLoader(): Promise<void> {
    return new Promise(resolve => {
      console.log("[lava.js] Loading Google with config:", this.config);

      window.google.charts.load(this.API_VERSION, this.config);

      window.google.charts.setOnLoadCallback(resolve);
    });
  }

  /**
   * Create a new script tag for the Google Static Loader
   */
  private async addGoogleScriptToHead(): Promise<void> {
    return new Promise(resolve => {
      const script = document.createElement(
        "script"
      ) as ModernHTMLScriptElement;

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
