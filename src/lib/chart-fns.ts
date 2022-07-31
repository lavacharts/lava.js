import { lava } from "../LavaJs";

import type { Chart } from "../Chart";
import type { ChartDefWithOptions } from "../types";

export function AnnotationChart(
  config: ChartDefWithOptions<google.visualization.AnnotationChartOptions>
): Chart {
  return lava.chart({ type: "AnnotationChart", ...config });
}

export function AreaChart(
  config: ChartDefWithOptions<google.visualization.AreaChartOptions>
): Chart {
  return lava.chart({ type: "AreaChart", ...config });
}

export function BarChart(
  config: ChartDefWithOptions<google.visualization.BarChartOptions>
): Chart {
  return lava.chart({ type: "BarChart", ...config });
}

export function BubbleChart(
  config: ChartDefWithOptions<google.visualization.BubbleChartOptions>
): Chart {
  return lava.chart({ type: "BubbleChart", ...config });
}

export function CalendarChart(
  config: ChartDefWithOptions<google.visualization.CalendarOptions>
): Chart {
  return lava.chart({ type: "CalendarChart", ...config });
}

export function CandlestickChart(
  config: ChartDefWithOptions<google.visualization.CandlestickChartOptions>
): Chart {
  return lava.chart({ type: "CandlestickChart", ...config });
}

export function ColumnChart(
  config: ChartDefWithOptions<google.visualization.ColumnChartOptions>
): Chart {
  return lava.chart({ type: "ColumnChart", ...config });
}

export function ComboChart(
  config: ChartDefWithOptions<google.visualization.ComboChartOptions>
): Chart {
  return lava.chart({ type: "ComboChart", ...config });
}

export function DonutChart(
  config: ChartDefWithOptions<google.visualization.PieChartOptions>
): Chart {
  return lava.chart({ type: "DonutChart", ...config });
}

export function GanttChart(
  config: ChartDefWithOptions<google.visualization.GanttChartOptions>
): Chart {
  return lava.chart({ type: "GanttChart", ...config });
}

export function GaugeChart(
  config: ChartDefWithOptions<google.visualization.GaugeChartOptions>
): Chart {
  return lava.chart({ type: "GaugeChart", ...config });
}

export function GeoChart(
  config: ChartDefWithOptions<google.visualization.GeoChartOptions>
): Chart {
  return lava.chart({ type: "GeoChart", ...config });
}

export function HistogramChart(
  config: ChartDefWithOptions<google.visualization.HistogramHistogramOptions>
): Chart {
  return lava.chart({ type: "HistogramChart", ...config });
}

export function LineChart(
  config: ChartDefWithOptions<google.visualization.LineChartOptions>
): Chart {
  return lava.chart({ type: "LineChart", ...config });
}

export function PieChart(
  config: ChartDefWithOptions<google.visualization.PieChartOptions>
): Chart {
  return lava.chart({ type: "PieChart", ...config });
}

export function SankeyChart(
  config: ChartDefWithOptions<google.visualization.SankeyChartOptions>
): Chart {
  return lava.chart({ type: "SankeyChart", ...config });
}

export function ScatterChart(
  config: ChartDefWithOptions<google.visualization.ScatterChartOptions>
): Chart {
  return lava.chart({ type: "ScatterChart", ...config });
}

export function SteppedAreaChart(
  config: ChartDefWithOptions<google.visualization.SteppedAreaChartOptions>
): Chart {
  return lava.chart({ type: "SteppedAreaChart", ...config });
}

export function TableChart(
  config: ChartDefWithOptions<google.visualization.TableOptions>
): Chart {
  return lava.chart({ type: "TableChart", ...config });
}

export function TimelineChart(
  config: ChartDefWithOptions<google.visualization.TimelineOptions>
): Chart {
  return lava.chart({ type: "TimelineChart", ...config });
}

export function TreeMapChart(
  config: ChartDefWithOptions<google.visualization.TreeMapOptions>
): Chart {
  return lava.chart({ type: "TreeMapChart", ...config });
}

export function WordTreeChart(config: ChartDefWithOptions<unknown>): Chart {
  return lava.chart({ type: "WordTreeChart", ...config });
}
