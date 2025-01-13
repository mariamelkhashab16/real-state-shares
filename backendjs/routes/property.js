const express = require('express');
const { listAllProperties,getPropertyById } = require('../controllers/property'); 

const router = express.Router();

// Route to get all properties
router.get('/', listAllProperties);
router.get('/:id', getPropertyById);

module.exports = router;
