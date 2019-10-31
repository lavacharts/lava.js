import { DataQuery } from "./DataQuery";
import { ContainerIdNotFound, DataError } from "./Errors";
import { Eventful, Events } from "./Eventful";
import { createDataTable, getLava } from "./lib";
import { getLogger } from "./lib/logger";
import { ChartUpdateReturn } from "./types";
import { ChartEvents, ChartInterface } from "./types/chart";
import { DashboardSpec } from "./types/dashboard";
import { OptionDataPayload } from "./types/drawable";
import { Formatter } from "./types/formats";

/**
 * The [[Drawable]] class is the base for [[Chart]]s and [[Dashboard]]s
 * to share common methods between the two types
 */
export class Drawable extends Eventful {
  /**
   * Configurable options
   */
  public options: Record<string, any>;

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
   * Element ID of the DOM node for the container
   */
  public readonly containerId: string;

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
   * The initial source of data for the DataTable
   */
  private initialData: any;

  /**
   * Create a new Drawable
   *
   * @param {Object} json
   */
  constructor(drawable: ChartInterface | DashboardSpec) {
    super();

    this.type = drawable.type;
    this.label = drawable.label;
    this.initialData = drawable.data;
    this.containerId = drawable.containerId;

    this.options = drawable.options || {};
    this.formats = drawable.formats || [];
    this.events = drawable.events || {};

    this.debug = getLogger().extend(this.id);

    getLogger().extend("Drawable")(`Building new ${drawable.type}`);
    getLogger().extend("Drawable")(this);

    this.debug(`Registering <${Events.DRAW}> event relay.`);

    getLava().on(Events.DRAW, () => {
      this.debug(`<${Events.DRAW}> event recieved.`);
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

    if (typeof this.initialData !== "undefined") {
      const data =
        typeof this.initialData === "string"
          ? new DataQuery(this.initialData)
          : this.initialData;

      await this.setData(data);

      delete this.initialData;
    }

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
      this.debug("Setting options");
      this.debug(options);
      this.options = Object.assign(this.options, options);
    }

    if (typeof data !== "undefined") {
      this.debug("Setting data");
      this.debug(data);
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

      this.debug(`Formatting column [${format.index}] with:`);
      this.debug(format);

      formatter.format(this.data, format.index);
    }
  }

  /**
   * Get the HTMLElement into which the chart will be rendered.
   */
  protected getContainer(): HTMLElement {
    const container = document.getElementById(this.containerId);

    if (container === null) {
      throw new ContainerIdNotFound(this.containerId);
    }

    return container;
  }

  /**
   * Sets the [[DataTable]] for the [[Drawable]].
   */
  protected async setData(payload: any): Promise<void> {
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
