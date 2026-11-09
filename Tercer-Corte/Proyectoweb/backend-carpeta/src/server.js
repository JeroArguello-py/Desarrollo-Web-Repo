// Encender servidor y conectar a la base de datos
require('dotenv').config();
const app = require('./app');
const conectarDB = require('./config/db');

const PUERTO = process.env.PORT || 3000;

async function iniciarServidor() {
    await conectarDB();
    app.listen(PUERTO, () => {
        console.log(`API tareas en http://localhost:${PUERTO}/api/tareas`);
        console.log(`Documentación OpenAPI en http://localhost:${PUERTO}/api-docs`);
    });
}

iniciarServidor();
