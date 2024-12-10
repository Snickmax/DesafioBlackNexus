# DesafioBlackNexus

Este proyecto es una API REST básica para gestionar usuarios. Está construido con Node.js, Express y PostgreSQL.

## Configuración

1. Clonar el repositorio.
2. Instalar dependencias con `npm install`.
3. Configurar las variables de entorno en un archivo `.env`.
    PORT=3000
    DB_NAME=db-name
    DB_USER=user
    DB_PASSWORD=pass
    DB_HOST=localhost

## Ejecución

- Modo desarrollo: `npm run dev`
- Modo producción: `npm start`

## Endpoints

1. **POST /usuarios**: Crear un usuario.
2. **GET /usuarios**: Listar todos los usuarios.
3. **GET /usuarios/:id**: Obtener un usuario por ID.
4. **PUT /usuarios/:id**: Actualizar un usuario.
5. **DELETE /usuarios/:id**: Eliminar un usuario.
