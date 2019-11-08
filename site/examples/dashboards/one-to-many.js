const filterColumnLabel = "Donuts Eaten";

const donutRangeSlider = {
  controlType: "NumberRangeFilter",
  containerId: "one-to-many_filter_div",
  options: { filterColumnLabel }
};

const pieChart = {
  chartType: "PieChart",
  containerId: "one-to-many_pieChart_div",
  options: {
    width: 300,
    height: 300,
    pieSliceText: "value",
    legend: "right"
  }
};

const barChart = {
  chartType: "BarChart",
  containerId: "one-to-many_barChart_div",
  options: {
    width: 300,
    height: 300,
    pieSliceText: "value",
    legend: "right"
  }
};

lava.dashboard({
  containerId: "one-to-many_dashboard_div",
  data: [
    ["Name", filterColumnLabel],
    ["Michael", 5],
    ["Elisa", 7],
    ["Robert", 3],
    ["John", 2],
    ["Jessica", 6],
    ["Aaron", 1],
    ["Margareth", 8]
  ],
  bindings: [lava.bind(donutRangeSlider, [pieChart, barChart])]
});

lava.draw();
