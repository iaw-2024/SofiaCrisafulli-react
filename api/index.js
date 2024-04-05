const express = require("express");
const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json()); // Para parsear el cuerpo de las solicitudes JSON

app.get("/datos", (req, res) => res.send("proyecto-react/src/datos.json"));
app.use(express.static('public'))


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;