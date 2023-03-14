import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class Token extends Model<InferAttributes<Token>, InferCreationAttributes<Token>> {
    declare id: CreationOptional<number>;
    declare token: string;
    declare type: string;
    declare expires: any;
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

  Token.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      field: "user_id",
      type: DataTypes.INTEGER.UNSIGNED
    },
    token: DataTypes.STRING,
    type: DataTypes.STRING,
    expires: DataTypes.DATE
  }, {
    sequelize,
    modelName: "Token"
  });
  return Token;
};