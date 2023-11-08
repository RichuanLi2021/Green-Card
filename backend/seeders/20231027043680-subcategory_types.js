'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategory_types', [
      { id: 1, title: 'Medication Table' },
      { id: 2, title: 'Adverse Effects and Safety' },
      { id: 3, title: 'Clinical Guide' },
      { id: 4, title: 'Nonpharmalogical' },
      { id: 5, title: 'Pharmalogical' },
      { id: 6, title: 'Anticholinergic Activity' }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_types', null, {});
  }
};
