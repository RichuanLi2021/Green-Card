'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategory_data', [
      // Neuropsychiatric Symptoms on Dementia - Nonpharmalogical
      { uuid: uuidv4(), headerID: 67, value: 'Individualize approach to patient', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 67, value: 'Examine ABCs of behavior and identify the issue', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 67, value: 'General: comforting presence/physical contact, distraction, backing away, reminiscence/sensory/relaxation therapy', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 67, value: 'Optimize engagement in environment, decrease under/overstimulation, establish routine, regular exercise & recreation', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 67, value: 'Resistance to care: personalize the experience (ie: offering choices), bed baths', createdAt: new Date(), updatedAt: new Date() },

      // Neuropsychiatric Symptoms on Dementia - Pharmalogical
      { uuid: uuidv4(), headerID: 68, value: 'Only use if clinically significant distress/agitation/aggression, when benefits>harm, and non pharmacological approach failed', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 68, value: 'Psychosis: atypical antipsychotic*', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 68, value: 'No psychosis: SSRI, trazadone, or atypical antipsychotic*', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 68, value: 'Inappropriate sexual behavior: SSRI, atypical antipsychotic*, or hormonal therapy', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 68, value: 'Pharmacological approach generally not helpful for primary wandering or vocalizing', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 68, value: 'Treatment should be evaluated for tapering or discontinuation every 3-6 months', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 68, value: 'See antipsychotic table for additional information', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_data', null, {});
  }
};
