# Proyecto4
Api con mongo y js
1.1.Endpoints
  Posts
Endpoint para crear un post( tiene que estar autenticado)
Endpoint para actualizar un post ( tiene que estar autenticado)
Endpoint para eliminar un post( tiene que estar autenticado)
Endpoint para traer todos los posts junto a los usuarios que hicieron ese post y junto a los comentarios del post
Endpoint para buscar post por nombre
Endpoint para buscar post por id
Implementa validación a la hora de crear un post para que se rellene todos los campos(salvo la imagen, que no sea requerida) y si no se hace que devuelva un mensaje
Likes:
Endpoint para dar un like a un post
Endpoint para quitar like a un post
  Comments
Endpoint para crear un comentario en un determinado post

 Usuarios
Endpoint para registrar un usuario utilizando bcrypt
Implementa el correo de confirmación para el registro
Endpoint para login(utilizando bcrypt +JWT)
Validación en el login:
Si no has confirmado tu correo no puedes conectarte
Endpoint que nos traiga la información del usuario conectado
Endpoint para el logout
Implementa validación a la hora de crear un usuario para que se rellene todos los campos y si no se hace que devuelva un mensaje

Backend disponible en producción (Heroku).

Middleware para comprobar la autoría del post a la hora de editar/eliminar el mismo.

