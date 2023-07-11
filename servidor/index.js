const express = require('express');
const conectarDB = require('./config/db');

//Se crea el servidor
const app = express();

//Conectar a la BD
conectarDB();
app.use(express.json());
app.use('/api/paciente', require('./routes/paciente'));



app.listen(4000, () => {
    console.log('El servidor esta desplegado correctamente')
})