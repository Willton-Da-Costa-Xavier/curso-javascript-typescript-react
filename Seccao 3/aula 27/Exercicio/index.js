/* Escreva uma funcao chamada ePaisagem que  recebe dois argumentos: largura e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem = e o modo da imagem deitada retrato e modo da imagem em pe*/

const ePaisagem = (largura, altura) =>{
    return largura >= altura;
}

console.log(ePaisagem(800,800));