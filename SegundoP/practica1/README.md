Breve descripción del proyecto
Este proyecto es una API REST desarrollada con NestJS, que utiliza TypeORM para la gestión de una base de datos SQLite. Forma parte de la Práctica 1 de la asignatura Aplicación para el Servidor Web.

La API está estructurada por módulos y sigue una arquitectura por capas (entidades, DTOs, servicios, controladores y módulos). Las entidades gestionadas son:

Accesorios: Permite registrar y gestionar los accesorios de vehículos.

Historial de Mantenimiento: Registra los mantenimientos realizados a los vehículos.

Multas: Administra las infracciones o multas asociadas a los conductores.

Cada módulo implementa sus respectivos endpoints CRUD (POST, GET, GET:id, PATCH, DELETE).

Instrucciones para instalar y ejecutar el proyecto
npm install -g @nestjs/cli
Instalar dependencias
npm install
Ejecutar la API
npm run start:dev
Puedes usar Postman o curl. Si tienes el archivo Postman_Practica1_Collection.json, impórtalo para tener acceso inmediato a todos los endpoints listos para probar.
 
 Accsesorios
 ![POST](<imagenes/Captura de pantalla 2025-06-25 203319.png>)
 ![GET](<imagenes/Captura de pantalla 2025-06-25 204154.png>)
 ![PATCH](<imagenes/Captura de pantalla 2025-06-25 204453.png>)
 ![DELETE](<imagenes/Captura de pantalla 2025-06-25 204628.png>)
 historial-mantenimiento
 ![POST](<imagenes/Captura de pantalla 2025-06-25 205055.png>)
 ![GET](<imagenes/Captura de pantalla 2025-06-25 205203.png>)
 ![PATCH](<imagenes/Captura de pantalla 2025-06-25 205303.png>)
 ![DELETE](<imagenes/Captura de pantalla 2025-06-25 205358.png>)
 multas
 ![POST](<imagenes/Captura de pantalla 2025-06-25 205549.png>)
 ![GET](<imagenes/Captura de pantalla 2025-06-25 205645.png>)
 ![GET1](<imagenes/Captura de pantalla 2025-06-25 205730.png>)
 ![PATCH](<imagenes/Captura de pantalla 2025-06-25 205831.png>)
 ![DELETE](<imagenes/Captura de pantalla 2025-06-25 205930.png>)