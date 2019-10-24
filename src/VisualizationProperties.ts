import Chart from "./Chart";
import { ChartClasses, ChartTypes } from "./types/chart";
import {
  VisualizationPropertyEnum,
  VisualizationPropertyMap
} from "./types/visualization-properties";

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
} as VisualizationPropertyMap;

export function isSupported(chartType: ChartTypes): boolean {
  return Object.keys(CHART_PROPS).includes(chartType);
}

export function getChartClass(chart: Chart): ChartClasses {
  return CHART_PROPS[chart.type][VisualizationPropertyEnum.CLASS];
}

export function getChartPackage(chart: Chart): string {
  return CHART_PROPS[chart.type][VisualizationPropertyEnum.PACKAGE];
}

export function getChartVersion(chart: Chart): number {
  return CHART_PROPS[chart.type][VisualizationPropertyEnum.VERSION];
}
