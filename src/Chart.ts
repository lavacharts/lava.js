import { getChartClass } from "./ChartProps";
import { Drawable } from "./Drawable";
import { GoogleFactory, onGoogleReady } from "./google";
import { getContainer } from "./lib";
import { ChartTypes } from "./types/chart";

export class Chart extends Drawable {
  /**
   * If this is set to true, then the [[Chart]]
   * will be drawn and converted to a PNG
   */
  public png = false;

  /** The google.visualization type */
  public readonly type: ChartTypes;

  /** Static creation method */
  static create(chart: Chart): Chart {
    return new Chart(chart);
  }

  /**
   * Create a new [[Chart]]
   */
  constructor(chart: Chart) {
    super(chart);

    this.type = chart.type;
    this.png = Boolean(chart.png);

    onGoogleReady(() => {
      this.googleChart = GoogleFactory(
        getChartClass(this),
        getContainer(this.containerId)
      );
    });
  }

  /**
   * Draw the chart
   */
  public async draw(): Promise<void> {
    await super.draw();

    if (this.png) this.replaceWithPng();
  }

  /**
   * Draws the chart as a PNG instead of the standard SVG
   *
   * @see https://developers.google.com/chart/interactive/docs/printing
   */
  private replaceWithPng(): void {
    const container = getContainer(this.containerId);
    const img = document.createElement("img");

    img.src = this.googleChart.getImageURI();

    container.innerHTML = "";
    container.appendChild(img);
  }
}
