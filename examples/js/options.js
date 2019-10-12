const lava = new LavaJs();

function getRandomColor() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += "0123456789ABCDEF"[Math.floor(Math.random() * 16)];
  }

  return color;
}

function loadOptions() {
  lava.loadOptions("MyFancyChart", {
    colors: [getRandomColor()]
  });
}

const chart = lava.chart({
  label: "MyFancyChart",
  type: "ScatterChart",
  elementId: "chart_div",
  data: [["Age", "Cash"], [12, 101], [15, 240], [18, 280], [32, 324]],
  options: {
    colors: ["green"]
  }
});

lava.store(chart);
lava.run();
