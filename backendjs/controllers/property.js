
const { Property, PropertyType, Project } = require('../models');

// Controller to get property details by ID
const getPropertyById = async (req, res) => {
  const { id } = req.params;  // Extracting the property id from the URL parameter

  try {
    const property = await Property.findOne({
      where: { id },
    });

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    res.status(200).json(property);

  } catch (error) {
    console.error("Error fetching property details:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

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
  getPropertyById
};
