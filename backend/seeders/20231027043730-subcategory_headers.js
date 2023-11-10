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
      { id: 9,  subcategoryID: 3,  title: 'Maintenance' },
      { id: 10, subcategoryID: 3,  title: 'Tapering' },


      // Antipsychotics - Medication Table
      { id: 11, subcategoryID: 4, title: 'Name' },
      { id: 12, subcategoryID: 4, title: 'Approx. equiv. dose' },
      { id: 13, subcategoryID: 4, title: 'Half-life' },
      { id: 14, subcategoryID: 4, title: 'Frequency' },
      { id: 15, subcategoryID: 4, title: 'Tab Strength/Form Supplied' },
      { id: 16, subcategoryID: 4, title: 'NPS' },
      { id: 17, subcategoryID: 4, title: 'PP' },
      { id: 18, subcategoryID: 4, title: 'MDE(AD augment)' },
      { id: 19, subcategoryID: 4, title: 'MDE(w. psychosis)' },
      { id: 20, subcategoryID: 4, title: 'Delirium' },
      { id: 21, subcategoryID: 4, title: 'EO-SCZ' },
      { id: 22, subcategoryID: 4, title: 'LO-SCZ' },
      
      // Antipsychotics - Adverse Effects and Safety
      { id: 23,  subcategoryID: 5,  title: 'Adverse Effects and Safety' },
    
      // Antipsychotics - Clinical Guide
      { id: 24, subcategoryID: 6, title: 'Clinical Guide' },


      // Cognitive Enhancers - Medication Table
      { id: 131, subcategoryID: 7,  title: 'Name' },
      { id: 182, subcategoryID: 7,  title: 'Action' },
      { id: 132, subcategoryID: 7,  title: 'Half-life' },
      { id: 133, subcategoryID: 7,  title: 'Dose (initial/monthly/increment/maint.' },
      { id: 134, subcategoryID: 7,  title: 'Frequency' },
      { id: 135, subcategoryID: 7,  title: 'mg/Form Supplied' },
      { id: 185, subcategoryID: 7,  title: 'With food?' },
      { id: 136, subcategoryID: 7,  title: 'MCI' },
      { id: 137, subcategoryID: 7,  title: 'Mild-mod Alz' },
      { id: 138, subcategoryID: 7,  title: 'Severe Alz' },
      { id: 139, subcategoryID: 7,  title: 'Mixed (Alz+Vas)' },
      { id: 140, subcategoryID: 7,  title: 'Vascular' },
      { id: 141, subcategoryID: 7,  title: 'LBD' },
      { id: 142, subcategoryID: 7,  title: 'FTD' },
      { id: 143, subcategoryID: 7,  title: 'PD' },
      { id: 144, subcategoryID: 7,  title: 'DSD' },

      // Cognitive Enhancers - Adverse Effects and Safety
      { id: 146, subcategoryID: 8, title: 'Contraindictions' },
      { id: 147, subcategoryID: 8, title: 'Adverse Effects (AChEI)'},
      { id: 148, subcategoryID: 8, title: 'Adverse Effects (Memantine)' },

      // Cognitive Enhancers - Clinical Guide
      { id: 149, subcategoryID: 9, title: 'Baseline' },
      { id: 150, subcategoryID: 9, title: 'Monitoring' },
      { id: 151, subcategoryID: 9, title: 'How & When' },
      

      // Sedatives/Hypnotics - Medication Table
      { id: 152, subcategoryID: 10, title: 'Name' },
      { id: 153, subcategoryID: 10, title: 'Dose equiv.'},
      { id: 154, subcategoryID: 10, title: 'Time to peak in plasma' },
      { id: 155, subcategoryID: 10, title: 'Half-Life' },
      { id: 156, subcategoryID: 10, title: 'Avg dose range (mg/day)' },
      { id: 157, subcategoryID: 10, title: 'mg/Form supplied' },
      
      // Sedatives/Hypnotics - Adverse Effects and Safety
      { id: 517, subcategoryID: 11,  title: 'Adverse Effects and Safety' },

      // Sedatives/Hypnotics - Clinical Guide
      { id: 158, subcategoryID: 12, title: 'Before Prescribing' },
      { id: 159, subcategoryID: 12, title: 'Starting'},
      { id: 160, subcategoryID: 12, title: 'Ending' },


      // Mood Stabilizers - Medication Table
      { id: 51,  subcategoryID: 13,  title: 'Name' },
      { id: 52,  subcategoryID: 13,  title: 'Half-life' },
      { id: 53,  subcategoryID: 13,  title: 'Dose (mg/day) Initial | Maint. | Max' },
      { id: 54,  subcategoryID: 13,  title: 'Frequency' },
      { id: 55,  subcategoryID: 13,  title: 'mg/Form Supplied' },
      { id: 56,  subcategoryID: 13,  title: 'Monitoring level' },

      // Mood Stabilizers - Adverse Effects and Safety
      { id: 57,  subcategoryID: 14,  title: 'Adverse Effects and Safety' },


      // Neuropsychiatric Symptoms on Dementia - Nonpharmalogical
      { id: 101, subcategoryID: 15, title: 'Nonpharmacological Approach' },

      // Neuropsychiatric Symptoms on Dementia - Pharmalogical
      { id: 102, subcategoryID: 16, title: 'Pharmacological Approach' },


      // Delirium - Nonpharmalogical
      {id: 108, subcategoryID: 17, title: 'Nonpharmacological Approach' },

      // Delirium - Pharmalogical
      {id: 109, subcategoryID: 18, title: 'Pharmacological Approach' },

      // Delirium - Anticholinergic Activity
      {id: 110, subcategoryID: 19, title: 'High' },
      {id: 111, subcategoryID: 19, title: 'Medium' },
      {id: 112, subcategoryID: 19, title: 'Low' },


      // ECT & Psychoactive Medications - Medication Table
      { id: 81,  subcategoryID: 20,  title: 'Medication' },
      { id: 82,  subcategoryID: 20,  title: 'Recommended Action' },
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_headers', null, {});
  }
};
