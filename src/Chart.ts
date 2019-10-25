import Drawable from "./Drawable";
import { ChartEvents, ChartInterface, ChartTypes } from "./types/chart";
import { getChartClass } from "./VisualizationProperties";

export default class Chart extends Drawable {
  /**
   * The google.visualization type.
   */
  public readonly type: ChartTypes;

  /**
   * If this is set to true, then the [[Chart]]
   * will be drawn and converted to a PNG
   */
  public png = false;

  /**
   * Static creation method
   */
  static create(drawable: ChartInterface): Chart {
    return new Chart(drawable);
  }

  /**
   * Create a new [[Chart]]
   */
  constructor(drawable: ChartInterface) {
    super(drawable);

    this.type = drawable.type;
    this.png = Boolean(drawable.png);
  }

  /**
   * Actions to perform before `chart.draw()`
   */
  public async draw(): Promise<void> {
    await super.draw();

    const chartClass = getChartClass(this);

    this.googleChart = new window.google.visualization[chartClass](
      this.container
    );

    Object.keys(this.events).forEach(event => {
      const e = event as ChartEvents;

      this.registerEventHandler(e, this.events[e]);
    });

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
}
