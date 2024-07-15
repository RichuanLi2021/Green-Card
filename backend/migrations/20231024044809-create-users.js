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
      title: {
        type: DataTypes.STRING
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      emailVerificationToken: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      passwordResetToken: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      passwordResetTokenExpiry: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
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
      subscribed: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.BOOLEAN
      },
      subscriptionUpdatedAt: {
        type: DataTypes.DATE,
        defaultValue: null,
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
    }, { charset: 'utf8', collate: 'utf8_general_ci' });
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('users');
  }
};