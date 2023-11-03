'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategory_data', [
      // Delirium - Nonpharmalogical
      {
        headerID: 1,
        value: '',
        info: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        headerID: 1,
        value: '',
        info: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Delirium - Pharmalogical

      // Delirium - Anticholinergic Activity

    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_data', null, {});
  }
};
