import { ChartClasses, ChartTypes } from "./chart";

export type VisualizationPropertyTuple = [ChartClasses, string, number];

export type VisualizationPropertyDict = {
  [K in ChartTypes]: VisualizationPropertyTuple;
};

export interface VisualizationProperties {
  class: ChartClasses;
  package: string;
  version: number;
}
