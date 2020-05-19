import { TinyEmitter } from "tiny-emitter";

import { Binding } from "./Binding";
import { Chart } from "./Chart";
import { Dashboard } from "./Dashboard";
import { DefaultOptions } from "./DefaultOptions";
import { Events } from "./Events";
import { domLoading, GoogleLoader, googleLoading } from "./google";
import { makeDebugger } from "./lib";
import { addEvent } from "./lib/addEvent";
import { LavaJsOptions, OneOrArrayOf } from "./types";
import { Google } from "./types/google";
import { ChartWrapperSpec, ControlWrapperSpec } from "./types/wrapper";

const debug = makeDebugger();

/**
 * LavaJs - Google Chart API
 *
 * This module can be used as a standalone, browser based library, or in
 * conjunction with the PHP library Lavacharts
 *
 * @link https://github.com/kevinkhill/lavacharts
 */
export class LavaJs extends TinyEmitter {
  /** LavaJs version */
  static readonly VERSION = "__VERSION__";

  /** Default options for the library */
  static defaults = DefaultOptions;

  /** Configurable options for the library */
  options: LavaJsOptions;

  /** Flag for when `window.google !== undefined` */
  googleReady = false;

  /** Flag for when `document.readyState === "complete"` */
  domReady = false;

  /** Drawables registy */
  readonly registry: Record<string, any> = {};

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
  constructor(options = DefaultOptions) {
    super();

    this.options = options;

    debug(`Initializing LavaJs v${LavaJs.VERSION}`, this.options);

    if (this.options.responsive === true) {
      this.attachResizeHandler();
    }

    this.loader = new GoogleLoader({
      language: this.options.language
    });

    this.loader.on(Events.GOOGLE_READY, (google: Google) => {
      this.googleReady = true;

      this.emit(Events.GOOGLE_READY, google);
    });

    if (!this.loader.googleIsDefined && this.options.autoloadGoogle) {
      this.loader.loadGoogle();
    }
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
  getOption(option: keyof LavaJsOptions, whenUndefined: any): any {
    if (typeof this.options[option] === "undefined") {
      if (typeof whenUndefined !== "undefined") {
        return whenUndefined;
      } else {
        throw new Error(`${String(option)} is not a valid option`);
      }
    }

    return this.options[option];
  }

  /**
   * Override the default options of the module.
   */
  configure(options: LavaJsOptions): this {
    this.options = Object.assign(this.options, options);

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
  async draw(): Promise<void> {
    await domLoading();
    await googleLoading();

    this.emit(Events.DRAW);
  }

  /**
   * Create a new [[Chart]] from an Object
   */
  chart(payload: Chart): Chart {
    const chart = new Chart(payload);

    return this.register(chart);
  }

  /**
   * Create multiple [[Chart]]s from an array of Objects
   */
  charts(charts: Chart[]): Chart[] {
    return charts.map(this.chart, this);
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

    this.registry[drawable.id] = {};

    return drawable;
  }

  /**
   * Attach a listener to the window resize event for redrawing the charts.
   */
  private attachResizeHandler(): void {
    let debounced: any;

    addEvent(window, "resize", () => {
      clearTimeout(debounced);

      debounced = setTimeout(() => {
        debug(`Window re-sized, firing <${Events.DRAW}>`);

        this.emit(Events.DRAW);
      }, this.options.debounceTimeout);
    });
  }
}
