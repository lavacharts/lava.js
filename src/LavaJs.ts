import Chart from "./Chart";
import Dashboard from "./Dashboard";
import DataQuery from "./DataQuery";
import DefaultOptions from "./DefaultOptions";
import Drawable from "./Drawable";
import { DrawableNotFound, InvalidCallback } from "./Errors";
import Eventful, { EVENTS } from "./Eventful";
import GoogleLoader from "./GoogleLoader";
import { addEvent } from "./lib";
import { ConsoleLogger, getLogger } from "./lib/logger";
import {
  ChartUpdateReturn,
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
  private options: LavaJsOptions = DefaultOptions;

  /**
   * Drawables registy
   */
  private registry: LavaState = {};

  /**
   * Chart storage
   */
  private readonly volcano: Map<string, Chart | Dashboard> = new Map();

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

    if (options) {
      this.configure(options);
    }

    this.debug = getLogger();

    this.options.debug ? ConsoleLogger.enable() : ConsoleLogger.disable();

    this.debug(`LavaJs v${LavaJs.VERSION}`);
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
   * Configure the LavaJs module.
   */
  public configure(options: LavaJsOptions): void {
    this.options = Object.assign(this.options, options);
  }

  /**
   * Runs the LavaJs.js module
   *
   * @emits {@link EVENTS.READY}
   */
  public async draw(): Promise<any> {
    await this.waitForDom();

    // this.readyCallback();
  }

  /**
   * Alert all charts to redraw.
   *
   * @emits {@link EVENTS.DRAW}
   */
  public redraw(): void {
    this.emitEvent(EVENTS.DRAW);
  }

  /**
   * Compose a URL to a Google Sheet
   *
   * Pass an ID and range in A1 notation to create an URL
   * to use with a {@link DataQuery}.
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
   * This can be used to create custom {@link DataQuery}s
   */
  public queryFactory(): DataQueryFactory {
    return (payload: DataQueryInterface): DataQuery =>
      DataQuery.create(payload);
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
   * Get a list of all the registered charts
   */
  public getRegistry(): LavaState {
    return this.registry;
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
      return chart.update({ data: payload });
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
      return chart.update({ options: payload });
    }
  }

  /**
   * Register a {@link Drawable} with the module.
   *
   * The registry keeps a record of all created charts, which enables
   * the event firing through the common interface of `window.lava`
   */
  private register<T extends Chart | Dashboard>(drawable: T): T {
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
   * Promise for the DOM to be ready.
   *
   * @emits {@link EVENTS.DOM_READY}
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
