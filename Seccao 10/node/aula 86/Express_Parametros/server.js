const express = require('express');
const app = express();

// utiliza o comando "app.use(express.urlencoded({parametros})) para buscar dados do post"
app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get('/', (req, res) => {
    res.send(`
    
        <form action="/" method="POST">
        
            Nome do cliente: <input type="text" name="nome"><br>
            Outro Campo: <input type="text" name="aquioutrocampo">
            <button>Ef</button>
        </form>

    `)
});

// Pode colocar parametros na url utilizando o verbo "GET" usando o comando "get('caminho:vaiavelDosParametros')"

// Utiliza o comando "req.params" para obter os parametros

// Utiliza se o comando "req.params.variavelDosParametros" para obter os parametros

// Para colocar um parametro opcional utiliza o comando "?" no final do parametro

// Para utilizar "Query params" usa se "?variavel=x&variavel2=y" na url e para mostrar na tela usa o comando "req.query"

// Pode se obter um parametro especifico utilizando o comando "req.query.variavelDoParametroDaURL"

app.get('/testes/:idUsuarios?/:parametro?', (req,res) =>{

    console.log(req.params);
     
    res.send(req.query.facebookProfile)

});


app.post('/',(req,res) =>{
    console.log(req.body)
    // Utiliza o comando "req.body.chaveQueVemDoAtributoName"
    res.send(`O que voce me enviou foi ${req.body.nome}`);

});


app.get('/contato', (req, res) => {
    res.send("Obrigado por entrar em contato com a gente")
})


app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
});

