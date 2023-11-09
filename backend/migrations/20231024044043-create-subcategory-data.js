'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('subcategory_data', {
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
      headerID: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      value: {
        allowNull: false,
        type: DataTypes.STRING
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
      await queryInterface.addConstraint('subcategory_data', {
        type: 'FOREIGN KEY',
        fields: ['headerID'],
        references: {
          table: 'subcategory_headers',
          field: 'id'
        }
      })
    })
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('subcategory_data');
  }
};