import BaseRepository from "./base.repository";
import models from "../models";

class BidRepository extends BaseRepository {
  static get model() {
    return models.Bid;
  }

  static async maxBid(itemId: any) {
    const max = await this.max("amount", { where: { itemId } });
    return max;
  }

  static async lastBid({itemId, userId}: any) {
    const lastBid = await this.findOne({
      where: { userId, itemId },
      order: [["createdAt", "DESC"]]
    });
    return lastBid;
  }
}

export default BidRepository;
