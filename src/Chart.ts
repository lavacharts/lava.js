import { getChartClass } from "./ChartProps";
import { Drawable } from "./Drawable";
import { getContainer } from "./lib/utils";

import type { ChartClasses, ChartDefinition, ChartTypes } from "./types";

export class Chart extends Drawable {
  /**
   * If this is set to true, then the [[Chart]]
   * will be drawn and converted to a PNG
   */
  public png = false;

  /** The google.visualization type */
  public readonly type: ChartTypes;

  /** Static creation method */
  static create(chart: ChartDefinition): Chart {
    return new Chart(chart);
  }

  constructor(chart: ChartDefinition) {
    super(chart);

    this.type = chart.type;
    this.png = Boolean(chart.png);
  }

  /**
   * Get the Google Class for creating a new {@link Chart} instance
   */
  public getGoogleConstructor(): ChartClasses {
    return getChartClass(this);
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
    const container = getContainer(this);
    const img = document.createElement("img");

    img.src = this.googleChart.getImageURI();

    container.innerHTML = "";
    container.appendChild(img);
  }
}
