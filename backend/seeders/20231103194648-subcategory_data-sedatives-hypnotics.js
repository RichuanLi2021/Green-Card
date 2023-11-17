'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategory_data', [
      //Sedatives/Hypnotics - Medication Table
      { uuid: uuidv4(), headerID: 47, value: 'clonazepam (Rivotril)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 48, value: '0.25-0.5', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 49, value: '1-2h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 50, value: '20h-50h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 51, value: '0.125-1', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 52, value: '0.5,1,2/tab', createdAt: new Date(), updatedAt: new Date() },
      
      { uuid: uuidv4(), headerID: 47, value: 'lorazepam (Ativan)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 48, value: '1', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 49, value: '2-4h(po) 1h(IM, SL)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 50, value: '10-25h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 51, value: '0.25-2', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 52, value: '0.5,1,2/tab 0.5,1,2/SLtab 4mg/mL/inj', createdAt: new Date(), updatedAt: new Date() },
      
      { uuid: uuidv4(), headerID: 47, value: 'melatonin', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 48, value: 'n/a', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 49, value: '2.6h ', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 50, value: '3.5-4h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 51, value: '2.0-10', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 52, value: '3,5,10/multiple', createdAt: new Date(), updatedAt: new Date() },
      
      { uuid: uuidv4(), headerID: 47, value: 'oxazepam (Serax)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 48, value: '15', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 49, value: '2-4h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 50, value: '5-20h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 51, value: '5-30.0', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 52, value: '10,15,30/tab', createdAt: new Date(), updatedAt: new Date() },
      
      { uuid: uuidv4(), headerID: 47, value: 'temazepam (Restoril)' , createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 48, value: '10', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 49, value: '2-3h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 50, value: '5-25h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 51, value: '5-15.0', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 52, value: '15,30/cap', createdAt: new Date(), updatedAt: new Date() },
      
      { uuid: uuidv4(), headerID: 47, value: 'trazodone (Desyrel)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 48, value: 'n/a', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 49, value: '2-3h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 50, value: '4-9h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 51, value: '12.5-100', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 52, value: '50,75,100,150/tab', createdAt: new Date(), updatedAt: new Date() },
      
      { uuid: uuidv4(), headerID: 47, value: 'zolpidem (Sublinox)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 48, value: 'n/a', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 49, value: '1-2h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 50, value: '2.5-4h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 51, value: '5-10.0', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 52, value: '5,10/diss tab', createdAt: new Date(), updatedAt: new Date() },
      
      { uuid: uuidv4(), headerID: 47, value: 'zopiclone (Imovane)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 48, value: '7.5', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 49, value: '1.5h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 50, value: '4-7h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 51, value: '3.75-12.5', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 52, value: '5,7.5/tab', createdAt: new Date(), updatedAt: new Date() },
      
      //Sedatives/Hypnotics - Adverse Effects and Safety
      { uuid: uuidv4(), headerID: 53, value: 'CNS depression', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 53, value: 'Cognitive impairment', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 53, value: 'Daytime fatigue', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 53, value: 'Dependence', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 53, value: 'Falls', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 53, value: 'Fractures', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 53, value: 'Loss of bladder control', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 53, value: 'Motor vehicle accidents', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 53, value: 'Sleep walking', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 53, value: 'Withdrawal', createdAt: new Date(), updatedAt: new Date() },

      //Sedatives/Hypnotics - Clinical Guide
      { uuid: uuidv4(), headerID: 54, value: 'First line treatment: CBT-i (www.mysleepwell.ca)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 54, value: '2nd line treatment: sedatives (if CBTi failure)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 54, value: 'NNT with a sedative-hypnotic for improved sleep = 13, NNH = 6', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 55, value: 'Avoid starting if possible', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 55, value: 'Set end date', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 55, value: 'Access for drug-drug interactions', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 55, value: 'Inform patients of risk', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 56, value: 'Low dose, intermittent use', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 56, value: 'Time-limited', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 56, value: 'Co-start safer interventions (CBTi)', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 57, value: 'Gradual taper', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 57, value: 'Add CBTi to support', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 58, value: '4 to 12', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 58, value: '12 to 24', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 58, value: '24 to 48', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 58, value: '>48', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 59, value: '4 to 8', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 59, value: '8 to 16', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 59, value: '12 to 24', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 59, value: '24 to 52', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 60, value: '1 to 2', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 60, value: '1 to 4', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 60, value: '2 to 4', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 60, value: '4', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_data', null, {});
  }
};
