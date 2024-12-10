import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Configuración de Sequelize para conectar con PostgreSQL.
 * Variables necesarias: DB_NAME, DB_USER, DB_PASSWORD, DB_HOST.
 */

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

export default sequelize;
