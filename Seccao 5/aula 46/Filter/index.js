// const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

// function calbackFilter(valor){
//     return valor >  10;
// }

// const numerosFilter = numeros.filter(valor => valor >  10);

// console.log(numerosFilter);

const pessoas = [
    {nome: 'Willas', idade: 24},
    {nome: 'Maria', idade: 44},
    {nome: 'Eduardo', idade: 14},
    {nome: 'Leticia', idade: 64},
    {nome: 'Rosana', idade: 95},
    {nome: 'Wallace', idade: 32},
];

// const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);

// console.log(pessoasComNomeGrande);

// const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade > 50);
// console.log(pessoasComMaisDe50);

const pessoasNomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasComMaisDe50);