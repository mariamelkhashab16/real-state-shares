const { Property, PropertyType, Project, Developer, PaymentPlan, Zone } = require('../models');
const { Sequelize } = require('sequelize');
const { defaultPageSize} = require('../config/config')

/**
 * @async
 * @function getPropertyDetails
 * @param {number} propertyId
 * @returns {Promise} Property details or null if no property is found
 */
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

// Service to get all properties details
const getAllPropertiesDetails = async (filters = {}, pageSize=defaultPageSize) => {
  const { projectName, devName, areaName, page=1} = filters;
  const currPage = page
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
      offset,
      limit, 

  });

  return { // For pagination purposes
    data: rows, 
    paginationDetails: {
      totalCount: count, // total count of rows matching the filter criteria
      currPage: currPage, // requested page, 1 by default 
      pageSize: pageSize, // limit of rows per page
      totalPagesCount: Math.ceil(count/pageSize) 
    }

  }
}

// Service to create a new property based on passed request body
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