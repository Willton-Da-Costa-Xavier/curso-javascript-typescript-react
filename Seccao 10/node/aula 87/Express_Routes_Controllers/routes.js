// Para importar as routas utiliza o metodo "variavel = express.Router()"
const express = require('express');
const route = express.Router();
const homeController = require("./controllers/homeController");
const contatoController = require("./controllers/contatoController");
// Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial)

// Para exportar rotas utiliza o comando "module.exports = variavel da rota"
module.exports = route;