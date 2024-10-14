/* Escreva uma funcao que recebe um numero e retorne o seguinte:
Numero e divisivel por 3 = Fizz
Numero e divisivel por 5 = Buzz
Numero e divisivel por 3 e 5 = FizzBuzz
Numero nao e divisivel por 3 e 5 = Retorna o proprio numero
Checar se o numero e realmente um numero
Usar a funcao com numeros de 0 a 100  */

const testes = (num1) =>{

    if(typeof num1 !== 'number') return num1;
    
    if(num1%3 === 0 && num1%5 === 0){
        return 'FizzBuzz';
    }

    if(num1%3===0){
        return 'Fizz';
    }

    if (num1%5 === 0){
        return 'Buzz';
    }


    return num1;

};

for(let i =0 ; i <= 100;i++){
    console.log(i, testes(i))

}
