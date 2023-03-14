import { IUserAttributes } from "../models/user";
import BaseRepository from "./base.repository";
import models from "../models";
import APIError from "../utils/APIError";
import httpStatus from "http-status";

class UserRepository extends BaseRepository {
  static get model() {
    return models.User;
  }

  static async create(data: IUserAttributes) {
    let user = await this.findOne({ where: { email: data.email } });
    if (user) {
      throw new APIError({
        status: httpStatus.BAD_REQUEST,
        message: "This email is existed"
      });
    }
    user = await super.create(data);
    await user.reload();
    return user;
  }
}

export default UserRepository;
