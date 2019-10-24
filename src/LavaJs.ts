import Chart from "./Chart";
import Dashboard from "./Dashboard";
import DataQuery from "./DataQuery";
import DefaultOptions from "./DefaultOptions";
import Eventful, { EVENTS } from "./Eventful";
import GoogleLoader from "./GoogleLoader";
import { addEvent } from "./lib";
import { ConsoleLogger, getLogger } from "./lib/logger";
import {
  DataQueryFactory,
  DataQueryInterface,
  Google,
  LavaJsOptions,
  LavaState
} from "./types";
import { ChartInterface } from "./types/chart";
import { DrawableInterface } from "./types/drawable";

/**
 * Google Chart API wrapper library
 *
 * This module can be used as a standalone, browser based library, or in
 * conjunction with the PHP library, <a href="https://github.com/kevinkhill/lavacharts">Lavacharts</a>.
 */
export default class LavaJs extends Eventful {
  public static readonly VERSION = "__VERSION__";

  /**
   * Configurable options for the library
   */
  public options: LavaJsOptions = DefaultOptions;

  /**
   * Drawables registy
   */
  private readonly registry: LavaState = {};

  /**
   * Loader class for appending the google script and making window.google available
   */
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
   */
  constructor(options?: LavaJsOptions) {
    super();

    if (options) {
      this.configure(options);
    }

    this.debug = getLogger();

    this.options.debug ? ConsoleLogger.enable() : ConsoleLogger.disable();

    this.debug(`LavaJs v${LavaJs.VERSION}`);
    this.debug("Loaded with options:");
    this.debug(this.options);

    this.loader = new GoogleLoader(this.options);

    this.loader.on(EVENTS.GOOGLE_READY, (google: Google) => {
      this.emitEvent(EVENTS.GOOGLE_READY, google);

      if (this.options.autodraw) {
        this.emitEvent(EVENTS.DRAW);
      }
    });

    if (this.loader.googleIsDefined === false) {
      if (this.options.autoloadGoogle) {
        this.loader.loadGoogle();
      }
    }

    if (this.options.responsive === true) {
      this.attachResizeHandler();
    }
  }

  /**
   * Override the default options of the module.
   */
  public configure(options: LavaJsOptions): void {
    this.options = Object.assign(this.options, options);
  }

  /**
   * Wait for the DOM to be ready then single all charts to draw.
   *
   * @emits [[EVENTS.DRAW]]
   */
  public async draw(): Promise<any> {
    await this.waitForDom();

    this.emitEvent(EVENTS.DRAW);
  }

  /**
   * Compose a URL to a Google Sheet
   *
   * Pass an ID and range in A1 notation to create an URL
   * to use with a [[DataQuery]].
   *
   * @param id string
   * @param range string
   */
  public rangeQuery(id: string, range: string): string {
    const base = "https://docs.google.com/spreadsheets/d";

    return `${base}/${id}/gviz/tq?range=${range}`;
  }

  /**
   * Get an instance of a DataQueryFactory
   *
   * This can be used to create custom [[DataQuery]]s
   */
  public queryFactory(): DataQueryFactory {
    return (payload: DataQueryInterface): DataQuery =>
      DataQuery.create(payload);
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
  public dashboard(payload: DrawableInterface): Dashboard {
    return new Dashboard(payload);
  }

  /**
   * Get a list of all the registered charts
   */
  public getRegistry(): LavaState {
    return this.registry;
  }

  /**
   * Register a [[Drawable]] with the module.
   *
   * The registry keeps a record of all created charts, which enables
   * the event firing through the common interface of `window.lava`
   */
  private register<T extends Chart | Dashboard>(drawable: T): T {
    this.debug(`Registering ${drawable.id}`);

    if (drawable.type !== "Dashboard") {
      this.loader.register(drawable as Chart);
    }

    this.registry[drawable.id] = {
      drawn: false,
      needsRedraw: false
    };

    return drawable;
  }

  /**
   * Promise for the DOM to be ready.
   *
   * @emits [[EVENTS.DOM_READY]]
   */
  private async waitForDom(): Promise<void> {
    this.debug("Waiting for the DOM to become ready");

    return new Promise(resolve => {
      if (["interactive", "complete"].includes(document.readyState)) {
        resolve();
        this.debug("DOM ready");
        this.emit(EVENTS.DOM_READY);
      } else {
        document.addEventListener("DOMContentLoaded", () => resolve());
      }
    });
  }

  /**
   * Attach a listener to the window resize event for redrawing the charts.
   */
  private attachResizeHandler(): void {
    let debounced: number;

    addEvent(window, "resize", () => {
      clearTimeout(debounced);

      debounced = setTimeout(() => {
        this.debug("Window re-sized, redrawing...");

        this.emit(EVENTS.DRAW);
      }, this.options.debounceTimeout);
    });
  }
}
