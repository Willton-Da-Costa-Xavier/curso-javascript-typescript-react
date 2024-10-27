require("dotenv").config();

const express = require('express');
const app = express();

const routes = require('./routes');

const path = require('path');

const {middlewareGlobal, outroMiddleware} = require("./src/middlewares/middleware");
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTSTRING).then(() => {
    console.log("Conectei a base de dados");
    app.emit("pronto")
}).catch((e) => {
    console.log(e)
});

// Para importar a sessao utiliza o comando "require('express-session') e depois o comando "const variavel = require('connect-mongo')(variavel da sessao)" e por ultimo conectar os flash-messeges usando o comando "require('connect-flash')"
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require("connect-mongo");

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);


app.use(express.static(path.resolve(__dirname,"public")));

// Para obter as configuracoes da sessao utilizando o comando "const variavel = session({opcoes})"

const sessionOptions = session({
    secret: "fefefeffvrgfsfwmimmiminnnnnunuunun",
    store: new MongoStore({ mongoUrl: process.env.CONNECTSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());


app.use(middlewareGlobal);
app.use(outroMiddleware);


app.set("views",path.resolve(__dirname,"src","views"));

 
app.set("view engine",'ejs');


app.use(routes);

app.on('pronto', () =>{
    app.listen(3000, () => {
        console.log("Acessar http://localhost:3000");
        console.log("Servidor executando na porta 3000");
    });
});
