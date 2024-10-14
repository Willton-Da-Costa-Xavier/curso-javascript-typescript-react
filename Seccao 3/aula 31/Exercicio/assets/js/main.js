function relogio() {
    function getTimeOfSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('MZ', {
            hour12: false,
            timeZone: 'GMT'
        });
    }



    const relogio = document.querySelector("#relogio");
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeOfSeconds(segundos);
        }, 1000)
    }

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    })
}

relogio();