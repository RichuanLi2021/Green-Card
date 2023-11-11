'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('categories', [
      { id: 1, uuid: uuidv4(), title: 'Antidepressants', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, uuid: uuidv4(), title: 'Antipsychotics', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, uuid: uuidv4(), title: 'Cognitive Enhancers', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, uuid: uuidv4(), title: 'Sedatives/Hypnotics', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, uuid: uuidv4(), title: 'Mood Stabilizers', createdAt: new Date(), updatedAt: new Date() },
      { id: 6, uuid: uuidv4(), title: 'Neuropsychiatric Symptoms on Dementia', createdAt: new Date(), updatedAt: new Date() },
      { id: 7, uuid: uuidv4(), title: 'Delirium', createdAt: new Date(), updatedAt: new Date() },
      { id: 8, uuid: uuidv4(), title: 'ECT & Psychoactive Medications', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
