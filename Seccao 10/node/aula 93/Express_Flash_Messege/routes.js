const express = require('express');
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

// Para passar o midleware utiliza a funcao "next()"

// Para criar uma sessao utiliza o comando "req.session = {objectos que quer guardar}"


// Pode se colocar "midlewares" no meio da resposta dos routes ou em qualquer lugar atraves de uma funcao com next() 

// Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;