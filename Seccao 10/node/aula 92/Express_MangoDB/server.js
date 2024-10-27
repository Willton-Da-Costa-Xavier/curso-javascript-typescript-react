// Para utilizar o dotenv e pelo comando "require('dotenv').config()"
require("dotenv").config();
const express = require('express');
const app = express();

const routes = require('./routes');

const path = require('path');

const {middlewareGlobal, outroMiddleware} = require("./src/middlewares/middleware");
const mongoose = require('mongoose');

// E para conectar os dados do dotenv utiliza o comando "process.env.variavelDoDotEnv"

// Para emitir algo utiliza o comando "app.emit('conteudo')"
mongoose.connect(process.env.CONNECTSTRING).then(() => {
    console.log("Conectei a base de dados");
    app.emit("pronto")
}).catch((e) => {
    console.log(e)
});

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);


app.use(express.static(path.resolve(__dirname,"public")));


app.use(middlewareGlobal);
app.use(outroMiddleware);


app.set("views",path.resolve(__dirname,"src","views"));

 
app.set("view engine",'ejs');


app.use(routes);

// Pode se colocar um evento com o comando "app.on('conteudo do emit',() => {app.listen()}"
app.on('pronto', () =>{
    app.listen(3000, () => {
        console.log("Acessar http://localhost:3000");
        console.log("Servidor executando na porta 3000");
    });
});

// Para guardar dados da conexao com base de dados e senha de email utiliza se o ".env" e para instalar utiliza o comando "npm i dotenv"

// Para installar o mangodb utiliza o comando "npm i mongoose"