const { Property, PropertyType, Project, Developer, PaymentPlan } = require('../models');


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

module.exports = {
    getAllPropertiesDetails,
    getPropertyDetails
}