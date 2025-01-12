import app from './app';
import client from '../config/database';
import sequelize from '../config/sequalize';

// client.connect()
//   .then(() => {
//     console.log('Connected to the database');
//   })
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database using sequalize ORM has been established successfully.');
  })

// Sync models
// sequelize.sync({ force: false }) // Set force to true to drop and recreate tables
// .then(() => {
//   console.log('Database synced');
// });

const BACKEND_PORT = process.env.BACKEND_PORT || 8080;
app.listen(BACKEND_PORT, () => {
  console.log(`Server is running on port ${BACKEND_PORT}`);
});
