const pessoa = {
    nome: "Luis",
    sobrenome: "Miranda",
    idade: 30,
    endereco: {
        rua: "Av Brasil",
        numero: 320
    }
};

const {nome,...resto} = pessoa;
console.log(nome,resto);

