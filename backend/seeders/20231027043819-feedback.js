'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('Feedback', [{
      id: 1,
      uuid: uuidv4(),
      name: 'John Doe',
      email: 'john.doe@example.com',
      comment: 'Great service!',
      rating: 5,
      allowEmailBack: true,
      createdAt: new Date()
    }, {
      id: 2,
      uuid: uuidv4(),
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      comment: 'Very helpful platform.',
      rating: 4,
      allowEmailBack: true,
      createdAt: new Date()
    }], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('Feedback', null, {});
  }
};
