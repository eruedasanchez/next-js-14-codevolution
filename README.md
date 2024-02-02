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
17. [Title Metadata](#title-metadata)
18. [Link Component Navigation](#link-component-navigation)
19. [Active Links](#active-links)
20. [Navigating Programmatically](#navigating-programmatically)
21. [Templates](#templates)
22. [Loading UI](#loading-ui)
23. [Error Handling](#error-handling)
24. [Recovering from Errors](#recovering-from-wrrors)
25. [Handling Errors en Rutas Anidadas](#handling-errors-en-rutas-anidadas)
26. [Handling Errors in Layouts](#handling-errors-in-layouts)
27. [Parallel Routes](#parallel-routes)
28. [Unmatched Routes](#unmatched-routes)
29. [Conditional Routes](#conditional-routes)
30. [Intercepting Routes](#intercepting-routes)
31. [Parallel Intercepting Routes](#parallel-intercepting-routes)
32. [Route Handlers](#route-handlers)
33. [Handling GET Request](#handling-get-request)
34. [Handling POST Request](#handling-post-request)
35. [Handling POST Request](#handling-post-request)
36. [Dynamic Route Handlers](#dynamic-route-handlers)
37. [Handling PATCH Request](#handling-patch-request)
38. [Handling DELETE Request](#handling-delete-request)

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

### Title Metadata

El propósito fundamental del campo **titulo** o **title** es definir el titulo del documento. Este puede ser una cadena o un objeto.

Veamos un ejemplo de objeto. Para ello, nos dirigimos al archivo `layout.tsx` principal dentro de la carpeta `app` y realizamos los siguientes cambios:

Ahora, nos centramos en la función de Metadata y vemos que el campo `title` puede tener tiene tres propiedades:

1. La propiedad `default` indica que toda página que no tenga definida una función generadora de Metadata, va a adoptar el titulo definido en el campo *default*. En este caso, *Next.js Tutorial - HelloWorld*. 

![Next.js 14](https://i.postimg.cc/k5w0KDDg/next-js-14-codev-53.jpg "Routing Metadata")

2. La propiedad `template` indica que toda página que tenga que tenga definida una función generadora de Metadata, va a colocar el nombre que tenga definido en el campo `title` en lugar de `%s`.

![Next.js 14](https://i.postimg.cc/5yQTh3gX/next-js-14-codev-54.jpg "Routing Metadata")

3. La propiedad `absolute` indica que dicha página va a llevar ese nombre y no va a poder ser sobreescrito.

![Next.js 14](https://i.postimg.cc/sXNbH8YF/next-js-14-codev-55.jpg "Routing Metadata")

### Link Component Navigation

Comencemos viendo el primer ejemplo donde vamos a realizar la navegación desde http://localhost:3000/ a http://localhost:3000/blog haciendo click en un elemento de UI (boton por ejemplo).

Para ello, [Next.js](https://github.com/vercel/next.js) nos provee del componente `Link`.

Entonces, como queremos ir desde http://localhost:3000/ a http://localhost:3000/blog, vamos a trabajar en el archivo `page.tsx` que se encuentra en la carpeta `app` y tambien creamos un enlace que nos regrese al Home Page desde about.

![Next.js 14](https://i.postimg.cc/rw0n8kdz/next-js-14-codev-56.jpg "Link Component Navigation")

Ahora, pasamos a un ejemplo de navegación sobre Rutas Dinámicas.

En la página de productos, tenemos una lista de 3 productos y queremos que al clickear cada uno de ellos, se abra el detalle del producto correspondiente. Para ello, realizamos los siguientes cambios en el archivo `page.tsx` de la carpeta `products`.

![Next.js 14](https://i.postimg.cc/xTFpDC1W/next-js-14-codev-57.jpg "Link Component Navigation")

Una vez realizado estos cambios, agregamos la propiedad `replace` al componente Link correspondiente al producto tres. Esto indica que al presionar el boton de regresar atras del navegador, no va a regresar atras sino que va a situarse en la página anterior que se esté definida a la última del historial.

Por ejemplo, si estabamos en http://localhost:3000/dashboard, pasamos a http://localhost:3000/products, clickeamos en el producto 3, nos situamos en http://localhost:3000/products/3 y presionamos el boton de atras, regrresamos a http://localhost:3000/dashboard.

![Next.js 14](https://i.postimg.cc/xdL6z332/next-js-14-codev-58.jpg "Link Component Navigation")

### Active Links

Ahora, vamos a introducir el concepto de **Active Links**. Para ello, creamos el archivo `layout.tsx` con el siguiente contenido: 

![Next.js 14](https://i.postimg.cc/sgY9pLv3/next-js-14-codev-59.jpg "Active Links")

Luego, si navegamos a http://localhost:3000/login, http://localhost:3000/register o a http://localhost:3000/forgot-password, observamos que siempre se encuentra la especie de menú para acceder a los 3 links.

![Next.js 14](https://i.postimg.cc/BZzgsDrf/next-js-14-codev-60.jpg "Active Links")

Ahora, vamos a importar el hook `usePathname` que nos devuelve un string con la dirección actual en la que estamos navegando y definimos la constante `isActive` para declarar cuál es la URL en la que estamos navegando y de acuerdo a ello, aplicar los estilos necesarios.

Es muy importante no olvidar de crear el archivo `styles.css` para importar los estilos de TailwindCSS.

![Next.js 14](https://i.postimg.cc/2S371NtJ/next-js-14-codev-61.jpg "Active Links")

Finalmente, recargamos la página y obtenemos el resultado esperado.

![Next.js 14](https://i.postimg.cc/yYLT68Lc/next-js-14-codev-62.jpg "Active Links")

### Navigating Programmatically

Ahora, supongamos que estamos navegando en www.amazon.com/order, completamos el formulario y somos redirigidos a la página de confirmación del pedido www.amazon.com/confirm. Para ello, vamos a utilizar el concepto de la Navegación mediante programación o **Navigating Programmatically**. 

Para ello, no vamos a crear un formulario pero vamos a mostrar el concepto navegando desde http://localhost:3000/order-product a http://localhost:3000/

Por lo tanto, comenzamos creando la carpeta `order-product` dentro de la carpeta `app` y el archivo `page.tsx` con el siguiente contenido:

![Next.js 14](https://i.postimg.cc/g21zrKZv/next-js-14-codev-63.jpg "Navigating Programmatically")

En este archivo, creamos la función `handleClick` para el boton Place Order para que cuando hacemos click en él, nos rediriga a http://localhost:3000/. Para esto, podemos aplicar `router.push('/')` o `router.back()` 

### Templates

Para comenzar a desarrollar, el concepto de **templates**, comenzando modificando el archivo `layout.tsx` que se encuentra en la carpeta `(auth)`.

Una vez agregado el input, podemos observar que si navegamos de http://localhost:3000/login completando el input a http://localhost:3000/register, el valor colocado en el input tambien se conserva en http://localhost:3000/register. Sin embargo, al usar templates, una nueva instancia del componente es montada, los elementos del DOM son recreados, los estados no se preservan y los efectos son resincronizados.

Para crear un template, basta con solo renombrra el archivo `layout.tsx` por `template.tsx`

![Next.js 14](https://i.postimg.cc/4xL1M7Rm/next-js-14-codev-64.jpg "Templates")

### Loading UI

Hasta el momento, nos hemos enfocado en cuatro tipos de archivos:

- `page.tsx` 
- `layout.tsx`
- `template.tsx`
- `not-found.tsx`

Ahora, nos enfocaremos en otro archivo especial llamado `loading.tsx`. Este archivo permite crear estados de carga que se muestran a los usuarios mientras se carga el contenido de un segmento de ruta especifico. El estado de carga aparece inmediatamente despues de la navegación, lo que brinda a los usuarios la seguridad de que la aplicación responde y carga contenido de forma activa.

Para ver esto, vamos a crear el archivo `loading.tsx` en la carpeta `blog` con el siguiente contenido:

![Next.js 14](https://i.postimg.cc/7h9SJV0P/next-js-14-codev-65.jpg "Loading UI")

Ahora, una vez que naveguemos hacia http://localhost:3000/blog, vamos a ver que previamente se carga el contenido de "Loading blog" y luego el contenido de `page.tsx`.

### Error Handling

Ahora, nos centraremos en el manejo de errores a través de un archivo especial llamado `error.tsx`.

Comenzamos viendo que si navegamos a obtenemos el resultado que definimos previamente.

![Next.js 14](https://i.postimg.cc/FK0RZZCm/next-js-14-codev-66.jpg "Error Handling")

Ahora, modificamos el archivo `page.tsx` de la carpeta `[reviewId]` creando una función que genere un numero entero random y en caso de que sea el 1, arrojar un error.

![Next.js 14](https://i.postimg.cc/QN1299zL/next-js-14-codev-67.jpg "Error Handling")

Sin embargo, si recargamos la página podemos observar que [Next.js](https://github.com/vercel/next.js) nos arroja el siguiente error:

![Next.js 14](https://i.postimg.cc/6qrgDgZ6/next-js-14-codev-68.jpg "Error Handling")

Ahora, para poder solucionar este problema, vamos a contruir el proyecto y luego lo vamos a correr ejecutando los siguientes comandos:

```bash
$ npm run build
$ npm run start
```

Obtenemos el siguiente resultado:

![Next.js 14](https://i.postimg.cc/HxBLhRBQ/next-js-14-codev-69.jpg "Error Handling")

Pero cuando intentamos navegar nuevamente, obtenemos nuevamente un error.

![Next.js 14](https://i.postimg.cc/LXHXv2B9/next-js-14-codev-70.jpg "Error Handling")

Ahora, para solucionar este problema, creamos el archivo `error.tsx` dentro de la carpeta `[reviewId]` para que se muestre el mensaje de error en el que caso de que se produzca uno.

![Next.js 14](https://i.postimg.cc/7PJTYLCT/next-js-14-codev-71.jpg "Error Handling")

Por lo tanto, si reiniciamos el servidor (`crtl + c` y el comando `npm run dev`) y navegamos a http://localhost:3000/products/2/reviews/1 vemos que ahora si se muestra el error con su mensaje.

![Next.js 14](https://i.postimg.cc/PJDL66GM/next-js-14-codev-72.jpg "Error Handling")

### Recovering from Errors

Ahora, vamos a tratar de cuando se produce un error que no podría ser grave, intentar recuperarnos con un boton de *Try Again*. Para ello, activamos la función de reinicio que pasamos por parámetro al componente `ErrorBoundary` y que se va a ejecutar cuando se clickee en el boton de *Try Again*.

Para asegurarnos que la recuperación se produzca del lado del cliente, debemos agregar `'use client'` al inicio de archivo `page.tsx`.

![Next.js 14](https://i.postimg.cc/zvkNL1m6/next-js-14-codev-73.jpg "Recovering from Errors")

Por lo tanto, hasta que el número random generado no sea igual a 1, no vamos a poder utilizar el boton pero cuando sea 1, con presionar el boton se va a solucionar el error.

### Handling Errors en Rutas Anidadas

Para comenzar a ver este concepto, movemos al archivo `error.tsx` que se encuentra en la carpeta `[reviewId]` a la carpeta `products`.

![Next.js 14](https://i.postimg.cc/RFhhGc20/next-js-14-codev-74.jpg "Handling Errors en Rutas Anidadas")

De esta manera, podemos observar que cuando el número random generado es 1, se muestra el error por la página pero no el componente correspondiente a `[reviewId]`.

![Next.js 14](https://i.postimg.cc/LXWXWJM3/next-js-14-codev-75.jpg "Handling Errors en Rutas Anidadas")

Ahora, si volvemos a colocar al archivo `error.tsx` dentro de la carpeta `[reviewId]`, observamos que si se renderiza el componente correspondiente a `[reviewId]`. 

![Next.js 14](https://i.postimg.cc/Gts2nbLw/next-js-14-codev-76.jpg "Handling Errors en Rutas Anidadas")

### Handling Errors in Layouts

Ahora, cambiaremos el enfoque al manejo de errores dentro de los layouts.

El límite de error no detecta los errores arrojados aquí porque están anidado dentro de los componentes de layout.

Veamos esto con un ejercicio práctico. Para ello, comenzamos copiando el archivo `error` que se encuentra dentro de la carpeta `[reviewId]` y lo pegamos en la carpeta `[productId]` y modificamos el archivo `layout.tsx` de la siguiente manera y en  el archivo `page.tsx` comentamos la linea de arrojar error para no provocar confusiones.

![Next.js 14](https://i.postimg.cc/x1QDyMZV/next-js-14-codev-77.jpg "Handling Errors in Layouts")

Ahora, vemos que si recargamos nuevamente la página, obtenemos el siguiente error:

![Next.js 14](https://i.postimg.cc/Qx1ZT00q/next-js-14-codev-78.jpg "Handling Errors in Layouts")

El error se produce en que no se puede cargar el error `Error Loading Products`. Para solucionar esto, basta simplemente con trasladar el archivo `error.tsx` dentro de la carpeta `products`.

Por lo tanto, luego de recargar la página varias veces hasta que el numero random generado sea igual, se va a mostrar el error generado como queriamos probar.

![Next.js 14](https://i.postimg.cc/qMsn5H16/next-js-14-codev-79.jpg "Handling Errors in Layouts")

### Parallel Routes

En esta sección nos vamos a enfocar en las **rutas paralelas**. Cómo definirlass y los beneficios que ofrecen al crear interfaces de usuarios dinámicas y complejas.

Las rutas paralelas son un mecanismo avanzado de ruteo que permite el renderizado simultaneo de multiples páginas dentro del mismo layout.

Vamos a plantear el siguiente escenario. Supongamos que queremos crear un **dashboard** complejo. Dicho panel requiere mostrar las vistas de **User analytics**, **Revenue Metrics** y **Notifications**.

Para ello, podriamos crear componentes para cada sección y los organizariamos en archivos `layout.tsx` dentro de la carpeta `dashboard`. 

Dado que ya tenemos una carpeta `dashboard`, creamos otra llamada `complex-dashboard` y dentro de ella, vamos a crear las carpetas `@notifications`, `@revenue` y `@users` que van a contienen el contenido de cada sección y llevan adelante el simbolo `@` que indica que funcionan como rutas paralelas. Además, podemos notar que al crearlas con el simbolo `@` no afectan a la creación de nuevas rutas, es decir, si por ejemplo navego a http://localhost:3000/users observamos que la ruta no existe.  

Además, creamos un componente `Card` dentro de la carpeta `components` para envolver el contenido de cada una de las secciones.

![Next.js 14](https://i.postimg.cc/8PLnCkSz/next-js-14-codev-80.jpg "Parallel Routes")

Finalmente, recargamos la página y obtenemos el resultado esperado.

![Next.js 14](https://i.postimg.cc/7PFWDGjR/next-js-14-codev-81.jpg "Parallel Routes")

Por último, veamos algunos beneficios de las rutas en paralelo:

- Un claro beneficio de las rutas paralelas es la habilidad de dividir un único *layout* en varias ranuras, haciendo que el código sea más facil de manejar. Esto es particularmente beneficioso cuando diferentes equipos trabajan en varias secciones de la página.

- Aunque el verdadero beneficio de las rutas paralelas radica en la capacidad para el manejo independiente de rutas y subnavegación. Esto significa que cada sección puede tener sus propios estados de control y errores. Esto es beneficioso porque, por ejemplo, si la sección de *User Analitycs* se encuentra cargando podemos colocar un *loading* mientras que si la sección de *Revenue metrics* arroja un error lo podemos mostrar y si la sección de *notifications* carga correctamente, podemos mostrar su contenido sin problemas.

### Unmatched Routes

En esta sección, profundizaremos en un aspecto crucial del enrutamiento en [Next.js](https://github.com/vercel/next.js), que es el manejo de **rutas incomparables**.

En el caso de nuestro dashboard, estamos navegando entre una lista predeterminada de notificaciones y una lista de archivos de notificaciones como se muestra a continuación.

![Next.js 14](https://i.postimg.cc/TPQwm5z2/next-js-14-codev-82.jpg "Unmatched Routes")

Entonces, vamos a implementar este escenario. Para ello, vamos a realizar las siguientes modificaciones en los archivos `page.tsx` de la carpeta `@notifications` y creamos la carpeta `archived` con el archivo `page.tsx`.

![Next.js 14](https://i.postimg.cc/C11K4L0G/next-js-14-codev-83.jpg "Unmatched Routes")

Por lo tanto, recargamos la página y obtenemos el resultado esperado cuando navegamos por la sección de notificaciones.

![Next.js 14](https://i.postimg.cc/QxtdGMKv/next-js-14-codev-84.jpg "Unmatched Routes")

![Next.js 14](https://i.postimg.cc/tRD4M6Jh/next-js-14-codev-85.jpg "Unmatched Routes")

Ahora, estando en http://localhost:3000/complex-dashboard/archived y si recargamos la página, observamos que la página arroja un erro aunque se encuentra definida la ruta indicada.

![Next.js 14](https://i.postimg.cc/xd1T3Ty0/next-js-14-codev-86.jpg "Unmatched Routes")

En nuestro escenario, para evitar la presencia de errores 404 al recargar la página. En nuestro dashboard, solo el componente `@notifications` contiene el archivo que produc error de tipo 404. Para ello, comenzamos definiendo un archivo llamado `default.tsx` dentro de la carpeta `complex-dashboard`. Luego, hacemos lo mismo para las carpetas `@revenue` y `@users` como se muestra a continuación.

![Next.js 14](https://i.postimg.cc/Y94rTnsZ/next-js-14-codev-87.jpg "Unmatched Routes")

Una vez realizado esto, vemos como se soluciona el error 404 y se vuelve a mostrar el dashboard sin problemas.

![Next.js 14](https://i.postimg.cc/d0NQHP4G/next-js-14-codev-88.jpg "Unmatched Routes")

### Conditional Routes

Las rutas paralelas ofrecen una forma de implementar las **rutas condicionales**. Por ejemplo, según el estado de autenticación del usuario, puede optar por representar el *dashboard* para usuarios autenticados o una página de inicio de sesión para aquellos que no lo están. Esto es realmente poderoso porque permite un código completamente separado en la misma URL.

Veamos esto con el siguiente ejemplo. Para ello, comenzamos creando en la carpeta `complex-dashboard` la carpeta `@login` y el archivo `page.tsx`. 

Una vez creado dicho archivo, definimos la variable `isLoggedIn` para que renderice una vista de login de un usuario predeterminado o sino la vista correspondiente al archivo `page.tsx` de la carpeta `@login`.

![Next.js 14](https://i.postimg.cc/Z5DYHR3P/next-js-14-codev-89.jpg "Conditional Routes")

Si seteamos la variable en true, obtenemos el siguiente resultado:

![Next.js 14](https://i.postimg.cc/X7LYZxYz/next-js-14-codev-90.jpg "Conditional Routes")

Mientras que si seteamos la variable en `false`, obtenemos el siguiente resultado:

![Next.js 14](https://i.postimg.cc/rwpF5WdF/next-js-14-codev-91.jpg "Conditional Routes")

### Intercepting Routes

[Next.js](https://github.com/vercel/next.js) introdujo dos patrones de ruteo avanzado. Por un lado, las **rutas paralelas** que ya las vimos anteriormente y las **rutas de intercepción** o **Intercepting Routes** que las vamos a ver ahora. 

La intercepción de rutas permite interceptar o detener el comportamiento de enrutamiento predeterminado para presentar una vista o componente alternativo al navegar a través de UI. Al mismo tiempo que conserva la ruta prevista para escenarios como recargas de páginas. Esto puede ser útil si desea mostrar una ruta mientras mantiene el contexto de la página actual.

Veamos el siguiente ejemplo. Supongamos que estamos frente a un escenario donde nos encontramos navegando en http://localhost:3000/ y presionamos el boton de **Login** que nos redirige a http://localhost:3000/login. Sin embargo, con las rutas de intercepción podemos configurar la aplicación para que muestre un modelo de *login* mientras la URL se actualiza para reflejar la ruta http://localhost:3000/login. 

Veamos un ejemplo de esto en código. Dentro de la carpeta `app`, voy a crear una carpeta `f1` y dentro de ella, el archivo `page.tsx`. Luego, creamos dentro de `f1`, la carpeta `f2` con el archivo `page.tsx` con el siguiente contenido:

![Next.js 14](https://i.postimg.cc/7PVcZnGh/next-js-14-codev-92.jpg "Intercepting Routes")

Ahora, podemos navegar sin problemas desde http://localhost:3000/f1 a http://localhost:3000/f1/f2 simplemente presionando el link que nos redirige a `f2`.

Sin embargo, ahora vamos a definir una ruta de intercepción para cambiar este comportamiento en el mismo nivel.

Para ello, definimos una ruta de intercepción con la notación `(.)f2`. En este caso, la definimos en el mismo nivel que `f2` creando la carpeta `(.)f2` y dentro de ella, el archivo `page.tsx`.

![Next.js 14](https://i.postimg.cc/9FsCdwZG/next-js-14-codev-93.jpg "Intercepting Routes")

Luego, si recargamos la página observamos que cuando clickeamos en el enlace que nos lleva de http://localhost:3000/f1 a http://localhost:3000/f1/f2, ahora se muestra el contenido de la página de intercepción.

![Next.js 14](https://i.postimg.cc/v8qQmNm2/next-js-14-codev-94.jpg "Intercepting Routes")

Pero si recargamos nuevamente la página, observamos que nuevamente se vuelve a mostrar el contenido de la página que se encuentra en la carpeta `f2`.

Hasta ahora, vimos que con la notación `(.)` podemos crear rutas de intercepción al mismo nivel. Veamos que también se pueden crear rutas de intercepción a diferentes niveles. Para ello, creamos dentro de la carpeta `f1`, las carpetas `f2`,`f3` y `f4` con sus respectivos archivos `page.tsx` donde `f4` va a contener un link para navegar a `f3`.

![Next.js 14](https://i.postimg.cc/v8qQmNm2/next-js-14-codev-95.jpg "Intercepting Routes")


Por lo tanto, para crear una ruta de intercepción en `f3`, vamos a crear una carpeta dentro de `f4` llamada `(..)f3` y dentro de ella el archivo `page.tsx`. Entonces, cuando naveguemos de http://localhost:3000/f1/f4 a http://localhost:3000/f1/f3, vamos a notar que se va a mostrar el contenido de la ruta interceptada.

![Next.js 14](https://i.postimg.cc/VL6Bk1Mr/next-js-14-codev-95.jpg "Intercepting Routes")

Como en el caso anterior, al recargar la página http://localhost:3000/f1/f3, vamos a ver el contenido del archivo `page.tsx` que se encuentra en la carpeta `f3`.

![Next.js 14](https://i.postimg.cc/jqv4TCWY/next-js-14-codev-96.jpg "Intercepting Routes")

También, podemos utilizar la convención de `(..)(..)` para crear rutas de intercepción dos niveles hacía arriba.

Por último, vamos a utilizar la convención `(...)` para crear rutas de interepción desde el nivel del directorio `app`. Veamos este caso con un ejemplo. 

Supongamos que queremos interceptar la ruta de la página `about` que se encuentra en `about` dentro de la carpeta `app` mientras navegamos desde `f4`.

Para ello, creamos la carpeta `(...)about` y el archivo `page.tsx` que contiene la vista de la ruta interceptada y en el archivo `page.tsx` de la carpeta `f4` creamos el link para navegar hacía la carpeta `about`.


![Next.js 14](https://i.postimg.cc/7Zz7QnjX/next-js-14-codev-97.jpg "Intercepting Routes")

Finalmente, vemos que cuando navegamos hacia http://localhost:3000/about la ruta es interceptada pero cuando recargamos la página se muestra la vista de about sin problemas.

![Next.js 14](https://i.postimg.cc/MKNVDF3v/next-js-14-codev-98.jpg "Intercepting Routes")

### Parallel Intercepting Routes

En esta sección, vamos a ver un ejemplo donde se combinan las **rutas paralelas** y la **intercepción de rutas**.

Comenzamos creando la carpeta `photo-feed` dentro de la carpeta `app`. Luego, creamos adentro de `photo-feed`, creamos la carpeta `photos` y colocamos las imagenes de las 7 maravillas del mundo. Una vez hecho, creamos el archivo `wonders.ts` donde vamos a importar cada una de las imagenes y colocar *metadata*.

Una vez hecho, creamos el archivo `page.tsx` que va a renderizar el contenido de la página correspondiente a http://localhost:3000/photo-feed.

Luego, creamos la carpeta `[id]` con el archivo `page.tsx` para que funcione como una ruta dinámica que atrapa todos los números de las maravillas.

Ahora, que ya tenemos creado la página dimnámica para cada maravilla, vamos a interceptar la navegación desde el feed a la página de detalles. Como queremos un modelo que represente la imagen por encima del feed actual, vamos a crear una ruta paralela. Para ello, dentro de la carpeta `photo-feed` vamos a crear una carpeta `@model` que funciona como ruta paralela.

Luego, en el archivo `layout.tsx` de la carpeta `photo-feed`, pasamos el modal y el children para que se rendericen.

### Route Handlers

[Next.js](https://github.com/vercel/next.js) nos permite crear controladores de solicitudes personalizados para nuestras rutas usando una función llamada **Route Handlers**. 

Los *Route Handlers* también son excelentes para realizar solicitudes de API externas y como se ejecutan en el lado del servidor, garantizan que la información confidencial, como las claves privadas, permanezcan segura y nunca se envíe al navegador.

Ahora, veamos un ejemplo de como contruir un **Route Handler**.

Comenzamos creando una carpeta dentro de `app` llamada `hello` y dentro de ella, un archivo llamado `route.ts`. Esto es una convención de [Next.js](https://github.com/vercel/next.js) que debemos respetar.

Dentro de `route.ts`, creamos una función que se corresponda con el metodo GET de HTTP.

![Next.js 14](https://i.postimg.cc/3N4J2Pyg/next-js-14-codev-99.jpg "Route Handlers")

Con esto, ya basta para crear nuestro primer **Route Handler**. Si navegamos a http://localhost:3000/hello, observamos que la respuesta fue generada.

![Next.js 14](https://i.postimg.cc/PrmNKvf9/next-js-14-codev-100.jpg "Route Handlers")

 Notemos que podemos crear **Route Handlers** para cada página en particular. Por ejemplo, podemos crear la carpeta `dashboard-hr`, dentro de ella un controlador de rutas y luego una carpeta `users` dentro de `dashboard-hr` con su propio controlador.

Por otro lado,tenemos que tener en cuenta los posibles conflictos entre las páginas y los controladores de rutas. Por ejemplo, si creamos una carpeta `profile-hr` y dentro de ella, creamos dos archivos: uno correspondiente a la página `page.tsx` y otro correspondiente al controlador de rutas llamado `route.ts`.

Si navegamos hacia http://localhost:3000/profile-hr, observamos como se muestra el contenido del **Route Handler**.

![Next.js 14](https://i.postimg.cc/PfKwYFy9/next-js-14-codev-101.jpg "Route Handlers")

Para evitar este conflicto, vamos a crear dentro de la carpeta `profile-hr`, una carpeta llamada `api` y allí, pegamos al archivo `route.ts` y dejamos únicamente en ese nivel al archivo `page.tsx`. 

Ahora, si navegamos a http://localhost:3000/profile-hr obtenemos la página.

![Next.js 14](https://i.postimg.cc/pTJjhCVB/next-js-14-codev-102.jpg "Route Handlers")

Y si navegamos a http://localhost:3000/profile-hr/api obtenemos la respuesta de la api.

![Next.js 14](https://i.postimg.cc/63XRpgK3/next-js-14-codev-103.jpg "Route Handlers")

### Handling GET Request

En la sección anterior, aprendimos a como crear un **Route Handler** básico. En esta sección, vamos a aprender a cómo manejar una solicitud o request de tipo GET.

Para esto, vamos a utilizar una herramienta llamada **Thunder Client**. 

Para comenzar, vamos a crear una carpeta dentro de `src` llamada  `comments` y dentro de ella, un archivo llamado `data.ts` que va a contener un arreglo de comentarios que vamos a utilizar como información.

Luego, creamos el **Route Handler** en el archivo `route.ts` y obtenemos la información de los comenatarios.

![Next.js 14](https://i.postimg.cc/vZNrkKFK/next-js-14-codev-104.jpg "Handling GET Request")

Luego, para probar el controlador de rutas, utilizamos Thunder Client presionando el boton **New Request** para realizar la solicitud GET a ese endpoint y vemos que el resultado de la solicitud es el esperado.

![Next.js 14](https://i.postimg.cc/rwmGhkbW/next-js-14-codev-105.jpg "Handling GET Request")

### Handling POST Request

En esta sección, vamos a aprender a cómo manejar una solicitud de tipo POST.

Para ello, debemos publicar un nuevo comentario en el arreglo  `data` de la carpeta `comments`. Por lo tanto, vamos a solicitar una nueva request de tipo POST a http://localhost:3000/comments de la siguiente manera:

![Next.js 14](https://i.postimg.cc/SNwL47Ls/next-js-14-codev-106.jpg "Handling POST Request")

Podemos observar que la solicitud arroja un error de tipo 405 porque no tenemos una función para manejar la solicitud POST. Entonces, la creo en el archivo `route.ts`.

![Next.js 14](https://i.postimg.cc/BnHTnLNC/next-js-14-codev-107.jpg "Handling POST Request")

Por último, detenemos la ejecución de nuestro servidor (ejecutamos `ctrl +c`). Luego, volvemos a correr el servidor con `npm run dev` y realizamos la solicitud POST viendo como ahora si, se publica el nuevo comentario en el arreglo `comments`.

### Dynamic Route Handlers

En las dos secciones anteriores, vimos como manejar las solicitudes GET y POST. El siguiente paso va a ser enfocarse en cómo manejar las solicitudes PATCH y DELETE.

Pero, primero vamos a enfocarnos en cómo obtener un determinado comentario pasando el número de id de manera dinámica. Por ejemplo, http://localhost:3000/comments/1.

Para resolver esto, comenzamos creando una carpeta `[id]` dentro de `comments`. Una vez situados en `[id]`, creamos el archivo `route.ts` y definimos una función de tipo GET.

![Next.js 14](https://i.postimg.cc/44tJfq0V/next-js-14-codev-108.jpg "Dynamic Route Handlers")

Luego, probamos el endpoint http://localhost:3000/comments/1 con el método GET y obtenemos el resultado esperado.

![Next.js 14](https://i.postimg.cc/SRWqgY9D/next-js-14-codev-109.jpg "Dynamic Route Handlers")

### Handling PATCH Request

En esta sección, vamos a aprender cómo manejar las solicitudes PATCH. Una solicitud PATCH realiza modificaciones parciales a un recurso. En nuestro caso, vamos a modificar o actualizar el texto de un comentario.

Como vamos a realizar una solicitud PATCH al endpoint de tipo http://localhost:3000/comments/3 que tiene un número de Id, nos dirigimos a la carpeta `[id]` y en el archivo `route` creamos la función para la solicitud PATCH.

![Next.js 14](https://i.postimg.cc/V6t8TdTr/next-js-14-codev-110.jpg "Handling PATCH Request")

Finalmente, si ejecutamos el endpoint http://localhost:3000/comments/3 con método PATCH, observamos que se actualiza el texto del comentario número 3.

![Next.js 14](https://i.postimg.cc/43qGBz8R/next-js-14-codev-111.jpg "Handling PATCH Request")

### Handling DELETE Request

En esta sección, vamos a aprender como manejar las solicitudes DELETE. En nuestro caso, vamos a eliminar un comentario de acuerdo a su id. Tomamos el id con valor 3 para realizar esta prueba.

Para ello, vamos a crear una función para manejar las solicitudes DELETE en el archivo `route.ts`.

![Next.js 14](https://i.postimg.cc/vmy1zxmB/next-js-14-codev-112.jpg "Handling DELETE Request")

Luego, recargamos el servidor y ejecutamos el endpoint con el método DELETE en Thunder Client y obtenemos el resultado esperado.

![Next.js 14](https://i.postimg.cc/NfW2KzqR/next-js-14-codev-113.jpg "Handling DELETE Request")

![Next.js 14](https://i.postimg.cc/W1gFgwTC/next-js-14-codev-114.jpg "Handling DELETE Request")

















































