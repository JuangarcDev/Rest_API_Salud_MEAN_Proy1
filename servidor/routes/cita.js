const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');

// Rutas para las citas
router.post('/', citaController.crearCita);
// Agrega el resto de las rutas para obtener, actualizar y eliminar citas

module.exports = router;
