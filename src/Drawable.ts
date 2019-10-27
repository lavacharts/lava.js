import DataQuery from "./DataQuery";
import { DataError, ElementIdNotFound } from "./Errors";
import Eventful, { EVENTS } from "./Eventful";
import LavaJs from "./LavaJs";
import { createDataTable, getLava } from "./lib";
import { getLogger } from "./lib/logger";
import { ChartUpdateReturn, LavaJsOptions } from "./types";
import { ChartEvents, ChartInterface } from "./types/chart";
import { DrawableInterface, OptionDataPayload } from "./types/drawable";
import { Formatter } from "./types/formats";

/**
 * The [[Drawable]] class is the base for [[Chart]]s and [[Dashboard]]s
 * to share common methods between the two types
 */
export default class Drawable extends Eventful {
  /**
   * Configurable options
   */
  public options: LavaJsOptions;

  /**
   * DataTable for the [[Chart]] / [[Dashboard]]
   */
  public data!: google.visualization.DataTable;

  /**
   * Google chart object created once the [[Chart]] / [[Dashboard]]
   * has been rendered
   */
  public googleChart!: any;

  /**
   * Unique identifier for the [[Chart]] / [[Dashboard]].
   */
  public get id(): string {
    return this.type + ":" + this.label;
  }

  /**
   * HTMLElement into which the chart will be rendered.
   */
  public get container(): HTMLElement | null {
    return document.getElementById(this.elementId);
  }

  /**
   * Element ID of the DOM node for the container
   */
  public readonly elementId: string;

  /**
   * Unique label for the [[Chart]] / [[Dashboard]].
   */
  public readonly label: string;

  /**
   * Type of [[Drawable]]
   */
  public readonly type: string;

  /**
   * Formatters for the DataTable
   */
  protected formats: Formatter[];

  /**
   * Event listeners for the Drawable
   */
  protected events: Record<ChartEvents, CallableFunction>;

  /**
   * Reference to the `window.lava` object
   */
  protected readonly _lava!: LavaJs;

  /**
   * The initial source of data for the DataTable
   */
  private readonly initialData: any;

  /**
   * Create a new Drawable
   *
   * @param {Object} json
   */
  constructor(drawable: ChartInterface | DrawableInterface) {
    super();

    this.type = drawable.type;
    this.label = drawable.label;
    this.initialData = drawable.data;
    this.elementId = drawable.elementId;

    this.options = drawable.options || {};
    this.formats = drawable.formats || [];
    this.events = drawable.events || {};

    this.debug = getLogger().extend(this.id);

    getLogger().extend("Drawable")(`Building new ${drawable.type}`);
    getLogger().extend("Drawable")(this);

    this._lava = getLava();

    this.debug(`Registering <${EVENTS.DRAW}> event relay.`);

    this._lava.on(EVENTS.DRAW, () => {
      this.debug(`<${EVENTS.DRAW}> event recieved.`);
      this.draw();
    });
  }

  /**
   * Draws the [[Chart]] / [[Dashboard]] with the predefined data and options.
   *
   * @public
   */
  public async draw(): Promise<void> {
    this.debug("Drawing...");

    if (!this.container) {
      throw new ElementIdNotFound(this.elementId);
    }

    const payload =
      typeof this.initialData === "string"
        ? new DataQuery(this.initialData)
        : this.initialData;

    await this.setData(payload);

    if (this.data instanceof google.visualization.DataTable !== true) {
      throw new DataError(`There was a error setting the data for ${this.id}`);
    }

    if (this.formats) {
      this.applyFormats();
    }

    Object.keys(this.events).forEach(event => {
      const e = event as ChartEvents;

      this.registerEventHandler(e, this.events[e]);
    });

    this.googleChart.draw(this.data, this.options);
  }

  /**
   * Overidding the `on()` method from the [[TinyEmitter]] to
   * register the handlers to our own map.
   */
  public on(event: ChartEvents, handler: Function, ctx?: any): this {
    this.debug(`Attaching <${event}> handler`);

    if (ctx) {
      this.events[event] = handler.bind(ctx);
    } else {
      this.events[event] = handler;
    }

    return this;
  }

  /**
   * Convenience method for setting options dynamicly
   */
  public async set(optionRef: string, value: any): Promise<ChartUpdateReturn> {
    // if (optionRef.includes(".")) {
    //   const options = optionRef.split(".");
    // }

    const payload = {
      [optionRef]: value
    };

    this.updateOptions(payload);

    return {
      data: this.data,
      chart: this.googleChart,
      options: this.options
    };
  }

  /**
   * Sugar method for updating the chart's data directly
   */
  public async updateData(
    payload: any,
    autoRedraw = true
  ): Promise<ChartUpdateReturn> {
    this.debug("updatingData()");
    this.debug(payload);

    return this.update({ data: payload }, autoRedraw);
  }

  /**
   * Sugar method for updating the chart's options directly
   */
  public updateOptions(
    payload: any,
    autoRedraw = true
  ): Promise<ChartUpdateReturn> {
    this.debug("updatingOptions()");
    this.debug(payload);

    return this.update({ options: payload }, autoRedraw);
  }

  /**
   * Plumbing method Update a chart's options and/or data
   *
   * The chart will redraw if the `autoRedraw` option is set.
   * default: `true`
   */
  public async update(
    { data, options }: OptionDataPayload,
    autoRedraw = true
  ): Promise<ChartUpdateReturn> {
    if (typeof options !== "undefined") {
      this.options = Object.assign(this.options, options);
    }

    if (typeof data !== "undefined") {
      this.setData(data);
    }

    if (autoRedraw === true) {
      // this.debug("Redrawing...");
      await this.draw();
    }

    return {
      data: this.data,
      chart: this.googleChart,
      options: this.options
    };
  }

  /**
   * Apply the formats to the DataTable
   */
  public applyFormats(formats?: Formatter[]): void {
    if (formats) {
      this.formats = formats;
    }

    for (const format of this.formats) {
      const formatter = new window.google.visualization[format.type](
        format.options
      );

      this.debug(`Formatting column [${format.index}] with:`);
      this.debug(format);

      formatter.format(this.data, format.index);
    }
  }

  /**
   * Sets the [[DataTable]] for the [[Drawable]].
   */
  protected async setData(payload: any): Promise<void> {
    this.debug("setData()");
    this.debug(payload);

    this.data = await createDataTable(payload);

    if (this.data instanceof google.visualization.DataTable === false) {
      throw new DataError(`There was a error setting the data for ${this.id}`);
    }

    if (payload.formats) {
      this.applyFormats(payload.formats);
    }
  }

  /**
   * Helper method to attach event handlers to `this.googleChart`
   */
  protected registerEventHandler(event: ChartEvents, handler: Function): void {
    google.visualization.events.addListener(
      this.googleChart,
      event,
      (e: any) => {
        this.debug(`Registering handler for <${event}>`);

        handler({
          event: e,
          $this: this,
          data: this.data,
          chart: this.googleChart
        });
      }
    );
  }
}
