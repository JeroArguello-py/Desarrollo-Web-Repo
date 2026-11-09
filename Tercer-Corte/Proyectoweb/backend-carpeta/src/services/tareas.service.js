// Capa de servicios: lógica de negocio para interactuar con MongoDB usando Mongoose
const mongoose = require('mongoose');
const Tarea = require('../models/tarea.model');
const HttpError = require('../utils/HttpError');

async function listar() {
    return await Tarea.find();
}

async function obtener(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new HttpError(404, `No existe la tarea con el id ${id}`);
    }
    const tarea = await Tarea.findById(id);
    if (!tarea) {
        throw new HttpError(404, `No existe la tarea con el id ${id}`);
    }
    return tarea;
}

async function crear(datos) {
    const payload = typeof datos === 'string' ? { titulo: datos } : datos;
    const nueva = new Tarea(payload);
    return await nueva.save();
}

async function actualizar(id, cambios) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new HttpError(404, `No existe la tarea con el id ${id}`);
    }
    const tarea = await Tarea.findByIdAndUpdate(id, cambios, {
        new: true,
        runValidators: true
    });
    if (!tarea) {
        throw new HttpError(404, `No existe la tarea con el id ${id}`);
    }
    return tarea;
}

async function eliminar(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new HttpError(404, `No existe la tarea con el id ${id}`);
    }
    const tarea = await Tarea.findByIdAndDelete(id);
    if (!tarea) {
        throw new HttpError(404, `No existe la tarea con el id ${id}`);
    }
    return tarea;
}

module.exports = { listar, obtener, crear, actualizar, eliminar };
