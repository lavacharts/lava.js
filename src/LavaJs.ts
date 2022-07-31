import {
  action,
  makeObservable,
  observable,
  reaction,
  trace,
  when
} from "mobx";

import pkg from "../package.json";
import { Binding } from "./Binding";
import { Chart } from "./Chart";
import { Dashboard } from "./Dashboard";
import { DefaultOptions } from "./DefaultOptions";
import { GoogleLoader } from "./lib/GoogleLoader";
import { box, debounce, domReady, makeDebugger } from "./lib/utils";

import type {
  ChartDefinition,
  ChartWrapperSpec,
  ControlWrapperSpec,
  LavaJsOptions,
  OneOrArrayOf
} from "./types";

const debug = makeDebugger("MainInstance");

/**
 * LavaJs - Google Chart API
 *
 * This module can be used as a standalone, browser based library, or in
 * conjunction with the PHP library Lavacharts
 *
 * @link https://github.com/kevinkhill/lavacharts
 */
export default class LavaJs {
  /** LavaJs version */
  static readonly VERSION = pkg.version;

  /** Default options for the library */
  static defaults = DefaultOptions;

  /** Configurable options for the library */
  options: LavaJsOptions;

  /** Flag for when `window.google !== undefined` */
  googleReady = false;

  /** Flag for when `document.readyState === "complete"` */
  domReady = false;

  /** Flag for when all resources are loaded to draw */
  readyToDraw = false;

  /** Chart registry */
  readonly registry: Record<string, Chart | Dashboard> = {};

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
   * google static loader and if not found, inject it into the <head>.
   *
   * @emits [[Events.GOOGLE_READY]]
   * @emits [[Events.DRAW]]
   */
  constructor(options?: Partial<LavaJsOptions>) {
    makeObservable(this, {
      domReady: observable,
      readyToDraw: observable,
      toggleDomReady: action,
      toggleReadyToDraw: action
    });

    this.options = {
      ...DefaultOptions,
      ...options
    };

    debug(`Initializing LavaJs`, this.options);

    this.loader = new GoogleLoader({ language: this.options.language });

    if (this.options.responsive === true) {
      this.attachResizeHandler();
    }

    if (this.options.autoloadGoogle) {
      reaction(
        () => this.loader.googleIsDefined,
        () => {
          trace();
          debug("this.loader.googleIsDefined");
          this.toggleReadyToDraw();
        }
      );
      this.loader.loadGoogle();
    }

    const disposer = when(
      () => this.loader.googleReady && this.domReady,
      () => {
        if (this.options.autodraw) {
          debug("reacting to this.readyToDraw.");
          this.draw();
          disposer();
        }
      }
    );

    domReady().then(() => {
      debug(`DOM Ready.`);
      this.toggleDomReady();
    });
  }

  // mobx Action
  toggleDomReady() {
    this.domReady = !this.domReady;
  }

  // mobx Action
  toggleReadyToDraw() {
    this.readyToDraw = !this.readyToDraw;
  }

  /**
   * Get the instance of the GoogleLoader
   */
  getLoader(): GoogleLoader {
    return this.loader;
  }

  /**
   * Get the value of an option from the library
   */
  getOption<T extends keyof LavaJsOptions>(option: T): LavaJsOptions[T] {
    if (typeof this.options[option] === "undefined") {
      throw new Error(`${String(option)} is not a valid option`);
    }

    return this.options[option];
  }

  /**
   * Override the default options of the module.
   */
  configure(options: LavaJsOptions): this {
    this.options = {
      ...this.options,
      ...options
    };

    return this;
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
  async draw(charts?: ChartDefinition | ChartDefinition[]): Promise<void> {
    if (charts) {
      box(charts).forEach(chartDef => this.chart(chartDef));
    }

    await domReady();

    Object.values(this.registry).forEach(chart => {
      debug(`Drawing ${chart.id}`);
      chart.draw();
    });
  }

  /**
   * Create a new [[Chart]] from an Object
   */
  chart(payload: ChartDefinition): Chart {
    const chart = new Chart(payload);

    debug(`Registering ${chart.id}`);

    return this.register(chart);
  }

  /**
   * Create multiple [[Chart]]s from an array of Objects
   */
  charts(charts: ChartDefinition[]): void {
    charts.forEach(def => this.chart(def));
  }

  /**
   * Create a new [[Dashboard]] from an Object
   */
  dashboard(payload: Dashboard): Dashboard {
    const dashboard = new Dashboard(payload);

    return this.register(dashboard);
  }

  /**
   * Create [[Dashboard]] [[Binding]]s
   *
   * Depending on the parameters, 4 different bindings can be produced:
   * - bind(control  , chart  ) => OneToOne Binding
   * - bind(control[], chart  ) => ManyToOne Binding
   * - bind(control  , chart[]) => OneToMany Binding
   * - bind(control[], chart[]) => ManyToMany Binding
   */
  bind(
    controlWraps: OneOrArrayOf<ControlWrapperSpec>,
    chartWraps: OneOrArrayOf<ChartWrapperSpec>
  ): Binding {
    return Binding.create(controlWraps, chartWraps);
  }

  /**
   * Create an empty [[Binding]] to use as a builder.
   *
   * The binding provides the methods which both return `this` for chaining
   *  - addChart() to push a chartWrapper into the binding
   *  - addControl() to push a controlWrapper into the binding
   *
   *  @example ```
   * const oneToOneBinding = lava.binding().addControl({}).addChart({});
   * ```
   */
  binding(): Binding {
    return new Binding();
  }

  /**
   * Register a [[Drawable]] with the module.
   *
   * The registry keeps a record of all created charts, which enables
   * the event firing through the common interface of `window.lava`
   */
  private register<T extends Chart | Dashboard>(drawable: T): T {
    debug(`Registering ${drawable.id} packages with the Google Loader`);

    this.loader.register(drawable);

    this.registry[drawable.id] = drawable;

    return drawable;
  }

  /**
   * Attach a listener to the window resize event for redrawing the charts.
   */
  private attachResizeHandler() {
    window.addEventListener(
      "resize",
      debounce(() => {
        debug(`Window re-sized, redrawing...`);
        this.draw();
      }, this.options.debounceTimeout)
    );
  }
}

export const lava = new LavaJs();
