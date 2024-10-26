// Para importar algo utiliza o comando "const ou let  variavel = require(caminho) "
// Pode se importar com a funcao usando o comando "const variavel = require('caminho').funcao;"

// Pode se importar usando via destruturacao "const {variavel1,variavel2,etc..} = require('./mod1')";

// pode se importar uma classe criando uma instancia da classe;
const path = require('path');
const {Pessoa} = require('./mod1');

const p1 = new Pessoa('Willas');
console.log(p1);