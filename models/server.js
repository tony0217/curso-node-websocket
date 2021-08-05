const express = require('express');
const cors = require('cors')
const DIR_PUBLIC = express.static('public');


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
     

        this.patch = {}


        //middlewares
        this.middlewares();


        //rutas app
        this.route();
       
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

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        });
    }



}


module.exports = Server;