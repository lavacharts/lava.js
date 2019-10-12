import { ChartClasses } from "./strings";

export type ChartFactory = (type: ChartClasses) => NewChartConstructor;

export interface NewChartConstructor {
  new (container: HTMLElement): any;
}
