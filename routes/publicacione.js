const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({
    msg: "GET - Info traida",
  });
});

router.post("/", (req, res) => {
  res.json({
    msg: "POST - Info creada",
  });
});

router.put("/", (req, res) => {
  res.json({
    msg: "PUT - Info actualizada",
  });
});

router.delete("/", (req, res) => {
  res.json({
    msg: "DELETE - Info eliminada",
  });
});

module.exports = router;
