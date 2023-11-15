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
      uuid: {
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID
      },
      discipline: {
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
      verified: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.BOOLEAN
      },
      lastLogin: {
        type: DataTypes.DATE
      },
      createdAt: {
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