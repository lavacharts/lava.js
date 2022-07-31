import { GaugeChart } from "../src";
import { r } from "./utils";

GaugeChart({
  label: "Temps",
  containerId: "gauge",
  data: [
    ["Type", "Value"],
    ["CPU", r(0, 100)],
    ["Case", r(0, 100)],
    ["Graphics", r(0, 100)]
  ],
  options: {
    width: 400,
    greenFrom: 0,
    greenTo: 69,
    yellowFrom: 70,
    yellowTo: 89,
    redFrom: 90,
    redTo: 100,
    majorTicks: ["Safe", "Critical"]
  }
});
