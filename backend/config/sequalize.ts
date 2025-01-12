import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';


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

const sequelize = new Sequelize({
    username: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: port, 
    database: DB_NAME,
    dialect: 'postgres',
    ssl: DB_SSL_MODE === 'require',
    dialectOptions: {
      ssl: {
        require: DB_SSL_MODE === 'require',
        rejectUnauthorized: false, 
      },
    },
  });


export default sequelize;
