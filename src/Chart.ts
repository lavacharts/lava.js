import Drawable from "./Drawable";
import {
  ChartClasses,
  ChartEvents,
  ChartInterface,
  ChartTypes,
  NewChartConstructor,
  VisualizationProps as VisualizationProperties
} from "./types/chart";
import { getVisualizationProperties } from "./VisualizationProperties";

type VisualizationPropertyDict = {
  [K in ChartTypes]: [ChartClasses, string, number];
};

export const CHART_PROPS = {
  AnnotationChart: ["AnnotationChart", "annotationchart", 1],
  AreaChart: ["AreaChart", "corechart", 1],
  BarChart: ["BarChart", "corechart", 1],
  BubbleChart: ["BubbleChart", "corechart", 1],
  CalendarChart: ["Calendar", "calendar", 1],
  CandlestickChart: ["CandlestickChart", "corechart", 1],
  ColumnChart: ["ColumnChart", "corechart", 1],
  ComboChart: ["ComboChart", "corechart", 1],
  DonutChart: ["PieChart", "corechart", 1],
  GanttChart: ["Gantt", "gantt", 1],
  GaugeChart: ["Gauge", "gauge", 1],
  GeoChart: ["GeoChart", "geochart", 1],
  HistogramChart: ["Histogram", "corechart", 1],
  LineChart: ["LineChart", "corechart", 1],
  PieChart: ["PieChart", "corechart", 1],
  SankeyChart: ["Sankey", "sankey", 1],
  ScatterChart: ["ScatterChart", "corechart", 1],
  SteppedAreaChart: ["SteppedAreaChart", "corechart", 1],
  TableChart: ["Table", "table", 1],
  TimelineChart: ["Timeline", "timeline", 1],
  TreeMapChart: ["TreeMap", "treemap", 1],
  WordTreeChart: ["WordTree", "wordtree", 1]
} as VisualizationPropertyDict;

export default class Chart extends Drawable {
  /**
   * The google.visualization class needed for rendering.
   */
  public readonly class!: ChartClasses;

  /**
   * The google.visualization package needed for rendering.
   */
  public readonly package!: string;

  /**
   * If this is set to true, then the {@link Chart}
   * will be drawn and converted to a PNG
   */
  public png = false;

  /**
   * Static accessor for chart properties
   */
  public getProp(prop: VisualizationProperties): any {
    return CHART_PROPS[this.type as ChartTypes][prop];
  }

  /**
   * Create a new {@link Chart}
   */
  constructor(drawable: ChartInterface) {
    super(drawable);

    this.png = Boolean(drawable.png);
    this.class = getVisualizationProperties(drawable.type).class;
    this.package = getVisualizationProperties(drawable.type).package;
  }

  /**
   * Actions to perform before `chart.draw()`
   */
  public async draw(): Promise<void> {
    await super.draw();

    this.googleChart = this.makeChartFactory(this.class);

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
   * Create a ChartFactory function using the `this.container`
   */
  private makeChartFactory(type: ChartClasses): NewChartConstructor {
    return new window.google.visualization[type](this.container);
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
