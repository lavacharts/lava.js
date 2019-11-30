const many-to-manyDonutRangeSlider = {
  controlType: "NumberRangeFilter",
  containerId: "many-to-many_donut_slider_div",
  options: { filterColumnLabel: "Donuts Eaten" }
};

const many-to-manyCoffeeRangeSlider = {
  controlType: "NumberRangeFilter",
  containerId: "many-to-many_coffee_slider_div",
  options: { filterColumnIndex: 2 }
};

const many-to-manyBarChart = {
  chartType: "BarChart",
  containerId: "many-to-many_barchart_div",
  options: {
    width: 300,
    height: 300,
    pieSliceText: "value",
    legend: "right"
  }
};

const many-to-manyScatterChart = {
  chartType: "PieChart",
  containerId: "many-to-many_piechart_div",
  options: {
    width: 300,
    height: 300,
    legend: "right"
  }
};

lava.dashboard({
  containerId: "many-to-many_dashboard_div",
  data: [
    ["Name", "Donuts Eaten", "Coffees Drank"],
    ["Michael", 5, 2],
    ["Elisa", 7, 1],
    ["Robert", 3, 3],
    ["John", 2, 5],
    ["Jessica", 6, 1],
    ["Aaron", 1, 6],
    ["Margareth", 8, 0]
  ],
  bindings: [
    lava.bind(
      [many-to-manyCoffeeRangeSlider, many-to-manyDonutRangeSlider],
      [many-to-manyBarChart, many-to-manyScatterChart]
    )
  ]
});

lava.draw();
