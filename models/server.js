const express = require("express");

const cors = require("cors");

// Importando la configuracion de la conexion con la BD
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.authPath = "/api/auth";
    this.publicacionesPath = "/api/publicaciones";

    // Conectar BD
    this.conectarDB();

    //middlewares
    this.middlewares();

    //Rutas
    this.routes();
  }

  // Llamando funcion para conectar base de datos
  async conectarDB() {
    await dbConnection();
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
