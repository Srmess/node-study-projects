const { CurstomAPIError } = require('../errors/custom-error');
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CurstomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: 'SOMETHING WENT WRONG' });
};

module.exports = errorHandlerMiddleware;
