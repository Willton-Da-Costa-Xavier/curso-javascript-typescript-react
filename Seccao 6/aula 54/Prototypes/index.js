//Construtor
function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'Original: '+ this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__;

Pessoa.prototype.nomeCompleto = function() 
{
    return this.nome + ' ' + this.sobrenome;
};
//instancia
const pessoa1 = new Pessoa('Willas', 'X.');
const pessoa2 = new Pessoa('Maria', 'F.');
const date = new Date();

console.dir(pessoa1);
console.dir(date);