import { AppError } from "../middlewares/errorHandlerMiddleware.js";
import User from "../models/userModel.js";
import sendResponse from "../utils/responseHelper.js";
import validateUserInput from "../utils/userValidation.js";
import generateAndSetSessionToken from "../utils/tokenHelper.js";
// @desc   Register a new user
// @route  POST /api/auth/register
// @access Public
const registerUser = async (req, res, next) => {
  try {
    // Get the user data from the request body
    const { username, email, password } = req.body;

    //validate user input
    const { error } = validateUserInput(req.body);
    if (error) {
      throw new AppError(400, error.details[0].message.replace(/"/g, ""));
    }

    // Check if the user already exists in the database by email or username
    const existingUser = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });
    if (existingUser) {
      throw new AppError(
        400,
        "User already exists with this email or username"
      );
    }

    //note: password hashing will be done in the userModel.js file

    // Create a new user
    const user = await User.create({
      username,
      email,
      password,
    });

    // Send the response
    sendResponse(res, 201, "success", {
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    // Pass the error to the error handler middleware
    next(error);
  }
};

// @desc   Login a user
// @route  POST /api/auth/login
// @access Public
const loginUser = async (req, res, next) => {
  try {
    //get the user data from the request body
    const { email, password } = req.body;

    //validate user input
    const { error } = validateUserInput(req.body, true);
    if (error) {
      throw new AppError(400, error.details[0].message.replace(/"/g, ""));
    }
    //check if the user exists in the database and the password is correct
    const existingUser = await User.findOne({ email });
    if (existingUser && (await existingUser.isValidPassword(password))) {
      //generate JWT  token for the user and set it cookie in the response
      generateAndSetSessionToken(res, existingUser._id);

      //send the response with the user data
      sendResponse(res, 200, "success", {
        user: {
          _id: existingUser._id,
          username: existingUser.username,
          email: existingUser.email,
        },
      });
    } else {
      throw new AppError(401, "Invalid email or password");
    }
  } catch (error) {
    //pass the error to the error handler middleware
    next(error);
  }
};

export { registerUser, loginUser };
