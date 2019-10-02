import Renderable from "./Renderable";
import { RenderableTmpl } from "./types";
import { ChartFactory } from "./types/chart";

function makeChartFactory(container: HTMLElement): ChartFactory {
  return type => new window.google.visualization[type](container);
}

/**
 * Chart Class
 *
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2019, Kevin Hill
 * @license   MIT
 */
export default class Chart extends Renderable {
  /**
   * If this is set to true, then the {@link Chart} will be output as a PNG
   *
   * @type {Boolean}
   */
  png: boolean;

  events!: Array<any>;

  /**
   * Create a new Chart.
   *
   * @exampl
   * {
   *     label: 'Test',
   *     type: 'PieChart',
   *     elementId: 'my-pie-chart',
   *     datatable: [
   *         ['Task', 'Hours per Day'],
   *         ['Work',     11],
   *         ['Eat',      2],
   *         ['Commute',  2],
   *         ['Watch TV', 2],
   *         ['Sleep',    7]
   *     ],
   *     options: {
   *         title: 'My Daily Activities'
   *     }
   * }
   */
  constructor(payload: RenderableTmpl) {
    super(payload);

    this.png = Boolean(payload.png);
  }

  /**
   * Actions to perform before drawing the {@link Chart}
   *
   * This method will have access to window.google since it is called
   * within the render method.
   */
  protected _preDraw(): void {
    const chartFactory = makeChartFactory(this.container);

    this.googleChart = chartFactory(this.class);

    // TODO: append Lavachart defined events?
    // if (this.events) {
    //     this.attachEvents();
    // }
  }

  /**
   * Actions to perform once the {@link Chart} has been drawn
   *
   * This method will have access to window.google since it is called
   * within the run method.
   * @private
   */
  protected _postDraw(): void {
    if (this.png) {
      this.drawPng();
    }
  }

  /**
   * Draws the chart as a PNG instead of the standard SVG
   *
   * @private
   * @see https://developers.google.com/chart/interactive/docs/printing
   */
  private drawPng(): void {
    const img = document.createElement("img");
    img.src = this.googleChart.getImageURI();

    if (this.container) {
      this.container.innerHTML = "";
      this.container.appendChild(img);
    }
  }

  /**
   * Attach the defined chart event handlers.
   *
   * @private
   * @return {void}
   */
  // private attachEvents(): void {
  //   this.events.forEach((callback: Function, event: any) => {
  //     let context = window;
  //     let func = callback;

  //     if (typeof callback === "object") {
  //       // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  //       //@ts-ignore I don't know what to do here
  //       context = context[callback[0]];
  //       func = callback[1];
  //     }

  //     console.log(
  //       `[lava.js] The "${this.uuid}::${event}" event will be handled by "${func}" in the context`,
  //       context
  //     );

  //     /**
  //      * Set the context of "this" within the user provided callback to the
  //      * chart that fired the event while providing the datatable of the chart
  //      * to the callback as an argument.
  //      */
  //     window.google.visualization.events.addListener(this.googleChart, event, () => {
  //       const callback = Object.bind(
  //         context[Object.call.prototype.toString(func)],
  //         this.googleChart
  //       ) as (data: google.visualization.DataTable) => any;

  //       callback(this.data);
  //     });
  //   });
  // }
}
