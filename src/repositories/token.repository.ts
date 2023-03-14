import moment from "moment-timezone";
import crypto from "crypto";
import jwt from "jwt-simple";
import BaseRepository from "./base.repository";
import models from "../models";
import { TokenType } from "../consts";

const {
  jwtSecret,
  jwtExpirationInterval,
  jwtRefreshExpirationInterval
} = require("../config/vars");

class TokenRepository extends BaseRepository {
  static get model() {
    return models.Token;
  }

  static async generateToken(user: any) {
    const userId = user.id || user;
    // generate refresh token and store in db
    const refreshToken = `${userId}.${crypto.randomBytes(40).toString("hex")}`;
    await this.create({
      userId,
      token: refreshToken,
      expires: moment().add(jwtRefreshExpirationInterval, "minutes").toDate(),
      type: TokenType.REFRESH
    });

    // generate access token
    const payload = {
      exp: moment().add(jwtExpirationInterval, "minutes").unix(),
      iat: moment().unix(),
      sub: userId,
      type: TokenType.ACCESS
    };
    const accessToken = jwt.encode(payload, jwtSecret);


    return {
      tokenType: TokenType.AUTH,
      accessToken,
      refreshToken,
      expiresIn: moment().add(jwtExpirationInterval, "minutes")
    };
  }
}

export default TokenRepository;
