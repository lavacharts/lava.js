const m2oDonutRangeSlider = {
  controlType: "NumberRangeFilter",
  containerId: "many-to-one_donut_slider_div",
  options: { filterColumnLabel: "Donuts Eaten" }
};

const m2oCoffeeRangeSlider = {
  controlType: "NumberRangeFilter",
  containerId: "many-to-one_coffee_slider_div",
  options: { filterColumnIndex: 2 }
};

const m2oScatterChart = {
  chartType: "ScatterChart",
  containerId: "many-to-one_chart_div",
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
    lava.bind([m2oCoffeeRangeSlider, m2oDonutRangeSlider], m2oScatterChart)
  ]
});

lava.draw();
