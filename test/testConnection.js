import sequelize from '../database/conexion.js';

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  } finally {
    await sequelize.close();
  }
};

testConnection();
