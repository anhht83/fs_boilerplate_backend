import BaseRepository from "./base.repository";
import models from "../models";

class DepositRepository extends BaseRepository {
  static get model() {
    return models.Deposit;
  }

  static async totalAmount(userId: any) {
    const total = await this.sum("amount", {
      where: { userId }
    });
    return total;
  }
}

export default DepositRepository;
