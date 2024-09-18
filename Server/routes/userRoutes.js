import express from "express";
import {
  addFavorite,
  addSongToPlaylist,
  createPlaylist,
  deletePlaylist,
  getFavorites,
  getPlaylists,
  getSongsInPlaylist,
  removeFavorite,
  removeSongFromPlaylist,
} from "../controllers/userController.js";
import validateObjectId from "../middlewares/validateObjectId.js";

//create a router
const router = express.Router();

//route to add a song to favorites
router.post("/favorites/:songId", validateObjectId, addFavorite);

//route to get all favorite songs
router.get("/favorites", getFavorites);

//route to remove a song from favorites
router.delete("/favorites/:songId", validateObjectId, removeFavorite);

//route to create a playlist
router.post("/playlists", createPlaylist);

//route to get all playlists
router.get("/playlists",  getPlaylists);

//route to add a song to a playlist
router.post(
  "/playlists/:playlistId/:songId",

  validateObjectId,
  addSongToPlaylist
);

//route to remove a song from a playlist
router.delete(
  "/playlists/:playlistId/:songId",
  validateObjectId,
  removeSongFromPlaylist
);

//route to get all songs in a playlist
router.get(
  "/playlists/:playlistId",

  validateObjectId,
  getSongsInPlaylist
);

//route to delete a playlist
router.delete(
  "/playlists/:playlistId",

  validateObjectId,
  deletePlaylist
);

export default router;
