//Pode se exportar colocando a palavra "export antes das criacoes de variaveis,classes e funcoes"

// para exportar uma constante como "default" utiliza o comando "export {variavel as default}"
const nome = 'Willas';
const sobrenome = 'Xavier';
const idade = 24;


//pode se exporta algo como "default" usando o comando "export default funcao"
function soma(x, y) {
    return x + y;
}

export default (x,y) => x * y;

export {nome,sobrenome,idade,soma};


//utilizamos o comando "export {variavel}" para exportar algo

//Para exportar uma variavel com outro nome utiliza a palavra "as variavel"
// export {nome as nome2,sobrenome,idade,soma};