import APIError from "../utils/APIError";
import httpStatus from "http-status";

const validation = require("express-validation");

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
const handler = (err: any, req: any, res: any, next?: any) => {
  const status =
    err.status || err.statusCode || (err.response && err.response.status);
  const response = {
    code: status,
    message: err.message || httpStatus[err.status],
    errors: err.errors
  };

  res.status(status);
  res.json(response);
};

/**
 * If error is not an instanceOf APIError, convert it.
 * @public
 */
const converter = (err: any, req: any, res: any, next: any) => {
  let convertedError = err;
  const status =
    err.status || err.statusCode || (err.response && err.response.status);
  if (err instanceof validation.ValidationError) {
    convertedError = new APIError({
      message: err.details,
      status
    });
  } else if (!(err instanceof APIError)) {
    convertedError = new APIError({
      message: err.message,
      status
    });
  }

  return handler(convertedError, req, res, next);
};

/**
 * Catch 404 and forward to error handler
 * @public
 */
const notFound = (req: any, res: any, next: any) => {
  console.log("notFound");

  const err = new APIError({
    message: "Not found",
    status: httpStatus.NOT_FOUND
  });
  return handler(err, req, res, next);
};

export default { handler, converter, notFound };