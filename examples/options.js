const chart = lava.chart({
  type: "AreaChart",
  containerId: "chart_div",
  data: [
    ["Series", "Random"],
    [1, Math.random()],
    [2, Math.random()],
    [3, Math.random()],
    [4, Math.random()],
    [5, Math.random()]
  ],
  options: {
    legend: "none"
  }
});

setInterval(() => {
  chart.set("colors", [
    `#${Math.random()
      .toString(16)
      .substr(-6)}`
  ]);

  chart.set("areaOpacity", Math.random());
}, 2000);

lava.draw();
