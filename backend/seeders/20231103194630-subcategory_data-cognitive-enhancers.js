'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategory_data', [
      // Cognitive Enhancers - Medication Table
      { uuid: uuidv4(), headerID: 25, value: 'Donepezil (Aricept)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 26, value: 'AChEI',               createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 27, value: '70h',                 createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 28, value: '5mg/5mg/10mg',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 29, value: 'qAM',                 createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 30, value: '5,10/tab,diss tab',   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 31, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 32, value: 'N', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 33, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 34, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 35, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 36, value: 'N', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 37, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 38, value: 'N', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 39, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 40, value: 'N', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 25, value: 'Galantamine ER',  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 26, value: 'AChEI',           createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 27, value: '7-8h',            createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 28, value: '8mg/8mg/24mg',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 29, value: 'qAM',             createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 30, value: '8,16,24/capsule', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 31, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 32, value: 'N', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 33, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 34, value: 'N', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 35, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 36, value: 'N', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 37, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 38, value: 'N', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 39, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 40, value: 'N', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 25, value: 'Rivastigmine (Oral)',         createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 26, value: 'AChEI & BuChEI',              createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 27, value: '1-2h',                        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 28, value: '1.5mg BID/1.5mg BID/6MG BID', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 29, value: 'BID',                         createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 30, value: '1.5,3,4.5,6/capsule,liq',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 31, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 32, value: 'N', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 33, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 34, value: 'N', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 35, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 36, value: 'N', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 37, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 38, value: 'N', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 39, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 40, value: 'N', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 25, value: 'Rivastigmine (Patch)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 26, value: 'AChEI & BuChEI',       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 27, value: '1-2h',                 createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 28, value: '4.8mg/to 9.5mg/9.5mg', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 29, value: 'q24hrs',               createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 30, value: '4.6,9.5,13.3/patch',   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 31, value: 'N', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 32, value: 'N', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 33, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 34, value: 'N', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 35, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 36, value: 'N', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 37, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 38, value: 'N', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 39, value: 'Y', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 40, value: 'N', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 25, value: 'Memantine',                         createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 26, value: 'NMDA Blocker',                      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 27, value: '60-100h',                           createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 28, value: '5mg qAM/↑ by 5mg weekly/10mg BID', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 29, value: 'qAm week 1 then BID',               createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 30, value: '5,10/tab',   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 31, value: 'N',          createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 32, value: 'N ',         createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 33, value: 'Mod. Only',  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 34, value: 'Y',          createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 35, value: 'No Studies', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 36, value: 'N',          createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 37, value: 'N',          createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 38, value: 'N',          createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 39, value: 'N',          createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 40, value: 'N',          createdAt: new Date(), updatedAt: new Date() },

      //Cognitive Enhancers - Adverse Effects and Safety
      { uuid: uuidv4(), headerID: 41, value: 'No absolute contraindication', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 41, value: 'Relative (for AChEI)',         createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 41, value: 'LBBB, Bardycardia',            createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 41, value: 'Peptic ulcer disease',         createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 41, value: 'COPD (severe)',                createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 41, value: 'Anticholinergic medication',   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 41, value: 'CrCI < 15ml/min(memantine)',   createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 42, value: 'Intolerance 10-20%',  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 42, value: 'Nausea, vomiting',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 42, value: 'Diarrhea',            createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 42, value: 'Muscle cramps',       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 42, value: 'Insomnia/Nightmares', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 42, value: 'Anorexia',            createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 42, value: 'Weight loss',         createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 42, value: 'Dizziness',           createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 42, value: 'Drooling',            createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 42, value: 'Nasopharyngitis',     createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 43, value: 'Intolerance ~11%', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 43, value: 'Dizziness',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 43, value: 'Constipation',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 43, value: 'Headache',         createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 43, value: 'Sedation',         createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 43, value: 'Anxiety',          createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 43, value: 'Hallucinations',   createdAt: new Date(), updatedAt: new Date() },

      //Cognitive Enhancers - Clinical Guide
      { uuid: uuidv4(), headerID: 44, value: 'Ensuring resting HR > 50', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 45, value: 'Cognition',                           createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 45, value: 'Global Functioning',                  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 45, value: 'Target symptoms and goal attainment', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 46, value: 'MMSE (or similar) q ≥ 3-6 months',                   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 46, value: 'IADLs & ADLs',                                       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 46, value: 'Individual (eg. Repetitive questions, baking, etc)', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_data', null, {});
  }
};
