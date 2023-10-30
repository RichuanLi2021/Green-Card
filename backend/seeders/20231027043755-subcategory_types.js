'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategory_types', [
      {
        title: 'Medication Table',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Adverse Effects and Safety',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Clinical Guide',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Nonpharmalogical',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Pharmalogical',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Anticholinergic Activity',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_types', null, {});
  }
};
