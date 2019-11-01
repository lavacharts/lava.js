import { Binding } from "./Binding";
import { Chart } from "./Chart";
import { Dashboard } from "./Dashboard";
import { DefaultOptions } from "./DefaultOptions";
import { Eventful, Events } from "./Eventful";
import { GoogleLoader } from "./google/GoogleLoader";
import { addEvent, onGoogleReady } from "./lib";
import { ConsoleLogger, getLogger } from "./lib/logger";
import { LavaJsOptions, OneOrArrayOf } from "./types";
import { ChartInterface } from "./types/chart";
import { DashboardSpec } from "./types/dashboard";
import { Google } from "./types/google";
import { ChartWrapperSpec, ControlWrapperSpec } from "./types/wrapper";

/**
 * Google Chart API wrapper library
 *
 * This module can be used as a standalone, browser based library, or in
 * conjunction with the PHP library, <a href="https://github.com/kevinkhill/lavacharts">Lavacharts</a>.
 */
export class LavaJs extends Eventful {
  /** LavaJs version */
  public static readonly VERSION = "__VERSION__";

  /** Flag for when `window.google !== undefined` */
  public googleReady = false;

  /** Flag for when `document.readyState === "complete"` */
  public domReady = false;

  /** Configurable options for the library */
  public options: LavaJsOptions = DefaultOptions;

  /** Drawables registy */
  public readonly registry: Record<string, any> = {};

  /** Loader for adding the google script and making `window.google` available */
  private readonly loader: GoogleLoader;

  /**
   * Create a new instance of the LavaJs library
   *
   * When creating an instance of LavaJs, the default behavior is
   * to check if `window.google !== undefined` and if so, then we
   * start the [[GoogleLoader]].
   *
   * The [[GoogleLoader]] will check the <head> for the
   * gstatic loader and if not found, inject it into the <head>.
   *
   * @emits [[Events.GOOGLE_READY]]
   * @emits [[Events.DRAW]]
   */
  constructor(options?: LavaJsOptions) {
    super();

    if (options) {
      this.configure(options);
    }

    this.debug = getLogger();

    if (this.options.debug) {
      ConsoleLogger.enable();
    }

    this.debug(`Initializing LavaJs v${LavaJs.VERSION}`, this.options);

    if (this.options.responsive === true) {
      this.attachResizeHandler();
    }

    this.loader = new GoogleLoader(this.options);

    this.loader.on(Events.GOOGLE_READY, (google: Google) => {
      this.googleReady = true;
      this.emitEvent(Events.GOOGLE_READY, google);
    });

    if (!this.loader.googleIsDefined && this.options.autoloadGoogle) {
      this.loader.loadGoogle();
    }
  }

  /**
   * Get the instance of the GoogleLoader
   */
  public getLoader(): GoogleLoader {
    return this.loader;
  }

  /**
   * Override the default options of the module.
   */
  public configure(options: LavaJsOptions): void {
    this.options = Object.assign(this.options, options);
  }

  /**
   * Wait for the DOM to be ready then draw ^_^
   *
   * If passed a single chart object, then you can skip the `lava.chart()`
   * call and draw a chart with only one method call!
   *
   * You can even pass an array of chart objects!!
   *
   * @emits [[Events.DRAW]]
   */
  public async draw(
    payload?: ChartInterface | ChartInterface[]
  ): Promise<Chart[]> {
    if (!this.domReady) {
      await this.waitForDom();
    }

    const charts: Chart[] = [];

    if (typeof payload !== "undefined") {
      if (Array.isArray(payload)) {
        charts.push(...payload.map(this.chart, this));
      } else {
        charts.push(this.chart(payload));
      }
    }

    onGoogleReady(() => {
      this.emitEvent(Events.DRAW);
    });

    return charts;
  }

  /**
   * Compose a URL to a Google Sheet
   *
   * Pass a Google Sheet ID and range in A1 notation to create a URL
   * to use with a [[DataQuery]].
   */
  public rangeQuery(id: string, range: string): string {
    const base = "https://docs.google.com/spreadsheets/d";

    return `${base}/${id}/gviz/tq?range=${range}`;
  }

  /**
   * Create a new [[Chart]] from an Object
   */
  public chart(payload: ChartInterface): Chart {
    const chart = new Chart(payload);

    return this.register(chart);
  }

  /**
   * Create a new [[Dashboard]] from an Object
   */
  public dashboard(payload: DashboardSpec): Dashboard {
    const dashboard = new Dashboard(payload);

    return this.register(dashboard);
  }

  /**
   * Create [[Dashboard]] [[Binding]]s
   */
  public bind(
    controlWraps: OneOrArrayOf<ControlWrapperSpec>,
    chartWraps: OneOrArrayOf<ChartWrapperSpec>
  ): Binding {
    return new Binding(controlWraps, chartWraps);
  }

  /**
   * Register a [[Drawable]] with the module.
   *
   * The registry keeps a record of all created charts, which enables
   * the event firing through the common interface of `window.lava`
   */
  private register<T extends Chart | Dashboard>(drawable: T): T {
    this.debug(`Registering ${drawable.id} packages with the Google Loader`);

    this.loader.register(drawable);

    this.registry[drawable.id] = {};

    return drawable;
  }

  /**
   * Promise for the DOM to be ready.
   *
   * @emits [[Events.DOM_READY]]
   */
  private async waitForDom(): Promise<void> {
    this.debug("Waiting for the DOM to become ready");

    return new Promise(resolve => {
      if (["interactive", "complete"].includes(document.readyState)) {
        resolve();
        this.domReady = true;
        this.debug("DOM ready");
        this.emit(Events.DOM_READY);
      } else {
        document.addEventListener("DOMContentLoaded", () => resolve());
      }
    });
  }

  /**
   * Attach a listener to the window resize event for redrawing the charts.
   */
  private attachResizeHandler(): void {
    let debounced: any;

    addEvent(window, "resize", () => {
      clearTimeout(debounced);

      debounced = setTimeout(() => {
        this.debug(`Window re-sized, firing <${Events.DRAW}>`);

        this.emit(Events.DRAW);
      }, this.options.debounceTimeout);
    });
  }
}
