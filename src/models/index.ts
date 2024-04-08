import { Sequelize } from "sequelize-typescript";
import * as mysql from "mysql2";
import Brand from './Brand';
import Product from "./Product";

const dbName = process.env.DB_NAME || 'your_database_name';
const dbUser = process.env.DB_USER || 'your_database_username';
const dbHost = process.env.DB_HOST || 'localhost';
const dbPassword = process.env.DB_PASSWORD || 'your_database_password';

const sequelize = new Sequelize({
  dialect: 'mysql',
  dialectModule: mysql,
  host: dbHost,
  username: dbUser,
  password: dbPassword,
  database: dbName, 
  port: 3306,
  models: [Brand, Product]
});

// sequelize.sync({ alter: true });  // Use cautiously

export default sequelize;