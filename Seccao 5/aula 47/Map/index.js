// const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
// const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro;)

const pessoas = [
    {nome: 'Willas', idade: 24},
    {nome: 'Maria', idade: 44},
    {nome: 'Eduardo', idade: 14},
    {nome: 'Leticia', idade: 64},
    {nome: 'Rosana', idade: 95},
    {nome: 'Wallace', idade: 32},
];

// const nomes = pessoas.map(obj => obj.nome);
// console.log(nomes);
// const chaveIdade = pessoas.map(obj =>({idade: obj.idade})
// );
// console.log(chaveIdade);

const comIds = pessoas.map(function(obj,indicie){
    const newObj = {...obj};
    newObj.id = (indicie + 1)* 1000;
    return newObj;
});
console.log(pessoas);
console.log("==========================")
console.log(comIds);