const express = require('express');
const { listAllProjects } = require('../controllers/project'); 

const router = express.Router();

// Route to get all properties
router.get('/', listAllProjects);


module.exports = router;
