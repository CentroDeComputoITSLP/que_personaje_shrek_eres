# [Inicio](https://centrodecomputoitslp.github.io/que_personaje_shrek_eres)
## Guía desde cero
### 1. Crea un directorio para el proyecto
 1.1 Crea un nuevo directorio el cual se usará como área de trabajo.
```
mkdir shrek_app
```
![creación_directorio](./Images/1_1.png)
1.2 Accede al directorio creado en el paso anterior.
``` 
cd shrek_app 
```
![ingreso_carpeta](./Images/1_2.png)
### 2. Inicializar el repositorio git (opcional)
2.1 Inicializamos el repositorio para controlar las versiones usando git.
``` 
git init
```
![inicializar_repositorio](./Images/2_1.png)
### 3. Inicializar proyecto de Node.js
Considere que para este punto ya debería de tener configurado node.js en su maquina. De lo contrario puede revisar su instalación en el siguiente [link](https://nodejs.org/es/).

3.1 Haciendo uso de el manejador de dependencias NPM,  inicializaremos un proyecto con la siguiente instrucción:
``` 
npm init
```
3.2 Después de ejecutar la instrucción se le solicitara algunos datos: 

package name: (shrek_app) <br> 
version: (1.0.0) <br> 
description: <br> 
<b>
entry point: server.js <br> 
</b>
test command:<br>
git repository: <br>
keywords:<br>
author:<br>
license: (ISC) <br>

Cuando nos solicite el valor "entry point" escribiremos ```server.js```.
Podemos dejar los otros valores por defecto. 

Al finalizar habrá generado un archivo llamado package.json como el que se muestra enseguida.

<h4>Package.json</h4>

```
{
  "name": "shrek_app",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {},
  "author": "",
  "license": "ISC",
  "bugs": { }  
}
```
Enseguida te dejo una breve lectura en donde [Fernando Larrañaga](https://medium.com/@Xabadu). no explica de forma minuciosa el uso de este archivo: ["Tú, yo y package.json"](https://medium.com/noders/t%C3%BA-yo-y-package-json-9553929fb2e3).

### 4. Configurar el servidor (express)
4.1 Instalación de Express.<br>
Para instalar la liberia/dependencia existen diversas maneras a continuación se muestran dos de las mas comunes:

- opción 1:Haciendo uso del manejador de paquetes NPM
```
npm install express --save
```
- opción 2: Modificando el archivo package.js .<br>
Abriremos el archivo ```package.js``` para agregar la liberia/dependencia. 
```

"dependencies": {
    "express": "^4.17.1"
  }

```
Después tendremos que usar NPM para descargar la librería
```
npm install
```

>  Si tienes dudas acercas de como configurar express puedes consultar el siguiente [link](https://expressjs.com/es/starter/installing.html)

4.2 Configuración de express <br>
Crearemos un nuevo archivo en la raíz del proyecto el cual nombraremos ```server.js``` y agregaremos las lineas dentro del archivo creado

<h4>server.js</h4>

```

var express = require('express');

var app = express();

var server = app.listen(process.env.PORT || 3000, listen);


function listen() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Servicio iniciado en http://' + host + ':' + port);
}

app.use(express.static('public'));

```

4.3 Creación del directorio para la app<br>
Crearemos un nuevo directorio en la raíz de nuestro proyecto llamada ```public``` , la cual sera el directorio en donde tendremos nuestra pequeña app.

4.4 Comprobar funcionamiento<br>
Se deberá crear un archivo nuevo el cual nombraremos ```index.html``` dentro de la carpeta ```public```.<br>
Dentro del archivo creado escribiremos la estructura básica de un html.

![referencia_html](./images/memes/html.jpg)

Estructura basica HTML:
<h4>index.html</h4>

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personajes de shrek</title>
</head>

<body>
    <h1>Hola mundo!</h1>
</body>

</html>
```

Usaremos la siguiente instrucción para encender el servidor web  

```
node server.js
```

![referencia_html](./images/memes/hack_html.png)








