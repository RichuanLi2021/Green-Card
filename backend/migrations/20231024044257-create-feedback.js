'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('feedback', {
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
      comment: {
        allowNull: false,
        type: DataTypes.STRING(3000)
      },
      rating: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      allowEmailBack: {
        type: DataTypes.BOOLEAN
      },
      reviewed: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      createdAt: {
        type: DataTypes.DATE
      }
    } ,{ charset: 'utf8', collate: 'utf8_general_ci' } );
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('feedback');
  }
};