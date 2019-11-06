function randomData(data) {
  data.addColumn("number", "Hours");
  data.addColumn("number", "Temp. (C)");

  for (let i = 1; i <= 25; i++) {
    data.addRow([i, Math.random()]);
  }

  return data;
}

lava.charts([
  {
    // label: "This prop is optional",
    type: "AreaChart",
    containerId: "chart_div1",
    data: randomData,
    options: {
      legend: "none",
      colors: ["red"]
    }
  },
  {
    // default label if omitted, `containerId`,
    type: "BarChart",
    containerId: "chart_div2",
    data: randomData,
    options: {
      legend: "none",
      colors: ["orange"]
    }
  },
  {
    type: "ScatterChart",
    containerId: "chart_div3",
    data: randomData,
    options: {
      legend: "none",
      colors: ["grey"]
    }
  }
]);

lava.draw();
