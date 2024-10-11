const pessoa1 = {
    nome: 'Willas',
    sobrenome: "Xavier",
    idade: 23,

    fala () {
        console.log(`A minha idade atual e ${this.idade}`)
    },

    incrementaIdade () {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();