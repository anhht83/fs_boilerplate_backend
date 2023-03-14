import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from "sequelize";
import moment from "moment-timezone";
import { ItemStatus } from "../consts";

module.exports = (sequelize: any, DataTypes: any) => {
  class Item extends Model<InferAttributes<Item>, InferCreationAttributes<Item>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare startPrice: number;
    declare windowTime: any;
    declare userId: number;
    declare status: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.belongsTo(models.User, {
        foreignKey: "userId"
      });
    }
  }

  Item.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    startPrice: {
      type: DataTypes.FLOAT,
      field: "start_price"
    },
    windowTime: {
      type: DataTypes.DATE,
      field: "window_time"
    },
    userId: {
      field: "user_id",
      type: DataTypes.INTEGER.UNSIGNED
    },
    status: {
      type: DataTypes.VIRTUAL,
      get() {
        const windowTime = this.windowTime;
        if (moment().isBefore(windowTime)) return ItemStatus.ONGOING;
        return ItemStatus.COMPLETED;
      }
    }
  }, {
    sequelize,
    modelName: "Item",
    defaultScope: {
      attributes: {
        include: [
          [
            sequelize.literal(`(
                SELECT IFNULL (
                  (SELECT MAX(amount) FROM bids WHERE bids.item_id = item.id), 
                  item.start_price
                )
            )`),
            "currentPrice"
          ]
        ]
      }
    }
  });
  return Item;
};