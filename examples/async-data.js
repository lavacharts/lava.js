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

chart.on("ready", () => {
  console.log("Ready to start updating...");

  setInterval(() => {
    console.error("UPDATING!");

    chart.updateData([
      ["Age", "Cash"],
      [r(20, 30), r(100, 300)],
      [r(20, 30), r(100, 300)],
      [r(20, 30), r(100, 300)]
    ]);
  }, 2000);
});

lava.draw();
