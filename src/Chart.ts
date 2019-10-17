import Drawable from "./Drawable";
import {
  ChartClasses,
  NewChartConstructor,
  SupportedCharts,
  VisualizationProps as VisualizationProperties
} from "./types/chart";
import { DrawableTmpl } from "./types/drawable";

type VisualizationPropertyDict = {
  [K in SupportedCharts]: [ChartClasses, string, number];
};

export default class Chart extends Drawable {
  private static PROPS = {
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

  /**
   * If this is set to true, then the {@link Chart}
   * will be drawn and converted to a PNG
   */
  public png = false;

  /**
   * Static accessor for chart properties
   */
  public getProp(prop: VisualizationProperties): any {
    return Chart.PROPS[this.type as SupportedCharts][prop];
  }

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

    this.googleChart = this.makeChartFactory(this.class);

    Object.keys(this.events).forEach(event => {
      this.registerEventHandler(event, this.events[event]);
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
