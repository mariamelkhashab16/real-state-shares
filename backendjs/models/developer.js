
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');  

const Developer = sequelize.define('Developer', {
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
});

module.exports = Developer;


