'use strict';

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PropertyTypes', [
      {
        name: 'Appartment',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Villa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Twin House',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Studio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('PropertyTypes', null, {});
  }
};
