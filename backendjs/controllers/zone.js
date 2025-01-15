const { Zone } = require('../models');

// Controller for listing all zone
const listAllZones = async (req, res) => {
    try {
      const zones = await Zone.findAll();
      res.status(200).json(zones);  
    } catch (error) {
      console.error("Error fetching property Types:", error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

module.exports = {
    listAllZones
}