const express = require("express");
const fs = require("fs").promises;
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json()); // To parse JSON bodies
app.use(express.static(path.join(__dirname, "public"))); // Serve static files (optional)
app.use(cors()); // Enable CORS

// GET /pizzas endpoint
app.get("/pizzas", async (req, res) => {
  try {
    const pizzas = await fs.readFile("data/pizzas.json", "utf8");
    res.json(JSON.parse(pizzas));
  } catch (err) {
    console.error("Error reading pizzas file:", err);
    res.status(500).json({ message: "Failed to fetch pizzas." });
  }
});

// POST /orders endpoint
app.post("/orders", async (req, res) => {
  const order = req.body.order;

  console.log(order);

  // Validate order body
  if (!order || !order.items || order.items.length === 0) {
    return res.status(400).json({ message: "No data sent." });
  }

  if (!order.customer.name || !order.customer.name.trim()) {
    return res.status(400).json({
      message: "Please enter your name.",
    });
  }

  if (!order.customer.email || !order.customer.email.includes("@")) {
    return res.status(400).json({
      message: "Please enter a valid email address.",
    });
  }

  if (!order.customer.address || !order.customer.address.trim()) {
    return res.status(400).json({
      message: "Please enter your address.",
    });
  }

  if (!order.customer.city || !order.customer.city.trim()) {
    return res.status(400).json({
      message: "Please enter your city.",
    });
  }

  if (!order.customer.district || !order.customer.district.trim()) {
    return res.status(400).json({
      message: "Please enter your district.",
    });
  }

  const newOrder = {
    ...order,
    id: Date.now().toString(),
  };

  try {
    const ordersData = await fs.readFile("data/orders.json", "utf8");
    const allOrders = JSON.parse(ordersData);
    allOrders.push(newOrder);

    await fs.writeFile("data/orders.json", JSON.stringify(allOrders, null, 2));
    res.status(201).json({ message: "Order added!" });
  } catch (err) {
    console.error("Error handling orders file:", err);
    res.status(500).json({ message: "Failed to process order." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
