import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

//create a router object
const router = express.Router();

// route for user registration
router.post("/register", registerUser);

//route for user login
router.post("/login", loginUser);

export default router;
