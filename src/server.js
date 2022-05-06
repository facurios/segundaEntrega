const config = require('../config.json');
const express = require('express');
const app = express();
const routerProductos = require('./rutas/router_productos');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// protejo el servidor ante cualquier excepcion no atrapada
app.use((err, req, res, next) => {
    console.error(err.message);
    return res.status(500).send('Algo se rompio!');
});

// rutas
app.use('/api', routerProductos);

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(config.port, () => {
    console.log(`server listening on http://localhost:${config.port}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error on the server:', error);
});

module.exports = server;