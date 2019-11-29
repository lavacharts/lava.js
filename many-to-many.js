const m2mDonutRangeSlider = {
  controlType: "NumberRangeFilter",
  containerId: "many-to-many_donut_slider_div",
  options: { filterColumnLabel: "Donuts Eaten" }
};

const m2mCoffeeRangeSlider = {
  controlType: "NumberRangeFilter",
  containerId: "many-to-many_coffee_slider_div",
  options: { filterColumnIndex: 2 }
};

const m2mScatterChart = {
  chartType: "ScatterChart",
  containerId: "many-to-many_chart_div",
  options: {
    width: 300,
    height: 300,
    legend: "right"
  }
};

const m2mBarChart = {
  chartType: "BarChart",
  containerId: "many-to-many_barChart_div",
  options: {
    width: 300,
    height: 300,
    pieSliceText: "value",
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
      [m2mCoffeeRangeSlider, m2mDonutRangeSlider],
      [m2mBarChart, m2mScatterChart]
    )
  ]
});

lava.draw();
