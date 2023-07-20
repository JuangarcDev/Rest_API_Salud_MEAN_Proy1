//Rutas para doctor
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');


//se configura ruta para api/doctor
router.post('/', doctorController.crearDoctor);
router.get('/', doctorController.obtenerDoctores);
router.put('/:id', doctorController.actualizarDoctor);
router.get('/:id', doctorController.obtenerDoctor);
router.delete('/:id', doctorController.eliminarDoctor);

// Ruta para obtener los doctores por especialidad
router.get('/especialidad/:especialidad', doctorController.obtenerDoctoresPorEspecialidad);

module.exports = router;