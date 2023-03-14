import { Response, NextFunction } from "express";
import DepositRepository from "../repositories/deposit.repository";

class DepositController {
  static async add(req: any, res: Response, next: NextFunction) {
    try {
      const { user, body } = req;
      await DepositRepository.create({
        amount: body.amount,
        userId: user ? user.id : ""
      });
      const total = await DepositRepository.totalAmount(user.id);
      return res.json({ total });
    } catch (error) {
      return next(error);
    }
  }

  static async totalAmount(req: any, res: Response, next: NextFunction) {
    try {
      const { user } = req;
      const total = await DepositRepository.totalAmount(user.id);
      return res.json({ total });
    } catch (error) {
      return next(error);
    }
  }
}

export default DepositController;