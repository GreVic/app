![logo_ironhack_blue 7](https://res.cloudinary.com/dul90jusb/image/upload/v1583152727/Greevic/logo-grevic-pantone_jnzy0x.png)
# GREEVIC APP 🎥
https://github.com/GreVic/app
## Greevic, languages for everyone
### ¿Qué es Greevic y cuál es su objetivo?
---
![greevic_start](https://res.cloudinary.com/dul90jusb/image/upload/v1583163125/Greevic/greevic-start_j7ycxp.png)

Greevic es una applicación que nace con el objetivo de facilitarle a las personas el aprendizaje de nuevos idiomas de una forma interactiva. Gracias a las diferentes plataformas de streaming que existen hoy en día, podemos acceder a todo tipo de contenido. Nosotros, en esta aplicación, nos hemos centrado en las películas. 
Con Greevic puedes aprender nuevos idiomas viendo películas en su idioma original utilizando los filtros de idioma y género para elegir la película con la que quieres aprender. Una vez eliges la película, podrás comentar lo que te ha parecido la película en sí para el aprendizaje del idioma elegido.
### ¿Cómo utilizar Greevic?
---
![greevic_home](https://res.cloudinary.com/dul90jusb/image/upload/v1583163126/Greevic/greevic-home_wjnhu0.png)

Como hemos comentado antes, Greevic es una nueva forma de aprender idiomas y funciona así:
#### Accedemos en https://greevic-app.herokuapp.com/, donde se muestra una pantalla de presentación. Hacemos click en "ENTER"
#### Una vez dentro, hemos llegado a la home. Aquí tenemos 2 opciones: registarnos o iniciar sesión, acciones que podemos hacer tanto en el menú como en el último módulo que se muestra en la home. Para registrarnos debemos introducir un nombe de usuario, email y contraseña. Para poder iniciar sesión debemos utilizar nuestro nombre de usuario y contraseña.
#### Tras haber iniciado sesión, podemos pasar a encontrar nuestra película en "Find your movie". En esta página se muestra una lista de películas que nos muestra el título, sinopsis, el idioma original de la película y la media de votos.
#### Ahora vamos a lo que nos interesa. Elegimos el idioma que queremos aprender de la lista, elegimos el género de la película y, si queremos, podemos ordenar los resultados por popularidad, fecha de estreno o título original de forma ascedente y descendente respectivamente.
#### Tras aplicar los filtros, elegimos la película con la queremos aprender. Al hacer click en ella, la información que se muestra es el poster de la película, título, slogan, media de los votos, sinopsis, fecha de esteno, duración de la película, idiomas hablados en la película y las plataformas en las que se puede ver la película.
#### Elige tu plataforma y ¡aprende con la película elegida en su idioma original!
#### ¿Quieres compartir algo que te ha ayudad mucho en la película o dudas sobre alguna frase en particular? Coméntalo en el foro de la película. Una vez registrado, podrás comentar lo que quieras sobre las películas que hayas visto.
#### Además, una vez hayas iniciado sesión, podrás editar los datos de tu cuenta en "My Account", así como eliminar tu cuenta.

![greevic_card](https://res.cloudinary.com/dul90jusb/image/upload/v1583163125/Greevic/greevic-card_apcn9u.png)


### Estructura interna de Greevic
---
La aplicación de Greevic contiene la siguiente estructura interna de carpetas:
```
app
|_ .vscode
|_ bin
|_ lib
|_ models
|  |_ comment.js
|  |_ user.js
|_ node_modules
|_ passport
|  |_ strategies
|  |  |_ local.js
|  |_ index.js
|_ public
|  |_ images
|  |_ javascripts
|  |  |_ apiMovies.js
|  |  |_ script.js
|  |  |_ strength.js
|  |_ stylesheets
|     |_ strength.css
|     |_ style.css
|     |_ style.css.map
|     |_ style.scss 
|_ routes
|  |_ index.js
|  |_ movieRoutes.js
|  |_ passportRouter.js
|_ views
|  |_ passport
|  |  |_ card.hbs
|  |  |_ edit.hbs
|  |  |_ index.hbs
|  |  |_ login.hbs
|  |  |_ private.hbs
|  |  |_ show.hbs
|  |  |_ signup.hbs
|  |_ enter.hbs
|  |_ error.hbs
|  |_ layout.hbs
|  |_ not-found.hbs
|_ .env
|_ .gitignore
|_ app.js
|_ package-lock.json
|_ package.json
|_ README.md
|_ withDbConnection.js
```
#### Dependencias
STRENGTH: Utilizado para comprobar la seguridad de tu contraseña. [Strength](https://www.jquerycards.com/forms/inputs/strength-js).
AOS: Libreria para animaciones CSS con scroll. [AOS CSS](https://michalsnik.github.io/aos/).

### Cómo contribuir
---
Toda aportación o comentario será recibido de buen gusto, ya que con ellos se podrá ayudar a crecer tanto a la app como a nosotros como desarrolladores.

Cualquier mejora será incluida tras una previa revisión a través de un “pull requests”.

Se requiere un código ordenado y comentado.

Existen muchas líneas de mejora, algunas de ellas son:

· Enlazar con las APIS de Netflix, Amazon video y HBO
· Subida foto de perfil del usuario
· Al subir las imágenes al cloudinary, subirlas en las dimensiones predefinidas.

### Autor/es
---
[Grecia Patricia Busquets](https://www.linkedin.com/in/patriciabusquets/) y [Víctor Manuel Morales](https://www.linkedin.com/in/victormmorales/)