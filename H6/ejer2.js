var express = require('express');

var app = express();

respuesta = {
    Emisor: "Servidor",
    Receptor: "Tu",
    Mensaje: "Hola",
    Exito: "Sí"
}

app.get('/saludo', function(req, res) {
    res.send(JSON.stringify(respuesta));
})

app.listen(3000, () => {
    console.log(`API escuchando en: http://localhost:3000`)});