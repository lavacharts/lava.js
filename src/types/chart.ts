/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Drawable } from "../Drawable";

export interface ChartInterface extends Drawable {
  png?: boolean;
  rangeQuery?: [string, string];
}

export type ChartEvents =
  | "ready"
  | "select"
  | "error"
  | "onmouseover"
  | "onmouseout";

export type ChartTypes =
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

export type ChartClasses =
  | "AnnotationChart"
  | "AreaChart"
  | "BarChart"
  | "BubbleChart"
  | "Calendar"
  | "CandlestickChart"
  | "ColumnChart"
  | "ComboChart"
  | "PieChart"
  | "Gantt"
  | "Gauge"
  | "GeoChart"
  | "Histogram"
  | "LineChart"
  | "PieChart"
  | "Sankey"
  | "ScatterChart"
  | "SteppedAreaChart"
  | "Table"
  | "Timeline"
  | "TreeMap"
  | "WordTree";

export interface ChartUpdateReturn {
  data: google.visualization.DataTable;
  chart: any;
  options: Record<string, any>;
}
