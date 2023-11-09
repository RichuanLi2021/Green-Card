'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('subcategory_headers', {
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
      subcategoryID: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      title: {
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
      await queryInterface.addConstraint('subcategory_headers', {
        type: 'FOREIGN KEY',
        fields: ['subcategoryID'],
        references: {
          table: 'subcategories',
          field: 'id'
        }
      })
    })
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('subcategory_headers');
  }
};