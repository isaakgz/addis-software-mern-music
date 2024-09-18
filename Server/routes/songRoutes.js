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
router.route("/").get(getSongs).post(addSong);

// route to get a song by id
router.get("/id/:id", getSongById);

// route to get songs by artist
router.get("/artist/:artist", getSongByArtist);

// route to get songs by genre
router.get("/genre/:genre", getSongByGenre);

// route to get songs by album
router.get("/album/:album", getSongsByAlbum);

// route to update song by id and remove song by id
router.route("/:id").put(updateSong).delete(deleteSong);

//route to get song suggestions from the deezer API
router.get("/suggestions", getSuggestions);

// export the router
export default router;
