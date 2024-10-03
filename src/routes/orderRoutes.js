const express = require("express");
const { createOrder, getOrderById } = require("../controllers/orderController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router;

// Any logged-in user can place an order
router.post("/", protect, createOrder);

// Any logged-in user can get their order by ID
router.get("/:id", protect, getOrderById);

module.exports = router;
