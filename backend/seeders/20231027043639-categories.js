'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('categories', [
      {
        title: 'Antidepressants',
        description: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Antipsychotics',
        description: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Cognitive Enhancers',
        description: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sedatives/Hypnotics',
        description: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Mood Stabilizers',
        description: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Neuropsychiatric Symptoms on Dementia',
        description: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Delirium',
        description: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'ECT & Psychoactive Medications',
        description: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
