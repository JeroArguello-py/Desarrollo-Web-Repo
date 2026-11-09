// Capa de rutas: método + URL -> middleware de validación -> controlador
const { Router } = require('express');
const controlador = require('../controllers/tareas.controller');
const { validarCreacion, validarCambios } = require('../middlewares/validarErrores');

const router = Router();

router.get('/', controlador.listar);
router.get('/:id', controlador.obtener);
router.post('/', validarCreacion, controlador.crear);
router.put('/:id', validarCambios, controlador.actualizar);
router.patch('/:id', validarCambios, controlador.actualizar);
router.delete('/:id', controlador.eliminar);

module.exports = router;
