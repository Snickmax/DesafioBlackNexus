import bcrypt from 'bcrypt';
import User from '../models/user.js';

export const createUser = async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ nombre, email, password: hashedPassword, rol });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) res.status(200).json(user);
    else res.status(404).json({ error: 'Usuario no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { nombre, rol, password, email, oldPassword } = req.body;

    const userId = req.params.id;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Verificar que la contraseña actual (oldPassword) es correcta antes de realizar cualquier actualización
    if (oldPassword) {
      const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);
      if (!isOldPasswordValid) {
        return res.status(400).json({ error: 'Contraseña incorrecta' });
      }
    }

    let updatedPassword = user.password; // Mantener la contraseña actual por defecto
    // Si se proporciona una nueva contraseña, hashearla antes de actualizar
    if (password) {
      updatedPassword = await bcrypt.hash(password, 10); // Hashear la nueva contraseña
    }

    // Actualizar los datos del usuario
    const [updated] = await User.update(
      { nombre, rol, password: updatedPassword, email },
      { where: { id: userId } }
    );

    if (updated) {
      res.status(200).json({ message: 'Usuario actualizado' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (deleted) res.status(200).json({ message: 'Usuario eliminado' });
    else res.status(404).json({ error: 'Usuario no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
