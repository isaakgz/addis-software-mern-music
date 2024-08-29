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
} from "../controllers/songController.js";

//create a router
const router = express.Router();

//route to get all songs
router.get("/", getSongs);

//route to get a song by id
router.get("/id/:id", getSongById);

//route to get songs by artist
router.get("/artist/:artist", getSongByArtist);

//route to get songs by genre
router.get("/genre/:genre", getSongByGenre);

//route to get songs by album
router.get("/album/:album", getSongsByAlbum);

//route to add a song
router.post("/", addSong);

//route to update song
router.put("/:id", updateSong);

//route to delete song
router.delete("/:id", deleteSong);
//export the router
export default router;
