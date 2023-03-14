import { ExtractJwt, Strategy } from "passport-jwt";
import UserRepository from "../repositories/user.repository";

const vars = require("./vars");
const jwtOptions = {
  secretOrKey: vars.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("Bearer")
};

const jwt = async (payload: any, done: any) => {
  try {
    const user = await UserRepository.findByPk(payload.sub);
    if (user) return done(null, user);
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
};

export default {
  jwt: new Strategy(jwtOptions, jwt)
};
