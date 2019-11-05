lava.chart({
  type: "SteppedAreaChart",
  containerId: "chart_div",
  data: [
    ["Director (Year)", "Rotten Tomatoes", "IMDB"],
    ["Alfred Hitchcock (1935)", 8.4, 7.9],
    ["Ralph Thomas (1959)", 6.9, 6.5],
    ["Don Sharp (1978)", 6.5, 6.4],
    ["James Hawes (2008)", 4.4, 6.2]
  ],
  options: {
    title: "The decline of 'The 39 Steps'",
    vAxis: { title: "Accumulated Rating" },
    isStacked: true
  },
  formats: [
    {
      type: "NumberFormat",
      index: 1, // DataTable Column
      options: {
        pattern: "#.#",
        suffix: " / 10"
      }
    },
    {
      type: "NumberFormat",
      index: 2, // DataTable Column
      options: {
        pattern: "#.#",
        suffix: " out of 10"
      }
    }
  ]
});

lava.draw();
