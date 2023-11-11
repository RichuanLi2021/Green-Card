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
      uuid: {
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID
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
        type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
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