const express = require('express');
const app = express();
const routes = require('./routes');

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

// Para usar as rotas utiliza o comando "app.use(variavel de importacao das rotas)"
app.use(routes);


app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
});

