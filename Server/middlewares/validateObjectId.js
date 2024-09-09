import mongoose from "mongoose";
import { AppError } from "./errorHandlerMiddleware.js";

const validateObjectId = (req, res, next) => {
  const { playlistId, songId } = req.params;

  if (playlistId && !mongoose.Types.ObjectId.isValid(playlistId)) {
    return next(new AppError(400, "Invalid playlist ID"));
  }

  if (songId && !mongoose.Types.ObjectId.isValid(songId)) {
    return next(new AppError(400, "Invalid song ID"));
  }
  next();
};

export default validateObjectId;