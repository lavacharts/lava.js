const r = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);

const chart = lava.chart({
  label: "MyFancyChart",
  type: "ScatterChart",
  elementId: "chart_div",
  data: [
    ["Age", "Cash"],
    [r(20, 30), r(100, 300)],
    [r(20, 30), r(100, 300)],
    [r(20, 30), r(100, 300)]
  ],
  options: {
    legend: "none"
  }
});

jQuery($ => {
  $("#clicky").click(() => {
    chart.updateData([
      ["Age", "Cash"],
      [r(20, 30), r(100, 300)],
      [r(20, 30), r(100, 300)],
      [r(20, 30), r(100, 300)]
    ]);
  });
});

lava.draw();
