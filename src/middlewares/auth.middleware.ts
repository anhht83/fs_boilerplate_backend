import httpStatus from "http-status";
import APIError from "../utils/APIError";
import { promisify } from "util";

const passport = require("passport");

const handleJWT = (req: any, res: any, next: any) => async (
  err: any,
  user: any,
  info: any
) => {
  const error = err || info;
  const logIn = promisify(req.logIn);
  const apiError = new APIError({
    message: error ? error.message : "Unauthorized",
    status: httpStatus.UNAUTHORIZED
  });
  try {
    if (error || !user) throw error;
    await logIn(user, { session: false });
  } catch (e) {
    return next(apiError);
  }
  // pass user info into req to be used in controller
  req.user = user;
  return next();
};

export const authorize = () => (req: any, res: any, next: any) =>
  passport.authenticate(
    "jwt",
    { session: false },
    handleJWT(req, res, next)
  )(req, res, next);

