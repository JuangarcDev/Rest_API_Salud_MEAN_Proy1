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

exports.obtenerPaciente = async (req, res) => {
    try {
        
        const paciente = await Paciente.find();
        res.json(paciente)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.actualizarPaciente =async (req, res) => {

    try {
        const { nombre, apellido, fechaNacimiento, edad} = req.body;
        let paciente = await Paciente.findById(req.params.id);

        if(!paciente) {
            res.status(404).json({ msg: 'No existe el paciente solicitado' })
        }

        paciente.nombre = nombre;
        paciente.apellido = apellido;
        paciente.fechaNacimiento =fechaNacimiento;
        paciente.edad =edad;
        
        paciente =await Paciente.findOneAndUpdate({ _id: req.params.id}, paciente,{new: true} )
        res.json(paciente);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}