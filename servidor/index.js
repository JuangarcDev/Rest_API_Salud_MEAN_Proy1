const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

//Se crea el servidor
const app = express();

//Conectar a la BD
conectarDB();
app.use(cors());

app.use(express.json());
app.use('/api/paciente', require('./routes/paciente'));
app.use('/api/doctor', require('./routes/doctor'));
app.use('/api/cita', require('./routes/cita'));


app.listen(4000, () => {
    console.log('El servidor esta desplegado correctamente')
})