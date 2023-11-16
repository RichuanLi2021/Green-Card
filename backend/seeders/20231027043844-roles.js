'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('roles', [
      { id: 1, uuid: uuidv4(), title: 'admin', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, uuid: uuidv4(), title: 'user', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
