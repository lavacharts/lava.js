import EventEmitter from "events";

import { DataQuery, Utils } from ".";
import LavaJs from "./LavaJs";
import { DataTable, Formatter, RenderableTmpl } from "./types";
import { getVizProps } from "./Utils";

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
  protected container: HTMLElement;
  protected data: DataTable | null = null;
  protected _dataSrc: any;

  /**
   * Element ID of the DOM node for the container.
   */
  protected elementId: string;

  /**
   * Formatters for the DataTable
   */
  protected formats: Formatter[];
  protected gchart: any;

  /**
   * Unique label for the {@link Chart} / {@link Dashboard}.
   */
  protected label: any;

  /**
   * Configurable options.
   */
  protected options: any;
  protected _preDraw: any;
  protected _postDraw: any;

  /**
   * Type of {@link Renderable}.
   */
  protected type: string;

  /**
   * Create a new Renderable
   *
   * @param {Object} json
   */
  constructor(json: RenderableTmpl) {
    super();

    this.type = json.type;
    this.label = json.label;
    this.options = json.options;
    this.formats = json.formats;

    this.elementId = json.elementId;

    /**
     * The source of the DataTable, to be used in setData().
     *
     * @private
     * @type {*}
     */
    this._dataSrc = json.data || json.datatable;

    /**
     * DataTable for the {@link Chart} / {@link Dashboard}.
     *
     * @type {DataTable}
     */
    this.data = undefined;

    /**
     * Google chart object created once the {@link Chart} / {@link Dashboard}
     * has been rendered.
     *
     * @type {Object}
     */
    this.gchart = undefined;

    this.container = document.getElementById(this.elementId);
  }

  /**
   * The google.visualization class needed for rendering.
   */
  public get class(): string {
    return getVizProps(this.type).class;
  }

  /**
   * The google.visualization package needed for rendering.
   */
  public get packages(): string {
    return getVizProps(this.type).package;
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
  draw() {
    if (typeof this._preDraw === "function") {
      console.log(`[lava.js] Running ${this.uuid}.preDraw()`);

      this._preDraw();
    }

    if (!this.data) {
      throw new LavaJs.Errors.DataError(
        `${this.uuid} Could not draw, data is ${this.data}`
      );
    }

    this.gchart.draw(this.data, this.options);

    if (typeof this._postDraw === "function") {
      console.log(`[lava.js] Running ${this.uuid}.postDraw()`);

      this._postDraw();
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
  async run() {
    if (!this.container) {
      throw new LavaJs.Errors.ElementIdNotFound(this.elementId);
    }

    this._setup();

    this._attachEventRelays();

    await this.setData(this._dataSrc);

    if (this.formats) {
      this.applyFormats();
    }

    this.draw();
  }

  _setup() {
    throw new Error("Method not implemented.");
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
      this.data = Utils.createDataTable(payload);
    }

    if (!this.data) {
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
  public applyFormats(formats: Formatter[]): void {
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
   *
   * @protected
   * @return {void}
   */
  _attachEventRelays() {
    const defaultEvents = [
      "ready",
      "select",
      "error",
      "onmouseover",
      "onmouseout"
    ];

    defaultEvents.forEach(event => {
      window.google.visualization.events.addListener(this.gchart, event, () =>
        this.emit(event, this.gchart, this.data)
      );
    });
  }
}
