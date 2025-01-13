const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');  

const Property = sequelize.define('Property', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'PropertyTypes', 
      key: 'id',
    },
  },
  project_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Projects', 
      key: 'id',
    },
  },
  price: {
    type: DataTypes.DECIMAL(10, 2), 
    allowNull: false,
  },
  area: {
    type: DataTypes.DECIMAL(5, 2), 
    allowNull: false,
  },
  floor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bedrooms: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bathrooms: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  reserved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: 'Properties', 
  timestamps: true, 
});

module.exports = Property;
