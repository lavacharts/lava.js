const donutRangeSlider = lava.control({
  controlType: "NumberRangeFilter",
  containerId: "filter_div",
  options: {
    filterColumnLabel: "Donuts eaten",
    minValue: 1,
    maxValue: 10
  },
  // Explicitly positions the thumbs at position 3 and 8,
  // out of the possible range of 1 to 10.
  state: { lowValue: 3, highValue: 8 }
});

const pieChart = new google.visualization.ChartWrapper({
  containerId: "chart_div"
});

lava.dashboard({
  label: "Test",
  wrapper: {
    chartType: "PieChart",
    elementId: "chart_div"
  },
  bind: [[donutRangeSlider, pieChart]],
  data: [
    ["Name", "Gender", "Age", "Donuts eaten"],
    ["Michael", "Male", 12, 5],
    ["Elisa", "Female", 20, 7],
    ["Robert", "Male", 7, 3],
    ["John", "Male", 54, 2],
    ["Jessica", "Female", 22, 6],
    ["Aaron", "Male", 3, 1],
    ["Margareth", "Female", 42, 8]
  ],
  // The pie chart will use the columns 'Name' and 'Donuts eaten'
  // out of all the available ones.
  view: { columns: [0, 3] },
  options: {
    width: 300,
    height: 300,
    title: "Donuts eaten per person"
  }
});

lava.draw();
