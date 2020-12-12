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

app.listen(3000, () => {
    console.log(`API escuchando en: http://localhost:3000`)});