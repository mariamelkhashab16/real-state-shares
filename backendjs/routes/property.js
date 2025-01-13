const express = require('express');
const { listAllProperties,getPropertyById,addNewProperty, searchProperties } = require('../controllers/property'); 

const router = express.Router();

// Route to get all properties
router.get('/', listAllProperties);
router.get('/search',searchProperties)
router.get('/:id', getPropertyById);
router.post('/',addNewProperty)

module.exports = router;
