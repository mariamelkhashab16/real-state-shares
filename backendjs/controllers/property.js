
const {getAllPropertiesDetails, getPropertyDetails, searchPropertiesByFilter, createNewProperty} = require('../services/property')

// Controller to get property details by ID
const getPropertyById = async (req, res) => {
  const { id } = req.params;  

  try {
    const property = await getPropertyDetails(id)

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
    const properties = await getAllPropertiesDetails();
    res.status(200).json(properties);  
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Controller for creating a new property
const addNewProperty = async (req, res) => {

  try {
    const newProperty = await createNewProperty(req.body)
    res.status(201).json(newProperty);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error creating property', error });
  }
}

// Controller to search for properties based on query params
const searchProperties = async (req, res) => {
  try {
  const properties = await searchPropertiesByFilter(req.query)

  if (properties.length > 0) {
    res.status(200).json(properties);
  } else {
    res.status(404).json({ message: 'No properties found' });
  }
  } catch (error) {
    console.log(error)
      res.status(500).json({ message: 'Internal Server Error' });

  }

}


module.exports = {
  listAllProperties,
  getPropertyById,
  addNewProperty,
  searchProperties
};
