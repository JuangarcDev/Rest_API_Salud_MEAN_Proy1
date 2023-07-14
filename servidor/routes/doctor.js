//Rutas para doctor
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

//se configura ruta para api/doctor
router.post('/', doctorController.crearDoctor);
router.get('/', doctorController.obtenerDoctores);

module.exports = router;