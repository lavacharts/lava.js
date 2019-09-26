import EventEmitter from "events";

import { GOOGLE_API_VERSION,GOOGLE_LOADER_URL } from ".";
import Chart from "./Chart";
import Dashboard from "./Dashboard";
import DataQuery from "./DataQuery";
import DefaultOptions from "./DefaultOptions";
import { InvalidCallback, RenderableNotFound } from "./Errors";
import Renderable from "./Renderable";
import { LavaJsOptions, RenderableTmpl } from "./types";
import * as Utils from "./Utils";
import { getType } from "./Utils";

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
  static Chart: Chart;
  static Dashboard: Dashboard;
  static DataQuery: DataQuery;
  static Renderable: Renderable;

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
   * Create a new instance of the LavaJs library
   */
  constructor(options?: LavaJsOptions) {
    super();

    this.options = DefaultOptions;

    if (options) {
      this.options = Object.assign(this.options, options);
    }
  }

  /**
   * Flag that will be true once window.google is available in page.
   */
  public get googleIsLoaded(): boolean {
    return typeof window.google !== "undefined";
  }

  /**
   * Flag that will be true once Google's Static Loader is in page.
   */
  public get googleLoaderInPage(): boolean {
    const scripts = document.getElementsByTagName("script");

    for (const script of scripts) {
      if (script.src === GOOGLE_LOADER_URL) {
        return true;
      }
    }

    return false;
  }

  /**
   * Initializes the library by loading google to the window.
   */
  public async init(): Promise<google.Google> {
    if (this.googleIsLoaded === false) {
      await this.loadGoogle();
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

    this.addPackages(renderable.packages);

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
   * @public
   * @param  {String} label
   * @throws {LavaJs.Errors.RenderableNotFound}
   * @return {Chart|Dashboard}
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
   * @throws {LavaJs.Errors.InvalidCallback}
   * @return {void}
   */
  public ready(callback: Function): void {
    if (typeof callback !== "function") {
      throw new InvalidCallback(callback);
    }

    this.readyCallback = callback.bind(this);
  }

  //noinspection JSUnusedGlobalSymbols
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
   * Adds to the list of packages that Google needs to load.
   *
   * @private
   * @param {String|String[]} packages Single or array of package names to add.
   * @return {void}
   */
  private addPackages(packages: string | string[]): void {
    if (typeof packages === "string") {
      this.packages.add(packages);
    }

    if (getType(packages) === "Array") {
      packages = new Set(packages);

      this.packages = new Set([this.packages, ...packages]);
    }
  }

  /**
   * Load the Google Static Loader and resolve the promise when ready.
   */
  private async loadGoogle(): Promise<any> {
    console.log("[lava.js] Resolving Google...");

    if (!this.googleLoaderInPage) {
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
  private googleChartLoader(): Promise<any> {
    return new Promise(resolve => {
      const config = {
        language: this.options.locale
      } as google.GoogleChartConfig;

      config.packages =
        this.packages.size > 0 ? [...this.packages] : ["corechart"];

      if (this.options.mapsApiKey !== "") {
        config.mapsApiKey = this.options.mapsApiKey;
      }

      console.log("[lava.js] Loading Google with config:", config);

      window.google.charts.load(GOOGLE_API_VERSION, config);

      window.google.charts.setOnLoadCallback(resolve);
    });
  }

  /**
   * Create a new script tag for the Google Static Loader
   */
  private async addGoogleScriptToHead(): Promise<any> {
    return new Promise(resolve => {
      const script = document.createElement("script");

      script.type = "text/javascript";
      script.async = true;
      script.src = GOOGLE_LOADER_URL;
      script.onload = script.onreadystatechange = event => {
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

  /**
   * Attach a listener to the window resize event for redrawing the charts.
   */
  private attachRedrawHandler(): void {
    if (this.options.responsive === true) {
      let debounced = 0;

      Utils.addEvent(window, "resize", () => {
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
