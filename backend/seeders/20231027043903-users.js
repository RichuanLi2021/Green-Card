'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        uuid: uuidv4(),
        discipline: 'RN/LPN',
        email: 'admin@gpgc.ca',
        password: '$2b$12$A2mZHxpQwxRmsh.e9bMD0uS1q4ukYf3oDuvq7T87tnrjxe35WqfDK',
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
