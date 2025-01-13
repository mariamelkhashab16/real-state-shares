const { Client } = require('pg');
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

const client = new Client({
   user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: port,  
  database: DB_NAME, 
  ssl: {
    rejectUnauthorized: false, 
  }
});


module.exports = client