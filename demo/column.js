import { ColumnChart } from "../src";
import { millions } from "./utils";

ColumnChart({
  label: "ColumnDemo",
  containerId: "column",
  options: {
    colors: ["#f5b90c", "#3dcfff"],
    legend: { position: "in" }
  },
  data: [
    ["series", "Orangered!", "Periwinkle!"],
    [1, millions(), millions()],
    [2, millions(), millions()],
    [3, millions(), millions()],
    [4, millions(), millions()],
    [5, millions(), millions()],
    [6, millions(), millions()],
    [7, millions(), millions()],
    [8, millions(), millions()],
    [9, millions(), millions()],
    [10, millions(), millions()],
    [11, millions(), millions()]
  ]
});
