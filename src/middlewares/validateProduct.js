const validateProduct = (req, res, next) => {
  const { name, price, category, stock } = req.body;
  if (!name || !price || !category || typeof stock !== "number") {
    return res
      .status(400)
      .json({ message: "Missing required fields or invalid data" });
  }
  next(); // Continue to the next middleware or route handler
};

module.exports = validateProduct;
