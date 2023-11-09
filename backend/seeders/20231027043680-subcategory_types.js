'use strict';
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategory_types', [
      { id: 1, uuid: uuidv4(), title: 'Medication Table' },
      { id: 2, uuid: uuidv4(), title: 'Adverse Effects and Safety' },
      { id: 3, uuid: uuidv4(), title: 'Clinical Guide' },
      { id: 4, uuid: uuidv4(), title: 'Nonpharmalogical' },
      { id: 5, uuid: uuidv4(), title: 'Pharmalogical' },
      { id: 6, uuid: uuidv4(), title: 'Anticholinergic Activity' }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_types', null, {});
  }
};
