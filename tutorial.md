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
Considere que para este punto ya debería de tener configurado node.js en su maquina. De lo contrario puede revisar su instalación en el siguiente [link](https://nodejs.org/es/) :eyes:

3.1 Haciendo uso de el manejador de dependencias NPM,  inicializaremo un proyecto con la siguiente instrucción
``` 
npm init
```
3.2 Después de ejecutar la instrucción se le solicitara algunos datos: 

package name: (shrek_app) <br> 
version: (1.0.0) <br> 
description: <br> 
<b>
entry point: (server.js) <br> 
</b>
test command:<br>
git repository: <br>
keywords:<br>
author:<br>
license: (ISC) <br>

Cuando nos solicite el valor "entry point" escribiremos ```server.js```.
Podemos dejar los otros valores por defecto. 

Al finalizar no habrá generado un archivo llamado package.json como el que se muestra enseguida.

<h4>Package.json</h4>

```
{
  "name": "shrek_app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/CentroDeComputoITSLP/que_personaje_shrek_eres.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/CentroDeComputoITSLP/que_personaje_shrek_eres/issues"
  },
  "homepage": "https://github.com/CentroDeComputoITSLP/que_personaje_shrek_eres#readme"  
}
```




