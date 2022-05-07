const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hola wacho");
});

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
});
