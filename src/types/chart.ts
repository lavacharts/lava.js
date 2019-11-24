import { Drawable } from "../Drawable";

// export enum CHART_EVENTS {
//   READY = "ready",
//   SELECT = "select",
//   ERROR = "error",
//   ON_MOUSE_OVER = "onmouseover",
//   ON_MOUSE_OUT = "onmouseout"
// }

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
