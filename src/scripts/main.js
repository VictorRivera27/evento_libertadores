AOS.init();

const dataEvento = new Date("Nov 29, 2025 17:00:00");
const timeStampEvento = dataEvento.getTime();

const contarHoras = setInterval(function() {
    const horaAtual = new Date();
    const timeStampHoraAtual = horaAtual.getTime();

    const distanciaEvento = timeStampEvento - timeStampHoraAtual;

    const diasMs = 1000 * 60 * 60 * 24;
    const horasMs = 1000 * 60 * 60;
    const minutosMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaEvento / diasMs);
    const horasAteEvento = Math.floor((distanciaEvento % diasMs) / horasMs);
    const minutosAteEvento = Math.floor((distanciaEvento % horasMs) / minutosMs);
    const segundosAteEvento = Math.floor((distanciaEvento % minutosMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (distanciaEvento < 0) {
        clearInterval(contarHoras);
        document.getElementById('contador').innerHTML = 'Este evento chegou ao fim!';
    }
}, 1000);