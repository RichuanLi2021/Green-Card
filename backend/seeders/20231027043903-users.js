'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        uuid: uuidv4(),
        fName: 'Admin',
        lName: 'Test',
        email: 'admin@gpgc.ca',
        password: '$2a$12$FXH9LO5.Hp.7D7JDVgYlVO5bdN5E8OY2ln/1H0d5WQgLerm5GK252',
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        uuid: uuidv4(),
        fName: 'User',
        lName: 'Test',
        email: 'user@gpgc.ca',
        password: '$2a$12$FXH9LO5.Hp.7D7JDVgYlVO5bdN5E8OY2ln/1H0d5WQgLerm5GK252',
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
