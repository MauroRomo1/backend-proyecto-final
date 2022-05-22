const { response, request } = require("express");

// Importando el modelo de publicaciones
const Publicacione = require("../models/publicacione");

//GET - Obtengo todas las publicaciones
const obtenerPublicaciones = (req = request, res = response) => {
  res.json({
    msg: "GET - Trayendo todas las publicaciones",
  });
};

//POST - Creo una publicacion
const crearPublicacion = async (req = request, res = response) => {
  // const { descripcion, img, usuario, fecha } = datos;

  // const publicacion = new Publicacione({ descripcion, img, usuario, fecha });

  // // Guardar los datos de la publicacion en BD
  // await publicacion.save();

  res.json({
    msg: "POST - Publicacion creada",
  });
};
//PUT - Actualizo una publicacion por su ID
const actualizarPublicacion = (req = request, res = response) => {
  res.json({
    msg: "PUT - Publicacion actualizada",
  });
};

//DELETE - Borro una publicacion por su ID
const borrarPublicacion = (req = request, res = response) => {
  res.json({
    msg: "DELETE - Publicacion eliminada",
  });
};

module.exports = {
  obtenerPublicaciones,
  crearPublicacion,
  actualizarPublicacion,
  borrarPublicacion,
};
