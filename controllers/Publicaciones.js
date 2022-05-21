const { response, request } = require("express");

// Importando el modelo de publicaciones
const Publicacione = require("../models/publicacione");

const publicacionesGet = (req = request, res = response) => {
  const query = req.query;
  res.json({
    msg: "GET - Info traida",
    query,
  });
};

const publicacionesPost = async (req = request, res = response) => {
  const datos = req.body;

  const { descripcion, img, usuario, fecha } = datos;

  const publicacion = new Publicacione({ descripcion, img, usuario, fecha });

  // Guardar los datos de la publicacion en BD
  await publicacion.save();

  res.json({
    msg: "POST - Info creada",
    publicacion,
  });
};

const publicacionesPut = (req = request, res = response) => {
  const id = req.params.id;
  res.json({
    msg: "PUT - Info actualizada",
    id,
  });
};

const publicacionesDelete = (req = request, res = response) => {
  const id = req.params.id;
  res.json({
    msg: "DELETE - Info eliminada",
    id,
  });
};

module.exports = {
  publicacionesGet,
  publicacionesPost,
  publicacionesPut,
  publicacionesDelete,
};
