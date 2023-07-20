const Cita = require("../models/Cita");
const Doctor = require("../models/Doctor");
const Paciente = require("../models/Paciente");

exports.crearCita = async (req, res) => {
  try {
    const { cedula, especialidad, fechaCita } = req.body;

    // Verificar si existe el paciente por cédula
    const paciente = await Paciente.findOne({ cedula });
    if (!paciente) {
      return res.status(404).json({ msg: "No existe el paciente con esa cédula" });
    }

    // Verificar si existe al menos un doctor con la especialidad requerida
    const doctor = await Doctor.findOne({ especialidad });
    if (!doctor) {
      return res.status(404).json({ msg: "No existe doctor con esa especialidad" });
    }

    // Crear la cita utilizando los _id encontrados
    const cita = new Cita({ idPaciente: paciente._id, idDoctor: doctor._id, fechaCita });
    
    await cita.save();

    res.json(cita);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en la creación de la cita");
  }
};

//Lista las citas lista para ser consumida por el front
exports.obtenerCitas = async (req, res) => {
  try {
    const citas = await Cita.find()
      .populate('idPaciente', 'cedula nombre apellido') // Muestra solo cedula, nombre y apellido del paciente
      .populate('idDoctor', 'especialidad nombre apellido consultorio') // Muestra solo especialidad, nombre y apellido del doctor
      .select('idPaciente idDoctor fechaCita'); // Muestra solo estos campos de la cita

    console.log(citas);    
    res.json(citas);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error listando las citas");
  }
};

//Eliminar Cita
exports.eliminarCita = async (req, res) => {
  try {
    let cita = await Cita.findById(req.params.id);

    if(!cita){
      res.status(404).json( {msg : 'No existe la cita'})
    }
    await Cita.findOneAndRemove({ _id: req.params.id })
    res.json({ msg:'La cita fue eliminada con exito' });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error eliminando la cita");
  }
};