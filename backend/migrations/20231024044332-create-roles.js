'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('roles', {
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
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, { charset: 'utf8', collate: 'utf8_general_ci' });
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('roles');
  }
};