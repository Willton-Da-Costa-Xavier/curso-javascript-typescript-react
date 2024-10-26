const fs = require('fs').promises;

// para ler um arquivo utiliza se "readFile(caminho,'utf-8')"
module.exports = (caminho) => fs.readFile(caminho,'utf-8')