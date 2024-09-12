import { AppError } from "../middlewares/errorHandlerMiddleware.js";
import User from "../models/userModel.js";
import sendResponse from "../utils/responseHelper.js";
import isSongExists from "../utils/songHelper.js";

// @desc Add a song to the user's favorite list
// @route POST /api/users/favorite/:songId
// @access Private
const addFavorite = async (req, res, next) => {
  try {
    // Get the user and song id from the request
    const user = req.user;
    const { songId } = req.params;

    //check if the song exists
    const song = await isSongExists(songId);
    if (!song) {
      throw new AppError(404, "Song not found");
    }

    //check if the song is already in the user's favorite list
    if (user.favorites.includes(songId)) {
      throw new AppError(400, "Song already in favorite list");
    }

    //add the song to the user's favorite list
    user.favorites.push(songId);
    await user.save();

    //send success response
    sendResponse(res, 200, "success", {
      newFavorite: song,
    });
  } catch (error) {
    // console.log(error)
    //pass the error to the error handling middleware
    next(error);
  }
};

// @desc Remove a song from the user's favorite list
// @route DELETE /api/users/favorites/:songId
// @access Private
const removeFavorite = async (req, res, next) => {
  try {
    // Get the user and song id from the request
    const user = req.user;
    const { songId } = req.params;

    //check if the song exists
    const song = await isSongExists(songId);
    if (!song) {
      throw new AppError(404, "Song not found");
    }

    //check if the song is in the user's favorite list
    if (!user.favorites.includes(songId)) {
      throw new AppError(400, "Song not in favorite list");
    }

    //remove the song from the user's favorite list
    user.favorites = user.favorites.filter((id) => id.toString() !== songId);
    await user.save();

    //send success response
    sendResponse(res, 200, "success", {
      removedFavorite: song._id,
    });
  } catch (error) {
    //pass the error to the error handling middleware
    next(error);
  }
};

// @desc Get user's favorite list
// @route GET /api/users/favorites
// @access Private
const getFavorites = async (req, res, next) => {
  try {
    const user = req.user;

    //populate the favorites filed in the user document with the song details
    await user.populate("favorites");

    sendResponse(res, 200, "success", {
      favorites: user.favorites,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// @desc create a new playlist
// @route POST /api/users/playlists
// @access Private

const createPlaylist = async (req, res, next) => {
  try {
    const user = req.user;
    const { name } = req.body;

    //check the input name is not empty
    if (!(name && name.trim())) {
      throw new AppError(400, "Playlist name cannot be empty");
    }

    //create a new playlist
    user.playlists.push({
      name,
      songs: [],
    });
    await user.save();

    //send success response
    sendResponse(res, 200, "success", {
      playlists: user.playlists,
    });
  } catch (error) {
    //pass the error to the error handling middleware
    next(error);
  }
};

// @desc Add a song to a playlist
// @route POST /api/users/playlists/:playlistId/:songId
// @access Private
const addSongToPlaylist = async (req, res, next) => {
  try {
    const user = req.user;
    const { playlistId, songId } = req.params;

    //check if the song exists
    const song = isSongExists(songId);
    if (!song) {
      throw new AppError(404, "Song not found");
    }
    //check if the playlist exists

    const playlist = user.playlists.id(playlistId);
    if (!playlist) {
      throw new AppError(404, "Playlist not found");
    }

    //check if the song is already in the playlist
    if (playlist.songs.includes(songId)) {
      throw new AppError(400, "Song already in playlist");
    }

    //add the song to the playlist
    playlist.songs.push(songId);
    await user.save();

    //send success response
    sendResponse(res, 200, "success", {
      playlists: user.playlists,
    });
  } catch (error) {
    //pass the error to the error handling middleware
    next(error);
  }
};

// @desc  Get all playlists of a user
// @route GET /api/users/playlists
// @access Private
const getPlaylists = async (req, res, next) => {
  try {
    const user = req.user;

    //populate the playlists field in the user document with the song details
    await user.populate("playlists");
    sendResponse(res, 200, "success", {
      playlists: user.playlists,
    });
  } catch (error) {
    next(error);
  }
};

// @desc Remove a song from a playlist
// @route DELETE /api/users/playlists/:playlistId/:songId
// @access Private
const removeSongFromPlaylist = async (req, res, next) => {
  try {
    const user = req.user;
    const { playlistId, songId } = req.params;

    // Find the playlist and remove the song from it

    const playlist = user.playlists.id(playlistId);
    if (!playlist) {
      throw new AppError(404, "Playlist not found");
    }

    playlist.songs = playlist.songs.filter(
      (song) => song.toString() !== songId
    );
    await user.save();

    sendResponse(res, 200, "success", { playlists: user.playlists });
  } catch (error) {
    next(error);
  }
};

// @desc Delete a playlist
// @route DELETE /api/users/playlists/:playlistId
// @access Private
const deletePlaylist = async (req, res, next) => {
  try {
    const user = req.user;
    const { playlistId } = req.params;

    // Find the playlist and remove it

    const playlist = user.playlists.id(playlistId);
    if (!playlist) {
      throw new AppError(404, "Playlist not found");
    }
    user.playlists = user.playlists.filter(
      (playlist) => playlist._id.toString() !== playlistId
    );
    await user.save();

    sendResponse(res, 200, "success", { playlists: user.playlists });
  } catch (error) {
    next(error);
  }
};

export {
  addFavorite,
  removeFavorite,
  createPlaylist,
  addSongToPlaylist,
  removeSongFromPlaylist,
  deletePlaylist,
  getFavorites,
  getPlaylists,
};
