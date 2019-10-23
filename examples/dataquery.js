const id = "1DwWSti6L3KRyJC0Wi33X3i-6lsZ2iStrhK7sxw7uoek";

lava.chart({
  label: "Test",
  type: "PieChart",
  elementId: "chart_div",
  data: lava.rangeQuery(id, "A1:B6"),
  options: {
    width: 400,
    height: 240,
    is3D: true
  }
});

lava.draw();
