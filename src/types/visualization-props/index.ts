import visualizationMap from "./chart-props.json";

export type SupportedCharts =
  | "AnnotationChart"
  | "AreaChart"
  | "BarChart"
  | "BubbleChart"
  | "CalendarChart"
  | "CandlestickChart"
  | "ColumnChart"
  | "ComboChart"
  | "DonutChart"
  | "GanttChart"
  | "GaugeChart"
  | "GeoChart"
  | "HistogramChart"
  | "LineChart"
  | "PieChart"
  | "SankeyChart"
  | "ScatterChart"
  | "SteppedAreaChart"
  | "TableChart"
  | "TimelineChart"
  | "TreeMapChart"
  | "WordTreeChart";

export interface VizProps {
  class: string;
  package: string;
  version: number;
}

export const VizPropsMap: Record<SupportedCharts, VizProps> = visualizationMap;
