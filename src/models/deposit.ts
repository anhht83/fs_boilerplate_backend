import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class Deposit extends Model<InferAttributes<Deposit>, InferCreationAttributes<Deposit>> {
    declare id: CreationOptional<number>;
    declare amount: number;
    declare userId: number;

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

  Deposit.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    amount: DataTypes.FLOAT,
    userId: {
      field: "user_id",
      type: DataTypes.INTEGER.UNSIGNED
    }
  }, {
    sequelize,
    modelName: "Deposit"
  });
  return Deposit;
};