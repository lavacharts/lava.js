import { Drawable } from "./Drawable";
import { getGoogle } from "./google";
import { getContainer } from "./lib";
import { ChartInterface, ChartTypes } from "./types/chart";
import { getChartClass } from "./VisualizationProperties";

export class Chart extends Drawable {
  /**
   * If this is set to true, then the [[Chart]]
   * will be drawn and converted to a PNG
   */
  public png = false;

  /** The google.visualization type */
  public readonly type: ChartTypes;

  /** Static creation method */
  static create(drawable: ChartInterface): Chart {
    return new Chart(drawable);
  }

  /**
   * Create a new [[Chart]]
   */
  constructor(drawable: ChartInterface) {
    super(drawable);

    this.type = drawable.type as ChartTypes;
    this.png = Boolean(drawable.png);
  }

  /**
   * Draw the chart
   */
  public async draw(): Promise<void> {
    const google = getGoogle();

    this.googleChart = new google.visualization[getChartClass(this)](
      getContainer(this.containerId)
    );

    await super.draw();

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
    const container = getContainer(this.containerId);
    const img = document.createElement("img");

    img.src = this.googleChart.getImageURI();

    container.innerHTML = "";
    container.appendChild(img);
  }
}
