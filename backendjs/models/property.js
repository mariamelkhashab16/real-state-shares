const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');  

  class Property extends Model {

    static associate(models) {
      // define association here
      Property.belongsTo(models.Project, { foreignKey: 'project_id', as: 'project' });

      Property.belongsTo(models.PropertyType, { foreignKey: 'type_id', as: 'type' });

    }
  }
  
  Property.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
   
  }, 
  {
    timestamps: true, 
    createdAt: 'createdAt', 
    updatedAt: 'updatedAt', 
    sequelize,
    modelName: 'Property',
  });



module.exports = Property
