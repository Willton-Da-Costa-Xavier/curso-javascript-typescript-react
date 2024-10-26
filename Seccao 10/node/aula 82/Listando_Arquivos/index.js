// Utlilizamos o comando "const variavel = require('fs')" usando o termo de "file system" para poder utilizar arquivos
const fs = require('fs').promises;
const path = require('path');

// para ler o directorio utiliza o comando "variavel do file system.readdir('caminho')"

// fs.readdir(path.resolve(__dirname)).then(files => console.log(files)).catch(e => console.log(e));

// utiliza o comando "rootDir" para pegar o directorio do root


async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files,rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir,file);
        // utiliza "variavel.stat('caminho')" para indicar estatus do arquivo
        const stats = await fs.stat(fileFullPath);
        // Para ver se as pastas ou ficheiros sao directorios utliza o comando "isDirectory()"

        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;
        
        if(stats.isDirectory()){ 
            readdir(fileFullPath);
            continue;
        };
        
        
        if(!/\.html$/g.test(fileFullPath)) continue;
        console.log(fileFullPath);
    }
}

readdir("C:/xampp/htdocs/curso-javascript-typescript-react");