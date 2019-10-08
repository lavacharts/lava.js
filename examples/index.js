const LavaJs = require("../dist/lava.js");

const lava = new LavaJs();

const chart = lava.chart({
  label: "Test",
  type: "PieChart",
  elementId: "chart_div",
  data: [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7]
  ],
  options: {
    title: "My Daily Activities"
  }
});

lava.store(chart);
lava.run();
