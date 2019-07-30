//Requires

var express = require('express');
var mongoose = require('mongoose');


// Inicializar variables
var app = express();

mongoose.connection.openUri('mongodb://127.0.0.1:27017/hospitalDB', { useNewUrlParser: true },
    (err, res) => {
        if (err) throw err;
        console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
    });

//rutas
app.get('/', (req,res,next) =>{

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    })

})


// escuchar peticones
app.listen(3000, () =>{
    console.log('Express server corriendo en el 3000:\x1b[2m','online');
})