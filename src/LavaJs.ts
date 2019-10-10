import { TinyEmitter } from "tiny-emitter";

import Chart from "./Chart";
import Dashboard from "./Dashboard";
import DataQuery from "./DataQuery";
import { InvalidCallback, RenderableNotFound } from "./Errors";
import GoogleLoader from "./GoogleLoader";
import { addEvent, defaultOptions, Logger } from "./lib";
import Renderable from "./Renderable";
import { ChartUpdateReturn, LavaJsOptions, RenderableTmpl } from "./types";

/**
 * Version of the LavaJs module
 */
export const VERSION = "__VERSION__";

export const logger = new Logger(VERSION);

/**
 * Google Chart API wrapper library
 *
 * This module can be used as a standalone, browser based library, or in
 * conjunction with the PHP library, <a href="https://github.com/kevinkhill/lavacharts">Lavacharts</a>.
 *
 * @class
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2019, Kevin Hill
 * @license   http://opensource.org/licenses/MIT MIT
 */
export default class LavaJs extends TinyEmitter {
  static readonly logger = logger;

  /**
   * Version of the LavaJs module
   */
  static readonly VERSION = "__VERSION__";

  /**
   * Configurable options for the library
   */
  private options: LavaJsOptions = defaultOptions;

  /**
   * Chart storage
   */
  private readonly volcano: Map<string, Renderable> = new Map();

  /**
   * Ready Callback
   */
  private readyCallback!: Function;

  /**
   * Loader class for appending the google script and making window.google available
   */
  private readonly loader: GoogleLoader;

  /**
   * Create a new instance of the LavaJs library
   */
  constructor(options?: LavaJsOptions) {
    super();

    if (options) this.configure(options);

    this.loader = new GoogleLoader(this.options);
  }

  /**
   * Forward the autoRun option to the main object to check in page.
   */
  get autorun(): boolean {
    return typeof this.options.autoRun === "undefined"
      ? true
      : this.options.autoRun;
  }

  /**
   * Configure the LavaJs module.
   */
  public configure(options: LavaJsOptions): void {
    this.options = Object.assign(this.options, options);
  }

  /**
   * Initializes the library by loading google to the window.
   */
  public async loadGoogle(): Promise<any> {
    if (this.loader.isLoaded === false) {
      await this.loader.loadGoogle();
    }
  }

  /**
   * Runs the LavaJs.js module
   *
   * @emits {ready}
   */
  public async run(): Promise<any> {
    logger.log("Loaded with options", this.options);

    if (this.options.responsive === true) {
      this.attachRedrawHandler();
    }

    await this.loadGoogle();

    logger.log("Google is ready!", window.google);

    await this.renderAll();

    // try {

    // } catch (error) {
    //   this.emit("error", error);
    // }

    // this.emit("ready");

    if (typeof this.readyCallback === "function") {
      logger.log("ready!");
      this.readyCallback();
    }
  }

  public renderAll(): Promise<any>[] {
    const promises: Promise<any>[] = [];

    this.volcano.forEach(renderable => {
      logger.log(`Rendering ${renderable.uuid}`);

      promises.push(renderable.run());
    });

    return promises;
  }

  /**
   * Create a new {@link DataQuery} for a {@link Renderable}
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
   * Static method for creating new Charts.
   *
   * The payload payload can come from Lavacharts or manually if used
   * as an independent library.
   */
  public chart(payload: RenderableTmpl): Chart {
    logger.log(`Creating a new Chart`);

    return new Chart(payload);
  }

  /**
   * Static method for creating new Charts and Dashboards from a payload definition.
   *
   * The payload payload can come from Lavacharts or manually if used
   * as an independent library.
   */
  public create(payload: RenderableTmpl): Renderable {
    logger.log(`Creating a new ${payload.type}:`, payload);

    if (payload.type === "Dashboard") {
      return new Dashboard(payload);
    }

    return new Chart(payload);
  }

  /**
   * Stores or creates then stores a {@link Renderable} within the module.
   *
   * @todo If the library has ran, and is ready, loading new charts will force a redrawAll of all the currently drawn charts.
   */
  public store(renderable: Renderable): void {
    // if (renderable instanceof Renderable === false) {
    //   renderable = this.create(renderable);
    // }
    // const newRenderable = this.create(renderable);

    logger.log(`Storing ${renderable.uuid}`);

    this.loader.addPackage(renderable.package);

    this.volcano.set(renderable.label, renderable);

    //if (this.isReady) {
    //    this.redrawAll();
    //}
  }

  /**
   * Stores many charts at once.
   */
  public storeMany(renderables: Renderable[]): void {
    renderables.forEach(this.store, this);
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
   * @throws {RenderableNotFound}
   */
  public get(label: string): Renderable | undefined {
    if (this.volcano.has(label) === false) {
      throw new RenderableNotFound(label);
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

    this.readyCallback = callback.bind(this);
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
      logger.log(`Nothing to redraw.`);

      return false;
    }

    logger.log(`Redrawing ${this.volcano.size} renderables.`);

    this.volcano.forEach(renderable => {
      logger.log(`Redrawing ${renderable.uuid}`);

      renderable.draw();
    });

    return true;
  }

  /**
   * Attach a listener to the window resize event for redrawing the charts.
   */
  private attachRedrawHandler(): void {
    let debounced: number;

    addEvent(window, "resize", () => {
      // let redrawAll = this.redrawAll().bind(this);

      clearTimeout(debounced);

      debounced = setTimeout(() => {
        logger.log("Window re-sized, redrawing...");

        this.redrawAll();
      }, this.options.debounceTimeout);
    });
  }
}
