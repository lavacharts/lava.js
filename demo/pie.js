import { PieChart } from "../src";

PieChart({
  label: "PieDemo",
  containerId: "pie",
  data: [
    ["Reasons", "Percent"],
    ["Watch Trailers", 2],
    ["See Actors' Other Work", 4],
    ["Check Reviews", 5],
    ["Settle Argument", 89]
  ]
});
