const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT, 
  DB_NAME,
  DB_SSL_MODE
} = process.env;

const port = DB_PORT ? parseInt(DB_PORT, 10) : 5432;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: port, 
  dialect: 'postgres',
  dialectOptions: {
    ssl: DB_SSL_MODE === 'require' ? {
      require: true,  
      rejectUnauthorized: false, 
    } : false,
  },
});

module.exports = sequelize;
