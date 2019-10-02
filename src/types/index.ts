import { Google, GoogleDataTable, GoogleLoaderOptions } from "./google";
import { Lavacharts } from "./lavacharts";
import { LavaJsOptions } from "./lavajs";
import {
  ChartClasses,
  RenderableType,
  SupportedCharts,
  SupportedFormatters
} from "./strings";

export {
  ChartClasses,
  Google,
  GoogleLoaderOptions,
  Lavacharts,
  LavaJsOptions,
  RenderableType,
  SupportedCharts,
  SupportedFormatters
};

export interface ChartUpdateReturn {
  data: GoogleDataTable;
  chart: any;
  options: Record<string, any>;
}

export interface Formatter {
  index: number;
  options: Record<string, any>;
  type: SupportedFormatters;
}

export interface RenderableTmpl {
  data: any;
  datatable: any;
  elementId: string;
  label: any;
  options: any;
  package: string;
  png: boolean;
  uuid: string;
  formats?: Formatter[];
  type: SupportedCharts | RenderableType;
}
