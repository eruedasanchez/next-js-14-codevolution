<div align="center">
  
  ![GitHub repo size](https://img.shields.io/github/repo-size/eruedasanchez/nextJS-14)
  ![GitHub stars](https://img.shields.io/github/stars/eruedasanchez/nextJS-14?style=social)
  ![GitHub forks](https://img.shields.io/github/forks/eruedasanchez/nextJS-14?style=social)
  [![Twitter Follow](https://img.shields.io/twitter/follow/RSanchez_Eze?style=social)](https://twitter.com/intent/follow?screen_name=RSanchez_Eze)
  <br/>
  <br/>

  <h1 align="center">Next.js 14</h1>

  Tutorial de [Next.js 14](https://github.com/vercel/next.js) 
</div>
<br/>

# Índice

1. [Inicialización del proyecto](#inicialización-del-proyecto)
2. [Ejecución del proyecto](#ejecución-del-proyecto)
3. [Estructura del proyecto](#estructura-del-proyecto)

### Inicialización del proyecto

Para inicializar un proyecto en [Next.js 14](https://github.com/vercel/next.js), comenzamos ejecutando el siguiente comando:

```bash
$ npx create-next-app@latest
```

Colocamos `@latest` para asegurarnos que estamos utilizamos la última versión y no una versión antigua.

Luego de ejecutar este comando, se nos consulta por el nombre que le queremos colocar al proyecto. En este caso, lo nombramos como *hello-world*. Y finalizamos la configuración del proyecto como se muestra a continuación: 

![Next.js 14](https://i.postimg.cc/tgnNmvCX/next-js-14-codev-1.jpg "Inicialización de un proyecto")

### Ejecución del proyecto

Una vez inicializado el proyecto, procedemos a ejecutar los siguientes comandos para visualizar el proyecto:

```bash
$ cd hello-world
$ npm run dev
```

De este modo, vemos que nuestra aplicación se encuentra corriendo en http://localhost:3000 de la siguiente manera:

![Next.js 14](https://i.postimg.cc/L4Vz9Cv8/next-js-14-codev-2.jpg "Ejecución del proyecto")

Por lo tanto, si ingresamos desde nuestro navegador en http://localhost:3000, obtenemos el siguiente resultado: 

![Next.js 14](https://i.postimg.cc/HkchJcSn/next-js-14-codev-3.jpg "Ejecución del proyecto")

El archivo que contiene a esta página es `page.tsx` que se encuentra en la carpeta *app* dentro de la carpeta *src*. 

### Estructura del proyecto

Inicialmente, tenemos la siguiente estructura del proyecto:

![Next.js 14](https://i.postimg.cc/dQSpWzVZ/next-js-14-codev-4.jpg "Estructura del proyecto")

- El archivo `package.json` contiene todas las dependencias y scripts del proyecto.

- El archivo `next.config.mjs` es un archivo de configuración de [Next.js](https://github.com/vercel/next.js).

- El archivo `tailwind.config.ts` es un archivo de configuración de Tailwind CSS.

- El archivo `postcss.config.js` es un archivo de configuración del documento final generado y publicado en CSS.

- El archivo `.gitignore` que indica cuáles son los archivos que no van a ser subidos al repositorio.

- La carpeta `.next` se genera cuando se ejecutan los scripts de desarrollo o compilación.

- La carpeta `node_modules` es donde se instalan todas las dependencias de nuestro proyecto.

- La carpeta `public` contiene todos los archivos estáticos como imagenes y archivos *svg*. 

- Por último, la carpeta `src` es la más importante del proyecto. Dentro de ella, se encuentra la carpeta `app`, que contiene todo el contenido de nuestra aplicación. Dentro de ella, se encuentran los siguientes archivos:

- El archivo `favicon.ico` contiene el logo que muestra en la pestaña del navegador.

- El archivo `globals.css` contiene todos los estilos globales de la aplicación.

- El archivo `layout.tsx` contiene la interfaz del usuario que se puede compartir en diferentes páginas de la aplicación. 

- El archivo `page.tsx` contiene la interfaz del usuario que vemos al ingresar en http://localhost:3000/. 







