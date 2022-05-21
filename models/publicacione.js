const { Schema, model } = require("mongoose");

const PublicacionesSchema = Schema({
  descripcion: {
    type: String,
    required: [true, "La descripcion es obligatoria"],
  },

  img: {
    type: String,
  },

  usuario: {
    // Agregar esto cuando ya tengamos los modelos de usuarios.
    // type: Schema.Types.ObjectId,
    // ref: "Usuario",
    // ========================================================
    type: String,
    required: true,
  },

  fecha: {
    type: String,
  },

  estado: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = model("Publicacione", PublicacionesSchema);
