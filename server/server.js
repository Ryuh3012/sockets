const express = require('express');
const socketIo = require('socket.io');
const http = require('http')

const path = require('path');

const app = express();

let serve = http.createServer(app)

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

/**io = esta es la comunicacion del backend  */
module.exports.io = socketIo(serve)
require('./auth/socket')


serve.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${port}`);

});