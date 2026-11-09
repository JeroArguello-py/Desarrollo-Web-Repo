// Configurar Express: orden de middlewares y rutas
require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const documentacion = require('./docs/openapi.js');
const tareasRouter = require('./routes/tareas.routes');
const { rutaNoEncontrada, manejarErrores } = require('./middlewares/manejarErrores.js');

const app = express();

// 1. Convertir el cuerpo JSON de la petición en req.body
app.use(express.json());

// 2. Documentación OpenAPI / Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(documentacion));
app.get('/api/docs.json', (req, res) => { res.json(documentacion); });

// 3. Rutas
app.get("/api/salud", (req, res) => {
    res.json({ estado: "ok" });
});

app.use("/api/tareas", tareasRouter);

// 4. Si no responde la ruta, responder 404 JSON
app.use(rutaNoEncontrada);

// 5. Manejar errores globales
app.use(manejarErrores);

module.exports = app;
