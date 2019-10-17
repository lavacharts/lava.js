import { ChartTypes } from "./types/chart";
import {
  VisualizationProperties,
  VisualizationPropertyDict
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
} as VisualizationPropertyDict;

export function isValidChartType(chartType: ChartTypes): boolean {
  return Object.keys(CHART_PROPS).includes(chartType);
}

export enum VisualizationPropertyEnum {
  "CLASS",
  "PACKAGE",
  "VERSION"
}

export function getVisualizationProperties(
  chartType: ChartTypes
): VisualizationProperties {
  const props = CHART_PROPS[chartType];
  return {
    class: props[VisualizationPropertyEnum.CLASS],
    package: props[VisualizationPropertyEnum.PACKAGE],
    version: props[VisualizationPropertyEnum.VERSION]
  };
}
