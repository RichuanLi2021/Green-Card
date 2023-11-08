'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategories', [
      { id: 1,  categoryID: 1, subcategoryTypeID: 1, description: 'Antidepressants Medication Table' },
      { id: 2,  categoryID: 1, subcategoryTypeID: 2, description: 'Antidepressants Adverse Effects and Safety' },
      { id: 3,  categoryID: 1, subcategoryTypeID: 3, description: 'Antidepressants Clinical Guide' },
      { id: 4,  categoryID: 2, subcategoryTypeID: 1, description: 'Antipsychotics Medication Table' },
      { id: 5,  categoryID: 2, subcategoryTypeID: 2, description: 'Antipsychotics Adverse Effects and Safety' },
      { id: 6,  categoryID: 2, subcategoryTypeID: 3, description: 'Antipsychotics Clinical Guide' },
      { id: 7,  categoryID: 3, subcategoryTypeID: 1, description: 'Cognitive Enhancers Medication Table' },
      { id: 8,  categoryID: 3, subcategoryTypeID: 2, description: 'Cognitive Enhancers Adverse Effects and Safety' },
      { id: 9,  categoryID: 3, subcategoryTypeID: 3, description: 'Cognitive Enhancers Clinical Guide' },
      { id: 10, categoryID: 4, subcategoryTypeID: 1, description: 'Sedatives/Hypnotics Medication Table' },
      { id: 11, categoryID: 4, subcategoryTypeID: 2, description: 'Sedatives/Hypnotics Adverse Effects and Safety' },
      { id: 12, categoryID: 4, subcategoryTypeID: 3, description: 'Sedatives/Hypnotics Clinical Guide' },
      { id: 13, categoryID: 5, subcategoryTypeID: 1, description: 'Mood Stabilizers Medication Table' },
      { id: 14, categoryID: 5, subcategoryTypeID: 2, description: 'Mood Stabilizers Adverse Effects and Safety'},
      { id: 15, categoryID: 6, subcategoryTypeID: 4, description: 'Neuropsychiatric Symptoms on Dementia Nonpharmalogical' },
      { id: 16, categoryID: 6, subcategoryTypeID: 5, description: 'Neuropsychiatric Symptoms on Dementia Pharmalogical' },
      { id: 17, categoryID: 7, subcategoryTypeID: 4, description: 'Delirium Nonpharmalogical' },
      { id: 18, categoryID: 7, subcategoryTypeID: 5, description: 'Delirium Pharmalogical' },
      { id: 19, categoryID: 7, subcategoryTypeID: 6, description: 'Delirium Anticholinergic Activity' },
      { id: 20, categoryID: 8, subcategoryTypeID: 1, description: 'ECT & Psychoactive Medications Medication Table' }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategories', null, {});
  }
};
