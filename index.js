const express = require("express");
const app = express();
const PORT = 3000;

const orders = require("./data/orders");

app.use(express.json());

// GET all orders (Get All Route)
app.get("/orders", (req, res) => {
  res.status(200).json(orders);
});


// GET a single order by ID (Get By ID Route)
app.get("/orders/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const order = orders.find((x) => x.id === id);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.status(200).json(order);
});


// POST(Update) a new order
app.post("/orders", (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    customer: req.body.customer,
    item: req.body.item,
    size: req.body.size,
  };

  orders.push(newOrder);
  res.status(201).json(newOrder);
});


// DELETE an old order
app.delete("/revoke-order/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const orderIndex = orders.findIndex((x) => x.id === id);

  if (orderIndex === -1) {
    return res.status(404).json({ message: "Order not found" });
  }

  orders.splice(orderIndex, 1);
  res.status(200).json({ message: "Order deleted successfully "});
});


// Run server
app.listen(PORT, () => {
  console.log(`Coffee API running at http://localhost:${PORT}`);
});
