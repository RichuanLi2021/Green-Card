'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategory_headers', [
      // Antidepressants - Medication Table
      { id: 1,  uuid: uuidv4(), subcategoryID: 1, title: 'Name', createdAt: new Date(), updatedAt: new Date() },
      { id: 2,  uuid: uuidv4(), subcategoryID: 1, title: 'Half-Life', createdAt: new Date(), updatedAt: new Date() },
      { id: 3,  uuid: uuidv4(), subcategoryID: 1, title: 'Primary NT', createdAt: new Date(), updatedAt: new Date() },
      { id: 4,  uuid: uuidv4(), subcategoryID: 1, title: 'Dose (mg/day) (Initial | Maint. | Max.)', createdAt: new Date(), updatedAt: new Date() },
      { id: 5,  uuid: uuidv4(), subcategoryID: 1, title: 'Frequency', createdAt: new Date(), updatedAt: new Date() },
      { id: 6,  uuid: uuidv4(), subcategoryID: 1, title: 'mg/Form Supplied', createdAt: new Date(), updatedAt: new Date() },

      // Antidepressants - Adverse Effects and Safety
      { id: 7,  uuid: uuidv4(), subcategoryID: 2, title: 'Adverse Effects and Safety', createdAt: new Date(), updatedAt: new Date() },

      // Antidepressants - Clinical Guide
      { id: 8,  uuid: uuidv4(), subcategoryID: 3, title: 'For inadequate response', createdAt: new Date(), updatedAt: new Date() },
      { id: 9,  uuid: uuidv4(), subcategoryID: 3, title: 'Maintenance', createdAt: new Date(), updatedAt: new Date() },
      { id: 10, uuid: uuidv4(), subcategoryID: 3, title: 'Tapering', createdAt: new Date(), updatedAt: new Date() },

      // Antipsychotics - Medication Table
      { id: 11, uuid: uuidv4(), subcategoryID: 4, title: 'Name', createdAt: new Date(), updatedAt: new Date() },
      { id: 12, uuid: uuidv4(), subcategoryID: 4, title: 'Approx. equiv. dose', createdAt: new Date(), updatedAt: new Date() },
      { id: 13, uuid: uuidv4(), subcategoryID: 4, title: 'Half-life', createdAt: new Date(), updatedAt: new Date() },
      { id: 14, uuid: uuidv4(), subcategoryID: 4, title: 'Frequency', createdAt: new Date(), updatedAt: new Date() },
      { id: 15, uuid: uuidv4(), subcategoryID: 4, title: 'Tab Strength/Form Supplied', createdAt: new Date(), updatedAt: new Date() },
      { id: 16, uuid: uuidv4(), subcategoryID: 4, title: 'NPS', createdAt: new Date(), updatedAt: new Date() },
      { id: 17, uuid: uuidv4(), subcategoryID: 4, title: 'PP', createdAt: new Date(), updatedAt: new Date() },
      { id: 18, uuid: uuidv4(), subcategoryID: 4, title: 'MDE(AD augment)', createdAt: new Date(), updatedAt: new Date() },
      { id: 19, uuid: uuidv4(), subcategoryID: 4, title: 'MDE(w. psychosis)', createdAt: new Date(), updatedAt: new Date() },
      { id: 20, uuid: uuidv4(), subcategoryID: 4, title: 'Delirium', createdAt: new Date(), updatedAt: new Date() },
      { id: 21, uuid: uuidv4(), subcategoryID: 4, title: 'EO-SCZ', createdAt: new Date(), updatedAt: new Date() },
      { id: 22, uuid: uuidv4(), subcategoryID: 4, title: 'LO-SCZ', createdAt: new Date(), updatedAt: new Date() },
      
      // Antipsychotics - Adverse Effects and Safety
      { id: 23,  uuid: uuidv4(), subcategoryID: 5, title: 'Adverse Effects and Safety', createdAt: new Date(), updatedAt: new Date() },
    
      // Antipsychotics - Clinical Guide
      { id: 24, uuid: uuidv4(), subcategoryID: 6, title: 'Clinical Guide', createdAt: new Date(), updatedAt: new Date() },

      // Cognitive Enhancers - Medication Table
      { id: 25, uuid: uuidv4(), subcategoryID: 7, title: 'Name', createdAt: new Date(), updatedAt: new Date() },
      { id: 26, uuid: uuidv4(), subcategoryID: 7, title: 'Action', createdAt: new Date(), updatedAt: new Date() },
      { id: 27, uuid: uuidv4(), subcategoryID: 7, title: 'Half-life', createdAt: new Date(), updatedAt: new Date() },
      { id: 28, uuid: uuidv4(), subcategoryID: 7, title: 'Dose (initial/monthly/increment/maint.', createdAt: new Date(), updatedAt: new Date() },
      { id: 29, uuid: uuidv4(), subcategoryID: 7, title: 'Frequency', createdAt: new Date(), updatedAt: new Date() },
      { id: 30, uuid: uuidv4(), subcategoryID: 7, title: 'mg/Form Supplied', createdAt: new Date(), updatedAt: new Date() },
      { id: 31, uuid: uuidv4(), subcategoryID: 7, title: 'With food?', createdAt: new Date(), updatedAt: new Date() },
      { id: 32, uuid: uuidv4(), subcategoryID: 7, title: 'MCI', createdAt: new Date(), updatedAt: new Date() },
      { id: 33, uuid: uuidv4(), subcategoryID: 7, title: 'Mild-mod Alz', createdAt: new Date(), updatedAt: new Date() },
      { id: 34, uuid: uuidv4(), subcategoryID: 7, title: 'Severe Alz', createdAt: new Date(), updatedAt: new Date() },
      { id: 35, uuid: uuidv4(), subcategoryID: 7, title: 'Mixed (Alz+Vas)', createdAt: new Date(), updatedAt: new Date() },
      { id: 36, uuid: uuidv4(), subcategoryID: 7, title: 'Vascular', createdAt: new Date(), updatedAt: new Date() },
      { id: 37, uuid: uuidv4(), subcategoryID: 7, title: 'LBD', createdAt: new Date(), updatedAt: new Date() },
      { id: 38, uuid: uuidv4(), subcategoryID: 7, title: 'FTD', createdAt: new Date(), updatedAt: new Date() },
      { id: 39, uuid: uuidv4(), subcategoryID: 7, title: 'PD', createdAt: new Date(), updatedAt: new Date() },
      { id: 40, uuid: uuidv4(), subcategoryID: 7, title: 'DSD', createdAt: new Date(), updatedAt: new Date() },

      // Cognitive Enhancers - Adverse Effects and Safety
      { id: 41, uuid: uuidv4(), subcategoryID: 8, title: 'Contraindictions', createdAt: new Date(), updatedAt: new Date() },
      { id: 42, uuid: uuidv4(), subcategoryID: 8, title: 'Adverse Effects (AChEI)', createdAt: new Date(), updatedAt: new Date()},
      { id: 43, uuid: uuidv4(), subcategoryID: 8, title: 'Adverse Effects (Memantine)', createdAt: new Date(), updatedAt: new Date() },

      // Cognitive Enhancers - Clinical Guide
      { id: 44, uuid: uuidv4(), subcategoryID: 9, title: 'Baseline', createdAt: new Date(), updatedAt: new Date() },
      { id: 45, uuid: uuidv4(), subcategoryID: 9, title: 'Monitoring', createdAt: new Date(), updatedAt: new Date() },
      { id: 46, uuid: uuidv4(), subcategoryID: 9, title: 'How & When', createdAt: new Date(), updatedAt: new Date() },

      // Sedatives/Hypnotics - Medication Table
      { id: 47, uuid: uuidv4(), subcategoryID: 10, title: 'Name', createdAt: new Date(), updatedAt: new Date() },
      { id: 48, uuid: uuidv4(), subcategoryID: 10, title: 'Dose equiv.', createdAt: new Date(), updatedAt: new Date() },
      { id: 49, uuid: uuidv4(), subcategoryID: 10, title: 'Time to peak in plasma', createdAt: new Date(), updatedAt: new Date() },
      { id: 50, uuid: uuidv4(), subcategoryID: 10, title: 'Half-Life', createdAt: new Date(), updatedAt: new Date() },
      { id: 51, uuid: uuidv4(), subcategoryID: 10, title: 'Avg dose range (mg/day)', createdAt: new Date(), updatedAt: new Date() },
      { id: 52, uuid: uuidv4(), subcategoryID: 10, title: 'mg/Form Supplied', createdAt: new Date(), updatedAt: new Date() },
      
      // Sedatives/Hypnotics - Adverse Effects and Safety
      { id: 53, uuid: uuidv4(), subcategoryID: 11,  title: 'Adverse Effects and Safety', createdAt: new Date(), updatedAt: new Date() },

      // Sedatives/Hypnotics - Clinical Guide
      { id: 54, uuid: uuidv4(), subcategoryID: 12, title: 'Treatments', createdAt: new Date(), updatedAt: new Date() },
      { id: 55, uuid: uuidv4(), subcategoryID: 12, title: 'Before Prescribing', createdAt: new Date(), updatedAt: new Date() },
      { id: 56, uuid: uuidv4(), subcategoryID: 12, title: 'Starting', createdAt: new Date(), updatedAt: new Date() },
      { id: 57, uuid: uuidv4(), subcategoryID: 12, title: 'Ending', createdAt: new Date(), updatedAt: new Date() },
      { id: 58, uuid: uuidv4(), subcategoryID: 12, title: 'Duration of BZRA use (months)', createdAt: new Date(), updatedAt: new Date() },
      { id: 59, uuid: uuidv4(), subcategoryID: 12, title: 'Dose Reduction Schedule Duration (weeks)', createdAt: new Date(), updatedAt: new Date() },
      { id: 60, uuid: uuidv4(), subcategoryID: 12, title: 'Interval Between Dose Reductions (weeks)', createdAt: new Date(), updatedAt: new Date() },

      // Mood Stabilizers - Medication Table
      { id: 61, uuid: uuidv4(), subcategoryID: 13, title: 'Name', createdAt: new Date(), updatedAt: new Date() },
      { id: 62, uuid: uuidv4(), subcategoryID: 13, title: 'Half-life', createdAt: new Date(), updatedAt: new Date() },
      { id: 63, uuid: uuidv4(), subcategoryID: 13, title: 'Dose (mg/day) (Initial | Maint. | Max)', createdAt: new Date(), updatedAt: new Date() },
      { id: 64, uuid: uuidv4(), subcategoryID: 13, title: 'Frequency', createdAt: new Date(), updatedAt: new Date() },
      { id: 65, uuid: uuidv4(), subcategoryID: 13, title: 'mg/Form Supplied', createdAt: new Date(), updatedAt: new Date() },
      { id: 66, uuid: uuidv4(), subcategoryID: 13, title: 'Monitoring level', createdAt: new Date(), updatedAt: new Date() },

      // Neuropsychiatric Symptoms on Dementia - Nonpharmalogical
      { id: 67, uuid: uuidv4(), subcategoryID: 14, title: 'Neuropsychiatric Symptoms on Dementia Nonpharmacological Approach', createdAt: new Date(), updatedAt: new Date() },

      // Neuropsychiatric Symptoms on Dementia - Pharmalogical
      { id: 68, uuid: uuidv4(), subcategoryID: 15, title: 'Neuropsychiatric Symptoms on Dementia Pharmacological Approach', createdAt: new Date(), updatedAt: new Date() },

      // Delirium - Nonpharmalogical
      { id: 69, uuid: uuidv4(), subcategoryID: 16, title: 'Delirium Nonpharmacological Approach', createdAt: new Date(), updatedAt: new Date() },

      // Delirium - Pharmalogical
      { id: 70, uuid: uuidv4(), subcategoryID: 17, title: 'Delirium Pharmacological Approach', createdAt: new Date(), updatedAt: new Date() },

      // Delirium - Anticholinergic Activity
      { id: 71, uuid: uuidv4(), subcategoryID: 18, title: 'High', createdAt: new Date(), updatedAt: new Date() },
      { id: 72, uuid: uuidv4(), subcategoryID: 18, title: 'Medium', createdAt: new Date(), updatedAt: new Date() },
      { id: 73, uuid: uuidv4(), subcategoryID: 18, title: 'Low', createdAt: new Date(), updatedAt: new Date() },

      // ECT & Psychoactive Medications - Medication Table
      { id: 74, uuid: uuidv4(), subcategoryID: 19, title: 'Medication', createdAt: new Date(), updatedAt: new Date() },
      { id: 75, uuid: uuidv4(), subcategoryID: 19, title: 'Recommended Action', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_headers', null, {});
  }
};
