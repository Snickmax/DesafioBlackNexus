import express from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

/**
 * Rutas disponibles:
 * - POST /usuarios: Crea un nuevo usuario.
 * - GET /usuarios: Obtiene todos los usuarios.
 * - GET /usuarios/:id: Obtiene un usuario por ID.
 * - PUT /usuarios/:id: Actualiza un usuario.
 * - DELETE /usuarios/:id: Elimina un usuario.
 */

router.post('/usuarios', createUser);
router.get('/usuarios', getUsers);
router.get('/usuarios/:id', getUserById);
router.put('/usuarios/:id', updateUser);
router.delete('/usuarios/:id', deleteUser);

export default router;
