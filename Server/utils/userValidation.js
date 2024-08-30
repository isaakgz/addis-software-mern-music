import joi from "joi";

//defining the schema for the user registration input validation
const userSignupSchema = joi.object({
  username: joi.string().min(3).max(30).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

//defining the schema for the user login input validation
const userLoginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

//define the function to validate the user registration input
const validateUser = (user, isLogin = false) => {
  const schema = isLogin ? userLoginSchema : userSignupSchema;
  return schema.validate(user);
};

export default validateUser;
