'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      fName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      lName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.STRING
      },
      lastLogin: {
        type: DataTypes.DATE
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    });
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('users');
  }
};