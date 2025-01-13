const express = require('express');
const { listAllProperties } = require('../controllers/property'); 

const router = express.Router();

// Route to get all properties
router.get('/', listAllProperties);

module.exports = router;
