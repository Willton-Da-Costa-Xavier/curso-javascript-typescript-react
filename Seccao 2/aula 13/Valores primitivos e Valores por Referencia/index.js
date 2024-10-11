const a = {
    nome: "Willas",
    sobrenome: "Xavier"
};

const b ={...a};
console.log(b);

a.nome = "Joao"
console.log(a)
console.log(b)
// let a = [1,2,3,4];
// let b =[...a];
// console.log(a, b)

// a.push("willas")
// console.log(a,b);

// b.pop()
// console.log(a, b)