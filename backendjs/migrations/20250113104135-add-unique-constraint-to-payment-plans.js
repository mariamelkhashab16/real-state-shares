'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Add a unique constraint on the combination of 'project_id' and 'is_primary' columns
    await queryInterface.addConstraint('PaymentPlans', {
      fields: ['project_id', 'is_primary'],
      type: 'unique',
      name: 'unique_primary_payment_plan_per_project', 
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('PaymentPlans', 'unique_primary_payment_plan_per_project');
  }
};
