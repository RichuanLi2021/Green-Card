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
        onDelete: 'cascade',
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
        fields: ['categoryID'],
        name: 'many_subcategories_to_one_category',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: { table: 'categories', field: 'id' },
        type: 'FOREIGN KEY'
      })
      await queryInterface.addConstraint('subcategories', {
        fields: ['subcategoryTypeID'],
        name: 'many_subcategories_to_one_subcategory_type',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: { table: 'subcategory_types', field: 'id' },
        type: 'FOREIGN KEY'
      })
    })
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('subcategories');
  }
};