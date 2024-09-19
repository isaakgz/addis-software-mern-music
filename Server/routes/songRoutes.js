import express from "express";
import {
  getSongs,
  getSongByArtist,
  getSongByGenre,
  getSongById,
  getSongsByAlbum,
  addSong,
  updateSong,
  deleteSong,
  getSuggestions,
} from "../controllers/songController.js";
import { protect } from "../middlewares/authMiddleware.js";

// create a router
const router = express.Router();

// route to get all songs and add a song
router.route("/", protect).get(protect, getSongs).post(addSong);

// route to get a song by id
router.get("/id/:id", protect, getSongById);

// route to get songs by artist
router.get("/artist/:artist", protect, getSongByArtist);

// route to get songs by genre
router.get("/genre/:genre", protect, getSongByGenre);

// route to get songs by album
router.get("/album/:album", protect, getSongsByAlbum);

// route to update song by id and remove song by id
router
  .route("/:id", protect)
  .put(protect, updateSong)
  .delete(protect, deleteSong);

//route to get song suggestions from the deezer API
router.get("/suggestions", protect, getSuggestions);

// export the router
export default router;
