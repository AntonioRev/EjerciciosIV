var express = require('express');

var app = express();

var RA = "Nadie";
respuesta = {
    Emisor: "Servidor",
    Receptor: "Tu",
    Mensaje: "Hola",
    Exito: "Sí",
    "Receptor Anterior": RA
}

app.get('/saludo/:Emisor/:Receptor/:Mensaje/:Exito', function(req, res) {
    respuesta['Emisor'] = req.params.Emisor;
    respuesta['Receptor'] = req.params.Receptor;
    respuesta['Mensaje'] = req.params.Mensaje;
    respuesta['Exito'] = req.params.Exito;
    respuesta['Receptor Anterior'] = RA;
    res.send(JSON.stringify(respuesta));
    RA = req.params.Receptor;
})

app.get('/perro', function(req, res) {
    res.send(JSON.stringify({saludo: "guau"}));
})

app.get('/ejercicio', function(req, res) {
    res.send(JSON.stringify({mensaje: "esto es una prueba de lo de IV"}));
})

app.get('/ejercicio/avanzado', function(req, res) {
    res.send(JSON.stringify({mensaje: "esto es un ejercicio mas avanzado de lo de IV"}));
})

app.get('/ejercicio/avanzado/:nivel', function(req, res) {
    res.send(JSON.stringify({mensaje: "esto es un ejercicio mas avanzado de nivel " + req.params.nivel}));
})

app.listen(3000, () => {
    console.log(`API escuchando en: http://localhost:3000`)});