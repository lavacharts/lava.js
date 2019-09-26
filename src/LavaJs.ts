import EventEmitter from "events";

import { GOOGLE_API_VERSION, GOOGLE_LOADER_URL } from ".";
import Chart from "./Chart";
import Dashboard from "./Dashboard";
import DataQuery from "./DataQuery";
import DefaultOptions from "./DefaultOptions";
import { InvalidCallback, RenderableNotFound } from "./Errors";
import GoogleLoader from "./GoogleLoader";
import Renderable from "./Renderable";
import { LavaJsOptions, RenderableTmpl } from "./types";
import { addEvent, getType } from "./Utils";

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
export default class LavaJs extends EventEmitter {
  /**
   * Version of the LavaJs module
   */
  static VERSION = "__VERSION__";

  /**
   * Configurable options for the library
   */
  private options: LavaJsOptions;

  /**
   * Pacakges to render
   */
  private packages: Set<string> = new Set();

  /**
   * Chart storage
   */
  private volcano: Map<string, Renderable> = new Map();

  /**
   * Ready Callback
   */
  private readyCallback: null | Function = null;

  /**
   * Loader class for appending the google script and making window.google available
   */
  private loader: GoogleLoader;

  /**
   * Create a new instance of the LavaJs library
   */
  constructor(options?: LavaJsOptions) {
    super();

    if (options) {
      this.options = Object.assign(options, DefaultOptions);
    } else {
      this.options = DefaultOptions;
    }

    this.loader = new GoogleLoader(this.options);
  }

  /**
   * Initializes the library by loading google to the window.
   */
  public async init(): Promise<any> {
    if (this.loader.isLoaded === false) {
      await this.loader.loadGoogle();
    }

    console.log("[lava.js] Google is ready", window.google);

    return window.google;
  }

  /**
   * Runs the LavaJs.js module
   *
   * @emits {ready}
   */
  public async run(): Promise<any> {
    const runPromises: Promise<any>[] = [];

    console.log(`[lava.js] v${LavaJs.VERSION} Running...`);
    console.log("[lava.js] Loading options:", this.options);

    this.attachRedrawHandler();

    try {
      await this.init();
    } catch (error) {
      this.emit("error", error);
    }

    this.volcano.forEach(renderable => {
      console.log(`[lava.js] Rendering ${renderable.uuid}`);

      runPromises.push(renderable.run());
    });

    try {
      await Promise.all(runPromises);
    } catch (error) {
      this.emit("error", error);
    }

    console.log("[lava.js] Ready!");

    this.emit("ready");

    if (typeof this.readyCallback === "function") {
      this.readyCallback();
    }
  }

  /**
   * Create a new {@link DataQuery} for a {@link Renderable}
   *
   * If a String is passed, then a new {@link DataQuery} is created with no options.
   * If an Object is passed, then the query must be defined by the object.
   */
  public query(url: string | object): DataQuery {
    return new DataQuery(url);
  }

  /**
   * Static method for creating new Charts and Dashboards from a payload definition.
   *
   * The payload payload can come from Lavacharts or manually if used
   * as an independent library.
   */
  public create(payload: RenderableTmpl | Renderable): Chart | Dashboard {
    console.log(`[lava.js] Creating a new ${payload.type}:`, payload);

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
  public store(renderable: RenderableTmpl | Renderable): Chart | Dashboard {
    if (renderable instanceof Renderable === false) {
      renderable = this.create(renderable);
    }

    console.log(`[lava.js] Storing ${renderable.uuid}`);

    this.loader.addPackages(renderable.packages);

    this.volcano.set(renderable.label, renderable);

    //if (this.isReady) {
    //    this.redrawAll();
    //}

    return renderable;
  }

  /**
   * Retrieve a {@link Chart} / {@link Dashboard} from storage.
   *
   * The {@link Chart} object has the user defined properties such as data, options, formats, etc.
   *
   * The Google Chart object is available as ".gchart" from the returned LavaChart.
   * It can be used to access any of the available methods such as
   * getImageURI() or getChartLayoutInterface().
   *
   * See https://google-developers.appspot.com/chart/interactive/docs/gallery/linechart#methods
   * for some examples relative to LineCharts.
   *
   * @throws {RenderableNotFound}
   */
  public get(label: string): Chart | Dashboard {
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
   * @public
   * @param {Function} callback
   * @throws {InvalidCallback}
   * @return {void}
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
   * Used with an AJAX call to a PHP method returning DataTable->topayload(),
   * a chart can be dynamically update in page, without reloads.
   */
  public async loadData(
    label: string,
    payload: object,
    callback?: Function
  ): Promise<any> {
    const chart = this.get(label);

    await chart.setData(payload);

    chart.draw();

    if (typeof callback === "function") {
      callback(chart.data, chart.gchart);
    }
  }

  //noinspection JSUnusedGlobalSymbols
  /**
   * Loads new options into a chart and redraws.
   *
   *
   * Used with an AJAX call, or javascript events, to load a new array of options into a chart.
   * This can be used to update a chart dynamically, without reloads.
   */
  public loadOptions(
    label: string,
    payload: object,
    callback?: Function
  ): void {
    //TODO: test this
    const chart = this.get(label);

    chart.options = Object.assign(chart.options, payload);

    try {
      chart.draw();
    } catch (error) {
      this.emit("error", error);
    }

    if (typeof callback === "function") {
      callback(chart.data, chart.gchart);
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
      console.log(`[lava.js] Nothing to redraw.`);

      return false;
    }

    console.log(`[lava.js] Redrawing ${this.volcano.size} renderables.`);

    this.volcano.forEach(renderable => {
      console.log(`[lava.js] Redrawing ${renderable.uuid}`);

      renderable.draw();
    });

    return true;
  }

  /**
   * Attach a listener to the window resize event for redrawing the charts.
   */
  private attachRedrawHandler(): void {
    if (this.options.responsive === true) {
      let debounced!: NodeJS.Timeout;

      addEvent(window, "resize", () => {
        // let redrawAll = this.redrawAll().bind(this);

        clearTimeout(debounced);

        debounced = setTimeout(() => {
          console.log("[lava.js] Window re-sized, redrawing...");

          this.redrawAll();
        }, this.options.debounceTimeout);
      });
    }
  }
}