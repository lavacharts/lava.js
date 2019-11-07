(() => {
  const filterColumnLabel = "Donuts Eaten";

  const donutRangeSlider = {
    controlType: "NumberRangeFilter",
    containerId: "many-to-many_donut_slider_div",
    options: { filterColumnLabel }
  };

  const coffeeRangeSlider = {
    controlType: "NumberRangeFilter",
    containerId: "many-to-many_coffee_slider_div",
    options: { filterColumnIndex: 2 }
  };

  const scatterChart = {
    chartType: "ScatterChart",
    containerId: "many-to-many_chart_div",
    options: {
      width: 300,
      height: 300,
      legend: "right"
    }
  };

  const barChart = {
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
      ["Name", filterColumnLabel, "Coffees Drank"],
      ["Michael", 5, 2],
      ["Elisa", 7, 1],
      ["Robert", 3, 3],
      ["John", 2, 5],
      ["Jessica", 6, 1],
      ["Aaron", 1, 6],
      ["Margareth", 8, 0]
    ],
    bindings: [
      lava.bind([coffeeRangeSlider, donutRangeSlider], [barChart, scatterChart])
    ]
  });
})();
