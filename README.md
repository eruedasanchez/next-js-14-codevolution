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
4. [Routing](#routing)
5. [Rutas anidadas](#rutas-anidadas)
6. [Rutas dinámicas](#rutas-dinámicas)
7. [Rutas dinámicas anidadas](#rutas-dinámicas-anidadas)
8. [Capturando todos los segmentos](#capturando-todos-los-segmentos)
9. [Not Found Page](#not-found-page)
10. [Colocación de Archivos](#colocación-de-archivos)
11. [Carpetas Privadas](#carpetas-privadas)
12. [Grupo de Rutas](#grupo-de-rutas)
13. [Layouts](#layouts)
14. [Layouts anidados](#layouts-anidados)
15. [Route Group Layout](#route-group-layout)
16. [Routing Metadata](#routing-metadata)



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

- El archivo `page.tsx` contiene la interfaz del usuario que vemos al ingresar en http://localhost:3000/

### Routing

Para comenzar a explorar el concepto de **Routing**, lo primero que vamos a hacer es eliminar la carpeta `app` de nuestro proyecto. 

Una vez realizado esto, veamos los posibles siguientes escenarios:

1. El primer escenario consiste en renderizar la vista correspondiente a http://localhost:3000/ y que se muestre por pantalla el texto *Home Page*.

Para ello, dentro de la carpeta *src*, creamos la carpeta *app* y dentro de ella, el archivo `page.tsx` (debe tener exactamnete ese nombre) que corresponde al Home Page gracias al sistema de enrutamiento de [Next.js 14](https://github.com/vercel/next.js) y colocamos el contenido propuesto. El resultado obtenido se ve de la siguiente manera:

![Next.js 14](https://i.postimg.cc/fytrrhCW/next-js-14-codev-5.jpg "Routing")

Y si, ingresamos a http://localhost:3000/, podemos observar que se renderiza la vista del archivo `page.tsx`:

![Next.js 14](https://i.postimg.cc/W3fy84Mf/next-js-14-codev-6.jpg "Routing")

Observemos que una vez creado el archivo `page.tsx`, también se crea automaticamente el archivo `layout.tsx`.

2. El segundo escenario consiste en renderizar la vista correspondiente a http://localhost:3000/about mostrando por pantalla *About Page* y http://localhost:3000/profile mostrando por pantalla *Profile Page*.

Para ello, creamos dentro de la carpeta *app*, dos carpetas *about* y *profile*. Dentro de cada una de ellas, creamos el archivo `page.tsx` con el contenido correspondiente.

El esquema de carpetas nos queda de la siguiente manera:

![Next.js 14](https://i.postimg.cc/7PcHY35d/next-js-14-codev-7.jpg "Routing")

Por último renderizamos las vistas de http://localhost:3000/about y http://localhost:3000/profile y obtenemos el resultado esperado. 

![Next.js 14](https://i.postimg.cc/NjrF6NH1/next-js-14-codev-8.jpg "Routing")

![Next.js 14](https://i.postimg.cc/KYSzJnPC/next-js-14-codev-9.jpg "Routing")

### Rutas anidadas

El tercer escenario consiste en renderizar la vista correspondiente a http://localhost:3000/blog mostrando por pantalla *Blog Page*, http://localhost:3000/blog/first mostrando por pantalla *First Blog Page* y http://localhost:3000/blog/second mostrando por pantalla *Second Blog Page*.

Para ello, creamos dentro de la carpeta *app*, una carpeta *blog* y dentro de ella, dos carpetas *first* y *second*. Dentro de cada una de ellas, creamos el archivo `page.tsx` con el contenido correspondiente.

El esquema de carpetas nos queda de la siguiente manera:

![Next.js 14](https://i.postimg.cc/CKVw40hT/next-js-14-codev-10.jpg "Routing")

Por último renderizamos las vistas de http://localhost:3000/blog, http://localhost:3000/blog/first y http://localhost:3000/blog/second obteniendo el resultado esperado. 

![Next.js 14](https://i.postimg.cc/76zH1L7k/next-js-14-codev-11.jpg "Routing")

![Next.js 14](https://i.postimg.cc/HLVsxzkj/next-js-14-codev-12.jpg "Routing")

![Next.js 14](https://i.postimg.cc/N0SGrXKD/next-js-14-codev-13.jpg "Routing")

### Rutas dinámicas

El cuarto escenario consiste en crear la vista para renderizar http://localhost:3000/products que contiene una lista de tres productos. Luego, al clickear cada uno de ellos queremos que se redirija a la página http://localhost:3000/products/id con id el número del producto.  

Para lograr esto, vamos a utilizar las **rutas dinámicas** porque no es conveniente crear una carpeta *products* y dentro de ellas, una para cada producto en el caso que tengamos 1000 productos por ejemplo.

Inicialmente, comenzamos creando la lista de productos en el archivo `page.tsx` dentro de la carpeta *products* de la siguiente manera:

![Next.js 14](https://i.postimg.cc/c4kR6sRm/next-js-14-codev-14.jpg "Rutas dinamicas")

Guardamos los cambios y obtenemos el siguiente resultado:

![Next.js 14](https://i.postimg.cc/nhsvD6Tt/next-js-14-codev-15.jpg "Rutas dinamicas")

Ahora, vamos a crear las rutas dinámicas. Como queremos crear rutas del estilo http://localhost:3000/products/id con id que puede tomar el valor 1, 10 o 10500. Entonces, al parámetro dinámico lo llamamos `productId` y para ello, creamos una carpeta dentro de *products* llamada `[productId]` donde los `[]` le dan un marco dinámico y dentro de ella, el archivo `page.tsx`.

![Next.js 14](https://i.postimg.cc/26zRcpH1/next-js-14-codev-16.jpg "Rutas dinamicas")


Ahora, en el archivo `page.tsx`, tomamos el parámetro `params` de tipo `string` y lo desestructuramos para pasar su valor como `productId`.

![Next.js 14](https://i.postimg.cc/6qZ3r2Yr/next-js-14-codev-17.jpg "Rutas dinamicas")

Finalmente, renderizando y pasando el parámetro 10 se obtiene el resultado esperado.

![Next.js 14](https://i.postimg.cc/k4zGRFFM/next-js-14-codev-18.jpg "Rutas dinamicas")

### Rutas dinámicas anidadas

El quinto escenario consiste en crear la vista para renderizar http://localhost:3000/products/1/reviews/1 que contiene *Review 1 for product 1*. 

Para ello, vamos a utilizar como punto de partida el escenario anterior que habiamos logrado renderizar la vista para http://localhost:3000/products/1/.

Entonces, resta agregar *reviews/1*. Por lo tanto, creamos la carpeta `reviews`, dentro de ella, otra carpeta llamada `[reviewId]` para el parámetro dinámico y por último, el archivo `page.tsx` de la siguiente manera:

![Next.js 14](https://i.postimg.cc/xdZZbt84/next-js-14-codev-19.jpg "Rutas dinamicas anidadas")

Finalmente, si renderizamos http://localhost:3000/products/30/reviews/12 obtenemos el resultado esperado.

![Next.js 14](https://i.postimg.cc/s2x8XtjW/next-js-14-codev-20.jpg "Rutas dinamicas anidadas")

### Capturando todos los segmentos

El sexto escenario consiste en crear vistas para renderizar los siguientes sitios:

![Next.js 14](https://i.postimg.cc/3R2rWy1z/next-js-14-codev-21.jpg "Capturando todos los segmentos")

Para ello, comenzamos creando la carpeta `docs` y dentro de ella la carpeta `[...slug]` que va a contener todos los parámetros dinámicos que sigan a continuación y por último, el archivo `page.tsx` de la siguiente manera:

![Next.js 14](https://i.postimg.cc/mkzNx0Hy/next-js-14-codev-22.jpg "Capturando todos los segmentos")

De esta manera, se renderizan las páginas de acuerdo a cuantos parámetros dinámicos tenga cada dirección.

![Next.js 14](https://i.postimg.cc/6pfMWx89/next-js-14-codev-23.jpg "Capturando todos los segmentos")

![Next.js 14](https://i.postimg.cc/438wcvvq/next-js-14-codev-24.jpg "Capturando todos los segmentos")

Observemos sin embargo, si buscamos http://localhost:3000/docs obtenemos que la página no se encuentra.

![Next.js 14](https://i.postimg.cc/d0CBD7tc/next-js-14-codev-25.jpg "Capturando todos los segmentos")

De hecho, esto es correcto porque creamos la carpeta `docs` pero no el archivo `page.tsx`

Sin embargo, podriamos considerar que no tiene parámetros y tendría que retornar la vista *Docs Home Page*.

Para ello, renombramos la carpeta `[...slug]` como `[[...slug]]` y en el archivo `page.tsx`, colocamos como opcional la propiedad *length*, o sea, `slug?.length` de la siguiente manera: 

![Next.js 14](https://i.postimg.cc/HLQBLJB8/next-js-14-codev-26.jpg "Capturando todos los segmentos")

Finalmente, ejecutamos la dirección y obtenemos el resultado esperado.

![Next.js 14](https://i.postimg.cc/WzJD2ZwQ/next-js-14-codev-27.jpg "Capturando todos los segmentos")

### Not Found Page

Por defecto, sabemos que cuando una ruta no se encuentra definida, se retorna la página predeterminada de Vercel con el error 404. 

Ahora bien, si queremos customizar esta ruta, debemos crear dentro de la carpeta *app*, el archivo necesariamente con el nombre exacto `not-found.tsx`.

![Next.js 14](https://i.postimg.cc/pdZcZhzb/next-js-14-codev-28.jpg "Not Found Page")

Si exploramos la página que no se encuentra definida, obtenemos la página de not-found customizada.

![Next.js 14](https://i.postimg.cc/Kjg5dRkY/next-js-14-codev-29.jpg "Not Found Page")

Ahora, supongamos que queremos retornar una página customizada cuando el número de la review sea mayor a 1000. Para ello, creamos dentro de la carpeta `[reviewId]` el archivo `not-found.tsx` e importamos la función `not-found` de la siguiente manera:

![Next.js 14](https://i.postimg.cc/qRVPjbJt/next-js-14-codev-30.jpg "Not Found Page")

Por lo tanto, si exploramos http://localhost:3000/products/1/reviews/1001 obtenemos el resultado esperado.

![Next.js 14](https://i.postimg.cc/FRWkcBXS/next-js-14-codev-31.jpg "Not Found Page")

### Colocación de Archivos

Ahora, creamos la carpeta `dashboard` y dentro de ella, el archivo `line-chart.tsx`

![Next.js 14](https://i.postimg.cc/SK4BpKqf/next-js-14-codev-32.jpg "Colocación de Archivos")

Si navegamos hacía esa ruta, podemos observar que se arroja la página customizada de errores que habíamos definido anteriormente en el archivo `not-found.tsx`

![Next.js 14](https://i.postimg.cc/FFP9v8PJ/next-js-14-codev-33.jpg "Colocación de Archivos")

Por lo tanto, para solucionar este problema, debemos crear el archivo `page.tsx` dentro de *dashboard* para que se visualice el contenido del dashboard. Adicionalmente, creamos tambien la carpeta `componentes` dentro de `src` para tener mejor estructurado el proyecto.

![Next.js 14](https://i.postimg.cc/xdbZLRcT/next-js-14-codev-34.jpg "Colocación de Archivos")

Si navegamos a http://localhost:3000/dashboard, obtenemos el resultado esperado.

![Next.js 14](https://i.postimg.cc/05MBq0pC/next-js-14-codev-35.jpg "Colocación de Archivos")

### Carpetas Privadas

Para la creación de carpetas privadas que no va a reconocer el sistema de enroutamiento de [Next.js](https://github.com/vercel/next.js), basta con colocar el nombre de la carpeta anteponiendole únicamente el simbolo guion bajo, por ejemplo, `_lib` 

![Next.js 14](https://i.postimg.cc/xTxXJd9f/next-js-14-codev-36.jpg "Colocación de Archivos")

Las ventajas de crear este tipo de carpetas son:

- Separar la lógica UI de la lógica de Routing

- Organizar de una manera consistente los archivos internos del projecto

- Ordenar y agrupar los archivos en editores de código

- Prevenir potenciales conflictos de *naming* con futuras convenciones de archivos de *Next.js*

### Grupo de Rutas

El grupo de rutas permite agrupar rutas y archivos del proyecto sin afectar la estructura de la URL.

Para entender el concepto, vamos a implementar las siguientes rutas de autenticación:

- Registro
- Login
- Olvido de contraseña

Para ello, comenzamos creando tres (3) carpetas dentro de `app` para cada una de las rutas y dentro de ellas, el archivo `page.tsx`

![Next.js 14](https://i.postimg.cc/CK5JmqkR/next-js-14-codev-37.jpg "Grupo de Rutas")

Sin embargo, podemos observar que las rutas de autenticación se encuentran dispersas por todos lados. Para solucionar esto, vamos a crear la carpeta `auth` y dentro de ella, vamos a colocar las tres carpetas de autenticación definidas anteriormente.

![Next.js 14](https://i.postimg.cc/x8LWn4fJ/next-js-14-codev-38.jpg "Grupo de Rutas")

Sin embargo, si navegamos a http://localhost:3000/register, http://localhost:3000/login o http://localhost:3000/forgot-password observamos que se muestra el error customizado de la página `not-found.tsx`

![Next.js 14](https://i.postimg.cc/Nf65zGcY/next-js-14-codev-39.jpg "Grupo de Rutas")

Por lo tanto, podemos solucionarlo navegando a http://localhost:3000/auth/register, http://localhost:3000/auth/login o http://localhost:3000/auth/forgot-password 

Sin embargo, una mejor practica resulta en agruparlos y obviar el parámetro `auth`. Esto lo logramos simplemente renombrando a la carpeta `auth` como `(auth)`.

### Layouts

Comenzamos analizando inicialmente el archivo `layout.tsx` que se encuentra dentro de la carpeta `app`.

Este archivo contiene la interfaz única para todas las páginas. Por lo tanto, si agregamos un **header** y un **footer** como se muestra a continuación, esto indica que tanto el header como se van a visualizar en todas las direcciones que tengamos definidas.

![Next.js 14](https://i.postimg.cc/7ZVcRG9g/next-js-14-codev-40.jpg "Layouts")

Por ejemplo, si exploramos http://localhost:3000/ o http://localhost:3000/forgot-password observamos que solo cambia el contenido del `children` de la página mientras que el header y el footer quedan siempre fijos.  

![Next.js 14](https://i.postimg.cc/1tZv5yv9/next-js-14-codev-41.jpg "Layouts")

![Next.js 14](https://i.postimg.cc/rmCQD7H5/next-js-14-codev-42.jpg "Layouts")

### Layouts anidados

Supongamos que queremos crear un layout particular pero solo para aquellas páginas del tipo http://localhost:3000/products/[productId]. Para ello, vamos a crear un archivo `layout.tsx` dentro de la carpeta `[productId]`.

![Next.js 14](https://i.postimg.cc/3wb8DJyH/next-js-14-codev-43.jpg "Layouts")

Por lo tanto, si navegamos a http://localhost:3000/products/10, obtenemos el resultado esperado.

![Next.js 14](https://i.postimg.cc/W44p3J1n/next-js-14-codev-44.jpg "Layouts")

### Route Group Layout

Para ver este concepto, vamos a comenzar moviendo las carpetas `login` y `register` que se encuentran en `(auth)` a una nueva carpeta que llamamos `(with-auth-layout)`.

Luego, para esta carpeta creamos un archivo `layout.tsx` donde colocamos la interfaz particular que solo va a ser visible para los componentes de *login* y *reguster* y no para *forgot-password*.

![Next.js 14](https://i.postimg.cc/MTkXPmwG/next-js-14-codev-45.jpg "Route Group Layout")

![Next.js 14](https://i.postimg.cc/sgNMSR07/next-js-14-codev-46.jpg "Route Group Layout")

![Next.js 14](https://i.postimg.cc/rpRKNYvb/next-js-14-codev-47.jpg "Route Group Layout")

![Next.js 14](https://i.postimg.cc/JznyGhKR/next-js-14-codev-48.jpg "Route Group Layout")

Una vez comprobado que funciona esto, deshacemos los cambios, eliminamos el archivo `layout.tsx` de la carpeta `(with-auth-layout)` y volvemos a colocar las carpetas `login` y `register` dentro de `(auth)`.

### Routing Metadata

[Next.js](https://github.com/vercel/next.js) introduce el concepto de **Metadata API** que permite definir la metadata para página.

Metadata garantiza que se muestre la información precisa y relevante cuando las páginas se comparten o indexan.

Existen dos métodos para configurar metadatos en un diseño:

- El archivo TSX exporta un objeto de metadata estático

- El archivo TSX exporta una función dinámica de generación de Metadatos.

Antes de continuar, recordemos algunas reglas de la Metadata:

1. Tanto los archivos `layout.tsx` como `page.tsx` pueden exportar Metadata. Si se definen en `layout.tsx`, se aplican a todas las páginas que se encuentra en ese layout mientras que si se definen en `page.tsx`, se aplican unicamente a dicha página.

2. La Metadata es leida en orden desde el nivel principal/root descendiendo hasta el último nivel de página.

3. Cuando hay Metadata en múltiples lugares para la misma ruta, se combinan, pero la Metadata del nivel de página se reemplaza por la Metadata del nivel de layout si tienen las mismas propiedades.

Entonces, comenzamos agregando Metadata de manera estática en el archivo `page.tsx` que se encuentra dentro de la carpeta `about`.

![Next.js 14](https://i.postimg.cc/KzHq36Gs/next-js-14-codev-49.jpg "Routing Metadata")

Si inspeccionamos el navegador, podemos observar que el nombre del titulo es el definido en el archivo pero la descripción sigue siendo la misma que en el Root Layout porque no se agrego en este archivo y por lo tanto, se combinan.

![Next.js 14](https://i.postimg.cc/1XVWGv4R/next-js-14-codev-50.jpg "Routing Metadata")

Ahora, vamos a ver la generación de Metadatos en una ruta dinámica como la de `[productId]`.

Esto lo hacemos en el archivo `page.tsx` de la carpeta `[productId]` de la siguiente manera:

![Next.js 14](https://i.postimg.cc/dV7sxxVR/next-js-14-codev-51.jpg "Routing Metadata")

Una vez realizado esto, si inspeccionamos la  dirección http://localhost:3000/products/1 observamos que el titulo es dinámico de acuerdo al *productId* que se pasa por parámetro.

![Next.js 14](https://i.postimg.cc/m2pZVsB2/next-js-14-codev-52.jpg "Routing Metadata")

































