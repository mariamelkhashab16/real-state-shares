const propertyRouter = require('../routes/property')
const projectRouter = require('../routes/project')
const propertyTypeRouter = require('../routes/propertytype')
const zoneRouter = require('../routes/zone')

const cors = require('cors');
const express = require('express');

const app = express();

// Middleware
app.use(express.json());  
app.use(cors());


// Routes
app.use('/property',propertyRouter)
app.use('/project',projectRouter)
app.use('/property-type',propertyTypeRouter)
app.use('/zone',zoneRouter)

module.exports = app;
