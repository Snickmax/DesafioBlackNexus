import sequelize from '../database/conexion.js';
import User from '../models/user.js';

const testUserOperations = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');

    // Crear un usuario
    const newUser = await User.create({
      nombre: 'Jane Doe',
      email: 'jane.doe@example.com',
      password: 'securepassword',
      rol: 'Admin',
    });
    console.log('Usuario creado:', newUser.toJSON());

    // Buscar usuario por ID
    const foundUser = await User.findByPk(newUser.id);
    console.log('Usuario encontrado:', foundUser.toJSON());

    // Actualizar usuario
    await foundUser.update({ nombre: 'Jane Updated' });
    console.log('Usuario actualizado:', foundUser.toJSON());

    // Eliminar usuario
    await foundUser.destroy();
    console.log('Usuario eliminado con éxito.');
  } catch (error) {
    console.error('Error durante las operaciones con usuarios:', error);
  } finally {
    await sequelize.close();
  }
};

testUserOperations();
