import Song from "../models/songModel.js";
import { AppError } from "../middlewares/errorHandlerMiddleware.js";
import validateSong from "../utils/songValidation.js";
import isSongExists from "../utils/songHelper.js";
import sendResponse from "../utils/responseHelper.js";

// @desc    Get all songs
// @route   GET /api/songs
// @access  Private

const getSongs = async (_, res, next) => {
  try {
    const songs = await Song.find();
    sendResponse(res, 200, "success", {
      songs,
      totalCount: songs.length,
    });
  } catch (error) {
    // pass the error to the error handler middleware
    next(error);
  }
};

// @desc get a song by Artist
// @route GET /api/songs/:artist
// @access Private

const getSongByArtist = async (req, res, next) => {
  try {
    const { artist } = req.params;
    const songs = await Song.find({ artist });
    sendResponse(res, 200, "success", {
      songs,
      totalCount: songs.length,
    });
  } catch (error) {
    // pass the error to the error handler middleware
    next(error);
  }
};

// @desc get a song by Genre
// @route GET /api/songs/:genre
// @access Private

const getSongByGenre = async (req, res, next) => {
  try {
    const { genre } = req.params;
    const songs = await Song.find({ genre });
    sendResponse(res, 200, "success", {
      songs,
      totalCount: songs.length,
    });
  } catch (error) {
    // pass the error to the error handler middleware
    next(error);
  }
};

// @desc get a song by Album
// @route GET /api/songs/:album
// @access Private

const getSongsByAlbum = async (req, res, next) => {
  try {
    const { album } = req.params;
    const songs = await Song.find({ album });
    sendResponse(res, 200, "success", {
      songs,
      totalCount: songs.length,
    });
  } catch (error) {
    // pass the error to the error handler middleware
    next(error);
  }
};

// @desc get a song by ID
// @route GET /api/songs/:id
// @access Private
const getSongById = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if the song exists
    const song = await isSongExists(id);

    // check if the song exists
    if (!song) {
      throw new AppError(404, "Song not found");
    }
    //if the song exists, send the song
    sendResponse(res, 200, "success", {
      song,
    });
  } catch (error) {
    // pass the error to the error handler middleware
    next(error);
  }
};

// @desc  Add a song
// @route POST /api/songs
// @access Private
const addSong = async (req, res, next) => {
  try {
    const newSong = req.body;

    //validate user input
    const { error } = validateSong(newSong, false);
    if (error) {
      // pass the error to the error handler middleware
      throw new AppError(400, error.details[0].message.replace(/"/g, ""));
    }

    //check if the song already exists
    const songExists = await Song.findOne({ title: newSong.title });
    if (songExists) {
      throw new AppError(400, "Song already exists");
    }

    //create a new song
    const song = await Song.create(newSong);
    sendResponse(res, 201, "success", {
      song,
    });
  } catch (error) {
    // pass the error to the error handler middleware
    next(error);
  }
};

// @desc    Update a song
// @route   PUT /api/songs/:id
// @access  Private
const updateSong = async (req, res, next) => {
  try {
    const { id: songId } = req.params;
    const { title, artist, genre, album, albumImageUrl, songUrl } = req.body;

    //check if the song exists with the id
    const song = await isSongExists(songId);
    if (!song) {
      throw new AppError(404, "Song not found");
    }

    //validate user input
    const { error } = validateSong(req.body, true);
    if (error) {
      throw new AppError(400, error.details[0].message.replace(/"/g, ""));
    }
    //update the song
    Object.assign(song, {
      //this method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
      title: title || song.title,
      artist: artist || song.artist,
      genre: genre || song.genre,
      album: album || song.album,
      albumImageUrl: album || song.album,
      songUrl: songUrl || song.songUrl,
    });
    const updatedSong = await song.save();
    sendResponse(res, 200, "success", {
      updatedSong,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a song
// @route    DELETE api/songs/:id
// @access   Private

const deleteSong = async (req, res, next) => {
  try {
    const { id: songId } = req.params;

    //check if song is there with this id
    const song = await isSongExists(songId);
    if (song) {
      await song.deleteOne({ _id: songId });
      sendResponse(res, 200, "success", {
        message: "Song deleted successfully",
      });
    } else {
      throw new AppError(404, "Song not found");
    }

    //delete the song
  } catch (error) {
    next(error);
  }
};

// Export the functions
export {
  getSongs,
  getSongByArtist,
  getSongByGenre,
  getSongsByAlbum,
  getSongById,
  addSong,
  updateSong,
  deleteSong,
};
