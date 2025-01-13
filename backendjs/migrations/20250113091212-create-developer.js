'use strict';

/** @type {import('sequelize-cli').Migration} */
const sequelize = require('../config/sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {

    // Sync the database and force drop all tables
    await sequelize.sync({ force: true }); 

    await queryInterface.createTable('Developers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    },
  {timestamps: true});
  
  // Reset the sequence for the 'id' column in the Developers table
    await queryInterface.sequelize.query('ALTER SEQUENCE developers_id_seq RESTART WITH 1');
 
  },

  async down (queryInterface, Sequelize) {


    await queryInterface.dropTable('Developers');


  }
};
