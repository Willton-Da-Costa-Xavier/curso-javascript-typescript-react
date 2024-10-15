function retornaFuncao(nome){
    return function (){
        return nome;
    };
}

const funcao = retornaFuncao('Willas');
const funcao2 = retornaFuncao('Joao');
console.dir(funcao);
console.dir(funcao2);