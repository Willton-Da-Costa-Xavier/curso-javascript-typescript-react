const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

// Para usar as "views" e preciso utilizar o comando "app.set('views',camniho)"
app.set("views",path.resolve(__dirname,"src","views"));

// Para escolher a "view engine" utiliza se o comando "app.set('view engine','a view engine que quer')" 
app.set("view engine",'ejs');


app.use(routes);


app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
});

