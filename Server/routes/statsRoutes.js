import express from "express";
import { getOverallStats } from "../controllers/statsController.js";

//create a router object
const router = express.Router();

// a route to get the overall stats
router.get("/", getOverallStats);

export default router;
