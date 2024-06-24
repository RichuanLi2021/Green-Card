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
        firstName: 'Admin',
        lastName: 'Admin',
        title: 'Administrator',
        email: 'admin@gpgc.ca',
        password: '$2b$12$A2mZHxpQwxRmsh.e9bMD0uS1q4ukYf3oDuvq7T87tnrjxe35WqfDK', //pass: W3q8&MW1+R;h$ZfKWa;
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2, 
        uuid: uuidv4(),
        discipline: 'RN/LPN',
        firstName: 'User',
        lastName: 'User',
        title: 'Regular User',
        email: 'user@gpgc.ca', 
        password: '$2b$12$lvxPVQZ0EqHzAnqoYXAp3ezapE.r97C22wiGrWDmQVlyfZS3SoK7O', //pass: user123
        verified: true, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3, 
        uuid: uuidv4(),
        discipline: 'Medical Student',
        firstName: 'Bee',
        lastName: 'Rad',
        title: 'Bee User',
        email: 'user2@gpgc.ca', 
        password: '$2b$12$lvxPVQZ0EqHzAnqoYXAp3ezapE.r97C22wiGrWDmQVlyfZS3SoK7O', //pass: user123
        verified: true, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4, 
        uuid: uuidv4(),
        discipline: 'NP',
        firstName: 'User',
        lastName: 'User',
        title: 'A User',
        email: 'user3@gpgc.ca', 
        password: '$2b$12$lvxPVQZ0EqHzAnqoYXAp3ezapE.r97C22wiGrWDmQVlyfZS3SoK7O', //pass: user123
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

