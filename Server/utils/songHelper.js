import Song from "../models/songModel.js";

//helper function to check if a song exists
const isSongExists = async (songId) => {
  const song = await Song.findById(songId);
  if (song) {
    return song;
  } else {
    return null;
  }
};

export default isSongExists;
