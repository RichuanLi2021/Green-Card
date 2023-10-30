'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('subcategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      categoryID: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      subcategoryTypeID: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      description: {
        defaultValue: null,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    });
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('subcategories');
  }
};