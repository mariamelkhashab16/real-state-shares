'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PaymentPlans', [
      {
        project_id: 1,  
        down_payment: 10,
        num_years: 10,
        is_active: true,
        is_primary: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        project_id: 1,  
        down_payment: 20,
        num_years: 8,
        is_active: true,
        is_primary: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        project_id: 2,  
        down_payment: 25,
        num_years: 5,
        is_active: true,
        is_primary: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        project_id: 3,  
        down_payment: 25,
        num_years: 5,
        is_active: true,
        is_primary: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        project_id: 4,  
        down_payment: 25,
        num_years: 5,
        is_active: true,
        is_primary: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        project_id: 5,  
        down_payment: 25,
        num_years: 5,
        is_active: true,
        is_primary: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        project_id: 6,  
        down_payment: 25,
        num_years: 5,
        is_active: true,
        is_primary: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PaymentPlans', null, {});
  }
};
