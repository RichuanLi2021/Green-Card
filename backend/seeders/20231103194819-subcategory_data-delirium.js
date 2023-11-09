'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, DataTypes) {
    // await queryInterface.bulkInsert('subcategory_data', [
      // Uncomment these objects and bulkInsert() function, edit them for your specific headers, then copy and paste as you need.
      // No need to specify the `id` attributes since no other tables require them.
      // You can leave the subcategory title comment(s) alone, but delete these three comment lines.

      // Delirium - Nonpharmalogical
      // { uuid: uuidv4(), headerID: 1, value: '' },
      // { uuid: uuidv4(), headerID: 1, value: '' },

      // Delirium - Pharmalogical
      // { uuid: uuidv4(), headerID: 2, value: '' },
      // { uuid: uuidv4(), headerID: 2, value: '' },

      // Delirium - Anticholinergic Activity
      // { uuid: uuidv4(), headerID: 3, value: '' },
      // { uuid: uuidv4(), headerID: 3, value: '' },

    // ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_data', null, {});
  }
};
