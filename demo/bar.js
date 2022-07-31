import { BarChart } from "../src";
import { r } from "./utils";

BarChart({
  label: "BarDemo",
  containerId: "bar",
  options: {
    title: "Foods Poll",
    titlePosition: "bottom",
    legend: { position: "top" }
  },
  data: [
    ["Food Poll", "Votes"],
    ["Tacos", r(1000, 1200)],
    ["Pizza", r(1800, 2200)],
    ["Burgers", r(1200, 1300)],
    ["Sushi", r(1000, 1600)]
  ]
});
