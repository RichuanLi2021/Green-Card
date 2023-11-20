'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategory_data', [
      { uuid: uuidv4(), headerID: 61, value: 'lamotrigine (Lamictal)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 62, value: '25h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 63, value: '12.5-25 hs | 50-250† | 200-300', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 64, value: 'bid', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 65, value: '25,100,150/tab 2,5/chewtab', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 66, value: 'nil', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 61, value: 'lithium carbonate (Carbolith, Lithane)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 62, value: '20-26h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 63, value: '150 od-bid | use drug levels', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 64, value: 'hs-tid', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 65, value: '150,300,600/cap', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 66, value: '0.4-0.8 µmol/L', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 61, value: 'lithium citrate (oral liquid)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 62, value: '20-26h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 63, value: '5 ml bid | use drug levels', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 64, value: 'od-tid', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 65, value: '8mmol/5ml (=300mg Li carb)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 66, value: '"', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 61, value: 'valproic acid (Depakene)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 62, value: '6-16h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 63, value: '125 od-bid | 1000-2000 | 60mg/kg', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 64, value: 'b-tid', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 65, value: '250,500/cap; 250/5ml liq', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 66, value: '350-700 µmol/L', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 61, value: 'divalproex (Epival)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 62, value: '6-16h', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 63, value: '125 od-bid | 1000-2000 | 60mg/kg', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 64, value: '"', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 65, value: '125,250,500/tab', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 66, value: '"', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 61, value: 'antipsychotics', createdAt: new Date(), updatedAt: new Date() },
      // { uuid: uuidv4(), headerID: ??, value: 'Please see antipsychotics table', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 61, value: 'carbamazepine (Tegretol)', createdAt: new Date(), updatedAt: new Date() },
      // { uuid: uuidv4(), headerID: ??, value: 'To be used with caution under expert supervision*', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 61, value: 'oxcarbazepine (Trileptal)', createdAt: new Date(), updatedAt: new Date() },
      // { uuid: uuidv4(), headerID: ??, value: 'To be used with caution under expert supervision*', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_data', null, {});
  }
};