const express = require('express');
const app = express();

// Middleware
app.use(express.json());  

// Routes

module.exports = app;
