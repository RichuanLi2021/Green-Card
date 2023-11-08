'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('categories', [
      { id: 1, title: 'Antidepressants' },
      { id: 2, title: 'Antipsychotics' },
      { id: 3, title: 'Cognitive Enhancers' },
      { id: 4, title: 'Sedatives/Hypnotics' },
      { id: 5, title: 'Mood Stabilizers' },
      { id: 6, title: 'Neuropsychiatric Symptoms on Dementia' },
      { id: 7, title: 'Delirium' },
      { id: 8, title: 'ECT & Psychoactive Medications' }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
