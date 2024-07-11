# Flashcards

Este proyecto tiene como objetivo desarrollar una plataforma educativa basada en tarjetas didácticas, diseñada para mejorar la memorización y facilitar el repaso efectivo de información. Las flashcards son herramientas reconocidas por su capacidad para mejorar la retención de conocimientos. Esta aplicación permite a los usuarios crear, gestionar y estudiar tarjetas de estudio, así como temarios, que son conjuntos organizados de flashcards relacionados con un tema específico. Esto les permite adaptar el proceso de aprendizaje según sus necesidades educativas específicas.


### Crear e iniciar contenedores de docker

1. El archivo .env.example que esta en la raiz del proyecto le quitas el ``.example`` y lo llenas con la informacion que esta alli plasmada
2. Abres ``docker desktop``
3. En la raiz del proyecto abres una terminal y escibes el siguiente comando `docker-compose up` y esperas a que termine de ejecutar
4. Una vez finalizado el navagador escribes ``http://localhost:5173`` y ya pudes interactuar con el sitio web

## Instalar dependencias

Entras a cada proyecto y ejecutas el siguiente comando

`
npm install
`

## Iniciar aplicacion

Entras a cada proyecto y ejecutas el siguiente comando

`npm run dev`

## Documentacion con swagger

Para la documentacion debes entrar a la siguiente url en el navegador  `http://localhost:{puerto}/api/` (el puerto es el que hayas colocado en el .env).

## Endpoints

### Autenticación

- `POST` `/api/auth/login` - Iniciar sesión
- `POST` `/api/auth/singin` - Registrarte
- `POST` `/api/auth/sendEmailChangePassword` - Enviar email para cambiar contraseña
- `POST` `/api/auth/changePassword` - Cambiar contraseña
- `POST` `/api/auth/validateToken` - Validar token

### Flashcards

- `GET` `/api/flashcard/:topic` - Obtener flashcards por id de temario
- `GET` `/api/flashcard/getFlashcard/:id` - Obtener flashcard por id
- `POST` `/api/flashcard/createFlashcard/:topic` - Crear flashcard
- `PUT` `/api/flashcard/editFlashcard/:topic/:id` - Editar flashcard
- `DELETE` `/api/deleteFlashcard/:topic/:id` - Eliminar flashcard


### Temarios

- `GET` `/api/topic/getTopics` - Obtener temarios por id de usuario
- `GET` `/api/topic/:id` - Obtener temario por id
- `POST` `/api/topic/createTopic` - Crear temario
- `PUT` `/api/topic/editTopic/:id` - Actualizar temario
- `DELETE` `/api/topic/deleteTopic/:id` - Eliminar temario

### Usuarios

- `GET` `/api/user/getUser/:id` - Obtener usuario por id
- `PUT` `/api/user/editUser/:id` - Actualizar usuario
- `DELETE` `/api/user/deleteUser/:id` - Actualizar usuario


## Tecnologías utilizadas

Frontend:

- React
- Yup
- Axios
- Scss
- React-router
- Sweetalert
- React-tooltip
- Mui

Backend:

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Swagger
- Passport.js
