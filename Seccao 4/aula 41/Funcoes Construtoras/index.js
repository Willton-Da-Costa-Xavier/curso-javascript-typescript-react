function Pessoa(nome,sobrenome){
    const ID = 123456;
    const metodoInterno = () =>{
        
    };
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function (){
        console.log(this.nome + ': Sou um metodo')
    }
}

const p1 = new Pessoa('Willas','Xavier');
const p2 = new Pessoa('Tomas','Manuel');
p2.metodo()
