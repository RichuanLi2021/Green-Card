'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategory_data', [
      // Antidepressants - Medication Table
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

      // Antidepressants - Adverse Effects and Safety

      // Antidepressants - Clinical Guide

    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_data', null, {});
  }
};
