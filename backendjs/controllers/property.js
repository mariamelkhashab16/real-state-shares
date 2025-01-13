const { Property } = require('../models');  

// Controller for listing all properties
const listAllProperties = async (req, res) => {
  try {
    const properties = await Property.findAll();
    res.status(200).json(properties);  
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  listAllProperties,
};
