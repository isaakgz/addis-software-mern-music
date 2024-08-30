/**
 The provided code is a class definition in JavaScript called ErrorHandler. It extends the built-in Error class, which means that instances of ErrorHandler will inherit all the properties and methods of the Error class.

The ErrorHandler class has a constructor function that takes two parameters: statusCode and message. These parameters represent the status code and error message that will be associated with an instance of ErrorHandler.

Inside the constructor, the super() function is called. This is necessary when extending a class and it calls the constructor of the parent class (Error in this case). It ensures that the parent class is properly initialized before any additional code in the child class is executed.

After calling super(), the constructor assigns the statusCode and message parameters to the respective properties of the ErrorHandler instance using the this keyword. This allows the instance to store and access these values later.

By defining a custom ErrorHandler class, developers can create instances of this class to represent different types of errors in their code. They can set the statusCode and message properties to provide specific information about the error. This can be useful for handling and displaying errors in a consistent and meaningful way throughout an application.
 */

import mongoose from "mongoose";

// This middleware is used to handle errors in the application. It is used to catch errors and send a response to the client with the error message and status code.

class AppError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

// Helper function to send error response
const sendErrorResponse = (res, error, stack) => {
  const response = {
    statusCode: error.statusCode,
    status: "error",
    message: error.message,
  };

  if (process.env.NODE_ENV === "development" && stack) {
    response.stack = stack;
  }

  res.status(error.statusCode).json(response);
};

// This function is used to handle errors in the application. It checks the type of error and sends an appropriate response to the client.
const handleError = (err, res) => {
  let error;

  if (err.name === "ValidationError") {
    // Extract error messages from the ValidationError object if there are multiple errors
    const message = Object.values(err.errors)
      .map((value) => value.message)
      .join(", ");
    error = new AppError(400, message);
  } else if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    error = new AppError(404, message);
  } else if (err.message && err.message.includes("Cast to ObjectId failed")) {
    const message = `Invalid ID format: ${err.value}`;
    error = new AppError(400, message);
  } else if (err instanceof  mongoose.Error.CastError) {
    const message = Object.values(err.errors)
      .map((value) => value.message) 
      .join(", ");
    error = new AppError(400, message);
  } else {
    // For other errors
    const { statusCode = 500, message = "Internal Server Error" } = err;
    error = new AppError(statusCode, message);
  }

  sendErrorResponse(res, error, err.stack);
};
// Middleware to validate ObjectId globally
const validateObjectId = (req, res, next) => {
  const id = req.params.id || req.body.id || req.query.id;
  if (id && !mongoose.isValidObjectId(id)) {
    const error = new AppError(404, `Invalid ObjectId: ${id}`);
    return next(error);
  }
  next();
};

// Error handler for unhandled routes
const notFound = (req, res, next) => {
  const error = new AppError(404, `Not Found - ${req.originalUrl}`);
  next(error);
};

export { AppError, handleError, notFound, validateObjectId };
