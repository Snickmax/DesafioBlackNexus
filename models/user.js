import { DataTypes } from 'sequelize';
import sequelize from '../database/conexion.js';

/**
 * Modelo de Usuario:
 * - id: Identificador único (PK, autoincremental).
 * - nombre: Nombre del usuario (string, requerido).
 * - email: Correo único, validado (string, requerido).
 * - password: Contraseña hasheada (string, requerido).
 * - rol: Rol del usuario (Admin o Usuario, requerido).
 */
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.ENUM('Admin', 'Usuario'),
    allowNull: false,
  },
  
},
{
  tableName: 'usuarios', // Especifica el nombre exacto de la tabla
  timestamps: true,      // Habilita createdAt y updatedAt
});

export default User;
