const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/productController");
const { protect, admin } = require("../middlewares/authMiddleware");

const router = express.Router();

// Only admins can create, update, and delete products
router.post("/products", protect, admin, createProduct);
router.put("/products/:id", protect, admin, updateProductById);
router.delete("/products/:id", protect, admin, deleteProductById);

// All users can view products
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);

module.exports = router;
