import jwt from "jsonwebtoken";

//helper function to generate jwt token and set it as HttpOnly cookie
const generateAndSetSessionToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d", //expires in 30 days
  });
  //set jwt token as HttpOnly cookie
  res.cookie("token", token, {
    httpOnly: true, //cookie cannot be accessed by client-side scripts
    secure: process.env.NODE_ENV === "production", //cookie will only be sent over HTTPS in production environment otherwise it will be sent over HTTP in development environment
    maxAge: 30 * 24 * 60 * 60 * 1000, //cookie will expire in 30 days
    sameSite: "strict", //cookie will only be sent in a first-party context and not be sent along with cross-site requests preventing CSRF attacks
  });
};

export default generateAndSetSessionToken;
