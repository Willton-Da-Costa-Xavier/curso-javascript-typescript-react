const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

for (let numero of numeros){
    if(numero === 2){
        console.log('Pulei o numero 2');
        continue;
    }

    console.log(numero);
    if(numero === 8){
        console.log("8 encontrado saindo");
        break;
    }
}