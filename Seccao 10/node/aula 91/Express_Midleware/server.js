const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const {middlewareGlobal, outroMiddleware} = require("./src/middlewares/middleware");

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

// Para implementar arquivos estaticos utiliza se o comando "app.use(express.static('caminho')"
app.use(express.static(path.resolve(__dirname,"public")));

// Nossos proprios middlewares
app.use(middlewareGlobal);
app.use(outroMiddleware);


app.set("views",path.resolve(__dirname,"src","views"));

 
app.set("view engine",'ejs');


app.use(routes);


app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
});

