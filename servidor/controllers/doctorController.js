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