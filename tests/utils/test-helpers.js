/* eslint-disable @typescript-eslint/no-unused-vars */
const addTestDiv = () => {
  window["__LAVAJS__TEST_DIV"] = document.createElement("div");
  window["__LAVAJS__TEST_DIV"].id = "test-chart";

  document.body.appendChild(window["__LAVAJS__TEST_DIV"]);
};

const removeTestDiv = () =>
  document.body.removeChild(window.__LAVAJS__TEST_DIV);

const getDataTableArray = () => [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7]
];

const getDataTableJson = () => ({
  cols: [
    { type: "string", label: "Stuff" },
    { type: "number", label: "Age" }
  ],
  rows: [
    { c: [{ v: "things1" }, { v: 37 }] },
    { c: [{ v: "things2" }, { v: 72 }] }
  ]
});

const getPieChartJson = () => ({
  label: "MyCoolChart",
  type: "PieChart",
  containerId: "test-chart",
  datatable: getDataTableArray(),
  options: {
    title: "My Daily Activities"
  }
});

const getNumberFormat = index => ({
  type: "NumberFormat",
  index: index,
  options: {
    prefix: "$",
    suffix: " BILLS!"
  }
});

const getOptions = () => ({
  title: "Company Finances",
  legend: "none",
  colorAxis: {
    colors: ["black", "green"]
  }
});
