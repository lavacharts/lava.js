import { GeoChart } from "../src";
import { millions } from "./utils";

GeoChart({
  label: "GeoDemo",
  containerId: "geo",
  options: { legend: { position: "top" } },
  data: [
    ["Country", "Number of Jugglers"],
    ["France", millions()],
    ["United States", millions()],
    ["Brazil", millions()],
    ["Canada", millions()],
    ["Australia", millions()],
    ["RU", millions()]
  ]
});
