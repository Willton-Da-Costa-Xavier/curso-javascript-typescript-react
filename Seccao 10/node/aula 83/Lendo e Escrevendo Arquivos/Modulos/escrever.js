const fs = require('fs').promises;



// para escrever arquivos utiliza o metodo "writeFile(caminho,conteudo,{opcoes})"



// Utiliza o comando "JSON.stringify(variavel,'',numer de indentacao)"


// Para fazer com que o arquivo apage o que esta escrito e escreva utiliza "flag: 'w'" para fazer append utiliza a "flag: 'a'"
module.exports = (caminho,dados) =>{

    fs.writeFile(caminho,dados,{
        flag: 'w'
    })
}