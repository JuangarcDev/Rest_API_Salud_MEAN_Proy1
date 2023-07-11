const express = require('express');
const conectarDB = require('./config/db');

//Se crea el servidor
const app = express();

//Conectar a la BD
conectarDB();

app.use('/api/paciente', require('./routes/paciente'));

//Definir ruta principal
/*app.get('/', (req, res) => {
    res.send('Hola mundo Facherito')
})*/

app.listen(4000, () => {
    console.log('El servidor esta desplegado correctamente')
})