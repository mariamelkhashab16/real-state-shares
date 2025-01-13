const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');  

class Developer extends Model {}

Developer.init({
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
}, {
  sequelize,
  modelName: 'Developer',
  timestamps: true, 
  createdAt: 'createdAt', 
  updatedAt: 'updatedAt',
});

module.exports = Developer;
