# Subaplicación de Gestión de Usuarios

Esta subaplicación gestiona la autenticación, el registro y los perfiles de usuarios. Puede desarrollarse de manera independiente y luego integrarse a la API principal de un proyecto, como un blog.

## 📋 Descripción

Esta subaplicación proporciona un conjunto de funcionalidades esenciales para la gestión de usuarios, incluyendo:

- **Registro de nuevos usuarios**
- **Inicio de sesión**
- **Actualización de perfiles**
- **Recuperación de contraseñas**

### 🚀 Funcionalidades

| Funcionalidad               | Descripción                                                             |
| --------------------------- | ----------------------------------------------------------------------- |
| **Registro de usuarios**     | Permite que nuevos usuarios se registren en la plataforma.              |
| **Inicio de sesión**         | Autentica a los usuarios registrados para acceder a su cuenta.          |
| **Actualización de perfil**  | Permite que los usuarios actualicen su información personal.            |
| **Recuperación de contraseña** | Envía un enlace para restablecer la contraseña en caso de olvido.      |

### 🔀 Rutas de la API

| Método | Ruta                    | Descripción                                        |
| ------ | ----------------------- | -------------------------------------------------- |
| `POST` | `/users/register`        | Registra un nuevo usuario.                         |
| `POST` | `/users/login`           | Autentica a un usuario con credenciales válidas.   |
| `GET`  | `/users/profile`         | Obtiene la información del perfil del usuario.     |
| `POST` | `/users/reset-password`  | Envía un enlace de recuperación de contraseña.     |

### 🛠 Tecnologías Utilizadas

- **Express.js** para el manejo de rutas y lógica de servidor.
- **JWT (JSON Web Tokens)** o **Passport.js** para la autenticación y autorización.
- **bcrypt** para la encriptación segura de contraseñas.

## 🗂 Estructura del Proyecto

```bash
📁 user-management/
├── 📁 controllers/         # Controladores de las rutas
├── 📁 models/              # Modelos de usuario y conexión a la base de datos
├── 📁 routes/              # Definición de las rutas de la API
├── 📁 middleware/          # Middlewares de autenticación
├── 📁 config/              # Configuraciones (ej. JWT, base de datos)
└── server.js               # Archivo principal de arranque del servidor
