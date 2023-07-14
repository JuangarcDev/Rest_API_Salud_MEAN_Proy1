const mongoose = require('mongoose');

const DoctorSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    especialidad: {
        type: String,
        required: true
    },
    consultorio: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Doctor', DoctorSchema)