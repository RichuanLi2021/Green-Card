'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('users', [
      {
        fName: 'Admin',
        lName: 'Admin',
        email: 'admin@gpgc.ca',
        password: '$2a$12$FXH9LO5.Hp.7D7JDVgYlVO5bdN5E8OY2ln/1H0d5WQgLerm5GK252',
        phone: null,
        lastLogin: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
