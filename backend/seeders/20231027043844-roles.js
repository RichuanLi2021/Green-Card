'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('roles', [
      {
        title: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'guest',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
