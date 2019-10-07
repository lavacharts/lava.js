import { ChartClasses } from "./strings";

export type ChartFactory = (type: ChartClasses) => NewChartConstructor;

// export interface VizProps {
//   class: ChartClasses;
//   package: string;
//   version: number;
// }

export interface NewChartConstructor {
  new (container: HTMLElement): any;
}
