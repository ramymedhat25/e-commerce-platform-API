const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController");
const { protect, admin } = require("../middlewares/authMiddleware");
const router = express.Router();
// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Get user profile
router.get("/profile", protect, getUserProfile);

// Update user profile
router.put("/profile", protect, updateUserProfile);
module.exports = router;
