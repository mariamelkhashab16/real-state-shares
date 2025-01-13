const app = require('./app');
const client = require('../config/database');
const sequelize = require('../config/sequelize');

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database using sequelize ORM has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

const BACKEND_PORT = process.env.BACKEND_PORT || 8080;
app.listen(BACKEND_PORT, () => {
  console.log(`Server is running on port ${BACKEND_PORT}`);
});
