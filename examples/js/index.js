// Create a chart
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

/**
 * Store the chart
 *
 * This adds the chart to the render queue. The queue will
 * be processed once `window.google !== undefined`
 */
lava.store(chart);

// Process the queue and draw your charts!
lava.run();
