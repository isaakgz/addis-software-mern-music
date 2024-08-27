import express from 'express';
import { getSongs } from '../controllers/songController.js';


//create a router
const router = express.Router();

//route to get all songs
router.get("/", getSongs);


//export the router
export  default router;