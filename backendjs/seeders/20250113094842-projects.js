'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Projects', [
      {
        developer_id: 1,  
        name: 'Palm Parks',
        zone_id: 3,  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        developer_id: 1,  
        name: 'ICity',
        zone_id: 4,  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        developer_id: 2,  
        name: 'Beverly Hills',
        zone_id: 1,  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        developer_id: 3,  
        name: 'The Address West',
        zone_id: 1,  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        developer_id: 5,  
        name: 'Zed East',
        zone_id: 2,  
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        developer_id: 5,  
        name: 'Zed West',
        zone_id: 1,  
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {


  }
};
