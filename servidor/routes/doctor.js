//Rutas para doctor
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

//se configura ruta para api/doctor
router.post('/', doctorController.crearDoctor);

module.exports = router;