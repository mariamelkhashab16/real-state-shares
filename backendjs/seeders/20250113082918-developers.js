'use strict';

/** @type {import('sequelize-cli').Migration} */
const sequelize = require('../config/sequelize');
module.exports = {
  async up (queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Developers', [
      {
        name: 'Palm Hills',
        createdAt: new Date(),
        updatedAt: new Date(),

      },

      {
        name: 'SODIC',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dorra',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Misr Italia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ora',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Developers', null, {});

  }
};
