import { TinyEmitter } from "tiny-emitter";

import DataQuery from "./DataQuery";
import { DataError, ElementIdNotFound } from "./Errors";
import { EVENTS } from "./Events";
import {
  addEvent,
  createDataTable,
  getLogger,
  getProp,
  getWindowInstance
} from "./lib";
import {
  ChartClasses,
  ChartUpdateReturn,
  LavaJsOptions,
  Logger,
  SupportedCharts
} from "./types";
import { DrawableTmpl } from "./types/drawable";
import { Formatter } from "./types/formats";
import { VIZ_PROPS } from "./VisualizationProps";

type DrawableTypes = SupportedCharts | "Dashboard";

/**
 * The {@link Drawable} class is the base for {@link Chart}s and {@link Dashboard}s
 * to share common methods between the two types.
 */
export default class Drawable extends TinyEmitter {
  public static CHART_EVENTS = [
    "ready",
    "select",
    "error",
    "onmouseover",
    "onmouseout"
  ];

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
  public googleChart: any;

  /**
   * Type of {@link Drawable}.
   */
  public readonly type: DrawableTypes;

  /**
   * The google.visualization class needed for rendering.
   */
  public readonly class: ChartClasses;

  /**
   * The google.visualization package needed for rendering.
   */
  public readonly package: string;

  /**
   * Element ID of the DOM node for the container.
   */
  public readonly elementId: string;

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
  protected events: Record<string, Function>;

  /**
   * Logging instance for the {@link Drawable}
   */
  protected readonly logger: Logger;

  /**
   * The source of the DataTable, to be used in setData().
   */
  private dataSrc: any;

  /**
   * Create a new Drawable
   *
   * @param {Object} json
   */
  constructor(drawable: DrawableTmpl) {
    super();

    this.type = drawable.type;
    this.label = drawable.label;
    this.dataSrc = drawable.data;
    this.elementId = drawable.elementId;

    this.logger = getLogger(this.uuid);

    this.logger.log("Creating new Drawable");
    this.logger.log(drawable);

    this.options = drawable.options || {};
    this.formats = drawable.formats || [];
    this.events = drawable.events || {};

    this.class = getProp(this.type as SupportedCharts, VIZ_PROPS.CLASS);
    this.package = getProp(this.type as SupportedCharts, VIZ_PROPS.PACKAGE);

    this.attachEventRelays();
  }

  /**
   * Unique identifier for the {@link Chart} / {@link Dashboard}.
   */
  public get uuid(): string {
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
    if (!this.container) {
      throw new ElementIdNotFound(this.elementId);
    }

    await this.setData(this.dataSrc);

    if (!this.data) {
      throw new DataError(`Could not draw, data is ${this.data}`);
    }

    if (this.formats) {
      this.applyFormats();
    }
  }

  /**
   * Sets the {@link DataTable} for the {@link Drawable}.
   *
   * @param {Object|Function|Array|DataQuery|DataTable} payload Source of data
   */
  public async setData(payload: any): Promise<void> {
    if (payload instanceof DataQuery) {
      this.logger.log(`Sending DataQuery`);

      const response = await payload.send();

      this.logger.log(`Response received`);
      this.logger.log(response);

      this.data = response.getDataTable();
    } else {
      this.data = createDataTable(payload);
    }

    if (this.data instanceof google.visualization.DataTable === false) {
      throw new DataError(
        `There was a error setting the data for ${this.uuid}`
      );
    }

    this.logger.log(`Setting data`);
    this.logger.log(this.data);

    if (payload.formats) {
      this.applyFormats(payload.formats);
    }
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

      this.logger.log(`Formatting column [${format.index}] with:`);
      this.logger.log(format);

      formatter.format(this.data, format.index);
    }
  }

  /**
   * Loads new data into the drawable and redraws.
   *
   * Used with an AJAX call to a PHP method returning DataTable->toPayload(),
   * a chart can be dynamically update in page, without reloads.
   */
  public async updateData(payload: object): Promise<ChartUpdateReturn> {
    await this.setData(payload);

    this.draw();

    return {
      data: this.data,
      chart: this.googleChart,
      options: this.options
    };
  }

  /**
   * Loads new options into the drawable and redraws.
   *
   * Used with an AJAX call, or javascript events, to load a new array of options into a chart.
   * This can be used to update a chart dynamically, without reloads.
   */
  public async updateOptions(payload: object): Promise<ChartUpdateReturn> {
    this.options = Object.assign(this.options, payload);

    this.draw();

    return {
      data: this.data,
      chart: this.googleChart,
      options: this.options
    };
  }

  /**
   * Attach event emitters onto the google chart to relay the events
   * forward onto the lavachart.
   *
   * The Google Chart and DataTable objects will be passed to the listener
   * callback for interaction.
   */
  // protected attachEventRelays(): void {
  //   const events = ["ready", "select", "error", "onmouseover", "onmouseout"];

  //   for (const event in events) {
  //     window.google.visualization.events.addListener(this.googleChart, event, () =>
  //       this.emit(event, {
  //         chart: this.googleChart,
  //         data: this.data
  //       })
  //     );
  //   }
  // }

  protected attachEventRelays(): void {
    for (const event in Drawable.CHART_EVENTS) {
      addEvent(this.googleChart, event, () =>
        this.emit(event, {
          chart: this.googleChart,
          data: this.data
        })
      );
    }

    const lava = getWindowInstance();

    lava.on(EVENTS.DRAW, () => this.draw());

    this.on(EVENTS.PRE_DRAW, () => {
      if (typeof this.postDraw === "function") this.postDraw();
    });

    this.on(EVENTS.POST_DRAW, () => {
      if (typeof this.postDraw === "function") this.postDraw();
    });
  }
}
