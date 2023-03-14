import { Model, InferCreationAttributes } from "sequelize";
import passwordEncrypt from "../utils/passwordEncrypt";

export interface IUserAttributes {
  id?: number;
  email: string;
  password: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<IUserAttributes, InferCreationAttributes<User>> {
    declare id: number;
    declare email: string;
    declare password: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.hasMany(models.Token, {
        foreignKey: "userId"
      });
    }
  }

  User.init({
    id: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        this.setDataValue("password", passwordEncrypt.generate(value));
      }
    }
  }, {
    sequelize,
    modelName: "User",
    defaultScope: {
      attributes: {
        exclude: ["password"]
      }
    }
  });

  return User;
};