//rutas del paciente
const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

// api/paciente
router.post('/', pacienteController.crearPaciente);
router.get('/', pacienteController.obtenerPaciente);
router.put('/:id', pacienteController.actualizarPaciente)
module.exports = router;