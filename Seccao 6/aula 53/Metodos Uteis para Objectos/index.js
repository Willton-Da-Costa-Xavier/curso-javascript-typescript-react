const produto = { nome: 'Caneca', preco: 1.8 , material: 'percelana'};

for(let valor of Object.entries(produto)){
    console.log(valor[0],valor[1]);
}