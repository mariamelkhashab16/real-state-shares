'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');  
  class Project extends Model {

    static associate(models) {
      // define association here
      Project.belongsTo(models.Developer, {
        foreignKey: 'developer_id',
        as: 'developer'
      });

      Project.belongsTo(models.Zone, {
        foreignKey: 'zone_id',
        as: 'zone'
      });

      Project.hasMany(models.Property, 
        { foreignKey: 'project_id', as: 'properties' 
          
        });
      
        Project.hasMany(models.PaymentPlan, 
          { foreignKey: 'project_id', as: 'paymentplans' 
            
          });
    }
  }
  
  Project.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    developer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zone_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
   
  }, 
  {
    timestamps: true, 
    createdAt: 'createdAt', 
    updatedAt: 'updatedAt', 
    sequelize,
    modelName: 'Project',
  });



module.exports = Project;