import { ChartTypes } from "../types/chart";
import { getLava } from ".";

export function createChartFactory(type: ChartTypes) {
  return (containerId: string) => {
    return getLava().chart({ type, containerId });
  };
}
