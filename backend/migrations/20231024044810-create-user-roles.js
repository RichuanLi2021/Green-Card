'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('user_roles', {
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
      roleID: {
        allowNull: false,
        type: DataTypes.INTEGER
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
    }).then(async () => {
        await queryInterface.addConstraint('user_roles', {
          type: 'FOREIGN KEY',
          fields: ['userID'],
          references: {
            table: 'users',
            field: 'id'
          }
        })
        await queryInterface.addConstraint('user_roles', {
          type: 'FOREIGN KEY',
          fields: ['roleID'],
          references: {
            table: 'roles',
            field: 'id'
          }
        })
      })
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('user_roles');
  }
};