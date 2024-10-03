const express = require("express");
const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderToDelivered,
  deleteOrder,
} = require("../controllers/orderController");
const { protect, admin } = require("../middlewares/authMiddleware");

const router = express.Router();

// Route to create an order (Customer)
router.post("/", protect, createOrder);

// Route to get all orders (Admin only)
router.get("/", protect, admin, getAllOrders);

// Route to get a specific order by ID (Customer/Admin)
router.get("/:id", protect, getOrderById);

// Route to update an order to delivered (Admin only)
router.put("/:id/deliver", protect, admin, updateOrderToDelivered);

// Route to delete an order (Customer/Admin)
router.delete("/:id", protect, deleteOrder);

module.exports = router;
