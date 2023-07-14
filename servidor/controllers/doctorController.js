const Doctor = require("../models/Doctor");


exports.crearDoctor = async (req, res) => {
    
    try {
        let doctor;

        //Se crea el doctor
        doctor = new Doctor(req.body);

        await doctor.save();
        res.send(doctor);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error en la creacion del doctor");
    }
}

exports.obtenerDoctores = async (req, res) =>  {
    try {
        
        const doctores = await Doctor.find();
        res.json(doctores)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error ..");
    }
}

exports.actualizarDoctor = async (req, res) => {
    try {
        const {nombre, apellido, especialidad, consultorio, correo} = req.body;
        let doctor = await Doctor.findById(req.params.id);

        if(!doctor) {
            res.status(404).json({ msg: "No existe el doctor"})
        }

        doctor.nombre = nombre;
        doctor.apellido = apellido;
        doctor.especialidad = especialidad;
        doctor.consultorio = consultorio;
        doctor.correo = correo;

        doctor = await Doctor.findOneAndUpdate({ _id: req.params.id}, doctor, { new: true})
        res.json(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error ..");
    }
}

exports.obtenerDoctor = async (req, res) => {
    try {
        let doctor = await Doctor.findById(req.params.id);

        if(!doctor) {
            res.status(404).json({ msg: "No existe el doctor"})
        }

        res.json(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error ..");
    }
}

exports.eliminarDoctor = async (req, res) => {
    try {
        let doctor = await Doctor.findById(req.params.id);

        if(!doctor) {
            res.status(404).json({ msg: "No existe el doctor"})
        }

        await Doctor.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'El doctor fue eliminado con exito'});
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error ..");
    }
}