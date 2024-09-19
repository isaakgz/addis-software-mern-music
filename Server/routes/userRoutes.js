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
import {protect} from "../middlewares/authMiddleware.js"

//create a router
const router = express.Router();

//route to add a song to favorites
router.post("/favorites/:songId", protect, validateObjectId, addFavorite);

//route to get all favorite songs
router.get("/favorites", protect, getFavorites);

//route to remove a song from favorites
router.delete("/favorites/:songId", protect, validateObjectId, removeFavorite);

//route to create a playlist
router.post("/playlists", protect, createPlaylist);

//route to get all playlists
router.get("/playlists", protect, getPlaylists);

//route to add a song to a playlist
router.post(
  "/playlists/:playlistId/:songId",
  protect,
  validateObjectId,
  addSongToPlaylist
);

//route to remove a song from a playlist
router.delete(
  "/playlists/:playlistId/:songId",
  validateObjectId,
  protect,
  removeSongFromPlaylist
);

//route to get all songs in a playlist
router.get(
  "/playlists/:playlistId",
  protect,
  validateObjectId,
  getSongsInPlaylist
);

//route to delete a playlist
router.delete(
  "/playlists/:playlistId",
  protect,
  validateObjectId,
  deletePlaylist
);

export default router;
