import { ScatterChart } from "../src";
import { r } from "./utils";

ScatterChart({
  label: "ScatterDemo",
  containerId: "scatter",
  data: [
    ["age", "weight"],
    [r(21, 35), r(150, 250)],
    [r(21, 35), r(150, 250)],
    [r(21, 35), r(150, 250)],
    [r(21, 35), r(150, 250)],
    [r(21, 35), r(150, 250)],
    [r(21, 35), r(150, 250)],
    [r(21, 35), r(150, 250)],
    [r(21, 35), r(150, 250)],
    [r(21, 35), r(150, 250)],
    [r(21, 35), r(150, 250)],
    [r(21, 35), r(150, 250)],
    [r(21, 35), r(150, 250)],
    [r(21, 35), r(150, 250)],
    [r(21, 35), r(150, 250)],
    [r(21, 35), r(150, 250)]
  ],
  options: {
    width: 400,
    legend: {
      position: "none"
    },
    hAxis: {
      title: "Age (21-35)"
    },
    vAxis: {
      title: "Weight"
    }
  }
});
