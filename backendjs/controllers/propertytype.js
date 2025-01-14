const { PropertyType } = require('../models');

// Controller for listing all property types
const listAllPropertyTypes = async (req, res) => {
    try {
      const propertyTypes = await PropertyType.findAll();
      res.status(200).json(propertyTypes);  
    } catch (error) {
      console.error("Error fetching property Types:", error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

module.exports = {
    listAllPropertyTypes
}