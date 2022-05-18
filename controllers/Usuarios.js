// Usuarios
const { response, request } = require("express");

//importar modelo de usuario
const Usuario = require("../models/usuario");

//Importar bcryptjs
const bcryptjs = require("bcryptjs");

const usuariosGet = async (req = request, res = response) => {
  const { limite = 5, desde = 0 } = req.query;
  const query = { estado: true }; // asi no cuenta los usuarios inactivados por el delete

  const [total, usuarios] = await Promise.all([ // para hacer las dos peticiones al  mismo tiempo
    Usuario.countDocuments(query),
    Usuario.find(query).skip(Number(desde)).limit(Number(limite)),
  ]);

  res.json({
    total,
    usuarios,
  });
};

const usuarioPost = async (req = request, res) => {
  const datos = req.body;

  const { nombre, correo, password, rol } = datos;

  const usuario = new Usuario({ nombre, correo, password, rol });

  //Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  //Guardar los datos en BD
  await usuario.save();

  res.json({
    usuario,
  });
};

const usuarioPut = async (req = request, res) => {
  const { id } = req.params;
  const { password, correo, google, ...resto } = req.body;

  //validar password contra la base de datos
  if (password) {
    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  //actualizo los datos
  const usuario = await Usuario.findByIdAndUpdate(id, resto, { new: true }); // {new:true} hace que me devuelva los datos actualizados, no los anteriores.

  res.json({
    usuario,
  });
};

const usuarioDelete = async (req, res) => {
  const id = req.params.id;
  // const usuarioBorrado = await Usuario.findByIdAndDelete(id); Si hubiesemos querido eliminarlo definitivamente


  const usuarioBorrado = await Usuario.findByIdAndUpdate( // lo usamos para inactivar el usuario, estado:false
    id,
    { estado: false },
    { new: true }
  );

  res.json({
    usuarioBorrado
  });
};

module.exports = {
  usuariosGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
};