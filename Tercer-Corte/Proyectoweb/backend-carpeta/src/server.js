// encender servidor
const express = require('express');
const app = require('./app');

const PUERTO=3000;
app.listen(PUERTO, () => {
    console.log(`API tareas en http://localhost:${PUERTO}/api/tareas`);
    console.log(`Documentación OpenAPI en http://localhost:${PUERTO}/api-docs`);
});
