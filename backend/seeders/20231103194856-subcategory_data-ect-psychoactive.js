'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, DataTypes) {
  await queryInterface.bulkInsert('subcategory_data', [
    { uuid: uuidv4(), headerID: 74, value: 'Anticonvulsants', createdAt: new Date(), updatedAt: new Date() },
    { uuid: uuidv4(), headerID: 75, value: 'Discontinue if possible or at least hold prior to ECT', createdAt: new Date(), updatedAt: new Date() },
    
    { uuid: uuidv4(), headerID: 74,value: 'Benzodiazepines*', createdAt: new Date(), updatedAt: new Date() },
    { uuid: uuidv4(), headerID: 75, value: 'If unable to stop, hold dose x 24 hrs before ECT (↑seizure threshold). Can use flumazenil if not possible to hold or stop', createdAt: new Date(), updatedAt: new Date() },
    
    { uuid: uuidv4(), headerID: 74, value: 'Bupropion', createdAt: new Date(), updatedAt: new Date() },
    { uuid: uuidv4(), headerID: 75, value: 'Use with caution (↓ seizure threshold)', createdAt: new Date(), updatedAt: new Date() },
    
    { uuid: uuidv4(), headerID: 74, value: 'ChEIs', createdAt: new Date(), updatedAt: new Date() },
    { uuid: uuidv4(), headerID: 75, value: 'OK to continue', createdAt: new Date(), updatedAt: new Date() },
    
    { uuid: uuidv4(), headerID: 74, value: 'Clozapine', createdAt: new Date(), updatedAt: new Date() },
    { uuid: uuidv4(), headerID: 75, value: 'Use with caution (↓ seizure threshold, ↑ risk of prolonged seizure)', createdAt: new Date(), updatedAt: new Date() },
    
    { uuid: uuidv4(), headerID: 74, value: 'Levodopa', createdAt: new Date(), updatedAt: new Date() },
    { uuid: uuidv4(), headerID: 75, value: 'Reduce dose and monitor closely (↑ risk of side effects)', createdAt: new Date(), updatedAt: new Date() },
    
    { uuid: uuidv4(), headerID: 74, value: 'Lithium', createdAt: new Date(), updatedAt: new Date() },
    { uuid: uuidv4(), headerID: 75, value: 'Hold x 24 hrs prior to ECT (↑ risk of cognitive deficits, delirium, spontaneous seizure). Reassess if emergent delirium post ECT.', createdAt: new Date(), updatedAt: new Date() },
    
    { uuid: uuidv4(), headerID: 74, value: 'MAOIs', createdAt: new Date(), updatedAt: new Date() },
    { uuid: uuidv4(), headerID: 75, value: 'OK to continue', createdAt: new Date(), updatedAt: new Date() },
    
    { uuid: uuidv4(), headerID: 74, value: 'Other Antidepressants', createdAt: new Date(), updatedAt: new Date() },
    { uuid: uuidv4(), headerID: 75, value: 'OK to continue', createdAt: new Date(), updatedAt: new Date() },
    
    { uuid: uuidv4(), headerID: 74, value: 'Other Antipsychotics', createdAt: new Date(), updatedAt: new Date() },
    { uuid: uuidv4(), headerID: 75, value: 'OK to continue', createdAt: new Date(), updatedAt: new Date() },
   
    { uuid: uuidv4(), headerID: 74, value: 'Zopiclone', createdAt: new Date(), updatedAt: new Date() },
    { uuid: uuidv4(), headerID: 75, value: 'OK if needed', createdAt: new Date(), updatedAt: new Date() },
  ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_data', null, {});
  }
};
