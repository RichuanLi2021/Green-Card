'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    // await queryInterface.bulkInsert('feedback', [], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('feedback', null, {});
  }
};
