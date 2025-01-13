'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Properties', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'PropertyTypes', 
          key: 'id',
        },
      },
      project_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Projects', 
          key: 'id',
        },
      },
      price: {
        type: Sequelize.DECIMAL(10, 2), 
        allowNull: false,
      },
      area: {
        type: Sequelize.DECIMAL(5, 2), 
        allowNull: false,
      },
      floor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bedrooms: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bathrooms: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      reserved: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Properties');
  },
};
