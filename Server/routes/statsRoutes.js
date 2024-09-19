import express from "express";
import { getOverallStats } from "../controllers/statsController.js";
import { protect } from "../middlewares/authMiddleware.js";
//create a router object
const router = express.Router();

// a route to get the overall stats
router.get("/", protect, getOverallStats);

export default router;
