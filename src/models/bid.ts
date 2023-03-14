import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class Bid extends Model<InferAttributes<Bid>, InferCreationAttributes<Bid>> {
    declare id: CreationOptional<number>;
    declare amount: number;
    declare userId: number;
    declare itemId: number;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.belongsTo(models.User, {
        foreignKey: "userId"
      });
      this.belongsTo(models.Item, {
        foreignKey: "itemId"
      });
    }
  }

  Bid.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    amount: DataTypes.FLOAT,
    userId: {
      field: "user_id",
      type: DataTypes.INTEGER.UNSIGNED
    },
    itemId: {
      field: "item_id",
      type: DataTypes.INTEGER.UNSIGNED
    }
  }, {
    sequelize,
    modelName: "Bid"
  });
  return Bid;
};