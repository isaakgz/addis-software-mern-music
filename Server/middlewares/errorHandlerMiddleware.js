/**
 The provided code is a class definition in JavaScript called ErrorHandler. It extends the built-in Error class, which means that instances of ErrorHandler will inherit all the properties and methods of the Error class.

The ErrorHandler class has a constructor function that takes two parameters: statusCode and message. These parameters represent the status code and error message that will be associated with an instance of ErrorHandler.

Inside the constructor, the super() function is called. This is necessary when extending a class and it calls the constructor of the parent class (Error in this case). It ensures that the parent class is properly initialized before any additional code in the child class is executed.

After calling super(), the constructor assigns the statusCode and message parameters to the respective properties of the ErrorHandler instance using the this keyword. This allows the instance to store and access these values later.

By defining a custom ErrorHandler class, developers can create instances of this class to represent different types of errors in their code. They can set the statusCode and message properties to provide specific information about the error. This can be useful for handling and displaying errors in a consistent and meaningful way throughout an application.
 */

// This middleware is used to handle errors in the application. It is used to catch errors and send a response to the client with the error message and status code.

class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

// This function is used to handle errors in the application. It checks the type of error and sends an appropriate response to the client.
const handleError = (err, res) => {
  //check if the error is mongoose error

  if (err.name === "ValidationError") {
    // Extract error messages from the ValidationError object if there multiple errors
    const message = Object.values(err.errors).map((value) => value.message);
    const error = new ErrorHandler(400, message);
    res.status(error.statusCode).json({ message: error.message });
  } else if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    const error = new ErrorHandler(404, message);
    res.status(error.statusCode).json({ message: error.message });
  } else {
    //for other errors
    const { statusCode, message } = err;
    res.status(statusCode || 500).json({
      statusCode: statusCode,
      status: "error",
      message: message || "Internal Server Error",
    });
  }
};

//error handler for unhandled routes
const notFound = (req, res, next) => {
  const error = new ErrorHandler(404, `Not Found - ${req.originalUrl}`);
  next(error);
};

export { ErrorHandler, handleError, notFound };
