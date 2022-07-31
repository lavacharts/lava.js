import { LineChart } from "../src";
import { r } from "./utils";

LineChart({
  label: "LineDemo",
  containerId: "line",
  options: {
    title: "Let Make Some $$$",
    colors: ["#8cf72b", "#cf0303"],
    chartArea: { width: "60%" },
    trendlines: {
      0: {},
      1: {}
    }
  },
  data: [
    ["series", "stocks", "bitcoin"],
    [1, r(50, 100), r(1000, 1200)],
    [2, r(110, 200), r(1200, 900)],
    [3, r(200, 340), r(900, 700)],
    [4, r(300, 400), r(700, 600)],
    [5, r(400, 500), r(600, 900)],
    [6, r(550, 600), r(900, 400)],
    [7, r(600, 780), r(400, 200)],
    [8, r(700, 800), r(200, 100)],
    [9, r(800, 900), r(200, 100)],
    [10, r(1000, 1200), r(100, 0)]
  ]
});
