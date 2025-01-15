const { Property, PropertyType, Project, Developer, PaymentPlan, Zone } = require('../models');
const { Sequelize } = require('sequelize');


const getAllPropertiesDetails = async () => {
    return await Property.findAll({
        include: [
          {
            model: Project,
            as: 'project',
            attributes: ['name'],
            include: [
              { model: Developer, as: 'developer', attributes: ['name'] },
              { model: PaymentPlan, as: 'paymentplans', attributes: ['down_payment','num_years'], where: {is_active : true} }

            ],
          },
          {
            model: PropertyType,
            as: 'type',
            attributes: ['name'],
          },
        ],
      });
}

const getPropertyDetails = async (propertyId) => {
  return await Property.findOne({
    include: [
      {
        model: Project,
        as: 'project',
        attributes: ['name'],
        include: [
          { model: Developer, as: 'developer', attributes: ['name'] },
          { model: PaymentPlan, as: 'paymentplans', attributes: ['down_payment','num_years'], where: {is_active : true} }

        ],
      },
      {
        model: PropertyType,
        as: 'type',
        attributes: ['name'],
      },
    ],
    where: { id: propertyId }

  });

}

const searchPropertiesByFilter = async (filters) => {
  const { projectName, devName, areaName} = filters;

  return await Property.findAll(
    {
      include: [{
        model: Project,
        as: 'project',
        attributes: ['name'],
        where: projectName ? { name: { [Sequelize.Op.iLike]: `%${projectName}%` } } : {},
        include: [
          { model: Developer, 
            as: 'developer', 
            attributes: ['name'],
            where: devName ? { name: { [Sequelize.Op.iLike]: `%${devName}%` } } : {},
            
          },
          { model: Zone, 
            as: 'zone', 
            attributes: ['name'],
            where: areaName ? { name: { [Sequelize.Op.iLike]: `%${areaName}%` } } : {},
            
          },

        ],
      },
      {
        model: PropertyType,
        as: 'type',
        attributes: ['name'],
      },],
    
  });
}

const createNewProperty = async (params) => {
  const { type_id, project_id, price, area, floor, bedrooms, bathrooms, reserved } = params

  return await Property.create({
    type_id,
    project_id,
    price,
    area,
    floor,
    bedrooms,
    bathrooms,
  });
}
module.exports = {
    getAllPropertiesDetails,
    getPropertyDetails,
    searchPropertiesByFilter,
    createNewProperty
}