![logo_ironhack_blue 7](https://res.cloudinary.com/dul90jusb/image/upload/v1583152727/Greevic/logo-grevic-pantone_jnzy0x.png)
# GREEVIC APP
https://github.com/GreVic/app
## Greevic, languages for everyone
### ¿Qué es Greevic y cuál es su objetivo?
---
Greevic es una applicación que nace con el objetivo de facilitarle a las personas el aprendizaje de nuevos idiomas de una forma interactiva. Gracias a las diferentes plataformas de streaming que existen hoy en día, podemos acceder a todo tipo de contenido. Nosotros, en esta aplicación, nos hemos centrado en las películas. 
Con Greevic puedes aprender nuevos idiomas viendo películas en su idioma original utilizando los filtros de idioma y género para elegir la película con la que quieres aprender. Una vez eliges la película, podrás comentar lo que te ha parecido la película en sí para el aprendizaje del idioma elegido.
### ¿Cómo utilizar Greevic?
---
Como hemos comentado antes, Greevic es una nueva forma de aprender idiomas y funciona así:
i. Accedemos en https://greevic-app.herokuapp.com/, donde se muestra una pantalla de presentación. Hacemos click en "ENTER"
ii. Una vez dentro, hemos llegado a la home. Aquí tenemos 2 opciones: registarnos o iniciar sesión, acciones que podemos hacer tanto en el menú como en el último módulo que se muestra en la home. Para registrarnos debemos introducir un nombe de usuario, email y contraseña. Para poder iniciar sesión debemos utilizar nuestro nombre de usuario y contraseña.
iii. Tras haber iniciado sesión, podemos pasar a encontrar nuestra película en "Find your movie". En esta página se muestra una lista de películas que nos muestra el título, sinopsis, el idioma original de la película y la media de votos.
iv. Ahora vamos a lo que nos interesa. Elegimos el idioma que queremos aprender de la lista, elegimos el género de la película y, si queremos, podemos ordenar los resultados por popularidad, fecha de estreno o título original de forma ascedente y descendente respectivamente.
v. Tras aplicar los filtros, elegimos la película con la queremos aprender. Al hacer click en ella, la información que se muestra es el poster de la película, título, slogan, media de los votos, sinopsis, fecha de esteno, duración de la película, idiomas hablados en la película y las plataformas en las que se puede ver la película.
vi. Elige tu plataforma y ¡aprende con la película elegida en su idioma original!
vii. ¿Quieres compartir algo que te ha ayudad mucho en la película o dudas sobre alguna frase en particular? Coméntalo en el foro de la película. Una vez registrado, podrás comentar lo que quieras sobre las películas que hayas visto.
viii. Además, una vez hayas iniciado sesión, podrás editar los datos de tu cuenta en "My Account", así como eliminar tu cuenta.
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
Descripción de los recursos externos que generan una dependencia para la reutilización de la herramienta digital (librerías, frameworks, acceso a bases de datos y licencias de cada recurso). Es una buena práctica describir las últimas versiones en las que ha sido probada la herramienta digital. 
    Puedes usar este estilo de letra diferenciar los comandos de instalación.
### Cómo contribuir
---
Esta sección explica a desarrolladores cuáles son las maneras habituales de enviar una solicitud de adhesión de nuevo código ("pull requests"), cómo declarar fallos en la herramienta y qué guías de estilo se deben usar al escribir más líneas de código. También puedes hacer un listado de puntos que se pueden mejorar de tu código para crear ideas de mejora.
### Código de conducta 
---
El código de conducta establece las normas sociales, reglas y responsabilidades que los individuos y organizaciones deben seguir al interactuar de alguna manera con la herramienta digital o su comunidad. Es una buena práctica para crear un ambiente de respeto e inclusión en las contribuciones al proyecto. 
La plataforma Github premia y ayuda a los repositorios dispongan de este archivo. Al crear CODE_OF_CONDUCT.md puedes empezar desde una plantilla sugerida por ellos. Puedes leer más sobre cómo crear un archivo de Código de Conducta (aquí)[https://help.github.com/articles/adding-a-code-of-conduct-to-your-project/]
### Autor/es
---
Nombra a el/los autor/es original/es. Consulta con ellos antes de publicar un email o un nombre personal. Una manera muy común es dirigirlos a sus cuentas de redes sociales.
### Información adicional
---
Esta es la sección que permite agregar más información de contexto al proyecto como alguna web de relevancia, proyectos similares o que hayan usado la misma tecnología.
### Licencia 
---
[LICENCIA](https://github.com/EL-BID/Plantilla-de-repositorio/blob/master/LICENSE.md)
La licencia especifica los permisos y las condiciones de uso que el desarrollador otorga a otros desarrolladores que usen y/o modifiquen la herramienta digital.
Incluye en esta sección una note con el tipo de licencia otorgado a esta herramienta digital. El texto de la licencia debe estar incluído en un archivo *LICENSE.md* o *LICENSE.txt* en la carpeta raíz.
Si desconoces qué tipos de licencias existen y cuál es la mejor para cada caso, te recomendamos visitar la página https://choosealicense.com/.
## Limitación de responsabilidades
El BID no será responsable, bajo circunstancia alguna, de daño ni indemnización, moral o patrimonial; directo o indirecto; accesorio o especial; o por vía de consecuencia, previsto o imprevisto, que pudiese surgir:
i. Bajo cualquier teoría de responsabilidad, ya sea por contrato, infracción de derechos de propiedad intelectual, negligencia o bajo cualquier otra teoría; y/o
ii. A raíz del uso de la Herramienta Digital, incluyendo, pero sin limitación de potenciales defectos en la Herramienta Digital, o la pérdida o inexactitud de los datos de cualquier tipo. Lo anterior incluye los gastos o daños asociados a fallas de comunicación y/o fallas de funcionamiento de computadoras, vinculados con la utilización de la Herramienta Digital.