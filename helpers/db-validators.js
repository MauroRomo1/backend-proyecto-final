const Role = require("../models/role");
const Usuario = require("../models/usuario");

//Validar colecciones permitidas
const coleccionesPermitidas = (coleccion = "", colecciones = []) => {
  const incluida = colecciones.includes(coleccion);

  if (!incluida) {
    throw new Error(
      `La colección ${coleccion} no es permitida, las colecciones permitidas son: ${colecciones}`
    );
  }

  return true;
};

// Validaciones
const esRoleValido = async (rol) => {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no está en la BD`);
  }
};
const emailExiste = async (correo) => {
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    throw new Error(`El correo ${correo} ya está registrado`);
  }
};

const usuarioExiste = async (id) => {
  const existeUsuario = await Usuario.findById(id);
  if (!existeUsuario) {
    throw new Error(`No existe un usuario con el id ${id}`);
  }
};
module.exports = {
  esRoleValido,
  emailExiste,
  usuarioExiste,
  coleccionesPermitidas,
};
