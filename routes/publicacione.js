const { Router } = require("express");

const {
  obtenerPublicaciones,
  crearPublicacion,
  actualizarPublicacion,
  borrarPublicacion,
} = require("../controllers/Publicaciones");

const router = Router();

router.get("/", obtenerPublicaciones);

router.post("/", crearPublicacion);

router.put("/:id", actualizarPublicacion);

router.delete("/:id", borrarPublicacion);

module.exports = router;
