const errorHandlerMiddleware = (err, req, res, next) => {
  return res.status(500).json({ masg: err });
};

module.exports = errorHandlerMiddleware;
