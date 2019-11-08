import { Debugger } from "debug";
import { TinyEmitter } from "tiny-emitter";

import { DataQuery } from "./DataQuery";
import { Events } from "./Events";
import { createDataTable, getLava, hasOwnProp, makeDebugger } from "./lib";
import { ChartUpdateReturn } from "./types";
import { ChartEvents } from "./types/chart";
import { OptionDataPayload } from "./types/drawable";
import { Formatter } from "./types/formats";
import { instanceOfRangeQuery } from "./types/guards";

/**
 * Base class for [[Chart]]s and [[Dashboard]]s
 */
export class Drawable extends TinyEmitter {
  /**
   * Configurable options
   */
  public options: Record<string, any>;

  /**
   * DataTable for the [[Drawable]]
   */
  public data!: google.visualization.DataTable;

  /**
   * Google chart object created once the [[Drawable]]
   * has been rendered
   */
  public googleChart!: any;

  /**
   * Unique identifier for the [[Drawable]]
   */
  public get id(): string {
    return this.type + ":" + this.label;
  }

  /**
   * Element ID of the DOM node for the container
   */
  public readonly containerId: string;

  /**
   * Unique label for the [[Drawable]]
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
   * The initial source of data for the DataTable
   */
  private initialData: any | null;

  private debug: Debugger;

  /**
   * Create a new Drawable
   *
   * @param {Object} json
   */
  constructor(drawable: Drawable) {
    super();
    const drawableHasProp = hasOwnProp(drawable);

    this.containerId = drawable.containerId;
    this.type = drawable.type;

    if (drawableHasProp("label")) {
      this.label = drawable.label;
    } else {
      this.label = this.containerId;
    }

    if (instanceOfRangeQuery(drawable.data)) {
      this.initialData = DataQuery.createFromSheetRange(drawable.data);
    } else {
      this.initialData = drawable.data;
    }

    this.options = drawable.options || {};
    this.formats = drawable.formats || [];
    this.events = drawable.events || {};

    this.debug = makeDebugger(this.id);

    this.debug(`Registering <${Events.DRAW}> event relay.`);

    getLava().on(Events.DRAW, () => {
      this.debug(`<${Events.DRAW}> event received.`);
      this.draw();
    });
  }

  /**
   * Draws the [[Drawable]] with the predefined data and options.
   *
   * @public
   */
  public async draw(): Promise<void> {
    this.debug("Drawing...");

    if (hasOwnProp(this)("initialData")) {
      await this.processInitialData();
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
      // eslint-disable-next-line no-param-reassign
      handler = handler.bind(ctx);
    }

    this.events[event] = handler;

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
    return this.update({ data: payload }, autoRedraw);
  }

  /**
   * Sugar method for updating the chart's options directly
   */
  public updateOptions(
    payload: any,
    autoRedraw = true
  ): Promise<ChartUpdateReturn> {
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
      this.debug("Setting options", options);
      this.options = Object.assign(this.options, options);
    }

    if (typeof data !== "undefined") {
      this.debug("Setting data", data);
      this.setData(data);
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

      this.debug(`Formatting column [${format.index}]`, format);

      formatter.format(this.data, format.index);
    }
  }

  /**
   * Send the [[DataQuery]] if it is one, otherwise create a DataTable
   */
  protected async processInitialData(): Promise<void> {
    this.debug("Setting initial data", this.initialData);

    if (typeof this.initialData !== "undefined") {
      const data =
        typeof this.initialData === "string"
          ? new DataQuery(this.initialData)
          : this.initialData;

      await this.setData(data);

      delete this.initialData;
    }
  }

  /**
   * Sets the [[DataTable]] for the [[Drawable]].
   */
  protected async setData(payload: any): Promise<void> {
    this.data = await createDataTable(payload);

    if (this.data instanceof google.visualization.DataTable === false) {
      throw new Error(`There was a error setting the data for ${this.id}`);
    }

    if (payload.formats) {
      this.applyFormats(payload.formats);
    }
  }

  /**
   * Helper method to attach event handlers to `this.googleChart`
   */
  protected registerEventHandler(event: ChartEvents, handler: Function): void {
    this.debug(`Registering handler for <${event}>`);

    google.visualization.events.addListener(
      this.googleChart,
      event,
      (e: any) => {
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
