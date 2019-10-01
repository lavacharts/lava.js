import { readFileSync, realpathSync } from "fs";

import { renderer } from "./lib/gulp/renderer";

export { renderer };

export function getChartTypes() {
  const mapPath = realpathSync(
    __dirname + "/../resources/visualization-map.json"
  );
  const chartMap = JSON.parse(readFileSync(mapPath));

  return Object.getOwnPropertyNames(chartMap);
}
