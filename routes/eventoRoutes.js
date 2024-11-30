const express = require('express');
const router = express.Router();
const EventoController = require('../controllers/eventoController');


router.post('/', EventoController.crearEvento);
router.get('/', EventoController.obtenerEvento);
router.get('/:id', EventoController.obtenerEventoPorId);
router.put('/:id', EventoController.actualizarEvento);
router.delete('/:id', EventoController.eliminarEvento);

module.exports = router;