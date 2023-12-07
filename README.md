# Proyecto Node.js y Express.js

Este proyecto es realizado en Visual Studio 2022 con Node.js y Express.js. La aplicación básica incluye una ruta principal y una ruta secundaria con mensajes simples.

## Instrucciones

1. **Instalación de Node.js:**
   - Asegúrate de tener Node.js instalado en tu entorno de desarrollo. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

2. **Configuración del Proyecto:**
   - Descarga este repositorio en tu máquina local.

3. **Ejecución del Proyecto:**
   - Dentro de la carpeta descargada abre el archivo `Nodejs.njsproj`.
   - Antes de iniciar el proyecto abre una terminal dentro de Visual Studio, la cual suele estar en el apartado "Ver" y ejecuta lo siguiente: `npm install` para instalar dependencias necesarias para el proyecto.
   - Inicia el proyecto.
   - Se abrirá tu navegador automáticamente con la ruta principal, o puedes visitar `http://localhost:1337/` para ver el mensaje correspondiente.
   - Para ver la ruta secundaria puedes visitar `http://localhost:1337/ruta-secundaria` para ver el mensaje correspondiente.
   - `Nota:` Hay que tener en cuenta que el puerto puede variar, las direcciones proporcionadas solo son de referencia.

## Estructura del Proyecto

- `app.js`: Configuración principal de la aplicación Express.js.
- `routes/index.js`: Definición de rutas, incluyendo la ruta principal y la secundaria.
- `views/`: Carpeta que contiene las plantillas Pug para las vistas.
- `public/`: Carpeta para archivos estáticos como hojas de estilo.

## Contribuciones

Siéntete libre de contribuir a este proyecto mediante la creación de nuevas características, corrección de errores o mejoras en la documentación.

