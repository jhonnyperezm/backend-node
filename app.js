//Requires

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

// Inicializar variables
var app = express();


//body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Importar Rutas
var appRoute = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var LoginRoutes = require('./routes/login');

mongoose.connection.openUri('mongodb://127.0.0.1:27017/hospitalDB', { useNewUrlParser: true },
    (err, res) => {
        if (err) throw err;
        console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
    });

//rutas
app.use('/usuario',usuarioRoutes);
app.use('/login',LoginRoutes);
app.use('/',appRoute);


// escuchar peticones
app.listen(3000, () =>{
    console.log('Express server corriendo en el 3000:\x1b[2m','online');
})