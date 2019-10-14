import { TinyEmitter } from "tiny-emitter";

import DataQuery from "./DataQuery";
import { DataError, ElementIdNotFound } from "./Errors";
import { EVENTS } from "./Events";
import { createDataTable, getLogger, getWindowInstance } from "./lib";
import {
  ChartClasses,
  ChartUpdateReturn,
  DrawableTmpl,
  DrawableType,
  Formatter,
  LavaJsOptions,
  Logger,
  SupportedCharts
} from "./types";
import { getProp, VIZ_PROPS } from "./VisualizationProps";

/**
 * The {@link Drawable} class is the base for {@link Chart}s and {@link Dashboard}s
 * to share common methods between the two types.
 */
export default class Drawable extends TinyEmitter {
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
  public readonly type: SupportedCharts | DrawableType;

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
   * The source of the DataTable, to be used in setData().
   */
  private dataSrc: any;

  /**
   * Logging instance for the {@link Drawable}
   */
  private readonly logger: Logger;

  /**
   * Create a new Drawable
   *
   * @param {Object} json
   */
  constructor(drawable: DrawableTmpl) {
    super();

    this.logger = getLogger();

    this.type = drawable.type;
    this.label = drawable.label;
    this.dataSrc = drawable.data;
    this.elementId = drawable.elementId;

    this.options = drawable.options || {};
    this.formats = drawable.formats || [];
    this.events = drawable.events || {};

    this.class = getProp(this.type as SupportedCharts, VIZ_PROPS.CLASS);
    this.package = getProp(this.type as SupportedCharts, VIZ_PROPS.PACKAGE);

    const lava = getWindowInstance();

    lava.once(EVENTS.GOOGLE_READY, () => {
      if (typeof this.init === "function") this.init();
    });

    lava.on(EVENTS.DRAW, () => {
      this.draw();
    });

    this.on(EVENTS.PRE_DRAW, () => {
      if (typeof this.postDraw === "function") this.postDraw();
    });

    this.on(EVENTS.POST_DRAW, () => {
      if (typeof this.postDraw === "function") this.postDraw();
    });
  }

  /**
   * Unique identifier for the {@link Chart} / {@link Dashboard}.
   */
  public get uuid(): string {
    return this.type + "::" + this.label;
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
    if (!this.data) {
      throw new DataError(`${this.uuid} Could not draw, data is ${this.data}`);
    }

    this.emit(EVENTS.PRE_DRAW);

    this.googleChart.draw(this.data, this.options);

    this.emit(EVENTS.POST_DRAW);
  }

  /**
   * Run the setup and draw the chart.
   *
   * Any dependency on "google" must be within the run() scope.
   *
   * This will be called after the static loaded has completed
   * registering window.google
   *
   * @return {Promise}
   */
  protected async init(): Promise<any> {
    if (!this.container) {
      throw new ElementIdNotFound(this.elementId);
    }

    // this.attachEventRelays();

    await this.setData(this.dataSrc);

    if (this.formats) {
      this.applyFormats();
    }

    this.draw();
  }

  /**
   * Sets the {@link DataTable} for the {@link Drawable}.
   *
   * @public
   * @param {Object|Function|Array|DataQuery|DataTable} payload Source of data
   */
  public async setData(payload: any): Promise<void> {
    if (payload instanceof DataQuery) {
      this.logger.log(`Firing DataQuery for ${this.uuid}`);

      const response = await payload.send();

      this.logger.log(`Response received:`, response);

      this.data = response.getDataTable();
    } else {
      this.data = createDataTable(payload);
    }

    if (this.data instanceof google.visualization.DataTable === false) {
      throw new DataError(
        `There was a error setting the data for ${this.uuid}`
      );
    }

    this.logger.log(`Setting data for ${this.uuid}`, this.data);

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

      this.logger.log(`Setting data for ${this.uuid}.`);
      this.logger.log(`Formatting column [${format.index}] with:`, format);

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
}
