class ControleRemoto {
    constructor(tv){
        this.tv =tv;
        this.volume = 0;
    }

    aumnetarVolume(){
        this.volume+=2;
    }

    diminuirVolume(){
        this.volume-=2;
    }

    //Metodo estatico
    static soma(x,y){
        return x + y;
    }
}

const controle1 = new ControleRemoto("LG");
controle1.aumnetarVolume();
controle1.aumnetarVolume();
controle1.aumnetarVolume();
console.log(controle1);
console.log(ControleRemoto.soma(2,4));