function criaCalculadora(){
    return {

        // Atributos
        display: document.querySelector('.display'),
        // Metodo
        inicia(){
            this.cliqueBotoes();
            this.presionaEnter();
        },

        presionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        realizaConta(){
           let conta = this.display.value;
           try {
            conta = eval(conta);
            if(!conta){
                alert("Conta invalida")
                return;
            }
            this.display.value = conta;
           } catch (error) {
            alert("Conta invalida");
           }
        },

        clearDisplay(){
            this.display.value = '';
        },


        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },


        cliqueBotoes(){
            document.addEventListener('click', e => {
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value +=valor;
        },
        
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();