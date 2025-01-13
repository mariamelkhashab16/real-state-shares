'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      developer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Developers', 
          key: 'id',
      },
      onDelete: 'CASCADE'

    },
      name: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      zone_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Zones', 
          key: 'id',
        },
        onDelete: 'SET NULL',  
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};