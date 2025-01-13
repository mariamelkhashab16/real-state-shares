const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); 

const PropertyType = sequelize.define('PropertyType', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
    timestamps: true, 
    createdAt: 'createdAt', 
    updatedAt: 'updatedAt', 
  }
);

module.exports = PropertyType;
