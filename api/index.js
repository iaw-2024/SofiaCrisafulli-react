const path = require('path');
const fs = require("fs");
const express = require("express");
const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json()); // Para parsear el cuerpo de las solicitudes JSON

app.get("/datos", (req, res) => res.sendFile("./proyecto-react/src/datos.json", { root: '.' }));
app.use(express.static('public'))

app.get("/", (req, res) => {
    fs.readFile(path.resolve(__dirname, "../proyecto-react/build/index.html"), "utf-8", (err, index) => {
        if(err) {
            res.status(500).send(err);
            return;
        }
        res.send(index);
    })
});

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;