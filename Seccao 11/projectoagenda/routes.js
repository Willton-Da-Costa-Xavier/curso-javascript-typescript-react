const express = require('express');
const route = express.Router();
const loginController = require("./src/controllers/loginController");
const homeController = require("./src/controllers/homeController");
const registerController = require("./src/controllers/registerController");
const contactoController = require("./src/controllers/contactoController");
const {loginRequired} = require("./src/middlewares/middleware");

// Rotas da Home
route.get('/', homeController.index);

// Rotas de login
route.get("/login/index", loginController.index);
route.post("/login/register", registerController.register);
route.post("/login/login", loginController.login);
route.get("/login/logout", loginController.logout);

// Rotas de contacto
route.get("/contacto/index", loginRequired,contactoController.index);
route.post("/contacto/register", loginRequired,contactoController.register);
route.get("/contacto/index/:id", loginRequired,contactoController.editIndex);
route.post("/contacto/edit/:id", loginRequired,contactoController.edit);
route.get("/contacto/delete/:id", loginRequired,contactoController.delete);

module.exports = route;