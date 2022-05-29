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
module.exports = {
  coleccionesPermitidas,
};
