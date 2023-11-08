'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('roles', [
      { id: 1, title: 'admin' },
      { id: 2, title: 'user' }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
