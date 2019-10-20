import DataQuery from "./DataQuery";
import { DataError, ElementIdNotFound } from "./Errors";
import Eventful, { EVENTS } from "./Eventful";
import LavaJs from "./LavaJs";
import { createDataTable, debug, getWindowInstance } from "./lib";
import { ChartUpdateReturn, LavaJsOptions, SupportedCharts } from "./types";
import { ChartEvents, ChartInterface } from "./types/chart";
import { DrawableInterface, OptionDataPayload } from "./types/drawable";
import { Formatter } from "./types/formats";

/**
 * The {@link Drawable} class is the base for {@link Chart}s and {@link Dashboard}s
 * to share common methods between the two types.
 */
export default class Drawable extends Eventful {
  /**
   * Reference to the `window.lava` object
   */
  protected _lava: LavaJs;

  /**
   * PreDraw hook
   */
  public preDraw?(): void;

  /**
   * PostDraw hook
   */
  public postDraw?(): void;

  /**
   * Configurable options.
   */
  public options: LavaJsOptions;

  /**
   * DataTable for the {@link Chart} / {@link Dashboard}.
   */
  public data!: google.visualization.DataTable;

  /**
   * Google chart object created once the {@link Chart} / {@link Dashboard}
   * has been rendered.
   */
  public googleChart!: any;

  /**
   * Element ID of the DOM node for the container.
   */
  public readonly elementId: string;

  /**
   * Type of {@link Drawable}.
   */
  public readonly type: SupportedCharts | "Dashboard";

  /**
   * Unique label for the {@link Chart} / {@link Dashboard}.
   */
  public readonly label: string;

  /**
   * Formatters for the DataTable
   */
  protected formats: Formatter[];

  /**
   * Event listeners for the Drawable.
   */
  protected events: Record<ChartEvents, CallableFunction>;

  /**
   * The source of the DataTable, to be used in setData().
   */
  private dataSrc: any;

  /**
   * Create a new Drawable
   *
   * @param {Object} json
   */
  constructor(drawable: ChartInterface | DrawableInterface) {
    super();

    this.type = drawable.type;
    this.label = drawable.label;

    // if (typeof drawable.data === "string") {
    // this.dataSrc = new DataQuery(drawable.data);
    // } else {
    this.dataSrc = drawable.data;
    // }

    this.elementId = drawable.elementId;

    this.options = drawable.options || {};
    this.formats = drawable.formats || [];
    this.events = drawable.events || {};

    this.debug = debug.extend(this.id);

    this._lava = getWindowInstance();
    this._lava.on(EVENTS.DRAW, () => this.draw());

    this.debug("Created!");
    this.debug(drawable);
  }

  /**
   * Unique identifier for the {@link Chart} / {@link Dashboard}.
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
   * Draws the {@link Chart} / {@link Dashboard} with the predefined data and options.
   *
   * @public
   */
  public async draw(): Promise<void> {
    this.debug("Drawing");

    if (!this.container) {
      throw new ElementIdNotFound(this.elementId);
    }

    this.debug("Setting data");

    const payload =
      typeof this.dataSrc === "string"
        ? new DataQuery(this.dataSrc)
        : this.dataSrc;

    await this.setData(payload);

    if (this.data instanceof google.visualization.DataTable !== true) {
      throw new DataError(`There was a error setting the data for ${this.id}`);
    }

    if (this.formats) {
      this.applyFormats();
    }
  }

  /**
   * Overidding the `on()` method from the {@link TinyEmitter} to register the
   * handlers to our own map.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public on(event: ChartEvents, handler: Function, ctx?: any): this {
    this.events[event] = handler;

    return this;
  }

  /**
   * Sets the {@link DataTable} for the {@link Drawable}.
   *
   * @param {Object|Function|Array|DataQuery|DataTable} payload Source of data
   */
  public async setData(payload: any): Promise<void> {
    if (payload instanceof DataQuery) {
      this.debug(`Sending DataQuery`);

      const response = await payload.send();

      this.debug(`Response received`);
      this.debug(response);

      this.data = response.getDataTable();
    } else {
      this.data = createDataTable(payload);
    }

    if (this.data instanceof google.visualization.DataTable === false) {
      throw new DataError(`There was a error setting the data for ${this.id}`);
    }

    this.debug(`Setting data`);
    this.debug(this.data);

    if (payload.formats) {
      this.applyFormats(payload.formats);
    }
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
   * Update a chart's options and/or data
   *
   * The chart will redraw.
   */
  public async update(
    { data, options }: OptionDataPayload,
    autoRedraw = true
  ): Promise<ChartUpdateReturn> {
    if (typeof options !== "undefined") {
      this.options = Object.assign(this.options, options);
    }

    if (typeof data !== "undefined") {
      this.updateData(data);
    }

    if (autoRedraw === true) {
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
   * Update the chart's data
   */
  protected async updateData(payload: any): Promise<ChartUpdateReturn> {
    this.debug("Updating data");
    this.debug(payload);

    return this.update({ data: payload });
  }

  /**
   * Update the chart's options
   */
  protected updateOptions(payload: any): Promise<ChartUpdateReturn> {
    this.debug("Updating options");
    this.debug(payload);

    return this.update({ options: payload });
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
        this.debug(handler);

        handler({
          event: e,
          data: this.data,
          chart: this.googleChart
        });
      }
    );
  }
}
