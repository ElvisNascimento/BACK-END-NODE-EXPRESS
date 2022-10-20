const express = require("express");
const app = express();
const port = 3000;
const produtoRota = require('./controllers/produto/router')

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(express.json());

app.use('/', produtoRota);

app.use((req, res) => {
    res.status(404).send("Rota não encontrada")
});

app.listen(port, () => {
    console.log(`Rodando no link http://localhost:${port}`);
});
