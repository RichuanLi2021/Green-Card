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
        onDelete: 'CASCADE',
        type: DataTypes.INTEGER
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }).then(async () => {
      await queryInterface.addConstraint('subcategory_headers', {
        fields: ['subcategoryID'],
        name: 'many_subcategory_headers_to_one_subcategory',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: { table: 'subcategories', field: 'id' },
        type: 'FOREIGN KEY'
      })
    })
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('subcategory_headers');
  }
};