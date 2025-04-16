// Parte do calculo das datas (Maldito seja o datetime)
const dataInicio = new Date(2024, 9, 23);

function calcularTempoJuntos() {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    let anos = hoje.getFullYear() - dataInicio.getFullYear();
    let meses = hoje.getMonth() - dataInicio.getMonth();
    let dias = hoje.getDate() - dataInicio.getDate();

    if (dias < 0) {
        meses--;
        dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    }
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    document.getElementById('tempo-juntos').innerText = 
        `${anos} anos, ${meses} meses e ${dias} dias`;
}

function calcularProximasDatas() {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    let aniversarioNamoro = new Date(hoje.getFullYear(), 9, 23);
    let aniversarioEla = new Date(hoje.getFullYear(), 3, 16);
    let aniversarioEu = new Date(hoje.getFullYear(), 2, 2);

    if (aniversarioNamoro < hoje) aniversarioNamoro.setFullYear(hoje.getFullYear() + 1);
    if (aniversarioEla < hoje) aniversarioEla.setFullYear(hoje.getFullYear() + 1);
    if (aniversarioEu < hoje) aniversarioEu.setFullYear(hoje.getFullYear() + 1);

    function diasRestantes(data) {
        return Math.ceil((data.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));
    }

    const diasNamoro = diasRestantes(aniversarioNamoro);
    const diasEla = diasRestantes(aniversarioEla);
    const diasEu = diasRestantes(aniversarioEu);

    const namoroEl = document.getElementById('aniversario-namoro');
    const elaEl = document.getElementById('aniversario-ela');
    const euEl = document.getElementById('aniversario-eu');

    namoroEl.innerText = diasNamoro === 0
        ? '💖 Hoje é nosso dia bb, Te amo demais,! 💖'
        : `faltam ${diasNamoro} dias (${aniversarioNamoro.toLocaleDateString('pt-BR')})`;

    elaEl.innerText = diasEla === 0
        ? '🎂 Hoje é o seu dia, Gatinhaaa! Feliz aniversário bb, te amo muitooo! 💕'
        : `faltam ${diasEla} dias (${aniversarioEla.toLocaleDateString('pt-BR')})`;

    euEl.innerText = diasEu === 0
        ? '🎉 Hoje é meu niver! Mais um ano pra comemorar do seu lado 😘'
        : `faltam ${diasEu} dias (${aniversarioEu.toLocaleDateString('pt-BR')})`;

    if (diasNamoro === 0) namoroEl.classList.add("destaque");
    if (diasEla === 0) elaEl.classList.add("destaque");
    if (diasEu === 0) euEl.classList.add("destaque");
}

calcularTempoJuntos();
calcularProximasDatas();

// Código da galeria de fotos (carousel)
document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const imagens = document.querySelectorAll(".carousel-image");
    const total = imagens.length;

    function mostrarImagem(i) {
        imagens.forEach(img => img.classList.remove("active"));
        imagens[i].classList.add("active");
    }

    document.getElementById("next").addEventListener("click", function () {
        index = (index + 1) % total;
        mostrarImagem(index);
    });

    document.getElementById("prev").addEventListener("click", function () {
        index = (index - 1 + total) % total;
        mostrarImagem(index);
    });
});
