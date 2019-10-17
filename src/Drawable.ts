import DataQuery from "./DataQuery";
import { DataError, ElementIdNotFound } from "./Errors";
import Eventful, { EVENTS } from "./Eventful";
import LavaJs from "./LavaJs";
import { createDataTable, debug, getWindowInstance } from "./lib";
import {
  ChartClasses,
  ChartUpdateReturn,
  LavaJsOptions,
  SupportedCharts
} from "./types";
import { ChartEvents, VisualizationProps } from "./types/chart";
import { DrawableTmpl } from "./types/drawable";
import { Formatter } from "./types/formats";

type DrawableTypes = SupportedCharts | "Dashboard";

export enum CHART_EVENTS {
  READY = "ready",
  SELECT = "select",
  ERROR = "error",
  ON_MOUSE_OVER = "onmouseover",
  ON_MOUSE_OUT = "onmouseout"
}

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
  protected events: Record<ChartEvents, Function>;

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

    this.options = drawable.options || {};
    this.formats = drawable.formats || [];
    this.events = drawable.events || {};

    this.class = this.getProp(VisualizationProps.CLASS);
    this.package = this.getProp(VisualizationProps.PACKAGE);

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
   * Loads new data into the drawable and redraws.
   *
   * Used with an AJAX call to a PHP method returning DataTable->toPayload(),
   * a chart can be dynamically update in page, without reloads.
   */
  public async updateData(payload: object): Promise<ChartUpdateReturn> {
    await this.setData(payload);

    await this.draw();

    return this.getChartUpdateReturn();
  }

  /**
   * Loads new options into the drawable and redraws.
   *
   * Used with an AJAX call, or javascript events, to load a new array of options into a chart.
   * This can be used to update a chart dynamically, without reloads.
   */
  public async updateOptions(payload: object): Promise<ChartUpdateReturn> {
    this.options = Object.assign(this.options, payload);

    await this.draw();

    return this.getChartUpdateReturn();
  }

  /**
   * Payload to return to the user after updating data or options.
   */
  protected getChartUpdateReturn(): ChartUpdateReturn {
    return {
      data: this.data,
      chart: this.googleChart,
      options: this.options
    };
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
