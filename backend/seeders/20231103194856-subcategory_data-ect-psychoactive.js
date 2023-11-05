'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, DataTypes) {
    // await queryInterface.bulkInsert('subcategory_data', [
      // ECT & Psychoactive Medications - Medication Table
      // Uncomment these objects and bulkInsert() function, edit them for your specific headers, then copy and paste as you need.
      // Use `npm run db:reset` to test your seed data.
      // You can leave the subcategory title comment(s) alone, but delete these three comment lines.
      // {
      //   headerID: 1,
      //   value: '',
      //   info: '',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   headerID: 1,
      //   value: '',
      //   info: '',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },

    // ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_data', null, {});
  }
};
