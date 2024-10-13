const nome = ["Willas", "Xavier","Fernando","Tania"];
for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log("########");

for (let i in nome){
    console.log(nome[i]);
}

console.log("########");

for (let valor of nome){
    console.log(valor);
}

console.log("########");

nome.forEach(function (valor, indicie, array){
    console.log(valor, indicie, array);
});