const LavaJs = require("../dist/lava.js");

const lava = new LavaJs();

const sheetRoot = "https://docs.google.com/spreadsheets/d/";
const id = "1DwWSti6L3KRyJC0Wi33X3i-6lsZ2iStrhK7sxw7uoek";
const queryStr = "/gviz/tq?range=A1:B6";

const chartJson = {
  label: "Test",
  type: "PieChart",
  elementId: "chart_div",
  datatable: lava.query(sheetRoot + id + queryStr),
  options: {
    width: 400,
    height: 240,
    is3D: true
  }
};

lava.store(chartJson);
lava.run();
