const Paciente = require("../models/Paciente");


exports.crearPaciente = async (req, res) => {

    try {
        let paciente;

        //creamos un paciente
        paciente = new Paciente(req.body);

        await paciente.save();
        res.send(paciente);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }

}