// import Debug from "debug";

import Chart from "./Chart";
import Dashboard from "./Dashboard";
import DataQuery from "./DataQuery";
import DefaultOptions from "./DefaultOptions";
import Drawable from "./Drawable";
import { DrawableNotFound, InvalidCallback } from "./Errors";
import Eventful, { EVENTS } from "./Eventful";
import GoogleLoader from "./GoogleLoader";
import { addEvent, debug } from "./lib";
// import { actions, store } from "./lib/store";
import { ChartUpdateReturn, Google, LavaJsOptions } from "./types";
import { ChartInterface } from "./types/chart";
import { DrawableInterface, DrawableState } from "./types/drawable";

type LavaState = Record<string, DrawableState>;

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
  private options: LavaJsOptions = DefaultOptions;

  /**
   * Drawables registy
   */
  private registry: LavaState = {};

  /**
   * Chart storage
   */
  private readonly volcano: Map<string, Drawable> = new Map();

  /**
   * Ready Callback
   */
  // private readyCallback = (): void => {};

  /**
   * Loader class for appending the google script and making window.google available
   */
  private readonly loader: GoogleLoader;

  /**
   * Create a new instance of the LavaJs library
   *
   * When creating an instance of LavaJs, the default behavior is
   * to check if `window.google !== undefined` and if so, then we
   * start the {@link GoogleLoader}.
   *
   * The {@link GoogleLoader} will check the <head> for the
   * gstatic loader and if not found, inject it into the <head>.
   */
  constructor(options?: LavaJsOptions) {
    super();

    this.debug = debug;
    this.debug(`LavaJs v${LavaJs.VERSION}`);

    if (options) {
      this.configure(options);
    }

    this.debug("Loaded with options:");
    this.debug(this.options);

    this.loader = new GoogleLoader(this.options);

    // Relay the event forward from the loader
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
   * Get a reference to the `window.google`
   */
  public get google(): Google {
    return window.google;
  }

  /**
   * Forward the autoloadGoogle option to the main object to check in page.
   */
  public get autoloadGoogle(): boolean {
    return typeof this.options.autoloadGoogle === "boolean"
      ? this.options.autoloadGoogle
      : true;
  }

  /**
   * Forward the autodraw option to the main object to check in page.
   */
  public get autodraw(): boolean {
    return typeof this.options.autodraw === "boolean"
      ? this.options.autodraw
      : true;
  }

  public getOption(
    option: keyof LavaJsOptions
  ): string | number | boolean | string[] | undefined {
    return this.options[option];
  }

  /**
   * Get a list of all the registered charts
   */
  public getRegistry(): LavaState {
    return this.registry;
  }

  /**
   * Configure the LavaJs module.
   */
  public configure(options: LavaJsOptions): void {
    this.options = Object.assign(this.options, options);
  }

  /**
   * Initializes the library by loading the Google Chart API.
   */
  // public async loadGoogle(): Promise<void> {
  //   return this.loader.loadGoogle();
  // }

  /**
   * Get a reference to the window.google object or load it if needed.
   */
  // public async getGoogle(): Promise<Google> {
  //   if (this.loader.googleIsDefined === false) {
  //     await this.loadGoogle();
  //   }

  //   return window.google;
  // }

  /**
   * Runs the LavaJs.js module
   *
   * @emits {ready}
   */
  public async draw(): Promise<any> {
    await this.waitForDom();

    // this.emitEvent(EVENTS.READY);

    // this.readyCallback();
  }

  /**
   * Create a new {@link DataQuery} for a {@link Drawable}
   *
   * If a String is passed, then a new {@link DataQuery} is created with no options.
   * If an Object is passed, then the query must be defined by the object.
   */
  public query(url: string | DataQuery): DataQuery {
    if (typeof url === "string") {
      return new DataQuery(url);
    } else {
      return DataQuery.create(url);
    }
  }

  /**
   * Create a new {@link Chart} from an Object
   */
  public chart(payload: ChartInterface): Chart {
    const chart = new Chart(payload);

    return this.register(chart);
  }

  /**
   * Create a new {@link Dashboard} from an Object
   */
  public dashboard(payload: DrawableInterface): Dashboard {
    return new Dashboard(payload);
  }

  /**
   * Retrieve a {@link Chart} / {@link Dashboard} from storage.
   *
   * The {@link Chart} object has the user defined properties such as data, options, formats, etc.
   *
   * The Google Chart object is available as ".googleChart" from the returned LavaChart.
   * It can be used to access any of the available methods such as
   * getImageURI() or getChartLayoutInterface().
   *
   * See https://google-developers.appspot.com/chart/interactive/docs/gallery/linechart#methods
   * for some examples relative to LineCharts.
   *
   * @throws {DrawableNotFound}
   */
  public get(label: string): Drawable | undefined {
    if (this.volcano.has(label) === false) {
      throw new DrawableNotFound(label);
    }

    return this.volcano.get(label);
  }

  /**
   * Assigns a callback for when the charts are ready to be interacted with.
   *
   * This is used to wrap calls to lava.loadData() or lava.loadOptions()
   * to protect against accessing charts that aren't loaded yet
   *
   * @throws {InvalidCallback}
   */
  public ready(callback: Function): void {
    if (typeof callback !== "function") {
      throw new InvalidCallback(callback);
    }

    // this.readyCallback = callback.bind(this);
  }

  /**
   * Loads new data into the chart and redraws.
   *
   *
   * Used with an AJAX call to a PHP method returning DataTable->toPayload(),
   * a chart can be dynamically update in page, without reloads.
   */
  public async loadData(
    label: string,
    payload: object
  ): Promise<ChartUpdateReturn | void> {
    const chart = this.get(label);

    if (chart) {
      return chart.updateData(payload);
    }
  }

  /**
   * Loads new options into a chart and redraws.
   *
   * Used with an AJAX call, or javascript events, to load a new array of options into a chart.
   * This can be used to update a chart dynamically, without reloads.
   */
  public async loadOptions(
    label: string,
    payload: object
  ): Promise<ChartUpdateReturn | void> {
    const chart = this.get(label);

    if (chart) {
      return chart.updateOptions(payload);
    }
  }

  /**
   * Redraws all of the registered charts on screen.
   *
   * This method is attached to the window resize event with debouncing
   * to make the charts responsive to the browser resizing.
   */
  public redrawAll(): boolean {
    if (this.volcano.size === 0) {
      this.debug(`Nothing to redraw.`);

      return false;
    }

    this.debug(`Redrawing ${this.volcano.size} drawables.`);

    this.volcano.forEach(drawable => {
      this.debug(`Redrawing ${drawable.id}`);

      drawable.draw();
    });

    return true;
  }

  /**
   * Register a {@link Drawable} with the module.
   *
   * The registry keeps a record of all created charts, which enables
   * the event firing through the common interface of `window.lava`
   */
  private register<T extends Drawable>(drawable: T): T {
    this.debug(`Registering ${drawable.id}`);

    if (drawable instanceof Chart) {
      this.loader.addPackage(drawable.package);
    }

    this.registry[drawable.id] = {
      drawn: false,
      needsRedraw: false
    };

    this.volcano.set(drawable.type, drawable);

    return drawable;
  }

  /**
   * Simple Promise for the DOM to be ready.
   */
  private async waitForDom(): Promise<void> {
    this.debug("Waiting for the DOM to become ready");

    return new Promise(resolve => {
      if (
        document.readyState === "interactive" ||
        document.readyState === "complete"
      ) {
        resolve();
        this.emit(EVENTS.DOM_READY);
        this.debug("DOM ready");
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
