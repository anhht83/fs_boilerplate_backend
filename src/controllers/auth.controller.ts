import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import UserRepository from "../repositories/user.repository";
import passwordEncrypt from "../utils/passwordEncrypt";
import APIError from "../utils/APIError";
import TokenRepository from "../repositories/token.repository";

class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserRepository.create(req.body);
      return res.status(httpStatus.CREATED).json(user);
    } catch (error) {
      return next(error);
    }
  }

  // route /auth/login
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const user = await UserRepository.findOne({
        where: { email },
        attributes: "" // get all attributes, include password
      });
      // throw error if the user is not existed or the password doesn't match
      if (!user || !passwordEncrypt.check(password, user.password)) {
        throw new APIError({
          status: httpStatus.UNAUTHORIZED,
          message: "Incorrect email or password"
        });
      } else {
        // generate token to return to the client
        const token = await TokenRepository.generateToken(user);
        return res.json({
          id: user.id,
          email: user.email,
          token
        });
      }
    } catch (error) {
      return next(error);
    }
  }
}

export default AuthController;