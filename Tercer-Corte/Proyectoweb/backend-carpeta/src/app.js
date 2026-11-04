//configurar express app.use le de un orden para cada peticion

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const documentacion = require('./docs/openapi.js');
const tareasRouter = require('./routes/tareas.routes');
const { rutaNoEncontrada, manejarErrores } = require('./middlewares/manejarErrores.js');
const app = express();
//1.convertir el cuerpo json de la peticion en req.body
app.use(express.json());
//2. documentacion
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(documentacion));
app.get('/api/docs.json', (req, res) => { res.json(documentacion) });
//2.rutas
app.get("/api/salud", (req, res) => {
    res.json({estado: "ok"});
});

app.use("/api/tareas", tareasRouter);

//3. si no responde la ruta 404 json
app.use(rutaNoEncontrada);
//4. manejar errores
app.use(manejarErrores);

module.exports = app;
