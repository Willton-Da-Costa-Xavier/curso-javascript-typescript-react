(function (idade, peso, altura){
    const sobrenome = 'Xavier'
    function CriaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(CriaNome('Willas'));
    }
    falaNome();
    console.log(idade,peso,altura);
})(23, 80, 1.65);

const nome = 'Qualquer Coisa';