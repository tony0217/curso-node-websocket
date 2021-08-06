
const socketController = (socket) => {
    console.log('conectado');

    socket.on("disconnect", (reason) => {
        //console.log('desconectado');
     });

     // recibir mensages del client y enviar 
    socket.on("sendMessageToServer", (payload ,callback) => {

        //mensaje para unico cliente
        const id = 1254785;
        callback(id);

        //mensaje para todos los clientes
         socket.broadcast.emit("sendMessageToClient", payload);
         console.log(payload);
    });

}





module.exports = {socketController}