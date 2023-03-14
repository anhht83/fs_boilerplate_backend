import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import ItemRepository from "../repositories/item.repository";

class ItemController {
  static async index(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await ItemRepository.findAll();
      return res.json(items);
    } catch (error) {
      return next(error);
    }
  }

  static async create(req: any, res: Response, next: NextFunction) {
    try {
      const { user, body } = req;
      const item = await ItemRepository.create({
        ...body,
        userId: user ? user.id : ''
      });
      return res.status(httpStatus.CREATED).json(item);
    } catch (error) {
      return next(error);
    }
  }
}

export default ItemController;