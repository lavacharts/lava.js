import { ChartClasses, ChartTypes } from "./chart";

export enum VisualizationPropertyEnum {
  "CLASS",
  "PACKAGE",
  "VERSION"
}

export type VisualizationPropertyMap = {
  [K in ChartTypes]: [ChartClasses, string, number];
};
