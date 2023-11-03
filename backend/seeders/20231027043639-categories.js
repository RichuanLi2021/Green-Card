'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('categories', [
      {
        id: 1,
        title: 'Antidepressants',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'Antipsychotics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: 'Cognitive Enhancers',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: 'Sedatives/Hypnotics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        title: 'Mood Stabilizers',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        title: 'Neuropsychiatric Symptoms on Dementia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        title: 'Delirium',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        title: 'ECT & Psychoactive Medications',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
