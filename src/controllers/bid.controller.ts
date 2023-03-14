import { Response, NextFunction } from "express";
import ItemRepository from "../repositories/item.repository";
import APIError from "../utils/APIError";
import BidRepository from "../repositories/bid.repository";
import moment from "moment-timezone";
import { io } from "../index";

class BidController {
  static async bid(req: any, res: Response, next: NextFunction) {
    try {
      const { user, body } = req;
      const item = await ItemRepository.findByPk(body.itemId);
      if (!item) {
        throw new APIError({
          message: "The item is not existed"
        });
      }
      if (item.windowTime <= moment().toDate()) {
        throw new APIError({
          message: "This item is expired"
        });
      }

      const maxBid = await BidRepository.maxBid(item.id);
      if (body.amount <= maxBid) {
        throw new APIError({
          message: `Your bid must greater than the last bid [ $${maxBid} ]`
        });
      }

      // last bid must greater than 5s
      const lastBid = await BidRepository.lastBid({ itemId: item.id, userId: user.id });
      if (lastBid && moment().subtract(5, "seconds").isBefore(moment(lastBid.createdAt))) {
        throw new APIError({
          message: `You only can bid in each 5s and for an published item`
        });
      }

      const bid = await BidRepository.create({
        itemId: item.id,
        userId: user.id,
        amount: body.amount
      });
      io.emit("update_bid", {
        itemId: bid.itemId,
        userId: bid.userId,
        amount: bid.amount,
        createdAt: bid.createdAt
      });
      return res.json("Success!");
    } catch (error) {
      return next(error);
    }
  }
}

export default BidController;