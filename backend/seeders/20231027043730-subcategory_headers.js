'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategory_headers', [
      // Antidepressants - Medication Table
      { id: 1,  subcategoryID: 1,  title: 'Name' },
      { id: 2,  subcategoryID: 1,  title: 'Half-Life' },
      { id: 3,  subcategoryID: 1,  title: 'Primary NT' },
      { id: 4,  subcategoryID: 1,  title: 'Dose (mg/day) (Initial | Maint. | Max.)' },
      { id: 5,  subcategoryID: 1,  title: 'Frequency' },
      { id: 6,  subcategoryID: 1,  title: 'mg/Form Supplied' },

      // Antidepressants - Adverse Effects and Safety
      { id: 7,  subcategoryID: 2,  title: 'Adverse Effects and Safety' },

      // Antidepressants - Clinical Guide
      { id: 8,  subcategoryID: 3,  title: 'For inadequate response' },
      { id: 9,  subcategoryID: 3,  title: 'Maintenance'},
      { id: 10, subcategoryID: 3,  title: 'Tapering' },


      // Antipsychotics - Medication Table


      // Antipsychotics - Adverse Effects and Safety


      // Antipsychotics - Clinical Guide



      // Cognitive Enhancers - Medication Table


      // Cognitive Enhancers - Adverse Effects and Safety


      // Cognitive Enhancers - Clinical Guide



      // Sedatives/Hypnotics - Medication Table


      // Sedatives/Hypnotics - Adverse Effects and Safety


      // Sedatives/Hypnotics - Clinical Guide



      // Mood Stabilizers - Medication Table


      // Mood Stabilizers - Adverse Effects and Safety



      // Neuropsychiatric Symptoms on Dementia - Nonpharmalogical


      // Neuropsychiatric Symptoms on Dementia - Pharmalogical



      // Delirium - Nonpharmalogical


      // Delirium - Pharmalogical


      // Delirium - Anticholinergic Activity



      // ECT & Psychoactive Medications - Medication Table


    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_headers', null, {});
  }
};
