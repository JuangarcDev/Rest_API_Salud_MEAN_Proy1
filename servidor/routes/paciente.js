//rutas del paciente
const express = require('express');
const router = express.Router();

// api/paciente
router.post('/', () => {
    console.log('Creando Paciente..');
})

module.exports = router;