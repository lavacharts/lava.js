const donutRangeSlider = lava.control({
  controlType: "NumberRangeFilter",
  containerId: "filter_div",
  options: {
    filterColumnLabel: "Donuts eaten"
  }
});

const dashboard = lava.dashboard({
  label: "Test",
  type: "PieChart",
  containerId: "chart_div",
  data: [
    ["Name", "Donuts eaten"],
    ["Michael", 5],
    ["Elisa", 7],
    ["Robert", 3],
    ["John", 2],
    ["Jessica", 6],
    ["Aaron", 1],
    ["Margareth", 8]
  ],
  options: {
    width: 400,
    height: 240,
    is3D: true
  },
  bindings: [[]]
});

dashboard.bind(donutRangeSlider, pieChart);

lava.draw();
