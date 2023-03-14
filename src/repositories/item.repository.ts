import BaseRepository from "./base.repository";
import models from "../models";

class ItemRepository extends BaseRepository {
  static get model() {
    return models.Item;
  }
}

export default ItemRepository;
