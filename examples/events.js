const chart = lava.chart({
  label: "Test",
  type: "PieChart",
  elementId: "chart_div",
  data: data => {
    data.addColumn("string", "Topping");
    data.addColumn("number", "Pizzas");
    data.addRows([["Mushroom & Olive", 2], ["Pepperoni", 5]]);

    return data;
  },
  events: {
    // Events can be defined upon creation
    ready() {
      // chart.id is just a getter for `${this.type}:${this.label}`
      alert(chart.id + " is ready!");
    }
  }
});

// Or attached after the fact
chart.on("select", ({ chart, data }) => {
  const selectedItem = chart.getSelection()[0];

  if (selectedItem) {
    const topping = data.getValue(selectedItem.row, 0);

    alert("The user selected " + topping);
  }
});
  
lava.draw();
