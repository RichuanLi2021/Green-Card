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
          fields: ['userID'],
          name: 'many_user_roles_to_one_user',
          onUpdate: 'CASCADE',
          references: { table: 'users', field: 'id' },
          type: 'FOREIGN KEY'
        })
        await queryInterface.addConstraint('user_roles', {
          fields: ['roleID'],
          name: 'many_user_roles_to_one_role',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          references: { table: 'roles', field: 'id' },
          type: 'FOREIGN KEY'
        })
      })
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('user_roles');
  }
};