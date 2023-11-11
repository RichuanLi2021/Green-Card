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
      uuid: {
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID
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
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
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