import EventEmitter from "events";

import DataQuery from "./DataQuery";
import { createDataTable } from "./DataTable";
import { DataError, ElementIdNotFound } from "./Errors";
import { Formatter, RenderableTmpl } from "./types";
import { ChartClasses, RenderableType, SupportedCharts } from "./types/strings";
import VizProps from "./VisualizationProps";

/**
 * The {@link Renderable} class is the base for {@link Chart}s and {@link Dashboard}s
 * to share common methods between the two types.
 *
 *
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2019, Kevin Hill
 * @license   MIT
 */
export default class Renderable extends EventEmitter {
  [K: string]: any;

  /**
   * Unique label for the {@link Chart} / {@link Dashboard}.
   */
  public label: any;

  /**
   * Configurable options.
   */
  public options: Record<string, any>;

  /**
   * DataTable for the {@link Chart} / {@link Dashboard}.
   */
  public data!: google.visualization.DataTable;

  /**
   * PreDraw hook
   */
  public preDraw!: Function;

  /**
   * PostDraw hook
   */
  public postDraw!: Function;

  /**
   * Google chart object created once the {@link Chart} / {@link Dashboard}
   * has been rendered.
   *
   * @type {Object}
   */
  protected gchart: any;

  /**
   * HTMLElement into which the chart will be rendered.
   */
  protected container!: HTMLElement;

  /**
   * Element ID of the DOM node for the container.
   */
  protected elementId: string;

  /**
   * Formatters for the DataTable
   */
  protected formats: Formatter[];

  /**
   * Type of {@link Renderable}.
   */
  protected type: SupportedCharts | RenderableType;

  /**
   * The source of the DataTable, to be used in setData().
   */
  private dataSrc: any;

  /**
   * Create a new Renderable
   *
   * @param {Object} json
   */
  constructor(json: RenderableTmpl) {
    super();

    this.type = json.type;
    this.label = json.label;
    this.dataSrc = json.data;
    this.elementId = json.elementId;

    const container = document.getElementById(this.elementId);

    if (container) {
      this.container = container;
    }

    this.options = json.options || {};
    this.formats = json.formats || [];
  }

  /**
   * The google.visualization class needed for rendering.
   */
  public get class(): ChartClasses {
    return VizProps[this.type as SupportedCharts].class;
  }

  /**
   * The google.visualization package needed for rendering.
   */
  public get packages(): string[] {
    return [VizProps[this.type as SupportedCharts].package];
  }

  /**
   * Unique identifier for the {@link Chart} / {@link Dashboard}.
   */
  public get uuid(): string {
    return this.type + "::" + this.label;
  }

  /**
   * Draws the {@link Chart} / {@link Dashboard} with the predefined data and options.
   *
   * @public
   */
  public draw(): void {
    if (typeof this._preDraw === "function") {
      console.log(`[lava.js] Running ${this.uuid}._preDraw()`);

      this._preDraw();
    }

    if (typeof this.preDraw === "function") {
      console.log(`[lava.js] Running ${this.uuid}.preDraw()`);

      this.preDraw();
    }

    if (!this.data) {
      throw new DataError(`${this.uuid} Could not draw, data is ${this.data}`);
    }

    this.gchart.draw(this.data, this.options);

    if (typeof this._postDraw === "function") {
      console.log(`[lava.js] Running ${this.uuid}._postDraw()`);

      this._postDraw();
    }

    if (typeof this.postDraw === "function") {
      console.log(`[lava.js] Running ${this.uuid}.postDraw()`);

      this.postDraw();
    }
  }

  //noinspection JSUnusedGlobalSymbols
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
  async run(): Promise<any> {
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
   * Sets the {@link DataTable} for the {@link Renderable}.
   *
   * @public
   * @param {Object|Function|Array|DataQuery|DataTable} payload Source of data
   */
  public async setData(payload: any): Promise<void> {
    if (payload instanceof DataQuery) {
      console.log(`[lava.js] Sending DataQuery for ${this.uuid}`);

      const response = await payload.send();

      console.log(`[lava.js] Response received:`, response);

      this.data = response.getDataTable();
    } else {
      this.data = createDataTable(payload);
    }

    if (this.data instanceof google.visualization.DataTable === false) {
      throw new DataError(
        `There was a error setting the data for ${this.uuid}`
      );
    }

    console.log(`[lava.js] Data set for ${this.uuid}`, this.data);

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

      console.log(`[lava.js] Formatting data for ${this.uuid}.`);
      console.log(
        `[lava.js] Formatting column [${format.index}] with:`,
        format
      );

      formatter.format(this.data, format.index);
    }
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
  //     window.google.visualization.events.addListener(this.gchart, event, () =>
  //       this.emit(event, {
  //         chart: this.gchart,
  //         data: this.data
  //       })
  //     );
  //   }
  // }
}
