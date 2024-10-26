const path = require('path');
const caminhoArquivo = path.resolve(__dirname,"..","teste.json");
const escreve = require('./Modulos/escrever');
const ler = require('./Modulos/ler');

// const pessoas = [
//     {nome: "Joao"},
//     {nome: 'Willas'},
//     {nome: "Tomas"},
//     {nome: "Eduardo"},
// ];

// const json = JSON.stringify(pessoas,"",2);
// escreve(caminhoArquivo,json);

async function lerArquivo(caminho){
    const dados = await ler(caminho);
    renderizaDados(dados);
}

// Para descomptar um json em objecto utiliza o comando "JSON.parse(variavel do json)"
function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}

lerArquivo(caminhoArquivo);