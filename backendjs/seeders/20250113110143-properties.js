'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Properties', [
      {
        type_id: 9, 
        project_id: 1,
        price: 2500000.00,
        area: 150.00,
        floor: 3,
        bedrooms: 3,
        bathrooms: 2,
        reserved: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 10,
        project_id: 2,
        price: 4500000.00,
        area: 200.00,
        floor: 5,
        bedrooms: 4,
        bathrooms: 3,
        reserved: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 11,
        project_id: 3,
        price: 4500000.00,
        area: 80.00,
        floor: 0,
        bedrooms: 4,
        bathrooms: 3,
        reserved: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 12,
        project_id: 4,
        price: 4500000.00,
        area: 80.00,
        floor: 0,
        bedrooms: 4,
        bathrooms: 3,
        reserved: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type_id: 9,
        project_id: 4,
        price: 4500000.00,
        area: 80.00,
        floor: 0,
        bedrooms: 4,
        bathrooms: 3,
        reserved: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Properties', null, {});
  },
};
