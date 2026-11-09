// Red de seguridad: convertir cualquier error en una respuesta HTTP adecuada
const HttpError = require('../utils/HttpError.js');

function rutaNoEncontrada(req, res, next) {
    next(new HttpError(404, `La ruta ${req.method} ${req.originalUrl} no existe`));
}

function manejarErrores(err, req, res, next) {
    if (err instanceof HttpError) {
        return res.status(err.statusCode || 500).json({ error: err.message });
    }
    if (err instanceof SyntaxError && 'body' in err) {
        return res.status(400).json({ error: 'JSON inválido' });
    }
    if (err.name === 'ValidationError') {
        return res.status(400).json({ error: err.message });
    }
    if (err.name === 'CastError') {
        return res.status(400).json({ error: 'Identificador no válido' });
    }
    console.error(err);
    return res.status(500).json({ error: 'Error interno del servidor' });
}

module.exports = {
    rutaNoEncontrada, 
    manejarErrores
};
