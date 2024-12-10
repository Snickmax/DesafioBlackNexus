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
    else res.status(404).json({ error: 'User not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { nombre, rol } = req.body;
    const [updated] = await User.update({ nombre, rol }, { where: { id: req.params.id } });
    if (updated) res.status(200).json({ message: 'User updated' });
    else res.status(404).json({ error: 'User not found' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (deleted) res.status(200).json({ message: 'User deleted' });
    else res.status(404).json({ error: 'User not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
