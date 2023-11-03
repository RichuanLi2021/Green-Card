'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategory_data', [
      // Cognitive Enhancers - Medication Table
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

      // Cognitive Enhancers - Adverse Effects and Safety

      // Cognitive Enhancers - Clinical Guide

    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_data', null, {});
  }
};
