'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategory_types', [
      {
        id: 1,
        title: 'Medication Table',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'Adverse Effects and Safety',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: 'Clinical Guide',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: 'Nonpharmalogical',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        title: 'Pharmalogical',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
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
