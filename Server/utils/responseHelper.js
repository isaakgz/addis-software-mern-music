// a helper function to send response to client

const sendResponse = (res, statusCode, status, data) => {
  res.status(statusCode).json({
    status: status,
    data: data,
  });
};

export default sendResponse;
