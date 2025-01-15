const express = require('express');
const { listAllProjects } = require('../controllers/project'); 

const router = express.Router();


router.get('/', listAllProjects);


module.exports = router;
