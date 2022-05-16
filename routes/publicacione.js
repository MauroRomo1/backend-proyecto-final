const { Router } = require("express");

const {
  publicacionesGet,
  publicacionesPost,
  publicacionesPut,
  publicacionesDelete,
} = require("../controllers/Publicaciones");

const router = Router();

router.get("/", publicacionesGet);

router.post("/", publicacionesPost);

router.put("/:id", publicacionesPut);

router.delete("/:id", publicacionesDelete);

module.exports = router;
