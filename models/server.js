const express = require("express");

// Para menejar las subida de archivos
const fileUpload = require("express-fileupload");

const cors = require("cors");

// Importando la configuracion de la conexion con la BD
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.authPath = "/api/auth";
    this.publicacionesPath = "/api/publicaciones";
    this.uploadsPath = "/api/uploads";

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

    //fileupload - carga de archivos
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        createParentPath: true,
      })
    );
  }

  // Rutas
  routes() {
    this.app.use(this.publicacionesPath, require("../routes/publicacione"));
    this.app.use(this.uploadsPath, require("../routes/uploads"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Escuchando el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
