#IV Devs Website
## Descripción
El proyecto basado en [jekyll](https://jekyllrb.com/), por lo que usa ruby el manejo de templates.
Esta configurado para utilizar sass como preprocesador de CSS pero es totalmete opcional, el resto es HTML5 y JS.

##Requesitos
-[ruby-lang](https://www.ruby-lang.org/es/)

##Instalación
- `fork and clone`
- `gem install jekyll bundler`
- `bundle exec jekyll serve`
- Abrir [http://localhost:4000](http://localhost:4000)

##Como subir un post al blog
Para agregar un nuevo post, solo debes crear un archivo en la carpeta `_posts` con la siguiente convención de nombre `YYYY-MM-DD-name-of-post.md` y comienza a redactar tu post.
Jekyll utiliza markdown para manejar los post. si no te manejas con markdown te recomiendo utilizar este [editor online](https://stackedit.io/editor)


## Opción Docker
Se ha incluído en el repositorio un Dockerfile.
Para usar la imagen para desarrollo deben hacer dos cosas fundamentales:
1. **Buildear la imagen**, para ello ingresar (en el mismo directorio del proyecto): `docker build -t ivdevs/web .`
2. **Crear un container para trabajar**: Permaneciendo en el mismo directorio donde se encuentra el proyecto, ingresar `docker run -it --name ivdevsweb -v $(pwd):/home/ivdevs/web --net host ivdevs/web`
3. Cuando ya hayas creado este container deberás ingresar: `docker start -ia ivdevsweb` cada vez que quieras trabajar con el.