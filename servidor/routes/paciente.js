//rutas del paciente
const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

// api/paciente
//Crear un nuevo paciente
router.post('/', pacienteController.crearPaciente);
//Listar todos los pacientes
router.get('/', pacienteController.obtenerPaciente);
//Actualizar/editar un paciente en especifico, seleccionado mediante _id
router.put('/:id', pacienteController.actualizarPaciente);
//Obtener y listar los atributos de un paciente especifico, seleccionado mediante _id
router.get('/:id', pacienteController.obtenerPacienteid);
//Eliminar un paciente especifico, seleccionado mediante _id
router.delete('/:id',pacienteController.eliminarPaciente);

module.exports = router;