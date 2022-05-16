const express = require("express");

const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.publicacionesPath = "/api/publicaciones";

    //middlewares
    this.middlewares();

    //Rutas
    this.routes();
  }

  // middlewares
  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // directorio publico
    this.app.use(express.static("public"));
  }

  // Rutas
  routes() {
    this.app.use(this.publicacionesPath, require("../routes/publicacione"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Escuchando el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
