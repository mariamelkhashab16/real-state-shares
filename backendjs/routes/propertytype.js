const express = require('express');
const { listAllPropertyTypes } = require('../controllers/propertytype')
const router = express.Router();

// Route to get all properties
router.get('/', listAllPropertyTypes);


module.exports = router;
