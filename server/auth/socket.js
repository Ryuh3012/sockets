
const { io } = require('../server')

io.on('connection', (clientReq) => {

    console.log('usuario conectado')

    clientReq.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'bienvenido a esta aplicacion'
    })


    clientReq.on('disconnect', () => {

        console.log('esta deconectado')

    })
    /* escuchar el cliente*/

    clientReq.on('enviarMensaje', (req, res) => {

        console.log(req)

        clientReq.broadcast.emit('enviarMensaje',req)


        // if (req.usuario) {

        //     res({

        //         messager: "todo salio bien "


        //     })

        // }
        // else {

        //     res({

        //         messager: "algo salio mal"

        //     })

        // }

    })

})