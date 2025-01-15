// config file for the sequalize CLI
// CLI is a tool for automating common sequalize tasks (model generation, seeding, migrations,..) 
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

module.exports = {
  development: {
    username: DB_USER ,
    password: DB_PASSWORD ,
    database: DB_NAME ,
    port: port,
    host: DB_HOST ,
    dialect: 'postgres',
    dialectOptions: {
      ssl: DB_SSL_MODE === 'require' && {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}