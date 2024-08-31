import express from "express";
import songRouter from "./songRoutes.js";
import statRouter from "./statsRoutes.js";
import authRouter from "./authRoutes.js";
import userRouter from "./userRoutes.js";

//this is the main router file that will be used in the app.js file

//create a router
const router = express.Router();

// Use the song router
router.use("/api/songs", songRouter);

// Use the stats router
router.use("/api/stats", statRouter);

// Use auth router
router.use("/api/auth", authRouter);

//use user router
router.use("/api/users", userRouter);

export default router;
