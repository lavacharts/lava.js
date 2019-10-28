const chart = lava.chart({
  label: "Test",
  type: "ScatterChart",
  containerId: "chart_div",
  data: [
    ["Age", "Cash"],
    [12, 101],
    [15, 240],
    [18, 280],
    [32, 324],
    [27, 429],
    [44, 624]
  ],
  options: {
    colors: ["green"],
    chartArea: { width: "50%" }
  },
  formats: [
    {
      type: "NumberFormat",
      index: 1, // DataTable Column
      options: {
        prefix: "$",
        suffix: " BILLS!"
      }
    }
  ]
});

lava.draw();
