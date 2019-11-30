const manyToMany = lava
  .binding()
  .addControl({
    controlType: "NumberRangeFilter",
    containerId: "many-to-many_donut_slider_div",
    options: { filterColumnLabel: "Donuts Eaten" }
  })
  .addControl({
    controlType: "NumberRangeFilter",
    containerId: "many-to-many_coffee_slider_div",
    options: { filterColumnIndex: 2 }
  })
  .addChart({
    chartType: "BarChart",
    containerId: "many-to-many_barchart_div",
    options: {
      width: 300,
      height: 300,
      pieSliceText: "value",
      legend: "right"
    }
  })
  .addChart({
    chartType: "PieChart",
    containerId: "many-to-many_piechart_div",
    options: {
      width: 300,
      height: 300,
      legend: "right"
    }
  });

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
  bindings: [manyToMany]
});

lava.draw();
