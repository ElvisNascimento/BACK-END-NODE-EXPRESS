const express = require("express");
const morgan = require('morgan');
const chalk = require('chalk');
const app = express();
const port = 3000;
const produtoRota = require('./controllers/produto/router');
const usuarioRota = require('./controllers/usuario/router');

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(express.json());

const morganMiddleware = morgan(function (tokens, req, res) {
    return [
        '\n\n\n',
        chalk.red(tokens.method(req, res)),
        // chalk.hex('#ffb142').bold(tokens.status(req, res)),
        chalk.green(tokens.url(req, res)),
        chalk.yellow(tokens['response-time'](req, res) + ' ms'),
        // chalk.hex('#f78fb3').bold('@ ' + tokens.date(req, res)),
        // chalk.yellow(tokens['remote-addr'](req, res)),
        // chalk.hex('#fffa65').bold('from ' + tokens.referrer(req, res)),
        // chalk.hex('#1e90ff')(tokens['user-agent'](req, res)),
        '\n\n\n',
    ].join(' ');
});

app.use(morganMiddleware);

app.use('/', produtoRota);

app.use('/', usuarioRota);

app.use((req, res) => {
    res.status(404).send("Rota não encontrada")
});

app.listen(port, () => {
    console.log(`Rodando no link http://localhost:${port}`);
});