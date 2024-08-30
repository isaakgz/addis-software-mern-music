import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import { AppError } from "./errorHandlerMiddleware.js";

//middleware to protect route
const protect = async (req, res, next) => {
  let token;

  //read the token from jwt cookie
  token = req.cookies.token;

  if (token) {
    try {
      //verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //get the user from the token
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      next(new AppError(401, "Not authorized, token failed"));
    }
  } else {
    next(new AppError(401, "Not authorized"));
  }
};

export { protect };
