// const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
// const total = numeros.reduce(function(acumulador,valor,indicie,array){
//     if(valor %2 !== 0) {
//         acumulador+=valor;
//         console.log(valor)
//     }
//     return acumulador;

// },0);
// console.log(total);

const pessoas = [
    {nome: 'Willas', idade: 24},
    {nome: 'Maria', idade: 44},
    {nome: 'Eduardo', idade: 14},
    {nome: 'Leticia', idade: 64},
    {nome: 'Rosana', idade: 95},
    {nome: 'Wallace', idade: 32},
];

const maisVelha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha)