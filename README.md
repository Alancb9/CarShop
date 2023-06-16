# Aplicacion de formularios para mantenimiento de vehiculos 'CarShop' desarrollada en REACT

## Descripción General

<justify>Esta aplicación fue creada bajo la necesidad del ingreso de datos para el mantenimiento de vehículos,
consta de 3 formularios: datos del cliente, datos del vehículo y otro de servicio, una vez llenados,
se muestra por pantalla la orden de compra con el resumen de los datos ingresados previamente en los forms.
Se puede navegar entre formularios con un boton de atras y siguiente, en la pantalla de orden de compra se muestra
un boton de aprobar orden, cuando se da clic en este boton se genera un mensaje de ORDEN GENERADA EXITOSAMENTE,
con un boton de generar una nueva cita que redirige al primer formulario.
Cada formulario esta validado y no se puede avanzar al siguiente formulario si no se llenan los datos requeridos.
La aplicación cuanta con un modo oscuro y un color claro para gusto del usuario, una barra de navegación que contiene
el nombre de la app, y un botón interruptor para alternar entre el modo oscuro y claro tambien cuenta con un footer
con el nombre del desarrollador y un icono de github que al cliquearlo llevara al usuario hacia el repositorio del código fuente.</justify>

## Descripción del código

El codigo consta de varios modulos y componentes separados para facilitar el futuro mantenimiento del mismo que seran. mencionados a continuación:

### App.jsx

Es el componente principal que utiliza el enrutador de React Router para definir las rutas y renderizar diferentes componentes.

### App.css

Contiene los estilos de la aplicación, como los estilos de la barra de navegacion, los formularios, el footer y el modo oscuro.

### AppContext.jsx

Este archivo define el contexto de la aplicación utilizando el hook 'useReducer' para manejar el estado global de la aplicación, este incluye el estado inicial de los datos del cliente, vehiculo, servicios y fecha.

### reducers.jsx

Contiene el reducer que maneja las acciones para actualizar el estado global de la aplicacion, como agregar o eliminar datos.

### Formularios FormCliente.jsx, FormVehiculo.jsx

Son componentes que muestran su respectivos formularios para ingresar datos del cliente y del vehiculo respectivamente, utilizan el contexto de la aplicacion 'AppContext' para actualizar los datos del cliente y del vehiculo.

### Servicios.jsx

Componente que muestra un listado de opciones con los servicios de CarShop, el usuario podra escoger como minimo uno de los servicios,
este componente tambien utiliza el contexto de la aplicacion para actualizar los datos de los servicios elegidos.

### OrdenTrabajo.jsx

Componente que utiliza el contexto de la aplicacion para acceder a los estados ingresados previamente y mostrarle al usuario los datos para su posterior aprovación, una vez que se da clic en aprovar orden se muestra la pantalla de exito.

### Exito.jsx

Este componente muestra un mensaje de exito cuando el usuario aprueba la orden, al dar clic en reservar nueva cita accede al contexto de la app resetea los datos y redirecciona al formulario del cliente para generar una nueva cita.

### index.jsx

Este módulo crea un punto de entrada para la aplicacion, establece el contexto y renderiza el componente principal de la aplicación en el elemento 'root' del documento HTML.

## Desarrollo de la aplicacion desde cero CarShop

Para el desarrollo de esta aplicacion desde cero se necesito de node.js y de su administrador de paquetes npm.

Abrir el cmd y ejecutar los siguientes comandos `node --version` y `npm --version` para verificar si tienes instalado
y la version de node.js y npm respectivamente.

Si no tienes instalado node.js puedes entrar a [instalar nodejs](https://nodejs.org/es/download)

Una vez instalado node.js creamos una carpeta para alojar nuestra aplicacion, accedemos a ella en el cmd y ejecutamos localmente `npm install react`.

El comando `npm install -g <paquete>` permite instalar paquetes de manera global en caso de que requieras realizar algo de este tipo.

Dentro de la carpeta donde se instalo react ejecutamos el siguiente comando `npx create-react-app <Nombre de la aplicacion>`, luego de esto se creara una subcarpeta con toda la estructura por defecto para una aplicacion de reactA partir de aqui se desarrollo toda la logica de programacion
mencionada en lineas anteriores.

## Ejecutar aplicacion en modo de desarrollo

Para visualizar los cambios que le estas haciendo a tu aplicacion de react ejecuta el comando `npm start` con esto se ejecutara un servidor local y en tu navegador podras ver la aplicacion en [http://localhost:3000/](http://localhost:3000/) en esta pagina podras ver los cambios y los errores que contengas en tiempo real en la pagina del navegador.

## Descargar codigo fuente y ejecutar en tu pc personal

Copiamos absolutamente todos los archivos del proyecto de la pc de destino , puedes copiar manuelmante o utilizar alguna herramienta de de versionado o transferencia de archivos como git.

Abrimos la linea de comandos cmd y navegamos hasta la carpeta raiz del proyecto de react, ejecutamos el comando `npm install` para instalar las dependencias necesarias de la aplicación. Esto leera el archivo `package.json` y descargara las dependencias del directorio `node_modules`.

Una vez instaladas las dependencias ejecutamos `npm start` para que se ejecute un servidor y poder abrir la aplicación en [http://localhost:3000/](http://localhost:3000/)

























This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
