const propertyRoutes = require('../routes/property')
const cors = require('cors');
const express = require('express');

const app = express();

// Middleware
app.use(express.json());  
app.use(cors());


// Routes
app.use('/property',propertyRoutes)

module.exports = app;
