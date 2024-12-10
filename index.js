import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import sequelize from './database/conexion.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();

/**
 * Configuración principal del servidor:
 * - Middlewares: bodyParser, rutas.
 * - Base de datos: Sincronización con Sequelize.
 * - Inicio del servidor en el puerto especificado.
 */

app.use(bodyParser.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => console.error('Unable to connect to the database:', error));
