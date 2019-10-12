const lava = new LavaJs();

const chart = lava.chart({
  label: "Test",
  type: "PieChart",
  elementId: "chart_div",
  data: data => {
    data.addColumn("string", "Topping");
    data.addColumn("number", "Slices");
    data.addRows([
      ["Mushrooms", 3],
      ["Onions", 1],
      ["Olives", 1],
      ["Zucchini", 1],
      ["Pepperoni", 2]
    ]);

    return data;
  },
  events: {
    // Can be defined upon creation
    select({ chart, data }) {
      const selectedItem = chart.getSelection()[0];

      if (selectedItem) {
        const topping = data.getValue(selectedItem.row, 0);

        alert("The user selected " + topping);
      }
    }
  }
});

// Or attached later on...
chart.on("ready", () => {
  // this.uuid is a simple getter for `${this.type}::${label}`
  alert(this.uuid + " is ready!");
});

lava.store(chart);

lava.run();
