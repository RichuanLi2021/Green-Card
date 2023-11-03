'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategory_data', [
      // Neuropsychiatric Symptoms on Dementia - Nonpharmalogical
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

      // Neuropsychiatric Symptoms on Dementia - Pharmalogical

    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_data', null, {});
  }
};
