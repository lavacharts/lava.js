lava.draw([
  {
    label: "Chart1",
    type: "AreaChart",
    containerId: "chart_div1",
    data: [
      ["Hours", "Temp. (C)"],
      [1, Math.random()],
      [2, Math.random()],
      [3, Math.random()],
      [4, Math.random()],
      [5, Math.random()],
      [6, Math.random()]
    ],
    options: {
      legend: "none",
      colors: ["red"]
    }
  },
  {
    label: "Chart2",
    type: "BarChart",
    containerId: "chart_div2",
    data: [
      ["Hours", "Temp. (C)"],
      [1, Math.random()],
      [2, Math.random()],
      [3, Math.random()],
      [4, Math.random()],
      [5, Math.random()],
      [6, Math.random()]
    ],
    options: {
      legend: "none",
      colors: ["blue"]
    }
  }
]);
