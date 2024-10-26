// Dentro do exports temos dois comandos "__filename" que indica o ficheiro atual atraves do caminho absoluto e "__dirname" que indica o arquivo atual atraves do caminho absoluto

// Outra forma de obter o caminho e utilizando o comando "const path = require('path')"
// const path = require("path");

/* pode se resolver o caminho para qualquer sistema operativo usando o "resolve(__dirname ou __filename,'caminho que quer resolvido')" e tambem pode se adicionar pastas ou ficheiros depois das ","
Ex: console.log(path.resolve(__dirname,'..','..','arquivos','imagens')); 
*/
// console.log(path.resolve(__dirname,'..','..','arquivos','imagens'));

const Cachoro = require('./z/mod2.js');
const c1 = new Cachoro("Escobar");
c1.latir();
