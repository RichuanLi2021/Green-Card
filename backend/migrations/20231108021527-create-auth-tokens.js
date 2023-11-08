'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('auth_tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userID: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      expiresAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }).then(async () => {
      await queryInterface.addConstraint('auth_tokens', {
        type: 'FOREIGN KEY',
        fields: ['userID'],
        references: {
          table: 'users',
          field: 'id'
        }
      })
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('auth_tokens');
  }
};