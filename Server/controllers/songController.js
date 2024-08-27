import Song from "../models/songModel.js";

// @desc    Get all songs
// @route   GET /api/songs
// @access  Private

const getSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export { getSongs };
