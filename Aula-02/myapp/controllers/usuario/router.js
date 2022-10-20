const express = require('express');
const route = express.Router();

route.get("/usuario", (req, res) => {
    res.send("Listar produtos");
});

route.post("/usuario", (req, res) => {
    res.send("Criar usuario");
});

route.put("/usuario/:id", (req, res) => {
    res.send("Atualizar usuario");
});

route.delete("/usuario", (req, res) => {
    res.send('Ta faltando o id');
});

route.delete("/usuario/:id", (req, res) => {
    res.send(`Deletar usuario id: ${req.params.id}`);
});

module.exports = route;