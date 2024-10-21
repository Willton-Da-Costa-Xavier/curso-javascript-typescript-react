class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} esta falando`)
    }
}

const p1 = new Pessoa('Willas','Xavier');
const p2 = new Pessoa('Maria','Xavier');
const p3 = new Pessoa('Tomas','Xavier');
const p4 = new Pessoa('Anna','Xavier');
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);