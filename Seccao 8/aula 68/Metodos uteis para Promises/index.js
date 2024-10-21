function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject(false);
                return;
            }
            resolve(msg.toUpperCase() + " Passei na promise");
            return;
        }, tempo);
    });
}

function baixaPagina(){
    const emCache = true;
    if(emCache){
        return Promise.resolve("Pagina em Cache");
    }else{
        return esperaAi("Baixei a pagina", 3000);
    }
}

const promises = [
    // 'Primeiro valor',
    esperaAi('promise 1',rand(1,5)),
    esperaAi('promise 2',rand(1,5)),
    esperaAi('promise 3',rand(1,5)),
    esperaAi(1000,rand(1,5)),
    // esperaAi(1000,1000),
    // "Outro valor"
];

Promise.race(promises).then(function (valor){
    console.log(valor);
}).catch(function (erro){
    console.log(erro);
});

baixaPagina().then(dadosPagina => {
    console.log(dadosPagina);
}).catch(e => console.log('Erro',e));