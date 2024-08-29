import Joi from "joi";

// Validation schema for song

// Define the schema for the song model
const songSchema = Joi.object({
  title: Joi.string().min(3).required(),
  artist: Joi.string().min(3).required(),
  genre: Joi.string().min(3).required(),
  album: Joi.string().min(3).required(),
  albumImageUrl: Joi.string().min(3).optional(),
});

const updateSongSchema = Joi.object({
  title: Joi.string().min(3).optional(),
  artist: Joi.string().min(3).optional(),
  genre: Joi.string().min(3).optional(),
  album: Joi.string().min(3).optional(),
  albumImageUrl: Joi.string().min(3).optional(),
});

// Function to validate the song data
const validateSong = (song, isUpdate = false) => {
  const schema = isUpdate ? updateSongSchema : songSchema;
  return schema.validate(song);
};


export default validateSong;
