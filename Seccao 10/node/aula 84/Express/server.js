// Para conectar o express usa o comando "require('express')" e depois coloca chama-o com uma constante utilizando "const variavel = express()"
const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
// Verbos   POST   GET    PUT    DELETE

// Para ler o "route" no express utiliza se o verbo "GET" assim: "variavel do express.get('caminho',funcao(requisicao,resposta){})"

// Para mandar conteudo utiliza o comando ".send(conteudo)"

app.get('/', (req, res) => {
    res.send(`
    
        <form action="/" method="POST">
        
            Nome: <input type="text" name=''>
            <button>Enviar</button>
        </form>

    `)
});

// Para mandar dados usa se o verbo "POST" assim: "variavel.post('caminho que quer mandar',funcao(req,res){})"

app.post('/',(req,res) =>{

    res.send("Recebi o formulario");

});


app.get('/contato', (req, res) => {
    res.send("Obrigado por entrar em contato com a gente")
})

// Para chamar a porta do seu site utiliza o comando ".listen(numero da porta,funcao(){})"
app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
});

