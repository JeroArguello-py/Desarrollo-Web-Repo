//validacion para antes de que lleguen los datos al controlador
const HttpError = require('../utils/HttpError.js');

function validarCreacion(req, res, next){
    const { titulo } = req.body ?? {};
    if (typeof titulo !== 'string' || titulo.trim().length < 3) {
        throw new HttpError(400, 'El título es requerido y debe tener al menos 3 caracteres');
    }
    req.body.titulo = titulo.trim();
    next();
}

function validarCambios(req, res, next){
    const { titulo, completada, complete } = req.body ?? {};
    const valorCompletada = completada !== undefined ? completada : complete;
    const cambios = {};

    if (titulo !== undefined) {
        if (typeof titulo !== 'string' || titulo.trim().length < 3) {
            throw new HttpError(400, 'El título es requerido y debe tener al menos 3 caracteres');
        }
        cambios.titulo = titulo.trim();
    }

    if (valorCompletada !== undefined) {
        if (typeof valorCompletada !== 'boolean') {
            throw new HttpError(400, 'El campo completada debe ser booleano');
        }
        cambios.completada = valorCompletada;
    }

    if (Object.keys(cambios).length === 0) {
        throw new HttpError(400, 'No se enviaron datos para actualizar (titulo o completada)');
    }

    req.body = cambios;
    next();
}

module.exports = {
    validarCreacion,
    validarCambios
};
