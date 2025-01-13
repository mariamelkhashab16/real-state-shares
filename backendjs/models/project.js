'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.belongsTo(models.Developer, {
        foreignKey: 'developer_id',
      });

      Project.belongsTo(models.Zone, {
        foreignKey: 'zone_id',
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
  }
  ,{
    sequelize,
    modelName: 'Project',
  });



  return Project;
};