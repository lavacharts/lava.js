import Drawable from "./Drawable";
import { addEvent } from "./lib";
import { ChartFactory } from "./types/chart";
import { DrawableTmpl } from "./types/drawable";

function makeChartFactory(container: HTMLElement): ChartFactory {
  return type => new window.google.visualization[type](container);
}

export default class Chart extends Drawable {
  /**
   * If this is set to true, then the {@link Chart}
   * will be drawn and converted to a PNG
   */
  public png = false;

  /**
   * Create a new {@link Chart}
   */
  constructor(payload: DrawableTmpl) {
    super(payload);

    this.png = Boolean(payload.png);
  }

  /**
   * Actions to perform before `chart.draw()`
   */
  public async draw(): Promise<void> {
    await super.draw();

    const chartFactory = makeChartFactory(this.container as HTMLElement);

    this.googleChart = chartFactory(this.class);

    if (this.events) {
      this.attachEvents();
    }

    this.googleChart.draw(this.data, this.options);

    if (this.png) {
      this.drawPng();
    }
  }

  /**
   * Draws the chart as a PNG instead of the standard SVG
   *
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
   */
  private attachEvents(): void {
    Object.keys(this.events).forEach(event => {
      const callback = this.events[event];

      let context = window;
      let func = callback;

      if (typeof callback === "object") {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        //@ts-ignore I don't know what to do here
        context = context[callback[0]];
        func = callback[1];
      }

      this.debug(`The <${event}> event will be handled by:`);
      this.debug(func);
      this.debug("within the context of:");
      this.debug(context);

      /**
       * Set the context of "this" within the user provided callback to the
       * chart that fired the event while providing the datatable of the chart
       * to the callback as an argument.
       */
      addEvent(this.googleChart, event, () => {
        console.log("EVENTS!");
        const callback = Object.bind(
          context[Object.call.prototype.toString(func)],
          this.googleChart
        ) as (data: google.visualization.DataTable) => any;

        callback(this.data);
      });
    });
  }
}
