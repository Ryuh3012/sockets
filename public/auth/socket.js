
const socket = io()
socket.on('connect', () => {
    console.log('esta conectado al servidor')
})
/*Es para escuchar*/
socket.on('disconnect', () => {

    console.log('perdimos conection con el server')

})
/* enviar informacion*/
socket.emit('enviarMensaje', {

    usuario: 'Alejandro',
    mensaje: 'Hola mundo'

}, (res) => {
    console.log(res)
})
/* escuchar informacion*/

socket.on('enviarMensaje', (res) => {

    console.log(res)

})
