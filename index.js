const express = require('express');
const path = require('path');
const app = express();

// Sirve los archivos estáticos desde la carpeta build
app.use(express.static(path.join(__dirname, 'build')));

// Redirige todas las rutas a index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Escucha en el puerto que Passenger asigne
const PORT = process.env.PORT || 0;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


