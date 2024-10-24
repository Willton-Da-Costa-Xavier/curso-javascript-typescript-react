// o comando "String.fromCharCode" para gerar o seu respectivo caracter

const rand = (max,min) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65,91));

const geraMinuscula = () => String.fromCharCode(rand(97,123));

const geraNumeros = () => String.fromCharCode(rand(48,58));

const simbolos =',.;/-=+)(~`!@#$%^&*_{}[]:|';

const gerasimbolos = () => simbolos[rand(0,simbolos.length)]; 

export default function geraSenha(qtd,maiusculas,minusculas,numeros,simbolos){
    const senhaArray = [];
    qtd = Number(qtd);

    for(let i =0; i < qtd; i++){
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumeros());
        simbolos && senhaArray.push(gerasimbolos());
    }

    return senhaArray.join('').slice(0,qtd);
}
