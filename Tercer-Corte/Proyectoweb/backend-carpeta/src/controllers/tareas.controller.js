// Capa controladores: traductor HTTP (asíncrono con MongoDB)
const servicio = require('../services/tareas.service');

async function listar(req, res, next) {
    try {
        const tareas = await servicio.listar();
        res.status(200).json(tareas);
    } catch (error) {
        next(error);
    }
}

async function obtener(req, res, next) {
    try {
        const tarea = await servicio.obtener(req.params.id);
        res.status(200).json(tarea);
    } catch (error) {
        next(error);
    }
}

async function crear(req, res, next) {
    try {
        const nueva = await servicio.crear(req.body);
        res.status(201).json(nueva);
    } catch (error) {
        next(error);
    }
}

async function actualizar(req, res, next) {
    try {
        const tareaActualizada = await servicio.actualizar(req.params.id, req.body);
        res.status(200).json(tareaActualizada);
    } catch (error) {
        next(error);
    }
}

async function eliminar(req, res, next) {
    try {
        await servicio.eliminar(req.params.id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

module.exports = { listar, obtener, crear, actualizar, eliminar };
