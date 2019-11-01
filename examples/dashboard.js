const filterColumnLabel = "Donuts Eaten";

const donutRangeSlider = {
  controlType: "NumberRangeFilter",
  containerId: "filter_div",
  options: { filterColumnLabel }
};

const pieChart = {
  chartType: "PieChart",
  containerId: "chart_div",
  options: {
    width: 300,
    height: 300,
    pieSliceText: "value",
    legend: "right"
  }
};

window.dashboard = lava.dashboard({
  label: "Test",
  containerId: "dashboard_div",
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
  bindings: [lava.bind(donutRangeSlider, pieChart)],
  events: {
    ready() {
      console.log("IM REAAAAAADY");
    }
  }
});

// dashboard.bind(donutRangeSlider, pieChart);

lava.draw();
