import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function name(params) {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCPF();
})();