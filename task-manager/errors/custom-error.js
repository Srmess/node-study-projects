class CurstomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const CreateCustomError = (message, statusCode) => {
  return new CurstomAPIError(message, statusCode);
};

module.exports = { CreateCustomError, CurstomAPIError };
