const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');

// Rutas para las citas
//Crear nueva cita
router.post('/', citaController.crearCita);
//Listar citas
router.get('/', citaController.obtenerCitas);
//Eliminar Cita
router.delete('/:id', citaController.eliminarCita);
//Se exportan las rutas
module.exports = router;
