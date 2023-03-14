'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bids', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.FLOAT
      },
      userId: {
        field: "user_id",
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: "users",
          key: "id"
        }
      },
      itemId: {
        field: "item_id",
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: "items",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bids');
  }
};