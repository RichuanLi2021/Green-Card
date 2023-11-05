'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('subcategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      categoryID: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      subcategoryTypeID: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      description: {
        defaultValue: null,
        type: DataTypes.STRING
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
      await queryInterface.addConstraint('subcategories', {
        type: 'FOREIGN KEY',
        fields: ['categoryID'],
        references: {
          table: 'categories',
          field: 'id'
        }
      })
      await queryInterface.addConstraint('subcategories', {
        type: 'FOREIGN KEY',
        fields: ['subcategoryTypeID'],
        references: {
          table: 'subcategory_types',
          field: 'id'
        }
      })
    })
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('subcategories');
  }
};