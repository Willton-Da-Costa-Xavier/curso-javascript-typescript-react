function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantidade){
    this.preco += quantidade;
};

Produto.prototype.desconto = function(quantidade){
    this.preco -= quantidade;
};

function Camiseta(nome,preco,cor){
    Produto.call(this,nome,preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const produto = new Produto('Gen',111);
const camiseta = new Camiseta('Dior',7.5,"Vermelha");
console.log(produto);
console.log(camiseta);