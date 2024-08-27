import mongoose from "mongoose";

// Define the schema for the song model
const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true, //
  },
  albumImageUrl: {
    type: String,
    required: false, // Not all songs have an album image
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the song model
const Song = mongoose.model("Song", songSchema);

export default Song;
