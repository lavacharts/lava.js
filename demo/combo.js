import { ComboChart } from "../src";

ComboChart({
  label: "Finances",
  containerId: "combo",
  data: [
    ["Year", "Sales", "Expenses", "Net Worth"],
    ["2018-1-1", 1100, 490, 1324],
    ["2019-1-1", 1000, 400, 1524],
    ["2020-1-1", 1400, 450, 1351],
    ["2021-1-1", 1250, 600, 1243],
    ["2022-1-1", 1100, 550, 1462]
  ],
  options: {
    title: "Company Performance",
    titleTextStyle: {
      color: "rgb(123, 65, 89)",
      fontSize: 16
    },
    legend: {
      position: "in"
    },
    seriesType: "bars",
    series: {
      2: { type: "line" }
    }
  }
});
