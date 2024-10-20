function Conta(agencia,conta,saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor){
    if(valor > this.saldo){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor){
    this.saldo +=valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function (){
    console.log(`Ag/c: ${this.agencia}/${this.conta}`+ 
        `saldo: ${this.saldo.toFixed(2)}MZN`
    );
}

function contaConrente(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo);
    this.limite = limite;
}

contaConrente.prototype = Object.create(Conta.prototype);
contaConrente.prototype.constructor = contaConrente;

contaConrente.prototype.sacar = function (valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

function contaPopanca(agencia,conta,saldo){
    Conta.call(this,agencia,conta,saldo);
}

contaPopanca.prototype = Object.create(Conta.prototype);
contaPopanca.prototype.constructor = contaPopanca;


const cc = new contaConrente(11,22,0,100);
cc.depositar(10);
cc.sacar(90);
cc.sacar(90);

console.log("======================")

const cp = new contaPopanca(12,33,0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);

