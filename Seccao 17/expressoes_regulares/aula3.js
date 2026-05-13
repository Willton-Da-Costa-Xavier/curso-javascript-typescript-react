const { texto, arquivos } = require('./base');

// * (opcional) 0 ou n 
// + (obrigatorio) 1 ou n 
// ? (opcional) 0 ou 1 
// \ caractere de escape

// console.log(texto);

// const regExp1 = /Jo+ao+/gi;

// console.log(texto.match(regExp1));

const regExp2 = /\.jpe{0,1}g/gi;

for (const arquivo of arquivos){
    const valido = arquivo.match(regExp2);

    // if(!valido) continue;

    console.log(arquivo, valido);
}