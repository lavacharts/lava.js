/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ChartEvents, ChartTypes } from "./chart";
import type { Formatter } from "./formats";

export type ConsoleLog = typeof console.log;

export type ChartDefWithOptions<T> = Omit<ChartDefinition<T>, "type">;

export interface ScriptElement extends HTMLScriptElement {
  readyState?: any;
  onreadystatechange?: any;
}

export interface LavaJsOptions {
  autodraw: boolean;
  autoloadGoogle: boolean;
  chartPackages: string[];
  datetimeFormat: string;
  debounceTimeout: number;
  debug: boolean;
  language: string;
  mapsApiKey: string;
  responsive: boolean;
  timezone: string;
}

export interface ChartDefinition<T = unknown> {
  type: ChartTypes;
  containerId: string;
  label: string;
  data: any;
  options?: T;
  png?: boolean;
  formats?: Formatter[];
  events?: Record<ChartEvents, CallableFunction>;
}
