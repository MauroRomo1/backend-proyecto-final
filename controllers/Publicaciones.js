const { response, request } = require("express");

const publicacionesGet = (req = request, res = response) => {
  const query = req.query;
  res.json({
    msg: "GET - Info traida",
    query,
  });
};

const publicacionesPost = (req = request, res = response) => {
  const datos = req.body;
  res.json({
    msg: "POST - Info creada",
    datos,
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
