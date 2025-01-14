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


module.exports = {
    getAllPropertiesDetails
}