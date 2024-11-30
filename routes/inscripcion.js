const express = require('express');
const router = express.Router();
const InscripcionController = require('../controllers/inscripcionController');


router.post('/', InscripcionController.crearInscripcion);


module.exports = router;