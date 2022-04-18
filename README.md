# Etnothecarium - 2022

Welcome to the **Etnothecarium web-app** installation file.
This project was created in JavaScript using the Angular 4.0 framework, recently it has received an update and stabilization to angular version 12.2.0

## Requirements
* Node 12.19.0
* npm 6.14.8

## Installation

1. Download and/or proceed to install **Node Version Manager** tool
* [NVM for Windows](https://pip.pypa.io/en/stable/) - installer 
* [NVM for Mac/Linux](https://www.pensemosweb.com/instalar-nodejs-nvm-macos-linux-windows/) - follow instructions 

2. Once installed, run the following commands one after another
```bash
nvm install 12.19.0
```
```bash
nvm use 12.19.0
```
```bash
npm i @angular/cli@12.2.3 --global
```
3. After that, run the following command to install the project dependencies
```bash
npm install
```
3. At this moment you can use the deploy the project in dev mode
## Usage

To run the project in **Dev Mode** just run the command
```bash
ng serve --o
```
http://localhost:4200/. The app will automatically reload if you change any of the source files.
## Deploy
para correr el proyecto solo basta ejecutar el comando 
```bash
ng build --configuration production  
```

## Special Thanks
All free libraries used in this project
* [ScrollMagic](https://scrollmagic.io/)
* [IweenMax](https://greensock.com/tweenmax/)
* [bootstrap 4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/)



## License
Todos los derechos de código y diseño son propiedad de Etnothecarium S.A.S. Colombia
[MIT](https://choosealicense.com/licenses/mit/)