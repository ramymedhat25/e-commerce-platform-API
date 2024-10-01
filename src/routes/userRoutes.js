const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const { protect, admin } = require("../middlewares/authMiddleware");
const router = express.Router();
// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// protected route (get user profile)
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

module.exports = router;
