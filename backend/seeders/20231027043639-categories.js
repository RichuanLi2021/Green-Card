'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('categories', [
      { id: 1, uuid: uuidv4(), title: 'Antidepressants' },
      { id: 2, uuid: uuidv4(), title: 'Antipsychotics' },
      { id: 3, uuid: uuidv4(), title: 'Cognitive Enhancers' },
      { id: 4, uuid: uuidv4(), title: 'Sedatives/Hypnotics' },
      { id: 5, uuid: uuidv4(), title: 'Mood Stabilizers' },
      { id: 6, uuid: uuidv4(), title: 'Neuropsychiatric Symptoms on Dementia' },
      { id: 7, uuid: uuidv4(), title: 'Delirium' },
      { id: 8, uuid: uuidv4(), title: 'ECT & Psychoactive Medications' }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
