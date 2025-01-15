const express = require('express');
const { listAllZones } = require('../controllers/zone')
const router = express.Router();

// Route to get all zones
router.get('/', listAllZones);


module.exports = router;
