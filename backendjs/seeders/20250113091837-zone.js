'use strict';

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Insert sample data into the Zones table
    await queryInterface.bulkInsert('Zones', [
      {
        name: 'El Sheikh Zayed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'New Cairo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'New Capital',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Al Alamein',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Zones', null, {});
  }
};
