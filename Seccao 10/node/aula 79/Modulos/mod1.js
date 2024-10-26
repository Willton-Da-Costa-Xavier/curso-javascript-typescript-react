// const nome = "Willas";
// const sobrenome = "Miranda";

// const falaNome = () => nome + ' ' + sobrenome;

// Utiliza o comando "module.exports.variavel ou funcao = variavel ou funcao"
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// Outro maneira de exportar e utilizando o comando "exports.variavel ou funcao = variavel ou funcao"
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;
