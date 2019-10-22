import "./homepage-banner";

lava.chart({
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

lava.draw();
