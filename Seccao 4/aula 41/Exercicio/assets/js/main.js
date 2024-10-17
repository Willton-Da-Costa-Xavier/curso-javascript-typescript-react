function Calculador() {
    // Atributos
    const display = document.querySelector('.display');
    // Metodo
    this.inicia = function(){
        this.cliqueBotoes();
        this.presionaEnter();
    };

    this.presionaEnter = function(){
        display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    this.realizaConta = function(){
        let conta = display.value;
        try {
            conta = eval(conta);
            if (!conta) {
                alert("Conta invalida")
                return;
            }
            display.value = conta;
        } catch (error) {
            alert("Conta invalida");
        }
    };

    this.clearDisplay = function(){
        display.value = '';
    };


    this.apagaUm = function(){
        display.value = display.value.slice(0, -1);
    };


    this.cliqueBotoes = function(){
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.apagaUm();
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        });
    };

    this.btnParaDisplay = function(valor){
        display.value += valor;
    };


}

const calculadora = new Calculador();
calculadora.inicia();