const o2oDonutRangeSlider = {
  controlType: "NumberRangeFilter",
  containerId: "one-to-one_filter_div",
  options: {
    filterColumnLabel: "Donuts Eaten"
  }
};

const o2oPieChart = {
  chartType: "PieChart",
  containerId: "one-to-one_chart_div",
  options: {
    width: 300,
    height: 300,
    pieSliceText: "value",
    legend: "right"
  }
};

const oneToOneBinding = lava.bind(o2oDonutRangeSlider, o2oPieChart);

lava.dashboard({
  containerId: "one-to-one_dashboard_div",
  data: [
    ["Name", "Donuts Eaten"],
    ["Michael", 5],
    ["Elisa", 7],
    ["Robert", 3],
    ["John", 2],
    ["Jessica", 6],
    ["Aaron", 1],
    ["Margareth", 8]
  ],
  bindings: [oneToOneBinding]
});

lava.draw();
