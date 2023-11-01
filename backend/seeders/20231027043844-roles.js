'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('roles', [
      {
        title: 'Admin',
        description: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'User',
        description: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
