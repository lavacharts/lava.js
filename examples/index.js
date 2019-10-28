const f = (min, max) => Math.random() * (max - min) + min;

lava.chart({
  label: "Lavachart",
  type: "AreaChart",
  containerId: "chart_div",
  data: [
    ["Hours Past", "Temp. (C)"],
    [1, f(500, 600)],
    [2, f(400, 500)],
    [3, f(300, 400)],
    [4, f(200, 300)],
    [5, f(100, 200)],
    [6, f(0, 100)]
  ],
  options: {
    title: "Let your data flow",
    legend: "none",
    colors: ["red"]
  }
});

lava.draw();
