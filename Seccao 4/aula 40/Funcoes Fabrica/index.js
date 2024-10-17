function CriaPessoa(nome,sobrenome,a,p){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            
        },

        fala(assunto='falando sobre nada'){
            return `${this.nome} esta ${assunto}`;
        },

        altura: a,
        peso: p,

        get imc(){
            const indicie = this.peso/(this.altura ** 2);
            return indicie.toFixed(2);
        }
    };
}

const p1 = CriaPessoa('Willas','Xavier',1.65,80);
const p2 = CriaPessoa("Maria",'Joaquina',1.80,78);
p1.nomeCompleto = 'Tomas Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
