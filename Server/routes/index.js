import express from "express";
import songRouter from "./songRoutes.js";
import statRouter from "./statsRoutes.js";
import authRouter from "./authRoutes.js";
import userRouter from "./userRoutes.js";
import { protect } from "../middlewares/authMiddleware.js";

//this is the main router file that will be used in the app.js file

//create a router
const router = express.Router();

// Use the song router
router.use("/api/songs", protect, songRouter);

// Use the stats router
router.use("/api/stats", protect, statRouter);

// Use auth router
router.use("/api/auth", authRouter);

//use user router
router.use("/api/users", protect, userRouter);

export default router;
