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

// This will return a random hex color
function randomColor() {
  return `#${Math.random()
    .toString(16)
    .substr(-6)}`;
}

// Set individual options
setInterval(() => {
  chart.set("backgroundColor", randomColor());
}, 1500);

// Or set many
setInterval(() => {
  chart.updateOptions({
    areaOpacity: Math.random(),
    colors: [randomColor()]
  });
}, 2500);

lava.draw();
