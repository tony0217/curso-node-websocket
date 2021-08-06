const http = require('http');
const express = require('express');
const cors = require('cors')
const DIR_PUBLIC = express.static('public');
const io = require('socket.io');
const {socketController} = require('../sockets/controller');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // crear la instancia del websocket
        this.serverSocket = http.createServer(this.app);
        this.io = io(this.serverSocket);

        this.patch = {}

        //middlewares
        this.middlewares();

        //rutas app
        this.route();


        // socket event handlers
        this.sockets()

    }

    async conectionDB(){
        await dbConenection();
    }


    middlewares(){

        //cors
        this.app.use(cors());

        // traer carptas estaticas
        this.app.use(DIR_PUBLIC);
    
    }

    route(){
       //rutas auth
       //this.app.use(this.patch.auth, require('../routes/auth.route'));
    }

    sockets(){
   
        this.io.on("connection", socketController);
      
    }

    listen(){

        //Servir el socketServer test: socket.io/socket.io.js
        this.serverSocket.listen(this.port, () => {
            
            console.log(`Example app listening at http://localhost:${this.port}`)
        });
    }



}


module.exports = Server;