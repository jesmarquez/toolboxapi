# Toolbox api

Aplicación desarrollada en ExpressJS. 

## Empezando

Estas instrucciones le proporcionarán una copia del proyecto en funcionamiento en su máquina local con fines de desarrollo y prueba. Consulte la implementación para obtener notas sobre cómo implementar el proyecto en un sistema en vivo. 

### Pre-requisitos

* node 12.22
* npm 6.14
* express 4.17

### Instalando

Para desarrollar clone el repositorio y trabaje sobre la rama main. Ejecute los siguientes comandos

```
git clone https://github.com/jesmarquez/toolboxapi.git
npm install
npm start
```

## API endpoint

#### GET texto invertido

* Obtienes el texto invertido

###### Request

En local
`http://localhost:5000/iecho?text=abc`

En producción
`https://frozen-temple-59746.herokuapp.com/iecho?text=abc`

###### Response 200

Retorna un JSON.
```json
    {
        "texto": "cba",
        "palindrome": "false",
    }
```

###### Response 400

Retorna un JSON.
```json
    {
        "error": "no text",
    }
```

## Ejecutar pruebas
Para ejecutar las pruebas ejecutar el siguiente comando en el directorio del proyecto.

```
npm run test
```

## Deployment

La aplicación esta en producción en heroku **https://frozen-temple-59746.herokuapp.com**

## Construido con
* [Express](https://expressjs.com/) - minimilast web framework for node.js


## Authors

* **Jesus Marquez** - *System Analyst* - [jesmarquez](https://github.com/jesmarquez)

