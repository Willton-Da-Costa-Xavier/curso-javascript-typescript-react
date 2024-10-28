require("dotenv").config();

const express = require('express');
const app = express();

const routes = require('./routes');

const path = require('path');
const csrf = require("csurf");

// Para importar o "helmet" e usando o comando "require('helmet')"
const helmet = require("helmet");

const {middlewareGlobal, outroMiddleware, checkCsrfError, csrfMiddleware} = require("./src/middlewares/middleware");
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTSTRING).then(() => {
    console.log("Conectei a base de dados");
    app.emit("pronto")
}).catch((e) => {
    console.log(e)
});

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

app.use(csrf());
// Nossos middlewares
app.use(middlewareGlobal);
app.use(outroMiddleware);
app.use(checkCsrfError);
app.use(csrfMiddleware);
// Para usar o "helmet" e usando o comando "app.use(helmet())"
app.use(helmet());


app.set("views",path.resolve(__dirname,"src","views"));

 
app.set("view engine",'ejs');


app.use(routes);

app.on('pronto', () =>{
    app.listen(3000, () => {
        console.log("Acessar http://localhost:3000");
        console.log("Servidor executando na porta 3000");
    });
});
