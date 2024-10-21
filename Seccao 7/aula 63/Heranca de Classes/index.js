class DispositivoElectronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
         console.log(`${this.nome} ja ligado`);   
         return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} ja desligado`);   
            return;
           }
   
           this.ligado = false;
    }
}

class SmartPhone extends DispositivoElectronico{
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoElectronico{
    constructor(nome,temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log("Olha voce alterou o metodo ligar")
    }

    falaOi(){
        console.log("Fala Oi");
    }
}

const s1 = new SmartPhone('Iphone',"vermelho",'11s');
console.log(s1);
const t1 = new Tablet('Ipad');
t1.ligar();
t1.falaOi();