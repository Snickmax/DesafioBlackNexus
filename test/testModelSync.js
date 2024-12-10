import sequelize from '../database/conexion.js';
import User from '../models/user.js';

const testModelSync = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');

    await sequelize.sync({ force: true }); // Sincroniza el modelo y recrea la tabla
    console.log('Modelo sincronizado correctamente.');

    const sampleUser = await User.create({
      nombre: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      rol: 'Usuario',
    });
    console.log('Usuario de prueba creado:', sampleUser.toJSON());
  } catch (error) {
    console.error('Error durante la prueba:', error);
  } finally {
    await sequelize.close();
  }
};

testModelSync();
