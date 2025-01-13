const propertyRoutes = require('../routes/property')

const express = require('express');
const app = express();

// Middleware
app.use(express.json());  

// Routes
app.use('/property',propertyRoutes)

module.exports = app;
