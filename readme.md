# Harcoded news

## Endpoints del projecto (base)

id | Method | Path  | Description
-- | ------ | ------ | ----------
1 | get | / | Pagina principal con noticias
2 | get | news/find?query=query | Peticiones de la barra de busqueda
3 | get | /news/:id | Visualizacion de la noticia
4 | get | /profile | Pagina del usuario (Noticias y temas favoritos)
5 | get | /comments/create?idNew=id | Crear un comentario
6 | get | /comments/create?idNew=id | Formulario de crear comentario, y el post irá a BD
7 | get | /comments/edit?idNew=id | Busqueda en la base de datos, mostrar los datos y mostrar la vista de edición
8	| put | /comments/edit?idNew=id | Actualizar el comentario en la base de daos y actualizarlo para el usuario
9	| delete |/comments/delete?idNew=id | Eliminar el comentario de la noticia
10 | post | /add-favorite?idNew=id | Añadir noticia a favoritos
11 | delete | /delete-favorite?idNew=id | Eliminar de favoritos
12 | get | contact | Pagina de contacto de la pagina
13 | get | /login | Manda el formulario para autorizarte en la pagina
14 | post | /login | Te hacer log-in en la pagina
15 | get | /signup | Manda el formulario para registrarte en la pagina
16 | post | /signup	| Te regsitra en la pagina (base de datos)
17 | get | /logout | Te hacer log-out de la pagina
18| post | /profile/add-image | 

## Modelos

### Modelo de usuario

```
const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  photo: String,
  favNews: String
}, {
  timestamps: true
  }
})
```

### Comentarios

```
const commentSchema = Schema({
  comment: String,
  idNews: String,
  idAuthor: {type: Schema.Types.ObjectId, ref: "User"}
}{
  timestamps: true
})
```
