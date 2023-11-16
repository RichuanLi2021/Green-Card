'use strict';
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategory_types', [
      { id: 1, uuid: uuidv4(), title: 'Medication Table', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, uuid: uuidv4(), title: 'Adverse Effects and Safety', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, uuid: uuidv4(), title: 'Clinical Guide', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, uuid: uuidv4(), title: 'Nonpharmalogical', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, uuid: uuidv4(), title: 'Pharmalogical', createdAt: new Date(), updatedAt: new Date() },
      { id: 6, uuid: uuidv4(), title: 'Anticholinergic Activity', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_types', null, {});
  }
};
