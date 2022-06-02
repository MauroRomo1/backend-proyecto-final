const cloudinary = require("cloudinary").v2; //para subir imagenes
cloudinary.config(process.env.CLOUDINARY_URL); //configuro cloudinary

const { response } = require("express");

// Modelos de usuarios y publicaciones
const Usuario = require("../models/usuario");
const Publicacione = require("../models/publicacione");

//Subir la imagen a Cloudinary - Nube
const actualizarImagenCloudinary = async (req, res = response) => {
  const { id, coleccion } = req.params;

  let modelo;

  switch (coleccion) {
    case "usuarios":
      modelo = await Usuario.findById(id);
      if (!modelo) {
        return res.status(400).json({
          msg: `No existe un usuario con el id ${id}`,
        });
      }
      break;
    case "publicaciones":
      modelo = await Publicacione.findById(id);
      if (!modelo) {
        return res.status(400).json({
          msg: `No existe una publicacion con el id ${id}`,
        });
      }
      break;

    default:
      return res.status(500).json({ msg: "Se me olvidó validar esto" });
  }

  //Limpiar imagenes previas
  if (modelo.img) {
    const nombreArr = modelo.img.split("/");
    const nombre = nombreArr[nombreArr.length - 1];
    const [public_id] = nombre.split(".");

    cloudinary.uploader.destroy(public_id);
  }

  const { tempFilePath } = req.files.archivo;

  const { secure_url } = await cloudinary.uploader.upload(tempFilePath);

  modelo.img = secure_url;

  await modelo.save();

  res.json(modelo);
};

module.exports = {
  actualizarImagenCloudinary,
};
