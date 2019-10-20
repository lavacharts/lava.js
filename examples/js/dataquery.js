const id = "1DwWSti6L3KRyJC0Wi33X3i-6lsZ2iStrhK7sxw7uoek";
const base = "https://docs.google.com/spreadsheets/d";
const query = "gviz/tq?range=A1:B6";

// https://docs.google.com/spreadsheets/d/1DwWSti6L3KRyJC0Wi33X3i-6lsZ2iStrhK7sxw7uoek/edit?usp=sharing

lava.chart({
  label: "Test",
  type: "PieChart",
  elementId: "chart_div",
  data: `${base}/${id}/${query}`,
  options: {
    width: 400,
    height: 240,
    is3D: true
  }
});

lava.draw();
