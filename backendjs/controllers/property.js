
const {getAllPropertiesDetails, getPropertyDetails, createNewProperty} = require('../services/property')

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
    const result = await getAllPropertiesDetails(filters=req.query)
    // properties = result.data
    res.status(200).json(result);  
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



module.exports = {
  listAllProperties,
  getPropertyById,
  addNewProperty};
