const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/productController");
const validateProduct = require("../middlewares/validateProduct");

router.post("/products", validateProduct, createProduct);
router.put("/products/:id", validateProduct, updateProductById);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.delete("/products/:id", deleteProductById);

module.exports = router;

module.exports = router;
