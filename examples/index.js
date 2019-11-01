function r(n, x) {
  return Math.random() * (x - n) + n;
}

lava.chart({
  label: "Lavachart",
  type: "AreaChart",
  containerId: "chart_div",
  data: [
    ["series", "volcano", "lava"],
    [1, r(0, 100), r(0, 100)],
    [2, r(100, 200), r(100, 200)],
    [3, r(200, 300), r(200, 300)],
    [4, r(300, 400), r(300, 400)],
    [5, r(400, 500), r(400, 500)],
    [6, r(500, 600), r(500, 600)],
    [7, r(400, 500), r(400, 500)],
    [8, r(300, 400), r(300, 400)],
    [9, r(200, 300), r(200, 300)],
    [10, r(100, 200), r(100, 200)],
    [11, r(0, 100), r(0, 100)]
  ],
  options: {
    title: "Let your data flow",
    legend: "bottom",
    colors: ["#8c470b", "red"]
  }
});

lava.draw();
