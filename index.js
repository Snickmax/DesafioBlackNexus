import express from 'express';
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

app.use(express.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Servidor puerto: ${PORT}`));
}).catch(error => console.error('No se conecta:', error));
