import Song from "../models/songModel.js";
import sendResponse from "../utils/responseHelper.js";

// @desc  Get overall statistics
// @route GET /api/stats
// @access Private
const getOverallStats = async (req, res, next) => {
  try {
    // Get the total number of songs , artists, albums and genres
    const totalSongs = await Song.countDocuments();

    //distinct method is used to get the unique values of a field in a collection
    const totalArtists = await Song.distinct("artist").then(
      (artist) => artist.length
    );
    console.log(totalArtists);
    const totalAlbums = await Song.distinct("album").then(
      (album) => album.length
    );
    const totalGenres = await Song.distinct("genre").then(
      (genre) => genre.length
    );

    const songsAndAlbumsByArtist = await Song.aggregate([
      {
        //stage 1: group by artist field in the collection and get the total number of songs and albums by each artist
        $group: {
          _id: "$artist", //group by artist field
          totalSongs: { $sum: 1 }, //count the number of songs by each artist
          totalAlbums: { $addToSet: "$album" }, //Collect unique albums for each artist in an array
        },
      },
      {
        //stage 2: project the fields to display
        $project: {
          //
          _id: 0, //exclude the _id field
          artist: "$_id", //rename the _id field to artist
          totalSongs: 1, //display the totalSongs field
          totalAlbums: { $size: "$totalAlbums" }, //count the number of albums by each artist
        },
      },
    ]);

    //song in each album
    const songsInEachAlbum = await Song.aggregate([
      //stage 1: group by album field in the collection and get the total number of songs in each album
      {
        $group: {
          _id: "$album", //group by album field
          totalSongs: { $sum: 1 }, //count the number of songs in each album
        },
      },
      //stage 2: project the fields to display
      {
        $project: {
          _id: 0, //exclude the _id field
          album: "$_id", //rename the _id field to album
          totalSongs: 1, //display the totalSongs field
        },
      },
    ]);

    //songs in each genre
    const songsInEachGenre = await Song.aggregate([
      //stage 1: group by genre field in the collection and get the total number of songs in each genre
      {
        $group: {
          _id: "$genre", //group by genre field
          totalSongs: { $sum: 1 }, //count the number of songs in each genre
        },
      },

      //stage 2: project the fields to display
      {
        $project: {
          _id: 0, //exclude the _id field
          genre: "$_id", //rename the _id field to genre
          totalSongs: 1, //display the totalSongs field
        },
      },
    ]);

    //send the response
    sendResponse(res, 200, "success", {
      totalSongs,
      totalArtists,
      totalAlbums,
      totalGenres,
      songsAndAlbumsByArtist,
      songsInEachAlbum,
      songsInEachGenre,
    });
  } catch (error) {
    //pass the error to the error handler middleware
    next(error);
  }
};

export { getOverallStats };
