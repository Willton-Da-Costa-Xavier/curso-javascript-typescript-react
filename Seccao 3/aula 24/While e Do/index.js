// const nome = 'luis'
// let controle = 0;

// while (controle < nome.length){
//     console.log(nome[controle]);
//     controle++;
// }

function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min =1;
const max =50;
let rand = random(min,max);

do{
    rand = random(min,max);
    console.log(rand);
    
}while (rand !== 10);