
const { Property, PropertyType, Project } = require('../models');
const { Sequelize } = require('sequelize');

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

// Controller for creating a new property
const addNewProperty = async (req, res) => {
  const { type_id, project_id, price, area, floor, bedrooms, bathrooms, reserved } = req.body;

  try {
    const newProperty = await Property.create({
      type_id,
      project_id,
      price,
      area,
      floor,
      bedrooms,
      bathrooms,
    });
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ message: 'Error creating property', error });
  }
}

// Controller to search for properties based on query params
const searchProperties = async (req, res) => {
  try {
    const { projectName } = req.query;

  const properties = await Property.findAll(
    {
      include: [{
        model: Project,
        as: 'project',
        attributes: ['name'],
        where: projectName ? { name: { [Sequelize.Op.iLike]: `%${projectName}%` } } : {},
      }],
    
  });

  if (properties.length > 0) {
    res.status(200).json(properties);
  } else {
    res.status(404).json({ message: 'No properties found' });
  }
  } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });

  }

}


module.exports = {
  listAllProperties,
  getPropertyById,
  addNewProperty,
  searchProperties
};
