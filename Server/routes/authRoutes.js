import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

//create a router object
const router = express.Router();

// route for user registration
router.post("/register", registerUser);

//route for user login
router.post("/login", loginUser);

//route for user logout
router.post("/logout", protect, logoutUser);

export default router;
