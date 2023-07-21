//Rutas para doctor
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');


//se configura ruta para api/doctor
//Crear nuevo doctor
router.post('/', doctorController.crearDoctor);
//Listar doctores
router.get('/', doctorController.obtenerDoctores);
//Editar doctor
router.put('/:id', doctorController.actualizarDoctor);
//Seleccionar 1 doctor especifico por _id
router.get('/:id', doctorController.obtenerDoctor);
//Eliminar doctor
router.delete('/:id', doctorController.eliminarDoctor);

// Ruta para obtener los doctores por especialidad
router.get('/especialidad/:especialidad', doctorController.obtenerDoctoresPorEspecialidad);

module.exports = router;