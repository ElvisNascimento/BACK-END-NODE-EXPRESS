const express = require('express');
const route = express.Router();
const usuario = require('./usuario')

route.get("/usuario", (req, res) => {
    res.send(usuario.listar());
});
route.post("/usuario", (req, res) => {
    res.send(usuario.criar(req.body));
});
route.put("/usuario/:id", (req, res) => {
    res.send(usuario.atualizar());
});
route.delete("/usuario", (req, res) => {
    res.send('Ta faltando o id');
});
route.delete("/usuario/:id", (req, res) => {
    res.send(usuario.deletar(req.params.id));
});
module.exports = route;