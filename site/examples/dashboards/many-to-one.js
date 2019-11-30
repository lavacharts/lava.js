const many-to-oneDonutRangeSlider = {
  controlType: "NumberRangeFilter",
  containerId: "many-to-one_donut_slider_div",
  options: { filterColumnLabel: "Donuts Eaten" }
};

const many-to-oneCoffeeRangeSlider = {
  controlType: "NumberRangeFilter",
  containerId: "many-to-one_coffee_slider_div",
  options: { filterColumnIndex: 2 }
};

const many-to-oneScatterChart = {
  chartType: "ScatterChart",
  containerId: "many-to-one_scatterchart_div",
  options: {
    width: 300,
    height: 300,
    legend: "right"
  }
};

lava.dashboard({
  containerId: "many-to-one_dashboard_div",
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
    // lava#bind(control[], chart) => ManyToOne Binding
    lava.bind([many-to-oneCoffeeRangeSlider, many-to-oneDonutRangeSlider], many-to-oneScatterChart)
  ]
});

lava.draw();
