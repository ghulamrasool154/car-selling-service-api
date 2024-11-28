const developmentErrors = (err, res) => {
  return res.status(err.statusCode).json({
    status: err.statusCode,
    success: false,
    error: {
      message: err.message,
      error: err.stack,
    },
  });
};

const errorMiddleware = (err, req, res, next) => {
  let error = err;
  error.statusCode = err.statusCode || 500;
  error.message = err.message;

  //  DEVELOPMENT ERROR
  developmentErrors(error, res);
};

module.exports = errorMiddleware;
