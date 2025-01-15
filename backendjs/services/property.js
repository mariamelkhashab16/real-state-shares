const { Property, PropertyType, Project, Developer, PaymentPlan, Zone } = require('../models');
const { Sequelize } = require('sequelize');
const { defaultPageSize} = require('../config/config')


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

const getAllPropertiesDetails = async (filters = {}, currPage= 1, pageSize=defaultPageSize) => {
  const { projectName, devName, areaName} = filters;
  const offset = (currPage - 1) * pageSize 
  const limit = pageSize

  const {count, rows} =  await Property.findAndCountAll(
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
          { model: PaymentPlan,
            as: 'paymentplans',
            attributes: ['down_payment','num_years'], 
            where: {is_active : true} },

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
      offset, limit

  });
  return {
    data: rows,
    paginationDetails: {
      totalCount: count,
      currPage: currPage,
      pageSize: pageSize,
      totalPagesCount: Math.ceil(count/pageSize)
    }

  }
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
    createNewProperty
}