const chart = lava.chart({
  label: "Test",
  type: "ScatterChart",
  elementId: "chart_div",
  datatable: [["Age", "Cash"], [12, 101], [15, 240], [18, 280], [32, 324]],
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

lava.store(chart);
lava.run();
