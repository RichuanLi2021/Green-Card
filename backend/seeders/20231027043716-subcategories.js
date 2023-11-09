'use strict';
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategories', [
      { id: 1,  uuid: uuidv4(), categoryID: 1, subcategoryTypeID: 1, description: 'Antidepressants Medication Table' },
      { id: 2,  uuid: uuidv4(), categoryID: 1, subcategoryTypeID: 2, description: 'Antidepressants Adverse Effects and Safety' },
      { id: 3,  uuid: uuidv4(), categoryID: 1, subcategoryTypeID: 3, description: 'Antidepressants Clinical Guide' },
      { id: 4,  uuid: uuidv4(), categoryID: 2, subcategoryTypeID: 1, description: 'Antipsychotics Medication Table' },
      { id: 5,  uuid: uuidv4(), categoryID: 2, subcategoryTypeID: 2, description: 'Antipsychotics Adverse Effects and Safety' },
      { id: 6,  uuid: uuidv4(), categoryID: 2, subcategoryTypeID: 3, description: 'Antipsychotics Clinical Guide' },
      { id: 7,  uuid: uuidv4(), categoryID: 3, subcategoryTypeID: 1, description: 'Cognitive Enhancers Medication Table' },
      { id: 8,  uuid: uuidv4(), categoryID: 3, subcategoryTypeID: 2, description: 'Cognitive Enhancers Adverse Effects and Safety' },
      { id: 9,  uuid: uuidv4(), categoryID: 3, subcategoryTypeID: 3, description: 'Cognitive Enhancers Clinical Guide' },
      { id: 10, uuid: uuidv4(), categoryID: 4, subcategoryTypeID: 1, description: 'Sedatives/Hypnotics Medication Table' },
      { id: 11, uuid: uuidv4(), categoryID: 4, subcategoryTypeID: 2, description: 'Sedatives/Hypnotics Adverse Effects and Safety' },
      { id: 12, uuid: uuidv4(), categoryID: 4, subcategoryTypeID: 3, description: 'Sedatives/Hypnotics Clinical Guide' },
      { id: 13, uuid: uuidv4(), categoryID: 5, subcategoryTypeID: 1, description: 'Mood Stabilizers Medication Table' },
      { id: 14, uuid: uuidv4(), categoryID: 5, subcategoryTypeID: 2, description: 'Mood Stabilizers Adverse Effects and Safety'},
      { id: 15, uuid: uuidv4(), categoryID: 6, subcategoryTypeID: 4, description: 'Neuropsychiatric Symptoms on Dementia Nonpharmalogical' },
      { id: 16, uuid: uuidv4(), categoryID: 6, subcategoryTypeID: 5, description: 'Neuropsychiatric Symptoms on Dementia Pharmalogical' },
      { id: 17, uuid: uuidv4(), categoryID: 7, subcategoryTypeID: 4, description: 'Delirium Nonpharmalogical' },
      { id: 18, uuid: uuidv4(), categoryID: 7, subcategoryTypeID: 5, description: 'Delirium Pharmalogical' },
      { id: 19, uuid: uuidv4(), categoryID: 7, subcategoryTypeID: 6, description: 'Delirium Anticholinergic Activity' },
      { id: 20, uuid: uuidv4(), categoryID: 8, subcategoryTypeID: 1, description: 'ECT & Psychoactive Medications Medication Table' }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategories', null, {});
  }
};
