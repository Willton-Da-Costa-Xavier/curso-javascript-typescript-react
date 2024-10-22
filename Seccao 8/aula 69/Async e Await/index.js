function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject("Cai no erro");
                return;
            }

            resolve(msg.toUpperCase() + " - Passei na promise");
            return;
            
        }, tempo);
    });
}

async function executa() {
    try {
        
        const fase1 =  esperaAi("Fase 1", 1000);
        console.log(fase1);
        setTimeout(function(){
            
            console.log("Esta promise estava pendente",fase1);
        },1100)
        const fase2 =  await esperaAi("Fase 2", rand());
        console.log(fase2);
        const fase3 =  await esperaAi(11, rand());
        console.log(fase3);
      
        console.log("Terminamos na fase:",fase3);

    } catch (error) {
        console.log(error);        
    }
}
executa();