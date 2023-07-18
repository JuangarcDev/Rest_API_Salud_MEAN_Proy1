const Cita = require("../models/Cita");
const Doctor = require("../models/Doctor");
const Paciente = require("../models/Paciente");

exports.crearCita = async (req, res) => {
  try {
    const { idPaciente, idDoctor, fechaCita } = req.body;

    // Verificar si existe el paciente
    const paciente = await Paciente.findById(idPaciente);
    if (!paciente) {
      return res.status(404).json({ msg: "No existe el paciente" });
    }

    // Verificar si existe el doctor
    const doctor = await Doctor.findById(idDoctor);
    if (!doctor) {
      return res.status(404).json({ msg: "No existe el doctor" });
    }

    // Crear la cita
    const cita = new Cita({ idPaciente, idDoctor, fechaCita });
    await cita.save();

    res.json(cita);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en la creación de la cita");
  }
};

// Resto de los controladores para obtener, actualizar y eliminar citas
