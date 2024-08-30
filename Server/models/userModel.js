import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { AppError } from "../middlewares/errorHandlerMiddleware.js";

//define user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
  playlists: [
    {
      name: {
        type: String,
      },
      songs: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Song",
        },
      ],
    },
  ],
});

//hash password before saving user to database
userSchema.pre("save", async function (next) {
  //a middleware to hash the password before saving the user to the database
  try {
    //check if the password has been modified
    if (!this.isModified("password")) {
      next(); //if the password has not been modified, move to the next middleware which is saving the user to the database
    }
    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

//method to compare password entered by user with the hashed password in the database during login
userSchema.methods.isValidPassword = async function (enteredPassword) {
  try {
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (error) {
    throw new AppError(500, "Internal server error");
  }
};

//create user Model  using userSchema
const User = mongoose.model("User", userSchema);

//export user model
export default User;
